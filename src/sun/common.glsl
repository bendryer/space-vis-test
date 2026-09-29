// Shared by the Sun's shaders.

// Hot-body colour ramp: red follows brightness, green its square, blue its fourth power, so
// bright plasma reads white-yellow and dimmer plasma orange-red. uTint sets where on that
// curve 1.0 lands; uBrightness scales the result.
vec3 plasmaColor(float brightness, float tint, float gain) {
    float b = brightness * tint;
    float b2 = b * b;
    return vec3(b, b2, b2 * b2) / tint * gain;
}
