// Runs after `npm run deploy` (postdeploy): tags the deployed commit so it can be found and
// redeployed later, e.g. deploy-2026-10-08-1415.
import { execSync } from 'child_process';

const pad = (n) => String(n).padStart(2, '0');
const d = new Date();
const tag = `deploy-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
execSync(`git tag ${tag}`, { stdio: 'inherit' });
execSync(`git push origin ${tag}`, { stdio: 'inherit' });
console.log(`Tagged this deploy as ${tag}.`);
