// Shared helpers for the factcheck-data skill scripts.
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

export const SKILL_DIR = path.dirname(fileURLToPath(import.meta.url));
export const PROJECT_DIR = path.resolve(SKILL_DIR, '../../..');
export const DATA_FILE = path.join(PROJECT_DIR, 'public', 'data.json');
export const FACTCHECK_DIR = path.join(PROJECT_DIR, 'factcheck');
export const REGISTRY_FILE = path.join(FACTCHECK_DIR, 'registry.json');

/** Read data.json, keeping the raw text so it can be written back in the same style. */
export function readData(file = DATA_FILE) {
  const raw = fs.readFileSync(file, 'utf8');
  return { raw, data: JSON.parse(raw) };
}

/** Write data.json in the file's own style: its indent, its line endings, `motion` on one line. */
export function writeData(data, raw, file = DATA_FILE) {
  const indent = (raw.match(/^\[\r?\n( +)\{/)?.[1] ?? '  ').length;
  const eol = raw.includes('\r\n') ? '\r\n' : '\n';
  let out = JSON.stringify(data, null, indent);
  out = out.replace(/"motion": \{\n([^{}]*?)\n\s*\}/g, (m, body) =>
    '"motion": {' + body.split('\n').map(s => s.trim().replace(/,$/, '')).join(', ') + '}');
  if (eol !== '\n') out = out.replace(/\n/g, eol);
  fs.writeFileSync(file, out + (/\r?\n$/.test(raw) ? eol : ''));
}

export const objects = data => data.filter(o => o.type !== 'credits');
export const byName = data => Object.fromEntries(objects(data).map(o => [o.name, o]));

/** Read a dotted field ("orbit.e", "suborbital.start_coords") from an object. */
export function getField(obj, field) {
  return field.split('.').reduce((a, k) => (a == null ? undefined : a[k]), obj);
}
export function setField(obj, field, value) {
  const keys = field.split('.');
  const last = keys.pop();
  const parent = keys.reduce((a, k) => (a[k] ??= {}), obj);
  parent[last] = value;
}
/** A field's value as text, for matching a suggestion's `from`. */
export const asText = v => (typeof v === 'string' ? v : v === undefined ? undefined : JSON.stringify(v));

export const hash = v => crypto.createHash('sha1').update(asText(v) ?? '').digest('hex').slice(0, 12);

/** Fields whose text the registry fingerprints, so later reviews can see what changed. */
export const TRACKED = ['description', 'ou_involvement', 'status', 'status_timeline', 'launch_year',
  'landed_coords', 'suborbital', 'trajectory', 'orbit', 'tilt', 'rot_period', 'parent', 'type'];

export const slug = s => s.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const today = () => new Date().toISOString().slice(0, 10);

export function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}
