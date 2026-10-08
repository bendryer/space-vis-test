# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience for this first version is **stakeholders, internal and external to the Open University**. They should come away seeing the breadth of the OU's space work. They meet it in two ways, and both matter equally:

- **Presented:** an OU colleague drives it live in a meeting, pitch or event, on a laptop or a large screen, and talks over it.
- **Explored:** a stakeholder is sent a link and explores alone on their own device. With no presenter, the product has to explain itself.

Secondary audiences, all confirmed. They are not the focus of this first version:
- The **online general public**: curious visitors exploring on their own desktop or mobile device.
- **Prospective students** weighing up study at the Open University.
- **Schools and educators** using it in a classroom or a led outreach session.
- **Visitors at public events and exhibits**, on a shared screen that is often large, sometimes touch.

## Product Purpose

OUniverse is an interactive 3D explorer of the Solar System and of real space missions. It exists to show that the **Open University takes part in real missions and space research**. The first version is a **marketing tool**: it shows stakeholders the breadth of what the OU does in space.

Success means:
1. A stakeholder leaves with a sense of how wide the OU's space involvement is: how many missions, bodies and kinds of science.
2. Any visitor leaves knowing about the OU's role in space science.
3. The visitor goes on somewhere next. Where that is has not been decided yet (see Capabilities and Constraints).

## Positioning

The objects and missions are chosen, and their content written, for their **Open University involvement** and for the **science OU academics care about**. The product is less a general planetarium than a map of OU space research set in an accurate, explorable Solar System.

## Operating Context

- It is a single-page web app. It runs on stakeholders' own devices from a shared link, and on a presenter's laptop or a large screen in meetings and at events.
- There are two ways to explore. **Self-directed**: pick an object from the mission menu, grouped by parent body, and the camera flies to it and opens its info sidebar. **Cinematic Mode**: the camera tours the missions on its own, moving to a new one every 30 s.
- A live clock shows the simulated time (UTC). Positions come from Keplerian orbits measured from J2000.

## Capabilities and Constraints

- The content comes from `public/data.json`. It has 80 objects: star, planets, moons, asteroids, comets, reference points and missions. Each object has `description` and `ou_involvement` text (62 have OU involvement) and optionally a science image (48 do), `status` (e.g. Active, Planned, Landed, Crashed, Decommissioned) and `launch_year`.
- `data.json` is the only file the owner wants to edit for content. That includes the image credits, which are held in its `"type": "credits"` entry.
- It uses GLB/GLTF models with DRACO compression and LOD, textures, and custom shaders. Performance on ordinary consumer devices matters.
- `USE_NAMED_ASTEROID_MODELS` is a privacy control. Named asteroid models show researchers' names, and must not be turned on without confirmation.
- **Open decision:** where the "go somewhere next" step leads. `data.json` has no link or URL fields yet. Don't invent destinations, URLs or calls to action until the content exists.

## Brand Commitments

- Name: **OUniverse** ("Explore the OUniverse").
- The Open University identity must be **recognisable**. The OU brand guidelines in `C:\Work\Outreach\OU Brand` are the reference: `OU-Brand-Core-Summary_1.md` and `OU-Brand-Guidelines-Design-Reference_1.md`.
- The guidelines **inform the design but do not bind it**. Strict compliance is not required. Their rules on icons and palette-only colour, for example, don't override the 3D scene's data colours or the menu's colour-keyed icons.
- **Logo:** the owner will supply the official OU logo files from the asset bank. Never redraw the shield. Until the files arrive, leave a correctly sized slot for them.
- "Open University Involvement" is the label for the OU content on each object.

## Evidence on Hand

- Mission and body text: `public/data.json`. A colleague's version with extra descriptions is in `data_pippa.json`. `data.json` should contain the merged result, but check the merge for each entry rather than assuming it's complete.
- Science images are in `public/images/*_science.*`. Their sources and licences are in the credits entry of `data.json`, and some are still unconfirmed.
- A source content document: `OUniverse-Content.docx` (on disk, not in the repo).
- A mission guide page: `public/mission-guide.html`.
- OU brand guidelines: `C:\Work\Outreach\OU Brand`.
- **Pending:** the official OU logo files (the owner will supply them).
- **Absent:** testimonials, visitor numbers, stakeholder quotes, course links and researcher profiles. Don't make any of these up.

## Product Principles

1. **The OU's role is the point.** Every object should lead the visitor towards what the Open University did or studies there.
2. **Show the breadth.** A stakeholder should grasp how many missions and kinds of science the OU touches, not just one story in depth.
3. **Accuracy earns trust.** Real orbits, real missions and real statuses. Don't overstate the OU's role beyond what the data says.
4. **Works with or without a presenter.** A colleague presenting live should be able to steer it confidently. Someone opening the link cold should understand it with no one explaining.
5. **Wonder carries the facts.** The explorable 3D scene gives visitors a reason to stay long enough to take in the OU story.

## Accessibility & Inclusion

- Must meet **WCAG 2.2 AA**. The OU brand guidelines require at least 2.1 AA, and AAA where possible.
- It has to be usable by keyboard and by touch, and on screens from phone to large display, including a projector or large screen seen from across a room.
