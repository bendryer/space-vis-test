// Glow around the disc: strongest at the limb, falling off with the square of the distance,
// and coloured on the same ramp as the surface so the two meet without a seam.

uniform float uTint;
uniform float uBrightness;
uniform float uFalloffColor;
uniform float uOpacity;

varying float vRadial;

void main() {
    float glow = 1.0 - vRadial;
    glow *= glow;
    vec3 color = plasmaColor(1.0 + glow * uFalloffColor, uTint, uBrightness);
    float alpha = glow * uOpacity;
    gl_FragColor = vec4(color * alpha, alpha);
}
