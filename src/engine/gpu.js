// Getting new objects onto the GPU ahead of time: textures uploaded one per frame, shaders compiled
// in parallel, so nothing stalls the frame that first draws them.
import { scene, camera, renderer } from './scene.js';

// --- GPU WARM-UP ---
// The first frame that draws a new texture or material stalls while the texture
// uploads and the shader compiles, which shows as a stutter mid-flight. Do that
// work ahead of time instead: one texture per frame, shaders compiled in parallel.
const textureUploadQueue = [];

export function collectTextures(root, out = new Set()) {
    root.traverse(child => {
        if (!child.material) return;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach(material => {
            for (const key in material) {
                const value = material[key];
                if (value && value.isTexture) out.add(value);
            }
            if (material.uniforms) {
                Object.values(material.uniforms).forEach(u => { if (u && u.value && u.value.isTexture) out.add(u.value); });
            }
        });
    });
    return out;
}

export function uploadNextTexture() {
    const job = textureUploadQueue.shift();
    if (!job) return;
    try { renderer.initTexture(job.texture); } catch (e) { console.warn('Texture upload failed', e); }
    job.done();
}

// Resolves once the object's textures are on the GPU and its shaders are ready.
export function prepareForGPU(object) {
    const uploads = [...collectTextures(object)].map(texture =>
        new Promise(done => textureUploadQueue.push({ texture, done })));
    return Promise.all(uploads)
        .then(() => renderer.compileAsync(object, camera, scene))
        .catch(e => console.warn('Shader warm-up failed', e));
}
