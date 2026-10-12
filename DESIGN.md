---
name: OUniverse
description: The Open University's space research on an accurate, explorable 3D Solar System, dressed in small, precise OU plates.
colors:
  core-blue: "#060645"
  plate: "rgba(6, 6, 69, 0.9)"
  plate-solid: "#05053E"
  space: "#000000"
  line: "rgba(166, 181, 248, 0.2)"
  mid-blue: "#1C46C0"
  lilac: "#6A68C0"
  light-blue: "#66EEFA"
  accent-wash: "rgba(102, 238, 250, 0.12)"
  accent-current: "rgba(102, 238, 250, 0.22)"
  green: "#7DFFD3"
  yellow: "#FFF488"
  pink: "#FFB4FF"
  status-neutral: "rgba(255, 255, 255, 0.5)"
  ink: "#FFFFFF"
  ink-muted: "rgba(255, 255, 255, 0.78)"
  ink-faint: "rgba(255, 255, 255, 0.6)"
typography:
  display-splash:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "clamp(2.5rem, min(6.5vw, 10.5vh), 5.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  lede-splash:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body-splash:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
  title-panel:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lockup-name:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  heading-section:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.6
  heading-menu:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  body:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "0.90625rem"
    fontWeight: 400
    lineHeight: 1.6
  row:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "0.84375rem"
    fontWeight: 400
    lineHeight: 1.35
  data:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "0.78125rem"
    fontWeight: 500
    fontFeature: "tnum"
  label:
    fontFamily: "Poppins, Arial, sans-serif"
    fontSize: "0.71875rem"
    fontWeight: 500
    lineHeight: 1.3
rounded:
  shield: "2px"
  field: "8px"
  plate: "10px"
  pill: "999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "10px"
  space-4: "12px"
  space-5: "16px"
  space-6: "20px"
  section: "22px"
  panel: "28px"
components:
  plate-controls:
    backgroundColor: "{colors.plate}"
    rounded: "2px 10px 10px 10px"
    padding: "{spacing.space-4}"
  plate-menu:
    backgroundColor: "{colors.plate-solid}"
    rounded: "2px 10px 10px 10px"
    width: "256px"
  details-panel:
    backgroundColor: "{colors.plate-solid}"
    textColor: "{colors.ink}"
    padding: "{spacing.panel}"
    width: "350px"
  menu-row:
    textColor: "{colors.ink}"
    typography: "{typography.row}"
    padding: "9px 16px"
    height: "36px"
  menu-row-mission:
    textColor: "{colors.ink-muted}"
  menu-row-hover:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.ink}"
  menu-row-current:
    backgroundColor: "{colors.accent-current}"
    textColor: "{colors.ink}"
  search-field:
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "7px 10px 7px 34px"
    height: "36px"
  button-primary:
    backgroundColor: "{colors.light-blue}"
    textColor: "{colors.core-blue}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.core-blue}"
  button-ghost:
    textColor: "{colors.ink}"
    rounded: "18px"
    padding: "8px 16px"
    height: "36px"
  button-ghost-hover:
    backgroundColor: "{colors.accent-wash}"
  reticle-tab:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "3px 8px"
  status-dot-operating:
    backgroundColor: "{colors.green}"
    size: "7px"
  status-dot-planned:
    backgroundColor: "{colors.yellow}"
    size: "7px"
  status-dot-ended:
    backgroundColor: "{colors.pink}"
    size: "7px"
---

# Design System: OUniverse

## Overview

**Creative North Star: "The Instrument Plate"**

The Solar System is the specimen and the chrome is a small, precise OU plate laid over it. OUniverse keeps the compact, clean layout the app already had and dresses it in Open University identity: Core blue plates edged with Core blue tint hairlines, Poppins, one OU light-blue accent, OU gradients kept inside small forms and drawn lines, and the shield's squared top-left corner on every plate. The identity changes colour, type and form. It never changes size.

Density is deliberately tight: a 256px Explore menu of 36px rows, a 350px details panel, a 12px controls plate, and a full-bleed scene behind them all. The one large moment is the splash, where the title runs up to 92px and the portal-O world and its orbit draw while the scene loads. After that, the chrome recedes and the scene leads.

The system rejects two opposite pulls, both confirmed by the user: the larger, rounder "OU website" look (big type, fat padding, bubbly cards, brochure layout) and sci-fi HUD residue (neon glow, frosted glass, monospace costume, coloured side stripes, bounce). It also refuses anything that buries the OU's role: in the details panel, "Open University Involvement" comes straight after the name and data line.

**Key Characteristics:**
- Compact sizes are fixed: 256px menu, 36px rows at 13.5px, 350px details panel.
- Core blue plates, never black and never blurred.
- One accent: OU light blue.
- OU gradients only in small forms and lines: the portal-O mark, the reticle's exit flash, the splash.
- The shield's squared 2px top-left corner on every plate.
- Poppins throughout, sentence case, tabular numerals for data.
- The logo signs off bottom-left; the header carries the name and the simulated UTC clock.

## Colors

OU brand pairing 2: a Core blue ground, one light-blue accent, white type, and the OU green, yellow and pink held back for status.

### Primary
- **OU Light Blue** (light-blue): the one accent. It marks the "Open University Involvement" heading, the primary button, focus rings, the search caret, links in the credits and the idle splash orbit track. Its washes (accent-wash for hover, accent-current for the current menu row) are the only tinted fills in the chrome.
- **OU Core Blue** (core-blue): the splash ground, and the text colour on any light-blue fill. The material every plate is made of.

### Secondary
- **OU Green** (green): the operating status dot, and the start of the signal gradient (green to light blue).
- **OU Yellow** (yellow): the planned status dot.
- **OU Pink** (pink): the ended status dot (Complete, Landed, Crashed, Lost, Decommissioned). Chosen over orange so an ended mission never reads as an alarm.

### Tertiary
- **OU Mid Blue** (mid-blue) and **Lilac** (lilac): the two ends of the splash world's gradient. Neither is a UI colour on its own.

### Neutral
- **Core Blue Plate** (plate): Core blue at 90% for plates over the scene (controls, reticle tabs).
- **Solid Plate** (plate-solid): the same plate made opaque, for the Explore menu, its sticky group heads, the details panel and the credits dialog, where content scrolls under or over it.
- **Core Blue Hairline** (line): plate edges, group separators and field borders. Tinted from Core blue (#A6B5F8), so lines read as OU blue, not grey.
- **Ink** (ink): names, headings and the OU involvement text.
- **Ink Muted** (ink-muted): descriptions, mission rows at rest, data lines, status words, the clock.
- **Ink Faint** (ink-faint): counts, placeholders, hints and the credits link.
- **Space** (space): the 3D scene's ground only. Chrome never uses black.
- **Status Neutral** (status-neutral): the dot for a status word the data uses but the vocabulary doesn't classify.

### Named Rules
**The Core Blue Plate Rule.** Every chrome surface is Core blue (plate or plate-solid) edged with a 1px line hairline. Never black, never grey, never blurred.

**The One Accent Rule.** Light blue marks only what matters: the OU heading, the current row, focus and the primary action. Nothing else is light blue.

**The Small Gradient Rule.** OU gradients live only in small forms and drawn lines: the 14px portal-O mark beside "Open University Involvement" and the reticle's brief exit flash (green to light blue), and the splash (mid blue to lilac on the world, green to light blue on the orbit). Never on text, plates or buttons.

**The Dot-and-Word Rule.** Status is a coloured dot followed by the data's own status word: green for operating, yellow for planned, pink for ended. The dot never appears without its word. The menu shows only planned and ended; operating is the default and stays quiet. The details panel shows every status.

## Typography

**Display Font:** Poppins (with Arial, sans-serif)
**Body Font:** Poppins (with Arial, sans-serif)

**Character:** One geometric sans, the OU brand face, carries everything from the 92px splash title to the 11.5px status word. Hierarchy comes from weight (700 splash, 600 names and headings, 500 data, 400 reading) and from colour steps, not from a second family.

### Hierarchy
- **Display splash** (700, fluid 40px to 92px, line-height 1, -0.025em): "Explore the OUniverse" on the splash only. The one large moment in the system.
- **Lede splash** (400, fluid 17px to 21px, 1.5): the splash's opening sentence.
- **Body splash** (400, fluid 16px to 18px, 1.55): the splash's facts and thank-you line.
- **Title panel** (600, 24px, 1.2, -0.01em): the object's name at the head of the details panel, and the credits dialog's title.
- **Lockup name** (600, 17px, 1.3, -0.01em): "Explore the OUniverse" in the header, top-left.
- **Heading section** (600, 14px, 1.6): "Open University Involvement" in light blue, beside the portal-O mark.
- **Heading menu** (600, 14px): the Explore menu title.
- **Body** (400, 14.5px, 1.6): OU involvement text in ink and descriptions in ink-muted. The same size for both; the OU text leads by position and colour.
- **Row** (400, 13.5px, 1.35): Explore menu rows and the search field. The current row steps up to 600.
- **Data** (500, 12.5px, tabular numerals): the simulated clock ("28 Sep 2026, 17:07:19 UTC"), the details panel's data line ("Mission · Complete · Launched 2004") and counts.
- **Label** (500, 11.5px, 1.3): status words in the menu and the reticle name tab.

### Named Rules
**The Poppins Only Rule.** Poppins at 400 to 700, with Arial as the only fallback. No monospace, no second display face.

**The Tabular Data Rule.** Anything that counts or ticks (the clock, launch years, group counts, loading status) uses tabular numerals, so it never jitters.

## Layout

The scene is full-bleed and the chrome floats over it on a 20px inset from the viewport edge. The header ("Explore the OUniverse" plus the "Simulated time · … UTC" line) sits top-left. The Explore plate (256px wide, capped at 68vh) sits below it at 84px from the top. Its head, search field and "Solar System · reset view" row stay fixed while only the list scrolls, and each group's heading row sticks while its contents scroll under it. The controls plate (the scale switch, Cinematic Mode and credits) sits bottom-right. The white OU logo sits bottom-left at 40px tall (32px at 720px and below).

Selecting a body opens the 350px details panel from the right edge (28px padding, 22px between sections), and the controls plate slides 380px left to stay clear of it. The panel sits beside the scene from 900px wide; below that it covers it.

The splash is a two-column grid: copy up to 40rem plus padding on the left, the orbit drawing centred in the rest. At 720px and below it becomes one column with the drawing above the copy and the logo joining the flow. On laptop-height screens (up to 900px tall, and again below 720px for short browser windows) the vertical rhythm tightens so everything fits without scrolling. Under the facts, a thank-you ("It takes a planet to explore the Solar System. Each mission is the shared work of thousands…") recognises the partners behind every mission. The how-to-explore hints were removed from the splash (2026-10-01); controls guidance is planned elsewhere.

Spacing steps are 4, 8, 10, 12, 16 and 20px, with 22px between details-panel sections and 28px of panel padding. Menu rows are 9px by 16px, indented 16px per tree depth.

### Named Rules
**The Compact Size Rule.** OU identity changes colour, type and form, never size. The menu stays 256px, rows stay 36px at 13.5px, and the details panel stays 350px. If a change makes the chrome bigger, undo it.

**The Sign-Off Rule.** The OU logo appears bottom-left only: the sign-off on the splash, and 20px from the bottom and left edges in the app. The header carries the product name and the simulated UTC clock, never a logo. Only one logo shows at a time, and it is never redrawn or recoloured.

**Phones (up to 720px wide)** rearrange the same parts round the thumb rather than shrinking them. The controls become a dock at the bottom right, level with the logo: four 44px round buttons, Explore (a search icon, the main way in), Cinematic Mode (film icon, a stop square while it runs), the scale switch (a ruler, edged and drawn in light blue while True scale is on) and How to explore (a question mark). Explore was a light-blue pill until the scale switch joined the dock (2026-10-11): four round buttons are what fits beside the logo on a 360px phone. The Explore menu is a sheet that rises from the bottom over a 55% black scrim, 78% of the screen tall, with a grip, a close button and Credits at its foot; picking anything closes it, and a drag down or a tap on the scrim does too. The details are a sheet resting at 46% of the height, the selection framed in the band between the header and the sheet; its grip opens it to 90% (tap or drag), as does scrolling its text, and a drag down closes it. It is always full height and only slides (a transform), never resizes. In Cinematic Mode the details shrink to a caption card (name and data line) above the dock, which stays to stop the tour. Type steps up for the hand: rows 15px at 44px, the search field 16px (iOS doesn't zoom), body 15px. Sheets keep the shield corner (2px top-left, 10px top-right). **Full screen** is offered only on touch screens whose browser allows it (Android, not iPhone; desktops have F11): a quiet outlined "Full screen" pill beside "Start exploring" on the splash (same row on phones), which starts the way in full screen, and a Full screen / Exit full screen switch at the foot of the Explore sheet for after a back swipe has left it. The page does not draw under the system bars (no viewport-fit=cover), so the dock never sits behind Android's navigation bar. Phones on their side and tablets keep the larger-screen layout; on a screen under 500px tall the menu runs down to the logo and the splash logo joins the flow under the copy.

## Elevation & Depth

The chrome is flat. Plates separate from the scene by their Core blue fill and a 1px hairline, and groups inside a plate separate by a hairline and space, not by nested boxes or shadows. Stuck group heads carry a 1px hairline edge (drawn as `box-shadow: 0 1px 0` in the line colour) so rows scrolling under them stay clean. The one real shadow is on the credits dialog, a modal over a 60% black backdrop.

### Shadow Vocabulary
- **Modal lift** (`box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6)`): the credits dialog only.

### Named Rules
**The Flat Plate Rule.** Plates carry no shadow, blur or glow. Depth comes from the Core blue fill against the scene and from the hairline edge.

## Shapes

Every plate has the OU shield's squared top-left corner (2px) and 10px on its other three corners: the Explore menu, the controls plate and the credits dialog. Fields and science images round at 8px. Buttons are pills. Status dots are circles (6px in the menu, 7px in the details panel). Line icons are Tabler outline on a 24px grid with a 1.75 stroke, drawn in the text colour; the Sun, planet and asteroid icons take their orbit colour.

The OU brand forms appear small and precise. The portal O (a square with a tilted-ellipse cut-out) is the 14px OU mark beside "Open University Involvement" and is used nowhere else in the app. The splash is the one place forms are large: its world disc and orbit are a portal O and a structural circle.

### Named Rules
**The Shield Corner Rule.** Plates are rounded 2px at the top-left and 10px elsewhere. That squared corner is the OU signature; don't round it to match the others.

## Components

### Buttons
Quiet and precise; the only large button is the one that starts the experience.
- **Shape:** full pill (999px), or an 18px radius on the 36px Cinematic Mode button.
- **Primary** ("Start exploring", "Try again"): light-blue fill, Core blue text at 700 and 17px, 52px tall with 28px side padding. Shown only on the splash.
- **First-run coach** ("Take the controls"): one plate, bottom centre (full width above the controls on narrow screens, with the menu stopping short of it). Three steps (turn, zoom, pick a mission), each with a light-blue line icon that turns into a tick when the visitor actually does it; picking something completes it and it fades. With the details panel open it sits just above the shifted controls plate, right-aligned to it (on narrow screens, where the panel covers the scene, it waits for the panel to close). Shown once per browser after the way in (localStorage), stepped aside for Cinematic Mode, and brought back by "How to explore" beside Credits. Wording follows the input: mouse, touch or keyboard.
- **Hover / Focus:** the primary turns white on hover and scales to 0.97 when pressed. Every button takes a 2px light-blue focus ring offset 2px (white on the splash).
- **Disabled:** while loading, the primary is a 12% white fill with 75% white text and a progress cursor.
- **Ghost** (Cinematic Mode): transparent with a 45% white 1px edge, 13px at 500. It takes the accent wash on hover; when active (pressed) it keeps the wash and its edge turns light blue.
- **Scale switch** ("Compressed" / "True scale", top of the controls plate): one pill with a 1px line hairline holding two 12.5px labels at 500. The chosen half takes the accent-current wash in ink; the other rests in muted ink and turns ink on hover. Changing it announces what the mode means. On phones it is the dock's ruler button.
- **Text link** (Credits): 12px faint ink, underlined at 25%, turning white on hover.
- **Icon close** (details panel, credits): a 44px circular hit area, muted ink, a 10% white wash on hover.

### Cards / Containers
- **Corner Style:** the shield corner (2px top-left, 10px elsewhere).
- **Background:** plate for the controls plate and reticle tabs; plate-solid for the Explore menu, the details panel and the credits dialog.
- **Shadow Strategy:** flat (see Elevation & Depth).
- **Border:** a 1px line hairline; the details panel has only a left edge.
- **Internal Padding:** 12px on the controls plate, 28px in the details panel and credits.

### Inputs / Fields
- **Style:** the search field is 36px tall, with an 8% Core blue tint fill, a 1px line hairline and an 8px radius. A 16px faint search icon sits inset at 10px. Text is 13.5px ink with a light-blue caret; the placeholder is faint ink.
- **Focus:** the hairline gives way to a 2px light-blue ring, offset 1px. Hover lifts the hairline to 40%.

### Navigation
- **Explore menu:** a tree of 36px rows grouped by parent body, every top-level row (group or not) divided by a hairline. Each row is a 16px line icon at 60% opacity, then the name at 13.5px. Missions rest in muted ink and bodies in ink. Hover adds the accent wash and brings the icon to full opacity. The current row carries accent-current, weight 600 and a full-opacity icon. Focus is an inset 2px light-blue ring.
- **Group heads:** a sticky row whose toggle is a pill (22px, faint lilac border and wash; its keyboard focus ring is drawn round the pill) holding a tabular count in muted ink and a light-blue chevron (rotated -90 degrees when closed); hover and open take the accent border and wash. It is drawn as a control because visitors missed the old faint count. Choosing a planet also opens its group, so its missions appear beneath it; a group opened that way folds again when the visitor moves elsewhere, unless they opened it themselves. Opening a group unfolds it from under its heading (280 ms, ease-out) while its rows drop 6px into place one after another (22 ms apart, the first eight only); closing folds it back up faster (200 ms). A second click mid-fold reverses from where it is. One group is open at a time: opening one folds any other open group (a search opens as many as its results need, and clearing it puts back the one that was open). Searching opens and closes groups instantly. Reduced motion keeps only a 150 ms fade-in. Holder groups (the asteroid belt, comets) fold from their whole heading row.
- **Status in rows:** planned and ended rows carry a 6px dot and the data's own status word at 11.5px in muted ink.

### Details panel
The OU's role leads. Top to bottom: the name (title-panel), the data line (type, status dot and word, launch year, joined by middle dots), "Open University Involvement" in light blue beside the portal-O mark with its text in ink, the science image (8px radius), then the description in muted ink. The panel slides in from the right on the standard ease-out over 0.45s.

### Reticles (signature)
An instrument callout drawn over the scene. Hovering a body draws a thin ring (1.5px, 85% white) 6px outside its projected edge and a hairline leader (1px, 55% white) rising at 45 degrees to a name tab: a small plate with label text, flipping left when it would leave the scene. The ring glides towards the body rather than jumping. Choosing the hovered object acknowledges it once and then clears the view for the approach: the ring flashes to the OU green-to-light-blue gradient and swells to 1.9x as it fades, the leader retracts, and the tab slides off (0.52s). No reticle stays on the selected object. Under reduced motion it simply disappears.

### Markers
In True scale almost everything is smaller than a pixel, so each object drawn under 3px gets a 5px dot in its orbit colour (the Sun in its own), edged in Core blue, and its name at label size in muted ink beside it, with a Core blue halo in place of a plate. Names go on in order of importance (Sun, planets, moons and small bodies, craft) and a name that would overlap one already placed is left off; a dot on a more important one folds into it; markers behind anything drawn are hidden. The one under the pointer is named in ink. They are the main way to read the Solar System in True scale, with the orbit lines.

### Splash (signature)
Also the loader. A Core blue ground, the display title, a lede, the facts and the thank-you line in white, then the primary button with a live status beside it. The orbit draws itself (green to light blue) as the scene loads around a mid-blue-to-lilac world; once ready a white craft circles it, passing behind the world on the far side. It leaves by flying through the world into the scene (one drawing, scaled by a compositor transform). On phones the copy runs past the fold, so the start button rides the bottom edge over a short fade of the ground until the copy scrolls up to meet it. Under reduced motion the craft is hidden and transitions are near-instant. The browser-tab icon is the same world and orbit on the Core blue ground.

## Do's and Don'ts

### Do:
- **Do** keep the compact sizes exactly: 256px menu, 36px rows at 13.5px, 350px details panel, 12px controls padding.
- **Do** make every plate Core blue with a 1px Core blue tint hairline and the shield corner (2px top-left, 10px elsewhere).
- **Do** use light blue as the one accent, only for the OU heading, current row, focus, primary action.
- **Do** show status as a coloured dot plus the data's own word: green for operating, yellow for planned, pink for ended. Show only planned and ended in the menu.
- **Do** keep "Open University Involvement" directly after the name and data line in the details panel, with the portal-O mark beside it.
- **Do** keep OU gradients to the portal-O mark, the reticle's exit flash and the splash.
- **Do** put the OU logo bottom-left only, and keep the header to the product name and the simulated UTC clock.
- **Do** set every number that counts or ticks in tabular numerals.

### Don't:
- **Don't** make the chrome larger or rounder: no big type, fat padding, bubbly cards or brochure layout in the manner of the OU website.
- **Don't** add bloat: extra boxes, title-block rules, keys or chrome the app doesn't need.
- **Don't** bring back sci-fi HUD residue: neon glow, frosted glass, monospace, coloured side stripes or bounce.
- **Don't** bury the OU role below the image or the description.
- **Don't** put gradients on text, plates or buttons.
- **Don't** show a status dot without its word, or invent a status word the data doesn't use.
- **Don't** redraw, recolour or duplicate the OU logo, or place it in the header.
