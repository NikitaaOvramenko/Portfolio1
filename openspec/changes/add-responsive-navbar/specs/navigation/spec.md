## ADDED Requirements

### Requirement: Responsive Navbar Layout
The navbar SHALL adapt its layout based on viewport width to provide optimal usability on all device sizes.

#### Scenario: Desktop layout (≥640px)
- **WHEN** viewport width is 640px or greater
- **THEN** navbar displays social icons on the left and navigation items (Resume, Projects, Contacts) inline on the right

#### Scenario: Mobile layout (<640px)
- **WHEN** viewport width is less than 640px
- **THEN** navbar displays social icons on the left and a hamburger menu button on the right

### Requirement: Mobile Menu Toggle
The navbar SHALL provide a hamburger menu button that toggles visibility of navigation items on mobile viewports.

#### Scenario: Opening mobile menu
- **WHEN** user taps the hamburger menu button
- **THEN** a dropdown menu appears with navigation items (Resume, Projects, Contacts)

#### Scenario: Closing mobile menu
- **WHEN** user taps the hamburger menu button while menu is open
- **THEN** the dropdown menu closes with an animation

#### Scenario: Close on navigation
- **WHEN** user taps a navigation item in the mobile menu
- **THEN** the menu closes and the appropriate action occurs (download resume or scroll to section)

### Requirement: Touch-Friendly Targets
All interactive elements in the navbar SHALL have a minimum touch target size of 44x44 pixels on mobile viewports.

#### Scenario: Mobile tap targets
- **WHEN** viewing navbar on mobile
- **THEN** hamburger button and menu items have minimum 44px touch target height




