// The clock line: the simulated date and time, under the header.
import { engine } from './engine.js';

const clockElement = document.getElementById('clock');
// "28 Sep 2026, 17:07:19 UTC": the mission-log form, day first, always labelled UTC. Fixed
// three-letter months, since en-GB formatting now writes "Sept".
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const pad2 = n => String(n).padStart(2, '0');
function formatSimulatedTime(d) {
    return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}, `
        + `${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}:${pad2(d.getUTCSeconds())} UTC`;
}
let lastSimulatedSeconds = -1;
// The clock line, rewritten when the simulated second changes.
export function updateClock() {
    const time = engine.getTime();
    const currentSimulatedSeconds = Math.floor(time / 1000);
    if (currentSimulatedSeconds !== lastSimulatedSeconds) {
        lastSimulatedSeconds = currentSimulatedSeconds;
        if (clockElement) clockElement.textContent = formatSimulatedTime(new Date(time));
    }
}
