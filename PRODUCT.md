# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The site is being rebranded to win over visitors as an **artist-designer's** audience first: people who should leave convinced of Vivek Raj's command of color, art, and design — with his standing in politics and journalism registering as a strong second note. In practice: prospective creative collaborators, curators/organizers, and anyone evaluating his sensibility, plus the policy/political/press contacts his real record still speaks to.

_(Reframed by the user on 2026-07-24 as a deliberate redesign/rebrand. The pre-existing site targeted policy/think-tank and academic audiences; that framing is now the anti-reference, not the target.)_

## Product Purpose

A single-page personal portfolio for Vivek Raj. Its job is to make a visitor feel they have stepped inside a **hand-painted artwork** and come away seeing Vivek as an artist-designer with exceptional mastery of color and composition — who also works in politics and journalism. Success = the dominant impression is "this person is an artist," and the page itself reads as hand-made, not templated.

## Positioning

Leads with artistry — mastery of color, composition, and design that "blends into everything" — with political and journalistic work as a supporting dimension that gives the art substance and point of view.

**Honesty note (binding on all future work):** the repository contains no artwork, design pieces, art credentials, awards, or exhibitions. The artist positioning is a direction the user set, not yet backed by evidence in the project. Future work must not fabricate awards, exhibitions, clients, or the literal claim of being "the best in the world," and must not present such claims as fact in copy. The artistry is to be conveyed through the craft of the site itself and by real artwork if/when the user supplies it.

## Operating Context

Single page viewed in-browser on desktop and mobile web, navigated by anchor links. Underlying content is Vivek's genuine career record. Contact happens via a form (Formspree) or direct channels.

## Capabilities and Constraints

- React (Vite) + Tailwind CSS + Framer Motion single-page app; JavaScript/JSX, no TypeScript. Content lives in `src/data/*.js` modules that components map over.
- Sections: Hero, contact strip, Current Role, Education, Experience, Publications, Skills, Expertise, Contact.
- Contact form posts to Formspree (placeholder endpoint until a real form id is supplied).
- Real, binding contact facts: phone `+91-9354820575`, email `vivekraj1798@gmail.com`, location Delhi, India. Socials: LinkedIn, Facebook, X, Instagram, WhatsApp (`src/data/siteInfo.js`).
- **Undecided product fact:** whether the rebrand rewrites factual copy. Every current bio/section string describes a policy researcher, not an artist. Rewriting factual copy toward the artist framing requires user confirmation and must not invent an art résumé.

## Brand Commitments

- Real name: **Vivek Raj**. Real contact details and social links (above) are binding and must be preserved.
- User-volunteered binding visual constraint (recorded here, not expanded — the visual world is built in new-work): the site must **feel hand-painted**, use color/art/design boldly and confidently, and blend design into every part of the experience.

## Evidence on Hand

Real, verifiable content already in the repo:

- **Experience** — 6 roles (`src/data/experience.js`): Office of Rahul Gandhi (Research Intern); PUCL Delhi (Legal Intern); Office of Dr. Heena V. Gavit, MP (Research Intern); HRLN Delhi (Legal Intern); RJD state election campaign (Digital Campaign Strategist); Dept. of Agriculture, Govt. of Bihar (Research Fellow).
- **Publications** — 7 entries (`src/data/publications.js`); most venues are real, one has a live URL (Brandt School bulletin).
- **Education** — MPP, Willy Brandt School, Erfurt (2023–2025); LLB, Campus Law Centre, Delhi (2019–2022); Nelson Mandela summer school & Sambhaavnaa fellowships; British Council / Møller Institute certificate (`src/data/education.js`).
- **Photos** — headshot, secondary, and banner images in `src/assets/photos/`.
- **Absent — must not be fabricated:** any artwork, design portfolio, art awards, exhibitions, or client list.

## Product Principles

- **Craft is the argument.** The interface must itself demonstrate the artistry it claims; a hand-made feel outranks templated polish.
- **Real career, artful frame.** Present Vivek's genuine policy/law/journalism record through an artist's eye — never invent an art history.
- **Color and composition lead; text supports.**
- **Claims stay honest.** Superlatives and credentials appear only when real evidence backs them.
