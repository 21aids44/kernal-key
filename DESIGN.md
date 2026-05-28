# Design Brief: Kernal & Key

## Direction
Futuristic premium tech-forward light theme with glassmorphism, 3D immersion, and electric accents targeting college students seeking career advancement.

## Tone
Bold, confident, premium — unapologetic tech aesthetic with smooth motion and layered depth.

## Color Palette
| Role | Value | OKLCH |
|------|-------|-------|
| Background | Cool white | oklch(0.98 0.005 0) |
| Primary | Electric cyan | oklch(0.65 0.22 195) |
| Accent | Electric purple | oklch(0.6 0.22 270) |
| Text | Charcoal | oklch(0.2 0.05 0) |
| Muted | Soft gray | oklch(0.88 0.01 0) |

## Typography
- **Display/Headings**: Space Grotesk (bold, 700–900)
- **Body**: General Sans (regular, 400–600)
- **Scale**: H1 3.5rem, H2 2.5rem, H3 1.875rem, body 1rem

## Elevation & Depth
Glassmorphism cards with `backdrop-filter: blur(10px)`, semi-transparent borders, layered 3D transforms using React Three Fiber and WebGL contexts.

## Structural Zones
| Zone | Purpose | Notes |
|------|---------|-------|
| Hero | Full-bleed 3D immersive intro | Three.js canvas, electric gradient |
| Features | Glassmorphic card grid | Cyan/purple accents, float animation |
| CTA | Bold conversion section | Gradient button, glow effect |
| Footer | Minimal navigation | Light text on white, subtle border |

## Spacing & Rhythm
Base unit 0.5rem (8px). Margins/padding: xs (0.5rem), sm (1rem), md (1.5rem), lg (2rem), xl (3rem).

## Component Patterns
- Cards: glassmorphism with border-cyan/purple accents
- Buttons: solid gradient fill, electric pulse on hover
- Text: Space Grotesk headlines, General Sans body
- Animations: float, glow, shimmer utilities

## Motion
Easing: cubic-bezier(0.4, 0, 0.2, 1). Durations: fast (150ms), normal (300ms), slow (500ms). Entrance: fade + slide-up. Hover: glow pulse + scale.

## Constraints
No dark mode. Light theme only. Frontend-only (no backend state required for design system). Glassmorphism requires modern browsers with CSS backdrop-filter support.

## Signature Detail
Electric cyan-to-purple gradient shimmer on card hover, paired with 3D perspective transforms and floating motion to evoke cutting-edge tech immersion.
