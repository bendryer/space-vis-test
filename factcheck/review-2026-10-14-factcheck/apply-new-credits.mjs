// Drop the Sentinel-2 and -3 image credits (their objects are gone).
import { readData, writeData } from '../../.claude/skills/factcheck-data/lib.mjs';
const { raw, data } = readData();
const items = data.find(o => o.name === 'Credits').sections[0].items;
for (let i = items.length - 1; i >= 0; i--) if (/^Sentinel-[23]$/.test(items[i].subject)) items.splice(i, 1);
writeData(data, raw);
console.log('written');
