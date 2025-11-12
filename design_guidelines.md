# FanBase CRM Waitlist Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from CreatorHero's bold, modern aesthetic while adapting for individual creators rather than agencies. This combines confidence-building visual impact with creator-focused messaging.

## Typography System
- **Primary Font**: Inter or DM Sans (Google Fonts)
- **Headline**: Bold (700), 48-64px desktop / 32-40px mobile
- **Subheadline**: Medium (500), 20-24px desktop / 16-18px mobile
- **Body**: Regular (400), 16-18px desktop / 14-16px mobile
- **Metrics/Stats**: Bold (700), 36-48px for impact numbers
- **Buttons**: Semibold (600), 16px

## Layout & Spacing System
**Tailwind Units**: Consistently use 4, 6, 8, 12, 16, 20, 24, 32 for spacing
- Section padding: py-20 to py-32 desktop, py-12 to py-16 mobile
- Container: max-w-7xl with px-6 to px-8
- Component gaps: gap-8 to gap-12 for feature grids
- Vertical rhythm: space-y-6 for content sections

## Page Structure & Sections

### 1. Hero Section (80vh minimum)
- **Layout**: Centered content with full-width gradient background
- **Elements**: 
  - Logo top-left (h-8 to h-10)
  - Main headline emphasizing "for creators" positioning
  - Supporting subtext (max-w-2xl centered)
  - Prominent email capture form (inline, max-w-md)
  - Form: Email input + "Join Waitlist" button side-by-side on desktop, stacked mobile
  - Small trust indicator below form: "Join 500+ creators on the waitlist"
- **Background**: Use gradient image/pattern similar to CreatorHero's energy

### 2. Social Proof Strip
- **Layout**: Full-width, py-8
- **Content**: Sliding/static row of creator avatars or placeholder logos
- **Text**: "Trusted by creators earning $1k-$10k/month"

### 3. Problem/Solution Section
- **Layout**: Two-column grid (lg:grid-cols-2), gap-16
- **Left Column**: 
  - "The Problem" heading
  - 3-4 pain points as bullet list with icons
  - Each point: Icon (w-6 h-6) + text
- **Right Column**:
  - "The Solution" heading
  - 2-3 key benefits
  - Each benefit highlighted with subtle background cards (p-6, rounded-2xl)

### 4. Features Preview (3-Column Grid)
- **Layout**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8
- **Feature Cards** (per card):
  - Icon at top (w-12 h-12)
  - Feature title (text-xl font-semibold)
  - Description (2-3 lines, text-base)
  - Subtle card styling: p-8, rounded-2xl, border treatment
- **Features to showcase**:
  1. Smart Fan Categories (auto-tagging)
  2. Engagement Reminders
  3. Analytics Dashboard
  4. Re-engagement Templates
  5. Churn Prevention
  6. Revenue Insights

### 5. Product Mockup Section
- **Layout**: Single column, centered
- **Content**: 
  - Subheading: "See it in action"
  - Large mockup image showing dashboard interface (max-w-5xl)
  - Image treatment: rounded-xl with subtle shadow
- **Callouts**: 2-3 floating labels pointing to key UI elements

### 6. Testimonials/Early Feedback
- **Layout**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6
- **Cards** (3-4 testimonials):
  - Quote text (italic)
  - Creator avatar placeholder (w-12 h-12, rounded-full)
  - Name + earnings tier (e.g., "$5k/month creator")
  - Star rating visual (5 stars)
  - Card: p-6, rounded-xl

### 7. Stats Banner
- **Layout**: Full-width accent section, py-16
- **Content**: 3-column grid showcasing metrics
  - "500+ Creators Waiting"
  - "30% Average Renewal Increase" (projected)
  - "5 Minutes Setup Time"
- **Typography**: Large bold numbers above descriptive text

### 8. Final CTA Section
- **Layout**: Centered, py-24
- **Elements**:
  - Compelling headline: "Ready to retain more fans?"
  - Email capture form (repeated, max-w-md)
  - Small text: "No credit card required. Launch notification only."
  - Trust badge: "Launching Q2 2025"

### 9. Footer
- **Layout**: Three-column grid (collapse to single on mobile), py-12
- **Columns**:
  - **Left**: Logo + tagline
  - **Center**: Quick links (About, Features, Privacy, Terms)
  - **Right**: Social icons + "Contact" email
- **Bottom**: Copyright line, text-sm, opacity-70

## Component Specifications

### Email Capture Form
- **Desktop**: flex row with input (flex-1) + button
- **Input**: h-12, px-4, rounded-lg, text-base
- **Button**: h-12, px-8, rounded-lg, font-semibold, backdrop-blur when on hero
- **Mobile**: Stack vertically with w-full on both

### Cards/Containers
- **Feature Cards**: p-6 to p-8, rounded-2xl, border-2 or subtle shadow
- **Testimonial Cards**: p-6, rounded-xl, border treatment
- **All cards**: Consistent hover state (subtle lift/shadow increase)

### Icons
- **Library**: Heroicons (outline for most, solid for emphasis)
- **Sizes**: w-6 h-6 for inline, w-12 h-12 for feature headers

### Buttons
- **Primary CTA**: Prominent, high-contrast, h-12 to h-14
- **Secondary**: Ghost/outline style
- **Hover states**: Subtle scale (scale-105) and brightness shift

## Images Section

### Hero Background
- **Description**: Modern gradient mesh or abstract background pattern, energetic and professional
- **Placement**: Full-width hero section background
- **Style**: Purple/pink/blue gradients with soft geometric shapes or grid patterns, similar to CreatorHero aesthetic

### Product Mockup
- **Description**: Dashboard interface showing fan categories, analytics cards, and smart lists
- **Placement**: Product preview section, centered
- **Details**: Should show clear UI elements like "Top Supporters" category, engagement timeline, and renewal alerts
- **Size**: Large (1200-1400px wide), rounded corners, subtle shadow

### Creator Avatars (Social Proof)
- **Description**: Circular placeholder avatars representing diverse creators
- **Placement**: Social proof strip below hero
- **Quantity**: 10-12 avatars in horizontal row

### Testimonial Avatars
- **Description**: Small circular avatars for testimonial authors
- **Placement**: Within testimonial cards
- **Size**: 48x48px, rounded-full

**Note**: Hero section uses a large background image/gradient. Product mockup is the primary feature image.

## Responsive Behavior
- **Desktop (lg)**: Multi-column layouts, generous spacing
- **Tablet (md)**: 2-column for features, maintain readability
- **Mobile**: Single column, reduce padding (py-12 vs py-20), stack form elements, maintain clear hierarchy

## Key Design Principles
1. **Bold & Confident**: Large typography, strong CTAs, clear value props
2. **Creator-First**: Language and visuals speak to individual creators, not agencies
3. **Trust-Building**: Multiple touchpoints showing credibility (waitlist count, testimonials, clear metrics)
4. **Action-Oriented**: Multiple email capture opportunities without being pushy
5. **Clean & Modern**: Ample whitespace, rounded corners, contemporary aesthetic matching CreatorHero's energy