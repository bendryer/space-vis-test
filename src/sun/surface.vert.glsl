// The Sun's photosphere. The noise cube map is read three times through copies of the surface
// direction that each turn slowly about a different axis; averaging them makes the plasma
// churn rather than drift in one direction.

uniform float uTime;
uniform float uLayerSpin;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying vec3 vLayerA;
varying vec3 vLayerB;
varying vec3 vLayerC;

mat2 rotate2d(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

void main() {
    vec3 dir = normalize(position);
    float t = uTime * uLayerSpin;

    vLayerA = dir;
    vLayerA.yz = rotate2d(t) * vLayerA.yz;
    vLayerB = dir;
    vLayerB.zx = rotate2d(t + 2.094) * vLayerB.zx;
    vLayerC = dir;
    vLayerC.xy = rotate2d(t + 4.189) * vLayerC.xy;

    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPosition = world.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * dir);
    gl_Position = projectionMatrix * viewMatrix * world;
}
