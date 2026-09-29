// Soft star-like glow for when the Sun is small on screen.

uniform vec3 uColor;
uniform float uOpacity;

varying float vRadial;

void main() {
    float glow = exp(-vRadial * vRadial * 6.0) * (1.0 - vRadial);
    float alpha = glow * uOpacity;
    gl_FragColor = vec4(uColor * alpha, alpha);
}
