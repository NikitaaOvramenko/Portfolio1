# Change: Professional UI/UX Redesign (Dark Neon Theme)

## Why
The portfolio currently uses mixed background colors (black and violet gradients) with inconsistent typography. Upgrading to a cohesive dark neon aesthetic will create a more professional, modern, and visually distinctive impression for potential employers and collaborators.

## What Changes
- Apply pure black backgrounds (`#000000`) across all sections
- Implement white neon-style typography with subtle glow effects for headings
- Configure LemonMilk font for headings/titles and Helvetica for body text
- Create CSS custom properties (design tokens) for consistent theming
- Standardize spacing, alignment, and visual hierarchy across sections
- Add subtle hover/transition animations for polish
- Improve contrast and accessibility throughout

**Note**: Core functionality and layouts remain unchanged.

## Impact
- **Affected components**:
  - `NavBar.tsx` - Typography and hover states
  - `About.tsx` - Background, heading glow, body font
  - `Experiences.tsx` - Background (currently violet), typography
  - `SkillsPhysics.tsx` - Title typography
  - `Projects.tsx` - Background (currently violet), typography
  - `Contacts.tsx` - Form styling, headings
  - `Modal.tsx` - Typography consistency
  - `Footer.tsx` - Minor styling updates
- **Affected styles**:
  - `index.css` - Font-face declarations, CSS variables, base styles
  - `tailwind.config.js` - Extended theme with custom fonts and colors
- **New files**: None (reusing existing assets and structure)

