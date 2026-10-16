// Records the width and height of each science image's web copy (public/images/web/*.webp) in
// src/apps/showcase/image-sizes.json, so the details panel can give its <img> a size and keep room
// for it while it loads (the text below no longer jumps when it arrives). Run after adding or
// regenerating a web copy: node tools/image-sizes.mjs
import fs from 'node:fs';
import path from 'node:path';

const dir = 'public/images/web';
const out = 'src/apps/showcase/image-sizes.json';

// A WebP's size from its header: lossy (VP8), lossless (VP8L) or extended (VP8X).
function webpSize(buf) {
    if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8 ') return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
    if (chunk === 'VP8L') {
        const bits = buf.readUInt32LE(21);
        return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1];
    }
    if (chunk === 'VP8X') return [buf.readUIntLE(24, 3) + 1, buf.readUIntLE(27, 3) + 1];
    return null;
}

const sizes = {};
for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.webp')).sort()) {
    const size = webpSize(fs.readFileSync(path.join(dir, file)));
    if (size) sizes[file.replace(/\.webp$/, '')] = size;
    else console.warn(`Not a WebP I can read: ${file}`);
}
fs.writeFileSync(out, JSON.stringify(sizes, null, 2) + '\n');
console.log(`${Object.keys(sizes).length} sizes written to ${out}`);
