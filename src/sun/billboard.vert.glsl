// A flat shape centred on the Sun that always faces the camera, built in view space.
// position.xy is a unit direction, position.z runs 0 (inner edge) to 1 (outer edge).
// The corona starts at the limb; the halo is a full disc whose size never drops below
// uMinPixels on screen, so the Sun still reads as a bright star from across the system.

uniform float uInner;        // inner radius, world units
uniform float uOuter;        // outer radius, world units
uniform float uMinPixels;    // minimum outer radius on screen (0 = none)
uniform float uViewportHeight;

varying float vRadial;

void main() {
    vec4 centre = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float outer = uOuter;
    if (uMinPixels > 0.0) {
        // World units per pixel at the Sun's distance.
        float worldPerPixel = 2.0 * -centre.z / (projectionMatrix[1][1] * uViewportHeight);
        outer = max(outer, uMinPixels * worldPerPixel);
    }
    float radius = mix(uInner, outer, position.z);
    vRadial = position.z;
    gl_Position = projectionMatrix * (centre + vec4(position.xy * radius, 0.0, 0.0));
}
