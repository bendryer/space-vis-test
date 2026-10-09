// Draws evolving plasma noise onto the inside of a unit sphere; a cube camera at its centre
// captures it into the cube map the Sun's surface samples. Time is the fourth dimension, so
// the pattern boils in place instead of sliding across the surface.

uniform float uTime;
uniform float uFrequency;
uniform float uSpeed;
uniform float uPersistence;
uniform float uContrast;
uniform float uFlatten;

varying vec3 vDirection;

float fbm(vec4 p) {
    float sum = 0.0;
    float amplitude = 1.0;
    for (int i = 0; i < OCTAVES; i++) {
        sum += snoise(p) * amplitude;
        p.xyz *= 2.0;
        amplitude *= uPersistence;
    }
    return sum;
}

void main() {
    vec3 dir = normalize(vDirection);
    float t = uTime * uSpeed;

    float plasma = fbm(vec4(dir * uFrequency + 7.3, t)) * uContrast + 0.5;

    // Broad, slow patches of brighter activity on top of the fine granulation.
    float activity = max(snoise(vec4(dir * 2.0, t * 0.5)), 0.0);
    plasma *= mix(1.0, activity, uFlatten);

    gl_FragColor = vec4(plasma, plasma, plasma, 1.0);
}
