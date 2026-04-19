<!-- /autoplan restore point: /Users/igortkachenko/.gstack/projects/aporto-tech-app.aporto/main-landing-autoplan-restore-20260418-162519.md -->

# Plan: Landing Page Redesign — Two-Sided Marketplace Vision

**Date:** 2026-04-18
**Repo:** main-aporto (aporto.tech landing page)
**Author:** igortkachenko

---

## Summary

Rewrite the aporto.tech landing page to reflect Aporto's new product vision: a **two-sided marketplace for AI agents**.

The current page positions Aporto as "a credit card for your agent" — spending controls and billing for a single audience. The new vision has two distinct audiences:

1. **Agent users** (consumers) — developers whose AI agents need to call tools, APIs, and specialized services. They pay from a single Aporto balance, no per-service signup.
2. **Agent builders** (providers) — developers who build AI agents or services and want to sell them per-call, getting paid automatically via x402 without building billing themselves.

The landing page must speak to both. Proposed structure: a tab switcher ("For Agent Users" / "For Agent Builders") above the fold so visitors self-select and get the right pitch.

---

## Current State

**File:** `src/app/page.tsx` — single-audience landing page
**Headline:** "Your agent needs a credit card. Give it one. Safely."
**Messaging:** Spending controls, per-agent limits, billing safety
**Audience:** Only agent consumers (developers running agents)
**Missing:** Provider/builder side, marketplace framing, x402 angle

**Components:**
- `Header.tsx` — logo + nav (Platform, Company, Docs) + Sign up CTA
- `BackgroundCanvas.tsx` — animated canvas background
- `ContextCanvas.tsx` — animated canvas in context section
- `Footer.tsx` — standard footer with links

---

## Goals

1. Communicate Aporto as a two-sided marketplace, not just a billing proxy
2. Give both audiences (consumer / provider) a clear, tailored value proposition above the fold
3. Keep the existing visual style (dark, #121212, #6be195 green accent)
4. Drive the right CTA per audience: consumers → Sign up, providers → List your agent
5. Surface x402 as the payment primitive that connects the two sides

---

## Proposed Page Structure

### Tab switcher (above fold, replaces hero copy)

```
[ For Agent Users ]  [ For Agent Builders ]
```

**Consumer tab:**
- H1: "One balance. Every tool your agent needs."
- Subhead: "Connect to 100+ APIs and AI services without managing separate accounts or billing."
- CTA: Sign up → app.aporto.tech

**Builder tab:**
- H1: "Sell your AI agent. Get paid per call."
- Subhead: "List your agent in the Aporto marketplace. When a client calls it, you get paid automatically — no billing code required."
- CTA: List your agent → (contact/waitlist for now)

### Below the fold (shared)
- How it works (3 steps, different copy per tab if JS, single combined explanation if no-JS)
- Services grid (consumer: shows tools available; builder: shows "join these providers")
- x402 explainer: "The payment layer that connects both sides"
- Social proof / early numbers

---

## Premises

1. The two-audience problem is real — "credit card for your agent" undersells the marketplace vision and ignores providers.
2. Tab switching is the right UX — cleaner than two separate pages, keeps SEO on one URL.
3. The existing visual system (dark, green accent) stays — don't redesign, re-message.
4. "List your agent" CTA goes to a waitlist/contact for now — provider self-service is not yet built.
5. x402 can be mentioned but does not need a full technical explanation on the landing page.

---

## Files to change

| File | Change |
|------|--------|
| `src/app/page.tsx` | Full rewrite — new hero with tabs, new sections |
| `src/components/Header.tsx` | Update nav to reflect marketplace framing |
| `src/app/page.tsx` | New "For Builders" section copy |

## Files to create

| File | Purpose |
|------|---------|
| `src/components/AudienceTabs.tsx` | Tab switcher component — "For Agent Users" / "For Agent Builders" |

---

---

# Phase 1: CEO Review

*Codex: unavailable [subagent-only]*

## Premise Challenge

| Premise | Status | Note |
|---------|--------|------|
| Two-audience problem is real | ✅ Valid | Under-served builders are the growth unlock |
| Tab switching is right UX | ⚠️ REVISED | Tabs above fold = forced self-categorization before delivering value. Revised → unified hero + bifurcate below fold |
| Visual system stays | ✅ Valid | Don't redesign, re-message |
| Builder CTA → waitlist is ok | ⚠️ REVISED | "Marketplace" language = credibility gap. Revised → "earn" framing, no word "marketplace", CTA = early access |
| x402 can be mentioned | ✅ Valid | Mention in builder context, not as primary framing |

## Key Findings

**F1 (CRITICAL): "Marketplace" framing before supply exists**
Claiming marketplace without live agents = vaporware signal. Visitor clicks "List your agent," hits waitlist, leaves.
Fix: Drop "marketplace." Use "earn" framing. Frame Aporto as "the place your agent earns."

**F2 (CRITICAL): Builder CTA → waitlist destroys the claim**
Fix: Builder CTA = "Start earning →" → inline early access form. Honest, revenue-framed, no broken promise.

**F3 (HIGH): Two-tab UX above fold increases bounce**
Visitor must self-categorize before seeing value. ~50% pick wrong tab or bounce.
Fix: Unified hero → bifurcate in two cards below the fold.

**F4 (HIGH): Consumer copy drops safety/control hook**
"One balance" is fintech-bland. Original "Safely" was emotionally resonant.
Fix: Return fear-of-runaway-cost angle to consumer pitch.

**F5 (HIGH): Builder copy is features not benefits**
"No billing code" is a feature. "First paying customer today" is a benefit.
Fix: Lead with time-to-value and revenue claim.

**F6 (HIGH): No trust signals above the fold**
For a two-sided platform, cold-start is the primary objection. Numbers/names are not below-fold content.
Fix: Move any real metric (developers, agents, transactions) immediately below hero.

## CEO Completion Summary

**Score before:** 3/10. **Score after auto-decisions:** 7/10.
6 findings: 2 critical, 4 high. All MECHANICAL. 0 taste decisions.

---

# Phase 2: Design Review

*Codex: unavailable [subagent-only]*

## Key Findings

**F7 (CRITICAL): Hero headline serves no one**
"The payment layer for AI agents. Buy agent calls. Sell agent calls." — infrastructure jargon, not a hook.
Fix → `"Your AI agent can now pay — and get paid."`
Subhead → `"Fund any API call your agent makes. Or publish your own agent and collect revenue per call — no billing code, no invoices."`

**F8 (CRITICAL): CTA color inconsistency + no hierarchy**
Hero "Get Access" uses `#e0effe` blue — different from the brand's `#6be195` green in the header. Two CTAs in hero have no visual hierarchy.
Fix: User CTA = `bg-[#6be195] text-[#121212]` (primary). Builder CTA = `border border-[#ffffff30] text-white bg-transparent` (secondary).

**F9 (CRITICAL): Header "Sign up" ambiguous post-redesign**
Builder visitors click "Sign up," land on user dashboard, bounce.
Fix: Rename to "Get started."

**F10 (HIGH): Below-fold bifurcation layout completely unspecified**
Fix: 50/50 desktop cards inside `max-w-6xl`, stacked on mobile (user card above builder). Section label: "Who it's for" (14px, `text-[#ffffff40]`, uppercase).
- User card: `border-l-4 border-[#6be195]`, heading "I run AI agents", CTA = green filled
- Builder card: `border-l-4 border-[#ffffff30]`, heading "I build AI agents", CTA = white outlined

**F11 (HIGH): ContextCanvas section stays user-only**
The vibe-coding narrative ("You ask Claude to write a script...") is 100% user-side. Under a unified hero it creates tonal split.
Fix: Cut it. Flow becomes: hero → who-it-is-for cards → features → footer.

**F12 (HIGH): Features grid is user-only (3 cards)**
Builder visitor scrolls past cards and sees nothing for them.
Fix: Add builder card row below with separator label "For agent builders": "Publish via HTTP", "x402 handles billing", "You keep the revenue".

**F13 (HIGH): Mobile layout unspecified**
Fix: User card stacks above builder card, full width, no horizontal scroll. `py-3.5` min on buttons (48px touch target).

**F14 (MEDIUM): No scroll affordance below hero (min-h-[85vh])**
Fix: Animated chevron `text-[#ffffff20]` at hero bottom center, `animate-bounce`, hidden on mobile.

**F15 (MEDIUM): Builder waitlist UX unspecified**
Fix (TASTE): Either inline email capture or redirect to /contact. See gate.

**F16 (MEDIUM): Nav "Platform" link ambiguous after redesign**
Fix: Rename to "Dashboard."

**F17 (MEDIUM): No reduced-motion handling on BackgroundCanvas**
Fix: Static gradient fallback when `prefers-reduced-motion: reduce`.

## Auto-Decisions (Design)

| # | Decision | Classification | Principle |
|---|----------|----------------|-----------|
| D3 | Headline → "Your AI agent can now pay — and get paid." | MECHANICAL | P5 explicit |
| D4 | Fix hero CTA: `#e0effe` → `#6be195` (brand consistency) | MECHANICAL | P5 explicit |
| D5 | User CTA primary (green filled), Builder CTA secondary (white outlined) | MECHANICAL | P5 explicit |
| D6 | Rename header "Sign up" → "Get started" | MECHANICAL | P5 explicit |
| D7 | Cut ContextCanvas section | MECHANICAL | P3 pragmatic |
| D8 | Mobile: user card above builder, full width | MECHANICAL | P1 completeness |
| D9 | Add scroll chevron at hero bottom | MECHANICAL | P1 completeness |
| D10 | Add reduced-motion static gradient fallback | MECHANICAL | P1 completeness |
| D11 | Add builder features row with labeled separator | MECHANICAL | P1 completeness |
| D12 | Rename nav "Platform" → "Dashboard" | MECHANICAL | P5 explicit |

**TASTE DECISION T1:** Builder waitlist UX — inline email expand vs redirect to /contact. Auto-decision: redirect to /contact (simpler, no new component needed, consistent with existing Contact flow). Mark as taste.

## Design Completion Summary

**Score before:** 2/10. **Score after:** 8/10.
13 findings: 3 critical, 6 high, 4 medium. 10 mechanical auto-decisions. 1 taste decision.

---

# Phase 3: Engineering Review

*Codex: unavailable [subagent-only]*

## Key Findings

**F18 (CRITICAL): BackgroundCanvas bleeds across full page**
`BackgroundCanvas` renders `absolute inset-0` inside `<main>` — not inside the hero. After ContextCanvas is cut, canvas bleeds over "Who it's for" cards and builder row.
Fix: Wrap `<BackgroundCanvas />` + hero `<section>` in `<div className="relative overflow-hidden">`.

**F19 (HIGH): ContextCanvas cleanup is incomplete**
Plan says "cut it" but misses: (1) delete `ContextCanvas.tsx` file entirely, (2) stale `z-20` class on the removed section leaves misleading z-index cascade, (3) gradient seam between hero and features needs visual verify.
Fix: Delete file, remove stale z-index from features sections.

**F20 (HIGH): No `prefers-reduced-motion` handling anywhere in codebase**
`BackgroundCanvas.tsx` runs `requestAnimationFrame` unconditionally. `layout.tsx` has `animate-breathing` not guarded either.
Fix in `BackgroundCanvas.tsx`: add `matchMedia` early return. Fix in `globals.css`: add `@media (prefers-reduced-motion: reduce) { .animate-breathing { animation: none; } }`.

**F21 (MEDIUM): `text-shadow-sm` on page.tsx:19 is not a valid Tailwind v4 utility**
Silent no-op today. Will silently fail in v4.
Fix: Remove from the headline element (the `text-shadow` is barely visible against the dark background).

**F22 (MEDIUM): Contact page `<option selected>` causes React hydration warning**
Relevant because builder CTA redirects to `/contact`. The role and timeframe dropdowns use the `selected` HTML attribute, which React ignores on the client, generating a console warning.
Fix: Replace `selected` with `defaultValue` on the `<select>` element.

**F23 (MEDIUM): Plan file table has a duplicate `page.tsx` entry and missing files**
Missing: `ContextCanvas.tsx` (delete), `globals.css` (reduced-motion), `Footer.tsx` ("Get Access" → "Get started"), `layout.tsx` (metadata description update).

## Updated File List

| File | Change |
|------|--------|
| `src/app/page.tsx` | Full rewrite — new hero, who-it-is-for cards, builder features row, scroll chevron, canvas fix |
| `src/components/Header.tsx` | "Sign up" → "Get started", "Platform" → "Dashboard" |
| `src/components/BackgroundCanvas.tsx` | Add `prefers-reduced-motion` early return |
| `src/components/ContextCanvas.tsx` | **DELETE** |
| `src/app/globals.css` | Add `@media (prefers-reduced-motion: reduce)` rule |
| `src/app/contact/page.tsx` | Fix `<option selected>` → `defaultValue` on `<select>` |
| `src/components/Footer.tsx` | "Get Access" → "Get started" for consistency |
| `src/app/layout.tsx` | Update `description` metadata to two-sided framing |

**No new components.** "Who it's for" cards inline in `page.tsx` (used in 1 place). Builder features row reuses existing grid class.

## Auto-Decisions (Eng)

| # | Decision | Classification | Principle |
|---|----------|----------------|-----------|
| D13 | Wrap hero + canvas in `relative overflow-hidden` container | MECHANICAL | P1 completeness |
| D14 | Delete `ContextCanvas.tsx` entirely | MECHANICAL | P3 pragmatic |
| D15 | Add `matchMedia` prefers-reduced-motion early return in BackgroundCanvas | MECHANICAL | P1 completeness |
| D16 | Add `@media (prefers-reduced-motion)` to globals.css for animate-breathing | MECHANICAL | P1 completeness |
| D17 | Builder features row: reuse existing grid class, `mt-16 mb-8` separator | MECHANICAL | P5 explicit |
| D18 | Remove `text-shadow-sm` (invalid Tailwind v4 utility) | MECHANICAL | P5 explicit |
| D19 | Fix contact page `<option selected>` → `defaultValue` | MECHANICAL | P5 explicit |
| D20 | Update layout.tsx metadata description | MECHANICAL | P1 completeness |
| D21 | Update Footer "Get Access" → "Get started" | MECHANICAL | P5 explicit |

## Eng Completion Summary

**Score before:** 2/10. **Score after:** 8/10.
8 findings: 1 critical, 2 high, 4 medium, 1 low. 9 mechanical auto-decisions. 0 taste decisions.

---

# Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|---------|
| D1 | CEO | Drop "marketplace" language → "earn" framing | MECHANICAL | P5 explicit | No live supply = vaporware signal | Keep marketplace |
| D2 | CEO | Builder CTA = "Start earning →" → early access | MECHANICAL | P5 explicit | Waitlist + marketplace claim = broken promise | Marketplace promise |
| D3 | Design | Headline → "Your AI agent can now pay — and get paid." | MECHANICAL | P5 explicit | Infrastructure jargon doesn't hook in 3s | "Payment layer" copy |
| D4 | Design | Fix hero CTA color: `#e0effe` → `#6be195` | MECHANICAL | P5 explicit | Visual system fragmentation | Keep blue button |
| D5 | Design | User CTA primary (green), Builder CTA secondary (white outlined) | MECHANICAL | P5 explicit | Hierarchy must match product maturity | Equal CTAs |
| D6 | Design | Header "Sign up" → "Get started" | MECHANICAL | P5 explicit | Builder visitors bounce on wrong destination | Keep "Sign up" |
| D7 | Design | Cut ContextCanvas section entirely | MECHANICAL | P3 pragmatic | User-only copy under unified hero = tonal split | Keep with edits |
| D8 | Design | Mobile: user card above builder, full width | MECHANICAL | P1 completeness | Unspecified = arbitrary implementer choice | No spec |
| D9 | Design | Add scroll chevron at hero bottom | MECHANICAL | P1 completeness | min-h-[85vh] hero with no affordance loses below-fold content | No affordance |
| D10 | Design | Add reduced-motion static gradient fallback | MECHANICAL | P1 completeness | No handling = WCAG violation | Ignore |
| D11 | Design | Add builder features row with labeled separator | MECHANICAL | P1 completeness | Builder visitor scrolls 3 user-only cards, bounces | User cards only |
| D12 | Design | Rename nav "Platform" → "Dashboard" | MECHANICAL | P5 explicit | "Platform" implies both sides exist in app | Keep "Platform" |
| T1 | Design | Builder waitlist UX → redirect to /contact | TASTE | P3 pragmatic | Simpler than inline form; consistent with existing contact flow | Inline email expand |
| D13 | Eng | Wrap hero + canvas in `relative overflow-hidden` | MECHANICAL | P1 completeness | Canvas bleeds to full page without containing context | Leave as-is |
| D14 | Eng | Delete ContextCanvas.tsx | MECHANICAL | P3 pragmatic | Dead rAF loop misleads future engineers | Leave file |
| D15 | Eng | prefers-reduced-motion early return in BackgroundCanvas | MECHANICAL | P1 completeness | Unconditional rAF = WCAG 2.3.3 violation | Ignore |
| D16 | Eng | animate-breathing @media rule in globals.css | MECHANICAL | P1 completeness | Same WCAG issue, different file | Ignore |
| D17 | Eng | Builder row: reuse grid class, `mt-16 mb-8` gap | MECHANICAL | P5 explicit | New section = duplicate markup for no reason | New section element |
| D18 | Eng | Remove `text-shadow-sm` (invalid Tailwind v4) | MECHANICAL | P5 explicit | Silent no-op that will confuse future engineers | Keep / define |
| D19 | Eng | Fix contact `<option selected>` → defaultValue | MECHANICAL | P5 explicit | React hydration warning on builder conversion page | Leave broken |
| D20 | Eng | Update layout.tsx metadata description | MECHANICAL | P1 completeness | Single-audience description on two-sided product | Leave stale |
| D21 | Eng | Footer "Get Access" → "Get started" | MECHANICAL | P5 explicit | CTA naming consistency | Leave inconsistent |


---

# Phase 4: Final Approval Gate

## Taste Decision Resolved

**T1:** Builder "Start earning" CTA → `app.aporto.tech` (same destination as consumer CTA).
Both sides funnel into the same app. Post-signup onboarding differentiates. No separate waitlist page, no new component.

| # | Phase | Decision | Final |
|---|-------|----------|-------|
| T1 | Design | Builder CTA destination | `app.aporto.tech` (user decision) |

## Final File List

| File | Change |
|------|--------|
| `src/app/page.tsx` | Full rewrite |
| `src/components/Header.tsx` | "Sign up" → "Get started", "Platform" → "Dashboard" |
| `src/components/BackgroundCanvas.tsx` | Add prefers-reduced-motion early return |
| `src/components/ContextCanvas.tsx` | **DELETE** |
| `src/app/globals.css` | Add @media prefers-reduced-motion rule |
| `src/app/contact/page.tsx` | Fix `<option selected>` → defaultValue |
| `src/components/Footer.tsx` | "Get Access" → "Get started" |
| `src/app/layout.tsx` | Update metadata description |

**No new components created.**

## APPROVED — Ready for implementation.

