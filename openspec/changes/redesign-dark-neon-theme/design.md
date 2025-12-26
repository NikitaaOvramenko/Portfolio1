## Context
This redesign transforms the portfolio from a mixed purple/violet aesthetic to a cohesive dark neon theme. The goal is professional polish without changing functionality or layouts.

**Stakeholders**: Portfolio owner (Nikita), potential employers, recruiters

**Constraints**:
- Must use existing LemonMilk font assets in `src/assets/fonts/LemonMilk/`
- Helvetica is a system font (no assets needed)
- Performance must remain acceptable with physics animations
- Accessibility: WCAG AA contrast ratios required

## Goals / Non-Goals
**Goals**:
- Unified dark (#000) background across all sections
- Consistent typography hierarchy (LemonMilk headings, Helvetica body)
- Subtle neon glow on key text elements (white/cyan tones, not overpowering)
- Polished micro-interactions (hover, focus states)
- Improved visual flow between sections

**Non-Goals**:
- Changing page layout or section order
- Adding new features or components
- Heavy animations or particle effects
- Changing color scheme entirely (keep purple accents where appropriate)

## Decisions

### 1. Design Token Strategy
**Decision**: Use CSS custom properties in `index.css` for colors, fonts, and glow effects.
**Rationale**: Enables consistent theming and easy future adjustments without touching Tailwind config extensively.

```css
:root {
  /* Colors */
  --color-bg: #000000;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-accent: #a855f7;      /* purple-500 */
  --color-accent-light: #c084fc; /* purple-400 */
  
  /* Neon Glow */
  --glow-white: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
  --glow-accent: 0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3);
  
  /* Fonts */
  --font-heading: 'LemonMilk', sans-serif;
  --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  /* Spacing */
  --section-padding: 2rem;
}
```

### 2. Font Loading Strategy
**Decision**: Use `@font-face` in `index.css` to load LemonMilk variants.
**Rationale**: Direct CSS loading is simpler than JavaScript font loaders and works well with Vite's asset handling.

**Fonts to load**:
- LemonMilk Regular (primary headings)
- LemonMilk Bold (emphasis)
- LemonMilk Light (subheadings)

### 3. Neon Glow Implementation
**Decision**: Use CSS `text-shadow` for glow effects, applied via Tailwind utility classes extended in config.
**Rationale**: 
- CSS text-shadow is performant and widely supported
- Subtle glow (not overpowering): max 20px blur, 30-50% opacity
- Applied only to headings and key highlights to maintain readability

**Example**:
```css
.neon-glow {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 
               0 0 20px rgba(255, 255, 255, 0.3);
}
```

### 4. Background Standardization
**Decision**: Replace violet gradients in Experiences and Projects sections with pure black.
**Rationale**: 
- Consistent dark aesthetic
- Better contrast for text readability
- Allows neon effects to stand out

**Current vs New**:
| Section | Current | New |
|---------|---------|-----|
| About | black + radial gradient | black (keep radial) |
| Experiences | violet gradient | black |
| Skills | black | black (no change) |
| Projects | violet gradient | black |
| Contacts | black | black (no change) |

### 5. Animation Approach
**Decision**: CSS-only transitions with subtle hover effects.
**Rationale**: 
- No additional dependencies
- Performant alongside Matter.js physics
- Focus on hover states and focus indicators

**Effects**:
- Heading entrance: subtle fade-in on page load
- Buttons/links: scale and glow on hover
- Form inputs: focus ring with accent color

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Reduced contrast with dark backgrounds | Test with contrast checker, maintain white text on black |
| Font loading delay (FOUT) | Use `font-display: swap` in @font-face |
| LemonMilk may not suit all sizes | Limit to headings 24px+, use Helvetica for smaller text |
| Neon effect overdone | Keep glow subtle (30-50% opacity), limit to titles |

## Migration Plan
1. Add CSS variables and font-face declarations (no visual change yet)
2. Update Tailwind config with font family extensions
3. Update components section by section (NavBar → About → Experiences → Skills → Projects → Contacts → Modal → Footer)
4. Test each section for contrast and responsiveness
5. Final polish pass for consistency

## Open Questions
- **Q**: Should section dividers/separators be added between sections?
  - **A**: Not in initial scope—can be added later if visual flow needs improvement
- **Q**: Should the radial gradient in About section be removed?
  - **A**: Keep it—adds depth without conflicting with dark theme

