// Runs before `npm run deploy` (predeploy). The live site must only ever come from a clean,
// pushed main, so every deploy matches a commit anyone can check out again.
// After a deploy, `postdeploy` tags that commit (deploy-YYYY-MM-DD-HHMM) and pushes the tag.
// To roll back, prefer `git revert` on main and a normal deploy. In a hurry:
//   git switch -c rollback deploy-<date>; git push origin rollback
//   ALLOW_DEPLOY_FROM=rollback npm run deploy
import { execSync } from 'child_process';

const git = (cmd) => execSync(`git ${cmd}`, { encoding: 'utf8' }).trim();
const fail = (msg) => { console.error(`\nDeploy stopped: ${msg}\n`); process.exit(1); };

const branch = git('rev-parse --abbrev-ref HEAD');
const allowed = process.env.ALLOW_DEPLOY_FROM || 'main';
if (branch !== allowed) fail(`on branch "${branch}". Deploy from main (merge your branch first).`);

if (git('status --porcelain')) fail('there are uncommitted changes. Commit or stash them first.');

git('fetch origin --quiet');
const upstream = `origin/${branch}`;
let ahead = '';
try { ahead = git(`rev-list ${upstream}..HEAD`); } catch { fail(`${upstream} doesn't exist. Push the branch first.`); }
if (ahead) fail(`${branch} has commits that aren't pushed. Run: git push origin ${branch}`);
if (git(`rev-list HEAD..${upstream}`)) fail(`${upstream} has commits you don't have. Pull first.`);

console.log(`Deploy check passed: ${branch} at ${git('rev-parse --short HEAD')}, clean and pushed.`);
