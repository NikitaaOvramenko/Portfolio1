# Change: Add React Router and Remove Experiences Section

## Why
The portfolio needs React Router infrastructure to support future pages (e.g., blog, detailed project pages, resume page). Additionally, the Experiences section is being removed from the homepage.

## What Changes
- Install `react-router-dom` package
- Set up `BrowserRouter` in the app entry point
- Create a basic routing structure with the home page as the default route
- Remove the Experiences section and its component import from the homepage
- Remove references to Experiences in navigation (if any)

**Note**: The current single-page scrollable layout remains unchanged. Router is added for future extensibility only.

## Impact
- **Added dependencies**: `react-router-dom`
- **Modified files**:
  - `src/main.tsx` - Wrap app with BrowserRouter
  - `src/App.tsx` - Remove Experiences, set up Routes
  - `src/components/NavBar.tsx` - Remove Experience link if present
- **Removed**: Experiences section from homepage (component file kept for potential future use)
- **New files**: None initially (future pages can be added later)

