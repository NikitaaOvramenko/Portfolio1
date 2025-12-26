# Project Context

## Purpose
A personal portfolio website showcasing Nikita Ovramenko's software development skills, projects, and professional experience. The site serves as a digital resume and project showcase for potential employers and collaborators.

## Tech Stack
- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS 3.4 with custom CSS modules
- **Physics Engine**: Matter.js (for interactive skills visualization)
- **Analytics**: react-ga4 (Google Analytics 4)
- **UI Components**: SweetAlert2 (modals), react-icons
- **Linting**: ESLint with TypeScript-ESLint and React Hooks plugins

## Project Conventions

### Code Style
- **Language**: TypeScript (strict mode via tsconfig)
- **Components**: Functional components with hooks (no class components)
- **Exports**: Default exports for components (`export default function ComponentName()`)
- **Naming**: PascalCase for components, camelCase for variables/functions
- **File naming**: PascalCase for component files (e.g., `NavBar.tsx`, `About.tsx`)
- **CSS**: Tailwind utility classes inline, with separate CSS files in `cssComp/` for complex styles
- **Imports**: Relative imports with `../` paths

### Architecture Patterns
- **Component Structure**: Single-file components in `src/components/`
- **Data Separation**: Static data stored in `src/data/` (e.g., `projectsData.tsx`, `experienceData.tsx`)
- **Assets Organization**: 
  - `src/icons/` - Social/UI icons
  - `src/iconsProj/` - Project-specific icons
  - `src/sprites/` - Technology logos
  - `src/projectPics/` - Project screenshots organized by project name
  - `src/pdfs/` - Downloadable documents (resumes)
  - `src/videos/` - Demo videos
- **Helpers**: Utility hooks/functions in `src/helpers/`

### Testing Strategy
No formal testing framework configured. Manual testing during development.

### Git Workflow
Standard feature branch workflow. Main branch for production.

## Domain Context
- This is a **single-page application** with section-based navigation
- Sections flow: NavBar → About → Experiences → Skills → Projects → Contacts → Footer
- **Skills visualization** uses Matter.js physics for interactive floating skill badges
- **Projects showcase** displays portfolio items with images, descriptions, and links
- **Dark theme** is the primary design with black backgrounds and purple/yellow gradient accents
- **Responsive design** with mobile-first breakpoints (sm, md, lg, xl, 2xl)

## Important Constraints
- Static site deployment (no backend)
- Must be performant with physics animations
- Resume PDF must be downloadable
- Google Analytics tracking required for visitor insights
- Mobile-responsive across all sections

## External Dependencies
- **Google Analytics 4**: Tracking via measurement ID `G-BY5E93F9B3`
- **External Links**: GitHub profile, Instagram, email (mailto)
- No external APIs or backend services
