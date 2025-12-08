import './style.css'; 
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

// --- CONFIGURATION ---
const J2000_DATE = new Date('2000-01-01T12:00:00Z');
const CAMERA_ORBIT_SPEED = 0.1; 
const CAMERA_FLY_SPEED = 0.04;
const ENABLE_NIGHT_LIGHTS = true;
const DEBUG_SHADOWS = false; 
const DEBUG_LANDING = false;
const VIEWPORT_FILL_RATIO = 0.5;
const CINEMATIC_DELAY = 30000; // 30 Seconds

// --- TIME STATE ---
let timeScale = 1; 
let speedLevel = 1; 
let simulatedDate = new Date(); 
const clock = new THREE.Clock();

// --- STATE ---
let celestialMap = new Map(); 
let objects = []; 
let selectedObject = null;
let isTracking = false;
let sunUniforms = null; 
let plannedMaterials = []; 
let shadowHelper, lightHelper;
let pendingLanders = []; 

// --- CINEMATIC STATE ---
let cinematicActive = false;
let cinematicTimer = null;
let cinematicQueue = []; 

// --- SCENE ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const texLoader = new THREE.TextureLoader();

// LOADERS
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
dracoLoader.setDecoderConfig({ type: 'js' });
gltfLoader.setDRACOLoader(dracoLoader);

// FIX: Remove leading slash for relative path
const bgTexture = texLoader.load('textures/milky_way.jpg');
bgTexture.colorSpace = THREE.SRGBColorSpace;
bgTexture.mapping = THREE.EquirectangularReflectionMapping;
scene.background = bgTexture;

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000000);
camera.position.set(0, 400, 1200);
camera.lookAt(0,0,0);

// --- RENDERER ---
const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    powerPreference: "high-performance" 
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
renderer.toneMapping = THREE.ReinhardToneMapping; 
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxDistance = 100000;

// --- LIGHTING ---
const ambientLight = new THREE.AmbientLight(0x404040, 0.15); 
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffffff, 2.5, 0, 0); 
sunLight.position.set(0, 0, 0);
sunLight.castShadow = false; 
scene.add(sunLight);

const focusLight = new THREE.DirectionalLight(0xffffff, 0); 
focusLight.castShadow = true;
focusLight.shadow.mapSize.width = 4096;
focusLight.shadow.mapSize.height = 4096;
focusLight.shadow.bias = -0.0001;
focusLight.shadow.normalBias = 0.02; 
focusLight.shadow.camera.near = 1;
focusLight.shadow.camera.far = 500; 
scene.add(focusLight);
scene.add(focusLight.target); 

if (DEBUG_SHADOWS) {
    shadowHelper = new THREE.CameraHelper(focusLight.shadow.camera);
    scene.add(shadowHelper);
    lightHelper = new THREE.DirectionalLightHelper(focusLight, 5);
    scene.add(lightHelper);
}

// --- GLOBAL VARS ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// --- HELPER: PATH SANITIZER ---
// Converts "/textures/foo.jpg" -> "textures/foo.jpg"
function fixPath(path) {
    if (!path) return null;
    return path.startsWith('/') ? path.slice(1) : path;
}

// --- PHYSICS HELPER FUNCTIONS ---
function getDaysSinceJ2000(date) { return (date - J2000_DATE) / 86400000; }

function getKeplerPosition(orbitData, days) {
    if (!orbitData || orbitData.a === 0) return { x: 0, y: 0, z: 0 };
    let M = (orbitData.M0 + (orbitData.rate * days)) % 360;
    let M_rad = M * (Math.PI / 180);
    const e = orbitData.e;
    let E = M_rad;
    for (let k = 0; k < 5; k++) E = M_rad + e * Math.sin(E); 
    const x_orb = orbitData.a * (Math.cos(E) - e);
    const z_orb = orbitData.a * Math.sqrt(1 - e * e) * Math.sin(E);
    const i_rad = orbitData.i * (Math.PI / 180);
    return { x: x_orb, y: z_orb * Math.sin(i_rad), z: z_orb * Math.cos(i_rad) };
}

function getTrajectoryPosition(waypoints, currentDate) {
    const currentMs = currentDate.getTime();
    let startIndex = -1;
    for (let i = 0; i < waypoints.length - 1; i++) {
        if (currentMs >= new Date(waypoints[i].date).getTime() && currentMs < new Date(waypoints[i+1].date).getTime()) {
            startIndex = i; break;
        }
    }
    if (startIndex === -1) {
        if(currentMs > new Date(waypoints[waypoints.length-1].date).getTime()) {
             const t = celestialMap.get(waypoints[waypoints.length-1].target);
             return t ? t.group.position : {x:0,y:0,z:0};
        }
        return {x:0,y:0,z:0};
    }
    const startWp = waypoints[startIndex], endWp = waypoints[startIndex+1];
    const sObj = celestialMap.get(startWp.target), eObj = celestialMap.get(endWp.target);
    if(!sObj || !eObj) return {x:0,y:0,z:0};
    const progress = (currentMs - new Date(startWp.date).getTime()) / (new Date(endWp.date).getTime() - new Date(startWp.date).getTime());
    return {
        x: sObj.group.position.x + (eObj.group.position.x - sObj.group.position.x)*progress,
        y: sObj.group.position.y + (eObj.group.position.y - sObj.group.position.y)*progress,
        z: sObj.group.position.z + (eObj.group.position.z - sObj.group.position.z)*progress
    };
}

function getSurfacePosition(radius, lat, lon) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180); 
    return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        (radius * Math.cos(phi)),
        (radius * Math.sin(phi) * Math.sin(theta))
    );
}

function createOrbitLine(orbitData, color = 0x888888) {
    if (!orbitData || orbitData.a === 0 || orbitData.rate === 0) return null;
    const positions = [];
    for (let i = 0; i <= 128; i++) {
        const fakeDays = (360 / orbitData.rate) * (i / 128);
        const pos = getKeplerPosition(orbitData, fakeDays);
        positions.push(pos.x, pos.y, pos.z);
    }
    const geometry = new LineGeometry();
    geometry.setPositions(positions);
    const material = new LineMaterial({
        color: color, linewidth: 1.5, resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        dashed: false, opacity: 0.3, transparent: true
    });
    const line = new Line2(geometry, material);
    line.computeLineDistances();
    return line;
}

function createLissajousLine(orbitData) {
    if (!orbitData || orbitData.a === 0 || orbitData.rate === 0) return null;
    const positions = [];
    const segments = 128;
    const fullPeriodDays = 360 / orbitData.rate;
    for (let i = 0; i <= segments; i++) {
        const fakeDays = (i / segments) * fullPeriodDays;
        const angle = (fakeDays * orbitData.rate) * (Math.PI / 180);
        const radius = orbitData.a;
        const y_off = radius * Math.sin(angle);
        const z_off = radius * 2.5 * Math.cos(angle);
        const x_off = radius * 0.5 * Math.sin(2 * angle);
        positions.push(x_off, y_off, z_off);
    }
    const geometry = new LineGeometry();
    geometry.setPositions(positions);
    const material = new LineMaterial({
        color: 0x66ccff, linewidth: 1.5, resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        dashed: false, opacity: 0.3, transparent: true
    });
    const line = new Line2(geometry, material);
    line.computeLineDistances();
    return line;
}

// --- DYNAMIC SUN GENERATOR ---
function createSun(radius, texturePath) {
    const sunGroup = new THREE.Group();
    const texture = texLoader.load(fixPath(texturePath)); // FIX PATH
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    const surfaceMaterial = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uTexture: { value: texture } },
        vertexShader: `
            varying vec2 vUv; varying vec3 vNormal;
            void main() { vUv = uv; vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            uniform float uTime; uniform sampler2D uTexture; varying vec2 vUv;
            void main() { vec2 p1 = vUv + vec2(uTime * 0.05, uTime * 0.01);
            vec2 p2 = vUv + vec2(-uTime * 0.02, uTime * 0.06);
            vec4 tex1 = texture2D(uTexture, p1); vec4 tex2 = texture2D(uTexture, p2);
            vec4 color = mix(tex1, tex2, 0.5); float pulse = 1.0 + sin(uTime * 2.0) * 0.1;
            gl_FragColor = vec4(color.rgb * pulse, 1.0); }
        `
    });
    sunUniforms = surfaceMaterial.uniforms;
    const sunMesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 64, 64), surfaceMaterial);
    sunGroup.add(sunMesh);

    const atmosphereMaterial = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: `
            varying float intensity; void main() { vec3 vNormal = normalize(normalMatrix * normal);
            intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1)), 4.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            varying float intensity; void main() { vec3 glow = vec3(1.0, 0.5, 0.0) * intensity;
            gl_FragColor = vec4(glow, 1.0); }
        `,
        side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true
    });
    const atmMesh = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.25, 64, 64), atmosphereMaterial);
    sunGroup.add(atmMesh);

    const flareMaterial = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: `
            varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            varying vec2 vUv; uniform float uTime; void main() {
            float dist = distance(vUv, vec2(0.5)); float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
            alpha *= (0.8 + sin(uTime * 5.0) * 0.2); vec3 color = vec3(1.0, 0.6, 0.1); 
            gl_FragColor = vec4(color, alpha * 0.4); }
        `,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });

    const flareCount = 4;
    for(let i=0; i<flareCount; i++) {
        const flare = new THREE.Mesh(new THREE.PlaneGeometry(radius * 4, radius * 4), flareMaterial);
        flare.rotation.z = Math.random() * Math.PI * 2;
        flare.rotation.x = Math.random() * Math.PI * 0.2; 
        flare.userData = { speed: (Math.random() - 0.5) * 0.2 }; 
        sunGroup.add(flare);
        if(!sunGroup.userData.flares) sunGroup.userData.flares = [];
        sunGroup.userData.flares.push(flare);
    }
    return sunGroup;
}

// --- VISUAL HELPERS ---
function createEarthNightLayer(radius, texturePath) {
    try {
        const geometry = new THREE.SphereGeometry(radius * 1.005, 64, 64);
        const nightTexture = texLoader.load(fixPath(texturePath)); // FIX PATH
        nightTexture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.ShaderMaterial({
            uniforms: { tNight: { value: nightTexture } },
            vertexShader: `
                varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal);
                vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos; }
            `,
            fragmentShader: `
                uniform sampler2D tNight; varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vec3 sunDir = normalize(-vWorldPosition);
                float dotProd = dot(vNormal, sunDir); float alpha = 1.0 - smoothstep(-0.2, 0.2, dotProd);
                vec4 color = texture2D(tNight, vUv); gl_FragColor = vec4(color.rgb, alpha * color.a); }
            `,
            transparent: true, blending: THREE.AdditiveBlending, side: THREE.FrontSide, depthWrite: false 
        });
        return new THREE.Mesh(geometry, material);
    } catch (e) { return null; }
}

function createHologramMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x00ffff) } },
        vertexShader: `
            varying vec3 vNormal; varying vec3 vWorldPosition;
            void main() { vNormal = normalize(mat3(modelMatrix) * normal);
            vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPos; }
        `,
        fragmentShader: `
            uniform float uTime; uniform vec3 uColor; varying vec3 vNormal; varying vec3 vWorldPosition;
            void main() { vec3 viewDir = normalize(cameraPosition - vWorldPosition);
            float fresnel = dot(viewDir, vNormal); fresnel = 1.0 - abs(fresnel); fresnel = pow(fresnel, 2.0);
            float shimmer = sin(vWorldPosition.y * 0.5 + uTime * 2.0) * 0.5 + 0.5; 
            shimmer *= sin(vWorldPosition.z * 0.3 + uTime * 1.5) * 0.5 + 0.5; 
            vec3 finalColor = uColor + (fresnel * vec3(0.5, 0.8, 1.0)); 
            float alpha = 0.05 + (fresnel * 0.7) + (shimmer * 0.2); 
            gl_FragColor = vec4(finalColor, alpha); }
        `,
        transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false
    });
}

function createGenericSatellite(item) {
    const satGroup = new THREE.Group();
    let bodyMat, panelMat;
    if (item.status === 'Planned') {
        const holoMat = createHologramMaterial();
        plannedMaterials.push(holoMat);
        bodyMat = holoMat; panelMat = holoMat;
    } else {
        bodyMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.3, metalness: 0.8 });
        panelMat = new THREE.MeshStandardMaterial({ color: 0x0044ff, roughness: 0.2, metalness: 0.5, emissive: 0x001133 });
    }
    const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), bodyMat);
    if(item.status!=='Planned') { body.castShadow = true; body.receiveShadow = true; }
    satGroup.add(body);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 0.8), panelMat);
    if(item.status!=='Planned') { panel.castShadow = true; panel.receiveShadow = true; }
    satGroup.add(panel);
    const s = (item.radius || 1) * 0.5;
    satGroup.scale.set(s, s, s);
    satGroup.traverse((c) => { c.userData = item; });
    return satGroup;
}

// --- LANDER LOGIC ---
function attemptToLand() {
    for (let i = pendingLanders.length - 1; i >= 0; i--) {
        const request = pendingLanders[i];
        const parent = celestialMap.get(request.data.parent);
        
        if (parent && parent.mesh && parent.mesh.children.length > 0) {
            
            const box = new THREE.Box3().setFromObject(parent.mesh);
            const sphere = new THREE.Sphere();
            box.getBoundingSphere(sphere);
            const safeDistance = sphere.radius * 2.0; 

            const lat = request.data.landed_coords.lat;
            const lon = request.data.landed_coords.lon;
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lon + 180) * (Math.PI / 180);
            
            const dir = new THREE.Vector3(
                -(Math.sin(phi) * Math.cos(theta)),
                Math.cos(phi),
                Math.sin(phi) * Math.sin(theta)
            ).normalize();

            const parentWorldPos = new THREE.Vector3();
            parent.mesh.getWorldPosition(parentWorldPos);

            const startPos = parentWorldPos.clone().add(dir.clone().multiplyScalar(safeDistance));
            const rayDir = dir.clone().negate(); 

            const raycaster = new THREE.Raycaster(startPos, rayDir);
            const intersects = raycaster.intersectObject(parent.mesh, true);

            if (intersects.length > 0) {
                const hit = intersects[0];
                const hitPoint = hit.point; 
                const hitObject = hit.object;
                
                hitObject.attach(request.group);
                request.group.position.copy(hitObject.worldToLocal(hitPoint));

                const surfaceNormal = hit.face.normal.clone();
                const landerUp = new THREE.Vector3(0, 1, 0); 
                const targetQuaternion = new THREE.Quaternion();
                targetQuaternion.setFromUnitVectors(landerUp, surfaceNormal);
                request.group.quaternion.copy(targetQuaternion);
                
                // Final Scale Application
                const s = request.data.model_scale || 1.0;
                request.group.scale.set(s,s,s);

                if (DEBUG_LANDING) console.log(`Landed ${request.data.name} on ${parent.data.name}`);
                
                pendingLanders.splice(i, 1);
            }
        }
    }
}

// --- LOADING ---
async function loadSystem() {
    try {
        const res = await fetch('./data.json'); // FIX: Relative path
        const data = await res.json();

        data.forEach(item => {
            const group = new THREE.Group();
            const meshGroup = new THREE.Group(); 
            
            if (item.attitude) {
                meshGroup.rotation.x = (item.attitude.x || 0) * (Math.PI / 180);
                meshGroup.rotation.z = (item.attitude.z || 0) * (Math.PI / 180);
            } else if (item.tilt) {
                meshGroup.rotation.z = (item.tilt * Math.PI) / 180;
            }

            const visualContainer = new THREE.Group();
            visualContainer.userData = item; 
            
            meshGroup.add(visualContainer);
            group.add(meshGroup);

            celestialMap.set(item.name, { group, meshGroup, mesh: visualContainer, data: item });

            if (item.model) {
                gltfLoader.load(fixPath(item.model), (gltf) => { // FIX PATH
                    const model = gltf.scene;
                    const wrapper = new THREE.Group();
                    wrapper.add(model);

                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
                    
                    model.position.x = -center.x; 
                    model.position.z = -center.z;
                    
                    if (item.orbit_type === 'landed') {
                        model.position.y = -box.min.y; 
                    } else {
                        model.position.y = -center.y;
                    }

                    const size = box.getSize(new THREE.Vector3());
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const normalizationScale = 1.0 / maxDim;
                    const userScale = item.model_scale || 1.0;
                    const finalScale = normalizationScale * userScale;

                    wrapper.scale.set(finalScale, finalScale, finalScale);

                    if (item.model_offset) {
                        wrapper.position.set(item.model_offset.x, item.model_offset.y, item.model_offset.z);
                    }

                    model.traverse((child) => {
                        if (child.isMesh) {
                            child.userData = item;
                            child.castShadow = true;
                            child.receiveShadow = true;
                            if (child.material.map) child.material.map.colorSpace = THREE.SRGBColorSpace;
                            
                            if (item.status === 'Planned') {
                                const holoMat = createHologramMaterial();
                                child.material = holoMat;
                                plannedMaterials.push(holoMat);
                                child.castShadow = false; child.receiveShadow = false;
                            }
                        }
                    });
                    visualContainer.add(wrapper);
                    objects.push(visualContainer);
                }, undefined, (error) => {
                    console.warn(`Failed to load ${item.model}, using generic satellite.`);
                    const genericSat = createGenericSatellite(item);
                    visualContainer.add(genericSat);
                    objects.push(visualContainer);
                });
            } 
            else if (item.type === 'mission') {
                const genericSat = createGenericSatellite(item);
                visualContainer.add(genericSat);
                objects.push(visualContainer);
            }
            // --- SUN ---
            else if (item.type === 'star') {
                const sunGroup = createSun(item.radius, item.texture);
                visualContainer.add(sunGroup);
                objects.push(visualContainer);
            }
            // --- PLANETS ---
            else {
                let mesh;
                if (item.type === 'reference_point') {
                    mesh = new THREE.AxesHelper(1); mesh.visible = false;
                } else {
                    let geo, mat;
                    if (item.texture) {
                        const tex = texLoader.load(fixPath(item.texture)); // FIX PATH
                        tex.colorSpace = THREE.SRGBColorSpace;
                        geo = new THREE.SphereGeometry(item.radius, 64, 64);
                        mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6, metalness: 0.1 });
                        if (item.name === "Earth" && item.night_texture && ENABLE_NIGHT_LIGHTS) {
                            const nightMesh = createEarthNightLayer(item.radius, item.night_texture);
                            if(nightMesh) visualContainer.add(nightMesh);
                        }
                    } else if (item.shape === 'cube') {
                        geo = new THREE.BoxGeometry(item.radius*2, item.radius*2, item.radius*2);
                        mat = new THREE.MeshStandardMaterial({ color: item.color, roughness: 0.5 });
                    } else {
                        geo = new THREE.SphereGeometry(item.radius, 32, 32);
                        mat = new THREE.MeshStandardMaterial({ color: item.color, roughness: 0.7 });
                    }
                    mesh = new THREE.Mesh(geo, mat);
                    mesh.userData = item; 
                    if(item.type !== 'star') { mesh.castShadow = true; mesh.receiveShadow = true; } 
                    else { mesh.castShadow = false; mesh.receiveShadow = false; }
                }
                visualContainer.add(mesh);
                if(item.type !== 'reference_point') objects.push(mesh);
            }

            if (item.ring) {
                const innerRadius = item.radius * (item.ring.inner_radius || 1.4);
                const outerRadius = item.radius * (item.ring.outer_radius || 2.5);
                const ringGeo = new THREE.RingGeometry(innerRadius, outerRadius, 128); 
                const pos = ringGeo.attributes.position;
                const v3 = new THREE.Vector3();
                for (let i = 0; i < pos.count; i++){
                    v3.fromBufferAttribute(pos, i);
                    const len = Math.sqrt(v3.x*v3.x + v3.y*v3.y);
                    const u = (len - innerRadius) / (outerRadius - innerRadius);
                    ringGeo.attributes.uv.setXY(i, u, 0.5);
                }
                const ringTex = texLoader.load(fixPath(item.ring.texture)); // FIX PATH
                ringTex.colorSpace = THREE.SRGBColorSpace;
                const ringMat = new THREE.MeshStandardMaterial({ 
                    map: ringTex, side: THREE.DoubleSide, transparent: true, 
                    opacity: item.ring.opacity || 0.9, alphaTest: 0.1, roughness: 0.7,
                    emissive: new THREE.Color(0xffffff).multiplyScalar(item.ring.emissive || 0.1)
                });
                const ring = new THREE.Mesh(ringGeo, ringMat);
                ring.rotation.x = -Math.PI / 2; 
                ring.receiveShadow = true; ring.castShadow = true;
                meshGroup.add(ring);
            }
        });

        // PASS 2: Link & Orbits & Landers
        celestialMap.forEach((obj) => {
            const { group, mesh, data } = obj;
            
            if (data.orbit_type === 'landed') {
                pendingLanders.push({ group: group, data: data });
            } else {
                scene.add(group);
                if (data.parent && data.type !== 'trajectory') {
                    let line = null;
                    if (data.orbit_type === 'lissajous') {
                         line = createLissajousLine(data.orbit);
                         const parent = celestialMap.get(data.parent);
                         if(parent && line) parent.mesh.add(line);
                    } else {
                         line = createOrbitLine(data.orbit, data.color);
                         if(line) scene.add(line);
                    }
                    if(line) obj.orbitLine = line;
                }
            }
        });

        populateMenu();
        setupCinematicControls();
    
    } catch(e) { console.error("Loading System Failed:", e); }
}

function calculateFocusDistance(object) {
    if (!object || !object.userData) return 20;
    let maxSystemRadius = object.userData.radius || 1; 
    if (object.userData.ring) {
        const ringOuter = (object.userData.radius || 1) * (object.userData.ring.outer_radius || 2.5);
        if (ringOuter > maxSystemRadius) maxSystemRadius = ringOuter;
    }
    celestialMap.forEach(child => {
        if (child.data.parent === object.userData.name) {
            const orbitDist = child.data.orbit ? child.data.orbit.a : 0;
            const childRadius = child.data.radius || 1;
            const totalDist = orbitDist + childRadius;
            if (totalDist > maxSystemRadius) maxSystemRadius = totalDist;
        }
    });
    const fov = camera.fov * (Math.PI / 180);
    const targetDistance = maxSystemRadius / Math.sin(fov / 2);
    return targetDistance / VIEWPORT_FILL_RATIO;
}

// --- UI ---
function populateMenu() {
    const list = document.getElementById('mission-list');
    if(!list) return;
    list.innerHTML = ''; 
    const sortedKeys = Array.from(celestialMap.keys()).sort((a,b) => a.localeCompare(b));

    sortedKeys.forEach(key => {
        const obj = celestialMap.get(key);
        if (obj.data.type === 'mission') {
            const btn = document.createElement('button');
            btn.className = 'mission-btn';
            let icon = '🛰️';
            let statusHtml = '';
            if (obj.data.status === 'Planned') {
                statusHtml = `<span style="font-size:0.7em; background:#004466; color:#00ffff; padding:2px 4px; border-radius:3px; margin-left:5px">PLANNED</span>`;
            } else if (obj.data.status === 'Crashed' || obj.data.status === 'Landed' || obj.data.status === 'Decommissioned') {
                statusHtml = `<span style="font-size:0.7em; background:#442200; color:#ffaa00; padding:2px 4px; border-radius:3px; margin-left:5px">ENDED</span>`;
            }
            btn.innerHTML = `<span style="margin-right:10px">${icon}</span> ${obj.data.name} ${statusHtml}`;
            btn.onclick = () => focusOnObject(obj.mesh, obj.data);
            list.appendChild(btn);
        }
    });
}

function focusOnObject(mesh, data, isCinematic = false) {
    selectedObject = mesh;
    isTracking = true; 
    // Always update UI now
    updateUI(data); 
}

function closeUI() {
    selectedObject = null; 
    isTracking = false; 
    
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('controls').classList.remove('shifted');
}

function updateUI(data) {
    const sb = document.getElementById('sidebar');
    const controls = document.getElementById('controls');

    let statusColor = '#222';
    if(data.status === 'Active' || data.status === 'Launched' || data.status === 'En Route' || data.status === 'Operational') statusColor = '#006622'; 
    if(data.status === 'Planned') statusColor = '#004466'; 
    if(data.status === 'Crashed' || data.status === 'Landed' || data.status === 'Decommissioned') statusColor = '#662200'; 

    let launchTag = '';
    if (data.launch_year) {
        const prefix = (data.status === 'Planned') ? 'Planned Launch' : 'Launched';
        launchTag = `<span class="badge" style="background:#555">${prefix}: ${data.launch_year}</span>`;
    }

    let imageHtml = '';
    if (data.image_url) {
        imageHtml = `<div style="margin: 15px 0; border-radius: 8px; overflow: hidden; border: 1px solid #444;">
            <img src="${fixPath(data.image_url)}" style="width:100%; display:block;" alt="${data.name} Science Image" onerror="this.style.display='none'"/>
        </div>`;
    }

    let ceiHtml = '';
    if (data.ou_involvement) {
        ceiHtml = `
        <div style="background: rgba(0, 100, 255, 0.1); border-left: 4px solid #00aaff; padding: 10px; margin-top: 15px; font-size: 0.9em;">
            <strong style="color: #00aaff; display:block; margin-bottom:5px;">CEI Involvement</strong>
            ${data.ou_involvement}
        </div>`;
    }

    let html = `
        <h2 style="margin-top:0">${data.name}</h2>
        <div style="display:flex; gap:5px; flex-wrap:wrap; margin-bottom:10px;">
            <span class="badge" style="background:#444">${data.type.toUpperCase()}</span>
            <span class="badge" style="background:${statusColor}; color:${data.status === 'Planned' ? '#000' : '#fff'}">${data.status}</span>
            ${launchTag}
        </div>
        
        ${imageHtml}
        
        <p style="line-height: 1.5; margin-bottom: 10px;">${data.description || 'No description available.'}</p>
        
        ${ceiHtml}
    `;
    
    document.getElementById('info-content').innerHTML = html;
    
    sb.classList.add('active');
    controls.classList.add('shifted');
}

// --- CINEMATIC MODE ---
function setupCinematicControls() {
    const controlsDiv = document.getElementById('controls');
    if (!controlsDiv) return;
    if (!document.getElementById('cinematic-btn')) {
        const btn = document.createElement('button');
        btn.id = 'cinematic-btn';
        btn.innerText = "Start Cinematic Mode";
        btn.onclick = startCinematicMode;
        controlsDiv.appendChild(btn);
    }
}

function startCinematicMode(e) {
    if (e) e.stopPropagation(); 
    if (cinematicActive) return;
    cinematicActive = true;

    // Only hide the LEFT menu
    document.getElementById('mission-menu').classList.add('ui-hidden');
    
    // We KEEP sidebar and controls visible now!
    
    cycleCinematic();
    cinematicTimer = setInterval(cycleCinematic, CINEMATIC_DELAY);
}

function stopCinematicMode() {
    if (!cinematicActive) return;
    cinematicActive = false;

    // Show Left Menu
    document.getElementById('mission-menu').classList.remove('ui-hidden');

    if (cinematicTimer) clearInterval(cinematicTimer);
    cinematicTimer = null;
}

function cycleCinematic() {
    if (!cinematicActive) return;
    if (cinematicQueue.length === 0) {
        celestialMap.forEach(obj => {
            if(obj.data.type === 'mission') cinematicQueue.push(obj);
        });
        for (let i = cinematicQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cinematicQueue[i], cinematicQueue[j]] = [cinematicQueue[j], cinematicQueue[i]];
        }
    }
    const nextObj = cinematicQueue.pop();
    if(nextObj) {
        focusOnObject(nextObj.mesh, nextObj.data, true);
    }
}

// --- TIME BUTTONS ---
function changeSpeed(delta) {
    speedLevel += delta;
    if (speedLevel < 0) speedLevel = 0;
    if (speedLevel > 8) speedLevel = 8;

    if (speedLevel === 0) {
        timeScale = 0;
        document.getElementById('speedLabel').innerText = "Paused";
    } else {
        timeScale = Math.pow(10, speedLevel - 1);
        document.getElementById('speedLabel').innerText = timeScale.toLocaleString() + "x";
    }
}

document.getElementById('btn-slower').onclick = () => changeSpeed(-1);
document.getElementById('btn-faster').onclick = () => changeSpeed(1);

// --- ANIMATION LOOP ---
function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    simulatedDate = new Date(simulatedDate.getTime() + (dt * timeScale * 1000));
    document.getElementById('clock').innerText = simulatedDate.toUTCString();
    
    const days = getDaysSinceJ2000(simulatedDate);

    if(pendingLanders.length > 0) attemptToLand();

    if (sunUniforms) sunUniforms.uTime.value = elapsedTime;
    
    celestialMap.forEach(obj => {
        if(obj.data.type === 'star' && obj.mesh.children[0].userData.flares) {
            obj.mesh.children[0].userData.flares.forEach(flare => {
                flare.rotation.z += flare.userData.speed * dt * 10;
                flare.material.uniforms.uTime.value = elapsedTime;
            });
        }
    });

    plannedMaterials.forEach(mat => { mat.uniforms.uTime.value = elapsedTime; });

    celestialMap.forEach(obj => {
        const { group, meshGroup, data, orbitLine } = obj;
        if (data.orbit_type === 'landed') return;

        let localPos = {x:0, y:0, z:0};
        
        if (data.type === 'trajectory') {
            localPos = getTrajectoryPosition(data.waypoints, simulatedDate);
            group.position.set(localPos.x, localPos.y, localPos.z);
            if (data.type === 'trajectory') {
                const nextDate = new Date(simulatedDate.getTime() + 1000 * 60 * 60); 
                const nextPos = getTrajectoryPosition(data.waypoints, nextDate);
                const lookTarget = new THREE.Vector3(nextPos.x, nextPos.y, nextPos.z);
                group.lookAt(lookTarget);
            }
        } else if (data.orbit_type === 'lissajous') {
            const p = celestialMap.get(data.parent);
            if(p) {
                const angle = (days * data.orbit.rate + data.orbit.M0) * (Math.PI / 180);
                const radius = data.orbit.a; 
                const y_off = radius * Math.sin(angle);
                const z_off = radius * 2.5 * Math.cos(angle); 
                const x_off = radius * 0.5 * Math.sin(2 * angle);
                group.position.set(p.group.position.x + x_off, p.group.position.y + y_off, p.group.position.z + z_off);
            }
        } else {
            localPos = getKeplerPosition(data.orbit, days);
            if (data.parent && data.parent !== 'Sun') {
                const p = celestialMap.get(data.parent);
                if(p) {
                    group.position.set(p.group.position.x+localPos.x, p.group.position.y+localPos.y, p.group.position.z+localPos.z);
                    if(orbitLine) orbitLine.position.copy(p.group.position);
                }
            } else {
                group.position.set(localPos.x, localPos.y, localPos.z);
            }
        }

        if (data.rot_period) {
            const theta = (days / data.rot_period) * Math.PI * 2;
            const offset = (data.rot_offset || 0) * (Math.PI / 180);
            meshGroup.rotation.y = theta + offset;
        } 
        else if (data.type === 'mission') {
            meshGroup.rotation.y += dt * 0.2;
        }
    });

    if(selectedObject && isTracking) {
        const targetWorldPos = new THREE.Vector3();
        selectedObject.getWorldPosition(targetWorldPos);
        if (isNaN(targetWorldPos.x)) { isTracking = false; return; }

        const systemDistance = calculateFocusDistance(selectedObject);
        const breathe = Math.sin(elapsedTime * 0.2) * (systemDistance * 0.02);
        const dist = systemDistance + breathe; 
        
        let idealCamPos = new THREE.Vector3();

        // --- CAMERA SHIFT (Cinematic Offset) ---
        let shiftOffset = new THREE.Vector3(0, 0, 0);

        if (selectedObject.userData.orbit_type === 'landed') {
            // Lander Mode
            const parentName = selectedObject.userData.parent;
            const parentObj = celestialMap.get(parentName);
            let surfaceNormal = new THREE.Vector3(0, 1, 0); 
            if (parentObj) {
                const parentPos = new THREE.Vector3();
                parentObj.mesh.getWorldPosition(parentPos);
                surfaceNormal.subVectors(targetWorldPos, parentPos).normalize();
            }
            const phi = Math.PI / 6; 
            const theta = Math.sin(elapsedTime * 0.2) * 1.5; 
            const localOffset = new THREE.Vector3().setFromSphericalCoords(dist, phi, theta);
            const defaultUp = new THREE.Vector3(0, 1, 0);
            const alignQuat = new THREE.Quaternion().setFromUnitVectors(defaultUp, surfaceNormal);
            localOffset.applyQuaternion(alignQuat);
            
            idealCamPos.copy(targetWorldPos).add(localOffset);

        } else {
            // Orbit Mode
            const angle = elapsedTime * CAMERA_ORBIT_SPEED; 
            const offsetX = Math.sin(angle) * dist;
            const offsetZ = Math.cos(angle) * dist;
            const verticalAngle = elapsedTime * 0.05; 
            const offsetY = Math.sin(verticalAngle) * (dist * 0.2); 
            
            idealCamPos.set(
                targetWorldPos.x + offsetX,
                targetWorldPos.y + offsetY, 
                targetWorldPos.z + offsetZ
            );
        }

        // --- APPLY CINEMATIC SHIFT ---
        if (cinematicActive) {
            // Calculate direction from IdealCam to Target
            const viewDir = new THREE.Vector3().subVectors(targetWorldPos, idealCamPos).normalize();
            
            // Calculate "Right" vector (View X Up)
            let upVec = new THREE.Vector3(0, 1, 0);
            if (selectedObject.userData.orbit_type === 'landed') {
                 const parentName = selectedObject.userData.parent;
                 const parentObj = celestialMap.get(parentName);
                 if (parentObj) {
                     const parentPos = new THREE.Vector3();
                     parentObj.mesh.getWorldPosition(parentPos);
                     upVec.subVectors(targetWorldPos, parentPos).normalize();
                 }
            }

            const rightVec = new THREE.Vector3().crossVectors(viewDir, upVec).normalize();
            
            // Shift both camera and target to the RIGHT so object appears LEFT
            shiftOffset.copy(rightVec).multiplyScalar(dist * 0.3);
            
            idealCamPos.add(shiftOffset);
            targetWorldPos.add(shiftOffset); 
        }
        
        controls.target.lerp(targetWorldPos, CAMERA_FLY_SPEED);
        camera.position.lerp(idealCamPos, CAMERA_FLY_SPEED);
        controls.update();

        if(selectedObject.userData && selectedObject.userData.type !== 'star') {
            sunLight.intensity = 0; 
            const sunPos = new THREE.Vector3(0,0,0);
            const vecToSun = sunPos.clone().sub(targetWorldPos).normalize(); 
            const lightPos = targetWorldPos.clone().add(vecToSun.multiplyScalar(100));
            focusLight.position.copy(lightPos);
            // Light should point at the real object position, not the shifted camera target
            const realTargetPos = new THREE.Vector3();
            selectedObject.getWorldPosition(realTargetPos);
            focusLight.target.position.copy(realTargetPos);

            const baseRad = selectedObject.userData.radius || 1;
            const shadowBoxSize = baseRad * 30; 
            focusLight.shadow.camera.left = -shadowBoxSize;
            focusLight.shadow.camera.right = shadowBoxSize;
            focusLight.shadow.camera.top = shadowBoxSize;
            focusLight.shadow.camera.bottom = -shadowBoxSize;
            focusLight.shadow.camera.near = 1;
            focusLight.shadow.camera.far = 200;
            focusLight.shadow.camera.updateProjectionMatrix();
            focusLight.intensity = 2.5; 
            if(shadowHelper) shadowHelper.update();
            if(lightHelper) lightHelper.update();
        } else {
            sunLight.intensity = 2.5;
            focusLight.intensity = 0;
        }
    } 
    else if (selectedObject) {
        const t = new THREE.Vector3();
        selectedObject.getWorldPosition(t);
        if(!isNaN(t.x)) {
            controls.target.lerp(t, CAMERA_FLY_SPEED);
            controls.update();
        }
        sunLight.intensity = 2.5;
        focusLight.intensity = 0;
    } else {
        sunLight.intensity = 2.5;
        focusLight.intensity = 0;
    }

    renderer.render(scene, camera);
}

// EVENTS
document.getElementById('reset-btn').onclick = () => {
    closeUI();
    const targetPos = new THREE.Vector3(0, 400, 1200);
    const targetLook = new THREE.Vector3(0, 0, 0);
    camera.position.copy(targetPos);
    controls.target.copy(targetLook);
    stopCinematicMode(); 
};

window.addEventListener('click', (e) => {
    if (cinematicActive) {
        stopCinematicMode();
        return;
    }
    if(e.target.closest('#ui-layer')) return;
    mouse.x = (e.clientX/window.innerWidth)*2-1; mouse.y = -(e.clientY/window.innerHeight)*2+1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(objects, true);
    if(hits.length){
        let target = hits[0].object;
        let safeCount = 0;
        while(target && !target.userData.name && safeCount < 10) { target = target.parent; safeCount++; }
        if (target && target.userData && target.userData.name) {
            focusOnObject(target, target.userData); 
        }
    } else { 
        closeUI();
    }
});

window.addEventListener('resize', () => { 
    camera.aspect = window.innerWidth / window.innerHeight; 
    camera.updateProjectionMatrix(); 
    renderer.setSize(window.innerWidth, window.innerHeight); 
    celestialMap.forEach(obj => {
        if(obj.orbitLine && obj.orbitLine.material.resolution) {
            obj.orbitLine.material.resolution.set(window.innerWidth, window.innerHeight);
        }
    });
});

loadSystem();
animate();