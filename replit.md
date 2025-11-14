# Overview

This is a waitlist landing page for "Gentheri," an AI-powered workflow platform. The application is built as a full-stack TypeScript application with a React frontend and Express backend. The primary purpose is to collect email signups from potential early adopters through a dark, minimalist landing page inspired by modern design aesthetics.

The application features a single-page marketing site with multiple sections (hero, features, benefits, FAQ, social proof) and integrates with Google Sheets to store waitlist signups alongside a database.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing (lightweight React Router alternative).

**UI Component Library**: Shadcn/ui components built on Radix UI primitives, providing accessible, unstyled component primitives that are styled with Tailwind CSS.

**Styling**: Tailwind CSS with a custom dark theme configuration. The design system uses CSS variables for theming, allowing for consistent color schemes and spacing throughout the application. The theme is hardcoded to dark mode on mount.

**State Management**: TanStack Query (React Query) for server state management, handling API requests, caching, and optimistic updates.

**Form Handling**: React Hook Form with Zod for schema validation via @hookform/resolvers.

**Component Organization**: Components are organized into:
- `/components` - Reusable UI components (Hero, Features, etc.)
- `/components/ui` - Shadcn UI primitives
- `/components/examples` - Example/demo components for each section
- `/pages` - Route-level page components

The frontend is structured as a single-page application with all sections rendered on the home page in a specific order.

## Backend Architecture

**Framework**: Express.js with TypeScript running in ESM mode.

**API Design**: RESTful API with a single POST endpoint (`/api/waitlist`) for collecting email signups.

**Storage Strategy**: Dual storage approach:
1. **In-Memory Storage**: Default implementation using a Map-based storage class (`MemStorage`) for development/testing
2. **Database**: Drizzle ORM configured for PostgreSQL (via Neon serverless driver) for production data persistence

The storage layer uses an interface (`IStorage`) allowing for easy swapping between in-memory and database implementations.

**Validation**: Zod schemas shared between frontend and backend (in `/shared` directory) ensure type safety and consistent validation rules.

**Development Server**: Custom Vite middleware integration in development mode for hot module replacement and seamless frontend/backend development experience.

## Data Storage

**ORM**: Drizzle ORM with Drizzle Kit for schema management and migrations.

**Database**: PostgreSQL (configured for Neon serverless), though the application is designed to work with the Drizzle dialect abstraction.

**Schema Design**: Two main tables:
1. `users` - Basic user authentication (username/password) - appears to be scaffolding, not actively used
2. `waitlist_signups` - Stores first name, email, and timestamp for waitlist entries

**Type Safety**: Database schemas are defined with Drizzle and automatically generate TypeScript types. Zod schemas (via `drizzle-zod`) provide runtime validation that matches the database schema.

## External Dependencies

**Google Sheets Integration**: 
- Uses Google Sheets API (`googleapis` package) to append waitlist signups to a spreadsheet
- Authentication via Replit Connectors OAuth2 system
- Access token management with automatic refresh
- Dual-write pattern: saves to both database and Google Sheets

**Replit Platform Integration**:
- Replit-specific plugins for development (`@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`)
- Replit Connectors for Google Sheets authentication
- Environment-based configuration using Replit identity tokens

**Third-Party UI Libraries**:
- Radix UI components for accessible primitives
- Lucide React for icons
- React Icons (specifically `react-icons/si` for brand logos)
- Embla Carousel for potential carousel functionality
- cmdk for command palette functionality

**Asset Management**: Static images stored in `/attached_assets/generated_images/` directory, imported directly into components.

**Build & Deployment**:
- Development: `tsx` for TypeScript execution with hot reload
- Production: Vite for frontend bundling, esbuild for backend bundling
- Deployment target: Node.js with ESM modules