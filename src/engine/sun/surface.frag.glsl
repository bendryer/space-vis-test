uniform samplerCube uNoise;
uniform float uBase;
uniform float uOffset;
uniform float uLimbPower;
uniform float uLimbStrength;
uniform float uTint;
uniform float uBrightness;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying vec3 vLayerA;
varying vec3 vLayerB;
varying vec3 vLayerC;

void main() {
    float plasma = (textureCube(uNoise, vLayerA).r
                  + textureCube(uNoise, vLayerB).r
                  + textureCube(uNoise, vLayerC).r) / 3.0;

    // Brighter towards the limb, where the eye looks through more of the glowing layer.
    vec3 toCamera = normalize(cameraPosition - vWorldPosition);
    float limb = pow(1.0 - max(dot(normalize(vWorldNormal), toCamera), 0.0), uLimbPower) * uLimbStrength;

    float brightness = plasma * uBase + uOffset + limb;
    gl_FragColor = vec4(clamp(plasmaColor(brightness, uTint, uBrightness), 0.0, 1.0), 1.0);
}
