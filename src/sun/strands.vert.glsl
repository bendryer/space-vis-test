// Coronal loops and rays: thin camera-facing ribbons animated entirely on the GPU.
// Loops arc between two footpoints on the surface, rising and fading on a repeating cycle.
// Rays (STRAND_RAYS) run straight out from one footpoint and taper to a point.
// Everything is in the Sun's object space, where its radius is 1.

attribute vec2 aStrand;   // x: 0..1 along the strand, y: -1 / 1 across it
attribute vec3 aFootA;    // footpoint on the unit sphere
attribute vec3 aFootB;    // loops: the other footpoint
attribute vec4 aSeed;     // x: cycle offset, y: cycle speed, z: size, w: colour

uniform float uTime;
uniform float uCycleSpeed;
uniform vec3 uCameraLocal;
uniform float uWidth;
uniform float uArch;
uniform float uLength;
uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;
uniform float uOpacity;
uniform float uHue;
uniform float uHueSpread;

varying float vAcross;
varying float vOpacity;
varying vec3 vColor;

// Cheap swirling displacement: a few layers of sines, each fed through a fixed rotation and
// back into itself so the result twists rather than repeats.
vec3 swirl(vec3 p, float t) {
    const mat3 turn = mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);
    vec3 sum = vec3(0.0);
    float amplitude = 1.0;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
        p = turn * p + vec3(0.0, 0.0, t * 0.35);
        vec3 s = sin(p.yzx * frequency) * amplitude;
        p += s;
        sum += s;
        amplitude *= 0.707;
        frequency /= 0.707;
    }
    return sum;
}

// Warm palette: deep red-orange (v = 0) through orange to golden yellow (v = 1). An explicit
// gradient rather than a cosine palette, so no setting can stray into green.
vec3 warm(float v) {
    v = clamp(v, 0.0, 1.0);
    vec3 red = vec3(1.0, 0.28, 0.08);
    vec3 orange = vec3(1.0, 0.55, 0.15);
    vec3 yellow = vec3(1.0, 0.85, 0.4);
    return v < 0.5 ? mix(red, orange, v * 2.0) : mix(orange, yellow, v * 2.0 - 1.0);
}

#ifdef STRAND_RAYS
vec3 strandPoint(float u, float cycle) {
    float reach = u * uLength * (aSeed.z + 0.2);
    vec3 p = aFootA * (1.0 + reach);
    p += swirl(p * uNoiseFrequency, uTime) * reach * uNoiseAmplitude;
    return p;
}
#else
vec3 strandPoint(float u, float cycle) {
    float span = distance(aFootA, aFootB);
    vec3 up = normalize(aFootA + aFootB);
    vec3 p = mix(aFootA, aFootB, u);
    float lift = sin(u * 3.14159265) * span * uArch * cycle;
    p += up * lift;
    p += swirl(p * uNoiseFrequency, uTime) * lift * uNoiseAmplitude;
    return p;
}
#endif

void main() {
    float u = aStrand.x;
    // Each strand runs its own rise-and-fade cycle.
    float cycle = fract(uTime * uCycleSpeed * aSeed.y + aSeed.x);

    vec3 p = strandPoint(u, cycle);
    vec3 ahead = strandPoint(min(u + 0.01, 1.0), cycle);
    vec3 behind = strandPoint(max(u - 0.01, 0.0), cycle);
    vec3 tangent = normalize(ahead - behind);
    vec3 side = normalize(cross(normalize(p - uCameraLocal), tangent));

#ifdef STRAND_RAYS
    float width = uWidth * (1.0 - u);
    vOpacity = uOpacity * (0.5 + aSeed.w);
    vColor = warm(aSeed.w * uHueSpread + uHue);
#else
    float width = uWidth * (1.0 + cycle);
    // Transparent at the base, fading out as the loop grows.
    vOpacity = smoothstep(1.0, 1.04, length(p)) * (1.0 - cycle) * uOpacity;
    vColor = warm(aSeed.w * uHueSpread + uHue);
#endif

    vAcross = aStrand.y;
    p += side * width * aStrand.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
