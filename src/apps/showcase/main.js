// The showcase: OUniverse's web app round the engine. This file wires its modules together, in the
// order things must happen: the splash, the engine, the panels round it, the input, then start.
import '../../base.css';
import './showcase.css';
import { createEngine } from '../../engine/index.js';
import { engine, setEngine } from './engine.js';
import { setupReticles, updateReticles } from '../../features/reticles/reticles.js';
import { updateClock } from './clock.js';
import { trackInputType, setupInput } from './input.js';
import { markSceneReady, startSlowLoadNotice, showFatalError, fillSplashFacts, setupSplash, setupLoadingProgress } from './splash.js';
import { setupFullscreen } from './fullscreen.js';
import { hoveredObj, reticleGroups, setupViews, showSolarSystem } from './views.js';
import { sceneRightEdge, setupLayout } from './layout.js';
import { populateMenu } from './menu.js';
import { setupDetails } from './details.js';
import { setupCredits } from './credits.js';
import { setupCinematicControls } from './cinematic.js';

trackInputType();
startSlowLoadNotice();

setupFullscreen();

setupSplash();

try {
    setEngine(createEngine());
} catch (e) {
    showFatalError('Your browser or device doesn’t support 3D graphics (WebGL), or it’s turned off. Try an up-to-date Chrome, Edge, Firefox or Safari, or check that hardware acceleration is enabled.');
    throw e; // Nothing below can run without a renderer
}

setupLoadingProgress();

// Showcase: the 3D view on the page, labelled for screen readers and focusable for keyboard steering.
engine.canvas.setAttribute('role', 'application');
engine.canvas.setAttribute('aria-roledescription', '3D view');
engine.canvas.setAttribute('aria-label', 'Interactive 3D view of the Solar System. Arrow keys turn the view, plus and minus zoom. The mission list visits each object.');
engine.canvas.tabIndex = 0;
engine.canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    showFatalError('The 3D graphics stopped responding, which can happen when a device is low on memory. Reloading usually fixes it.');
});
document.body.appendChild(engine.canvas);

// Showcase: the panels round the system, opening on the whole Solar System.
engine.on('built', ({ entries }) => {
    fillSplashFacts(engine.listObjects());
    setupReticles(engine, document.getElementById('ui-layer'));
    populateMenu();
    setupCinematicControls();
    setupCredits(entries.find(item => item.type === 'credits'));
    showSolarSystem({ animate: false });
});
engine.on('error', () => {
    showFatalError(navigator.onLine === false
        ? 'You appear to be offline. Reconnect to the internet, then try again.'
        : 'The Solar System data didn’t load. Check your connection and try again.');
});
engine.on('ready', markSceneReady);

setupViews();

setupDetails();

setupLayout();

setupInput();

// Showcase, each frame: the clock line (when the second changes) and the reticles.
engine.onFrame(dt => {
    updateClock();
    updateReticles(dt, { hovered: hoveredObj, groups: reticleGroups(), rightEdge: sceneRightEdge() });
});

// The sky snaps in behind the splash, and fades in once the visitor has gone in.
const splashOverlay = document.getElementById('loading-overlay');
engine.setSceneVisible(!splashOverlay || splashOverlay.hidden);

engine.start();