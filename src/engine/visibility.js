// Which system the camera is in (activeSystem), which small objects are drawn, and which models
// to load as they come near enough to see.
import { CULLING_THRESHOLD, HIGH_DETAIL_PREFETCH_PX } from './config.js';
import { camera } from './scene.js';
import { celestialMap } from './state.js';
import { getModelPixelDiameter, loadModelForItem, requestHighDetail } from './models.js';
import { getSystemRoot } from './orbits.js';
import { getVisualRadius, selectedObject } from './camera.js';


// --- OPTIMIZATION ---
export let activeSystem = 'Sun';

export function updateVisibility() {
    activeSystem = 'Sun';
    if (selectedObject && selectedObject.userData) {
        activeSystem = getSystemRoot(selectedObject.userData.name);
    } else {
        let minDistance = Infinity;
        celestialMap.forEach(obj => {
            if (obj.data.parent === 'Sun' && obj.data.type !== 'mission') {
                const dist = camera.position.distanceTo(obj.group.position);
                if (dist < minDistance) {
                    minDistance = dist;
                    activeSystem = obj.data.name;
                }
            }
        });
    }

    celestialMap.forEach(obj => {
        const { group, data } = obj;
        const distance = camera.position.distanceTo(group.position);
        if (distance === 0) return;

        const objSystem = getSystemRoot(data.name);
        const fov = camera.fov * (Math.PI / 180);
        const radius = data.type === 'mission' ? getVisualRadius(obj) : (data.radius || 1);
        const projectedSize = radius / distance * window.innerHeight / (2 * Math.tan(fov / 2));
        const threshold = CULLING_THRESHOLD;

        let isLocalGroup = (objSystem === activeSystem && activeSystem !== 'Sun');

        if (data.type === 'mission' || data.type === 'asteroid' || data.type === 'comet') {
            if (obj.mesh === selectedObject) {
                group.visible = true;
            } else {
                group.visible = isLocalGroup || (projectedSize > threshold);
            }

            if ((isLocalGroup || projectedSize > 3) && !data.isModelLoaded) {
                loadModelForItem(data, false);
            }
            if (data.isModelLoaded && !data.hasHighDetail && group.visible
                && getModelPixelDiameter(obj) > HIGH_DETAIL_PREFETCH_PX) {
                requestHighDetail(data);
            }
        } else {
            group.visible = true;
        }
    });
}
