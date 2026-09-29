varying float vAcross;
varying float vOpacity;
varying vec3 vColor;

void main() {
    // Soft edges across the ribbon.
    float alpha = smoothstep(1.0, 0.0, abs(vAcross));
    alpha *= alpha * vOpacity;
    gl_FragColor = vec4(vColor * alpha, alpha);
}
