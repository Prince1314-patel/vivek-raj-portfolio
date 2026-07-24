# Design

<!-- impeccable:design-schema 1 -->
<!-- World: Risograph Political Print-Room. Established on branch art-playground-handpainted, 2026-07-24. -->

## Direction contract

**THESIS.** This portfolio is a freshly pulled risograph print — a hand-cranked poster from a political art studio — not a clean white gallery grid (the category default it refuses). One career, printed in overlapping spot-color layers; where the layers overlap, they blend into a third color. Overprinting *is* the argument that Vivek blends disciplines.

**OWN-WORLD.** Warm newsprint paper (`#F2ECD9`) as substrate; saturated fluorescent riso inks own whole regions — pink `#FF3D8B`, federal blue `#2340E0`, yellow `#FFD200`, plus their multiply-overprint blends (teal, orange, purple). Sumi near-black `#181309` key line. Halftone dot shading, paper grain, crop/registration marks in every corner, color test bars, rubber stamps, slight misregistration on every headline. Poster grotesque display (Big Shoulders Display), grotesque body (Familjen Grotesk), mono for technical/registration captions (Overpass Mono). No serif, no gradient-as-decoration, no glass.

**STORY.** The visitor lands inside a hand-pulled poster with Vivek's name printed in misregistered ink layers and his portrait screened in halftone dots. They scroll through the "run" — each section a printed plate: the latest pull (current role), a printed ledger (education), stamped press index cards (experience), a zine stack (publications), an ink-swatch mixing chart (skills), three overprinting plates that literally blend art/law/politics (expertise), a video contact sheet (media), and a rubber-stamped order form (contact). They leave certain this was made by hand, by an artist.

**FIRST VIEWPORT.** Full-bleed newsprint. Giant poster-type "VIVEK RAJ" bleeding off the left edge with pink+blue offset echoes; a halftone duotone portrait screened top-right; crop marks in all four corners; a vertical CMYK-style color test strip down one edge; a stamped role line ("ARTIST · POLICY · JOURNALISM"). Primary action ("Commission / Contact") stamped as a rubber stamp, and the disciplines legend sits mid-viewport.

**FORM.** Risograph political print-room — grounded candidate #5 of 7 (ordered by resonance), assigned by concept-seed key `27351471` (scope direction, mode experience). Chosen over my own #1 (gouache monograph) precisely because print fuses art + politics + journalism in one native medium.

## Durable system rules

- **Color commits at page scale.** Ink fields own whole sections (a pink section, a blue section), not accents on neutral. At least three sections are drenched saturated fields. Paper shows through as texture, never as the dominant "safe" ground.
- **Overprint is the signature.** Overlapping ink uses `mix-blend-mode: multiply`; overlaps must resolve to the real blended color, never a fake tint. This is the one authored interaction (Expertise plates converge on scroll/hover).
- **Every headline misregisters.** Display type carries offset color echoes (pink/blue), 2–4px offset. Never a clean drop shadow.
- **Registration furniture is grammar, not decoration.** Crop marks, color bars, and mono job-slugs frame sections the way a real print does. Mono is reserved for these technical labels, never for body prose.
- **Motion = the print pull.** Entrances slide color layers from offset into registration (settle), authored once via `Reveal`. Bounded; content visible by default; respects `prefers-reduced-motion`.
- **Contrast floor.** Body text is sumi `#181309` on light/paper/yellow fields, paper `#F2ECD9` on blue/purple fields. Never paper on yellow, never sumi on blue.
- **Type roles.** Big Shoulders Display = posters/headlines only. Familjen Grotesk = body/UI. Overpass Mono = registration marks, job slugs, captions, measurements.

## Honesty constraint (from PRODUCT.md)

No fabricated art awards, exhibitions, clients, or literal "best in the world" claims in copy. The artistry is proven by the craft of the print itself. Real career content (roles, publications, education, contact) is preserved verbatim.
