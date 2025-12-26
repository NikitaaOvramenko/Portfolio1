# Visual Design Specification

## ADDED Requirements

### Requirement: Design Token System
The application SHALL use CSS custom properties to define a consistent design token system for colors, typography, and effects.

#### Scenario: Design tokens are available globally
- **WHEN** any component renders
- **THEN** CSS custom properties for `--color-bg`, `--color-text-primary`, `--color-accent`, `--font-heading`, `--font-body`, and `--glow-white` SHALL be available

#### Scenario: Color tokens define the dark theme palette
- **WHEN** the design tokens are defined
- **THEN** `--color-bg` SHALL be `#000000`
- **AND** `--color-text-primary` SHALL be `#ffffff`
- **AND** `--color-accent` SHALL be a purple tone (`#a855f7` or similar)

---

### Requirement: Typography Hierarchy
The application SHALL implement a clear typography hierarchy using LemonMilk for headings and Helvetica for body text.

#### Scenario: Headings use LemonMilk font
- **WHEN** a section heading is displayed (e.g., "Skills", "Projects", "Experience", "Contacts")
- **THEN** the heading SHALL use the LemonMilk font family

#### Scenario: Body text uses Helvetica
- **WHEN** body text, descriptions, or form labels are displayed
- **THEN** the text SHALL use the Helvetica (or Helvetica Neue) font family

#### Scenario: Font loading with fallback
- **WHEN** LemonMilk font files are loading
- **THEN** the system SHALL display fallback sans-serif fonts
- **AND** swap to LemonMilk when loaded (font-display: swap)

---

### Requirement: Neon Glow Effect
The application SHALL apply a subtle white neon glow effect to primary headings and key text highlights.

#### Scenario: Section headings have neon glow
- **WHEN** a major section heading is displayed
- **THEN** a white text-shadow glow effect SHALL be applied
- **AND** the glow SHALL be subtle (opacity 30-50%, blur 10-20px)

#### Scenario: Glow does not impair readability
- **WHEN** neon glow is applied to text
- **THEN** the base text color SHALL remain fully opaque white
- **AND** the glow SHALL not obscure adjacent content

---

### Requirement: Consistent Dark Background
All sections of the application SHALL use a pure black (#000000) background color.

#### Scenario: About section background
- **WHEN** the About section renders
- **THEN** the background color SHALL be black

#### Scenario: Experiences section background
- **WHEN** the Experiences section renders
- **THEN** the background color SHALL be black (replacing violet gradient)

#### Scenario: Skills section background
- **WHEN** the Skills section renders
- **THEN** the background color SHALL be black

#### Scenario: Projects section background
- **WHEN** the Projects section renders
- **THEN** the background color SHALL be black (replacing violet gradient)

#### Scenario: Contacts section background
- **WHEN** the Contacts section renders
- **THEN** the background color SHALL be black

---

### Requirement: Interactive States
Interactive elements SHALL have consistent hover and focus states with smooth transitions.

#### Scenario: Navigation links hover effect
- **WHEN** a user hovers over a navigation link
- **THEN** the link SHALL display a visual change (glow, color shift, or scale)
- **AND** the transition SHALL be smooth (200-300ms duration)

#### Scenario: Button hover effect
- **WHEN** a user hovers over a button
- **THEN** the button SHALL display a subtle scale or glow effect
- **AND** the transition SHALL be smooth

#### Scenario: Form input focus state
- **WHEN** a user focuses on a form input
- **THEN** the input SHALL display an accent-colored border or glow
- **AND** the change SHALL be animated smoothly

---

### Requirement: Accessibility Compliance
The visual design SHALL maintain WCAG AA accessibility standards.

#### Scenario: Text contrast ratio
- **WHEN** white text is displayed on black background
- **THEN** the contrast ratio SHALL be at least 4.5:1 for normal text
- **AND** at least 3:1 for large text (18px+ or 14px+ bold)

#### Scenario: Focus indicators are visible
- **WHEN** an interactive element receives keyboard focus
- **THEN** a visible focus indicator SHALL be displayed

