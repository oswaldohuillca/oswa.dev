---
name: Oswa dev
description: Portfolio of a full stack web developer who builds his own tools, set in cobalt, hairlines and two typefaces.
colors:
  brand-strong: "oklch(0.47 0.21 259)"
  brand: "oklch(0.53 0.21 259)"
  brand-dark: "oklch(0.72 0.16 256)"
  brand-strong-dark: "oklch(0.80 0.13 256)"
  portrait-ground: "#014bcd"
  background: "oklch(0.994 0.003 255)"
  background-dark: "#121212"
  foreground: "oklch(0.17 0.015 260)"
  foreground-dark: "oklch(0.985 0 0)"
  body-ink: "oklch(0.205 0 0)"
  on-brand: "#ffffff"
  muted-foreground: "oklch(0.5 0 0)"
  muted-foreground-dark: "oklch(0.708 0 0)"
  muted: "oklch(0.97 0 0)"
  muted-dark: "oklch(0.269 0 0)"
  border: "oklch(0.922 0 0)"
  border-dark: "oklch(0.269 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  destructive-dark: "oklch(0.637 0.237 25.331)"
typography:
  display:
    fontFamily: "Space Grotesk Variable, DM Sans Variable, sans-serif"
    fontSize: "clamp(2.5rem, 11vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk Variable, DM Sans Variable, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk Variable, DM Sans Variable, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  item-name:
    fontFamily: "Space Grotesk Variable, DM Sans Variable, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.556
  lead:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.556
  body:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.429
  caption:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.333
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.429
rounded:
  md: "8px"
  lg: "10px"
  xl: "14px"
  2xl: "16px"
  full: "9999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "40px"
  gutter-xl: "64px"
  section-y-sm: "56px"
  section-y: "80px"
  rail-gap: "64px"
  row-y: "32px"
  row-y-lg: "40px"
  stack: "24px"
  stack-sm: "20px"
  action-gap: "8px"
components:
  pill-primary:
    backgroundColor: "{colors.brand-strong}"
    textColor: "{colors.on-brand}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "44px"
  pill-primary-hover:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
  pill-primary-dark:
    backgroundColor: "{colors.brand-dark}"
    textColor: "{colors.background-dark}"
  pill-primary-dark-hover:
    backgroundColor: "{colors.brand-strong-dark}"
    textColor: "{colors.background-dark}"
  pill-default:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "44px"
  pill-default-hover:
    textColor: "{colors.brand-strong}"
  pill-default-dark:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.foreground-dark}"
  pill-default-dark-hover:
    textColor: "{colors.brand-dark}"
  pill-icon:
    rounded: "{rounded.full}"
    size: "44px"
  badge:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  install-chip:
    textColor: "{colors.foreground}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "0 4px 0 12px"
  nav-link:
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 8px"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.brand-strong}"
  icon-button:
    rounded: "{rounded.lg}"
    size: "44px"
  code-block:
    backgroundColor: "{colors.muted}"
    typography: "{typography.code}"
    rounded: "{rounded.xl}"
    padding: "16px 20px"
  project-tile:
    rounded: "{rounded.2xl}"
---

# Design System: Oswa dev

## Overview

**Creative North Star: "The Signed Index"**

A plain, exact catalogue of real work with one person's signature on it. Near-white paper or near-black ground, type doing the structuring, hairlines doing the dividing, and a single electric cobalt that marks whatever can be acted on. Density is relaxed between sections and tight inside them: long pages made of ruled rows rather than cards.

The system stays out of the way of the material it presents: a portrait, screenshots of shipped sites, install commands. Those carry their own colour; the interface does not compete. Depth is almost absent, and motion is limited to colour changes on state and one quiet entrance. Both themes are first-class, and every cobalt decision is made twice because the accent changes lightness between them.

**Key Characteristics:**
- One chromatic accent, swapped in lightness per theme
- Space Grotesk names things; DM Sans explains them
- Hairline rules instead of cards and shadows
- Pill actions at a 44px target
- Typographic rows wherever no real image exists

## Colors

A neutral paper-and-ink base with a single saturated cobalt at hue 256 to 259.

### Primary
- **Electric Cobalt, deep** (`brand-strong`, light theme): the accent in text on paper: links, active names, company names, list markers, and the primary pill fill. It also colours text selection.
- **Electric Cobalt** (`brand`, light theme): the hover step of the primary pill, the focus outline, and hover borders and rings.
- **Lifted Cobalt** (`brand-dark`, dark theme): accent text in dark mode, the primary pill fill, and the focus outline.
- **Pale Cobalt** (`brand-strong-dark`, dark theme): only the dark primary pill's hover step and text selection. Never accent text.
- **Portrait Ground** (`portrait-ground`): the flat studio backdrop baked into the hero portrait, identical in both themes. Sampled from the raster at oklch(0.468 0.211 261.7), which is about 0.01 in OKLab from `brand-strong`, so it reads as the same cobalt.

### Neutral
- **Cool Paper** (`background`): the light page ground, with the faintest blue cast.
- **Off Black** (`background-dark`): the dark page ground. It also sets the text on the dark primary pill.
- **Body Ink** (`body-ink`, CSS `--primary`): inherited body and heading text in the light theme. Neutral grey-black; this is not an accent, despite the variable name.
- **Blue Ink** (`foreground`): text set explicitly on controls and code in the light theme.
- **Near White** (`foreground-dark`): all default text in the dark theme.
- **Quiet Grey** (`muted-foreground`, `muted-foreground-dark`): supporting copy, dates, taglines, badge text.
- **Slab** (`muted`, `muted-dark`): code surfaces. Install chips use it at 40%, inline code at 50%, table headers at 40%. Dark code blocks mix it 45% into the page ground so Shiki's comment colour stays legible.
- **Hairline** (`border`, `border-dark`): every rule and control border.

### Status
- **Signal Red** (`destructive`, `destructive-dark`): only the failed state of the copy button.

### Named Rules
**The One Cobalt Rule.** Cobalt is the only hue the interface itself uses. Screenshots, the portrait and syntax highlighting bring their own colour; the failed copy state is the single exception inside the chrome.

**The Cobalt Swap Rule.** Accent text uses `brand-strong` on light and `brand-dark` on dark, always as a pair. `brand-strong-dark` is too pale to be the dark accent and is reserved for the primary pill's hover.

**The Baked Ground Rule.** The portrait's cobalt is in the pixels, so it does not follow the theme. A replacement portrait must keep this ground, and no surface should try to match it with a theme variable, because `brand-strong` changes in dark mode and the raster does not.

## Typography

**Display Font:** Space Grotesk Variable (with DM Sans Variable, then sans-serif)
**Body Font:** DM Sans Variable (with sans-serif)
**Label/Mono Font:** system monospace stack, only for code

**Character:** A geometric grotesque with some quirk for names and statements, over a soft humanist-leaning sans for reading. Both ship as self-hosted variable fonts, and Space Grotesk is preloaded.

### Hierarchy
- **Display** (700, clamp(2.5rem, 11vw, 4.5rem), rising to clamp(3.5rem, 5.9vw, 5.25rem) from 1024px, line-height 1, -0.02em): the home headline only, capped at 14ch.
- **Headline** (700, 2.25rem to 3rem from 768px, -0.02em): section headings and project page titles, the latter in cobalt. The footer's closing question goes larger, 2.25rem to 3.75rem.
- **Title** (400, 1.5rem to 1.875rem from 768px, -0.02em): tool names in the index, stepped up to 1.875rem to 2.25rem for the featured row. Experience titles are the bold variant at 1.125rem to 1.25rem.
- **Item Name** (500, 1.125rem to 1.25rem): tool names in the hero strip and project tile names. These are spans, set in the display face by hand.
- **Lead** (400, 1.125rem, line-height 1.556): the hero bio at 52ch and the about text at 65ch.
- **Body** (400, 1rem, line-height 1.5): supporting copy at 58ch to 68ch.
- **Label** (500, 0.875rem): pill text. Navigation is the same size at 600; dates and metadata at 400 use tabular numerals.
- **Caption** (500, 0.75rem, tabular numerals): badges only.

### Named Rules
**The Two Voices Rule.** If it names something, it is Space Grotesk. If it explains something, it is DM Sans. Non-heading names must set the display face explicitly, because only h1 to h3 receive it automatically.

**The Sentence Case Rule.** No text in the system is uppercase or positively tracked. Hierarchy comes from size, weight and face.

## Layout

A 1440px container with side gutters of 20px, 40px from 768px, and 64px from 1280px. Sections repeat one shape: from 1024px, a one-third sticky rail holding the heading and intro, a 64px gap, and two-thirds content; below that, a single column with a 40px gap. Sections breathe 56px top and bottom, 80px from 768px.

Inside content, rows are 32px to 40px apart vertically and separated by hairlines. Project tiles run two columns from 768px with a 20px gap, and every second tile drops 64px to break the row. Experience uses an 11rem date column from 768px. Anchors clear the fixed header with 6rem of scroll padding, and the header stops being fixed when the viewport is under 500px tall. Reading text in prose is held at 68ch while code and images use the full width.

The home hero's composition is specific to that surface and lives in `.impeccable/surfaces/src-pages-index-astro.md`.

**The Sticky Rail Rule.** A home section is a heading rail plus content, not a centred stack. New sections take this shape unless they have a stated reason not to.

## Elevation & Depth

Flat by default, separated by hairlines and tone rather than lift. Two things sit above that: pills carry a barely visible small shadow, and the fixed header is a 90% opaque ground with a background blur so content passes under it. Project tiles use a ring rather than a shadow, thickening and turning cobalt on hover.

### Shadow Vocabulary
- **Pill contact** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`): on every pill action, resting and hover. Nothing else has a shadow.

### Named Rules
**The Hairline Over Shadow Rule.** To separate things, draw a 1px rule. Surfaces, rows and images never gain a shadow, and hover answers with colour or a ring rather than lift.

## Shapes

Soft geometry whose radius grows with the size of the object, with the pill as the separate shape for actions and tags. Gently rounded small targets (8px) for nav links, the copy button and inline code; slightly more (10px) for icon buttons and install chips; 14px for code blocks; 16px for project tiles and prose images. The portrait alone is square-cut and runs to the screen edge.

**The Radius Ladder Rule.** Choose the radius by object size from the existing steps. Only pill actions and badges are fully round.

## Components

### Buttons
Confident but quiet: the pill is the only filled shape on the page, and it is rare.
- **Shape:** fully round (9999px), 44px tall with 16px side padding; the icon-only form is a 44px circle. All are links, built on the shared Link component.
- **Primary:** cobalt fill with white text on light, lifted cobalt with off-black text on dark.
- **Default:** page-ground fill, hairline border, default text.
- **Hover / Focus:** primary steps to the neighbouring cobalt. Default keeps its fill while border and text turn cobalt. Focus is a 2px cobalt outline with a 2px offset, shared by every link and button. Colour transitions only.

**The One Primary Rule.** An action group holds at most one primary pill, and most groups hold none. The footer, tool rows and project pages run entirely on default pills.

**The 44px Target Rule.** Pills, nav links, icon buttons, the copy button and the footer email are at least 44px tall. Company links reach it through padding; links inside running text and the wordmark are not held to it.

### Chips
- **Style:** fully round, hairline border, no fill, quiet grey caption text, 4px by 10px padding, 4px gaps in a wrapping row.
- **State:** static. Badges are technology tags, never filters or links.

### Cards / Containers
There are no cards. Grouping comes from the section rail and hairline-topped rows; the first row in a stack drops its rule because the section already provides the break.

### Project Tile
The only image-led container. A square screenshot cropped from the top in a 16px rounded frame with a 1px hairline ring, then the name and a one-line description below, outside the frame. On hover the ring becomes 2px cobalt, the name turns cobalt, and the image scales to 1.02 over 500ms when motion is allowed.

### Navigation
- **Style:** a fixed full-width bar with a hairline bottom edge and the blurred ground, wordmark at 1.5rem bold in the display face on the left, links and icon buttons on the right at 0.875rem semibold.
- **States:** text turns cobalt on hover. The theme toggle sits in quiet grey at rest and exposes its state with `aria-pressed`.
- **Mobile:** below 768px the section links hide, leaving the wordmark, Contacto, GitHub and the theme toggle.

### Install Chip
The signature element for tools. A single line with a hairline border and a 40% slab fill at 10px radius: a horizontally scrolling monospace command on the left, the copy button flush right. The button swaps icon in place for 1.6s, cobalt check on success and red warning on failure, and announces the result through a live region without ever being disabled.

### Index Row
Tool entries are typographic: name, registry or status at the far end of a baseline-aligned line, description at 58ch, optional install chip, badges, then default pills. Rows use the same structure across every tool, and the featured one differs only by a larger name.

### Timeline Row
An 11rem date column in tabular numerals, then a bold title, the company in cobalt at 0.875rem semibold, and description at 62ch. It stacks below 768px.

### Prose
Project writeups: cobalt links with a 40% cobalt underline that goes solid on hover, cobalt bullets with quiet grey numerals, a 2px cobalt-tinted quote edge, tables that scroll inside their own box, and code blocks on the slab with a hairline border and no window chrome.

### Portrait Entrance
The portrait rises 1.25rem and fades in over 0.8s with `cubic-bezier(0.16, 1, 0.3, 1)`, gated on the reduced-motion preference. It is the only entrance on the page; everything else is a state transition.

## Do's and Don'ts

### Do:
- **Do** pair accent text as `brand-strong` on light and `brand-dark` on dark, every time.
- **Do** separate rows and sections with a 1px hairline in `border` / `border-dark`.
- **Do** build pills, nav links and icon buttons at 44px, with the shared 2px cobalt focus outline at 2px offset.
- **Do** set names that are not headings in the display face explicitly.
- **Do** build new home sections on the sticky rail and the 1fr to 2fr split from 1024px.
- **Do** keep a new portrait on the same flat `portrait-ground` backdrop.
- **Do** use a typographic row when a tool has no real capture, and a real capture when it does.

### Don't:
- **Don't** introduce a second interface hue; red is reserved for the failed copy state, and cobalt covers everything else.
- **Don't** use `brand-strong-dark` for dark accent text, or match the portrait with a theme variable.
- **Don't** add shadows to surfaces, rows or images, or use lift as a hover response.
- **Don't** wrap content in cards when a hairline row will do.
- **Don't** put more than one primary pill in an action group.
- **Don't** draw window chrome on code: no fake title bars or traffic lights.
- **Don't** stand in a drawn mockup or placeholder where a real screenshot does not exist.
- **Don't** set labels in uppercase or tracked caps, and don't add a small label above a heading.
- **Don't** use a typeface beyond Space Grotesk, DM Sans and the code stack.
