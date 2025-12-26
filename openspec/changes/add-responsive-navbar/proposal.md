# Change: Add Responsive Navbar

## Why
The navbar currently has limited mobile responsiveness. On small screens, the navigation items and social icons can become cramped or overflow, hurting usability on mobile devices.

## What Changes
- Add hamburger menu toggle for mobile viewports (< 640px)
- Collapse navigation items (Resume, Projects, Contacts) into a dropdown menu on mobile
- Keep social icons visible but reduce size on mobile
- Add smooth open/close animation for mobile menu
- Ensure touch-friendly tap targets (minimum 44px)

## Impact
- Affected specs: navigation (new capability)
- Affected code: `src/components/NavBar.tsx`




