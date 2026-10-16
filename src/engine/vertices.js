// Reading a model's vertices quickly (getAreaCentroid, a lander's feet).

// Puts vertex i of a position attribute, moved by an affine matrix, into `out`: the same numbers
// as fromBufferAttribute(...).applyMatrix4(matrix) (whose divide by w is a divide by 1), read
// straight from the array where it's plain floats, which is several times quicker over a model.
export function vertexReader(pos, matrix) {
    const e = matrix.elements;
    if (pos.isInterleavedBufferAttribute || pos.normalized || pos.itemSize !== 3 || e[3] !== 0 || e[7] !== 0 || e[11] !== 0 || e[15] !== 1) {
        return (out, i) => out.fromBufferAttribute(pos, i).applyMatrix4(matrix);
    }
    const p = pos.array;
    return (out, i) => {
        const x = p[3 * i], y = p[3 * i + 1], z = p[3 * i + 2];
        return out.set(e[0] * x + e[4] * y + e[8] * z + e[12], e[1] * x + e[5] * y + e[9] * z + e[13], e[2] * x + e[6] * y + e[10] * z + e[14]);
    };
}
