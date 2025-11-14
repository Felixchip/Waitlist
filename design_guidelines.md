# FanBase CRM Waitlist Landing Page - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by Gentheri's dark minimalist aesthetic - pitch black backgrounds, clean white typography, generous breathing room, and bento-style grids. This creates a premium, modern AI-product feel while maintaining creator-focused messaging.

## Typography System
- **Primary Font**: Inter (Google Fonts)
- **Hero Headline**: Bold (700), 56-72px desktop / 36-48px mobile
- **Section Headlines**: Semibold (600), 36-48px desktop / 28-36px mobile
- **Subheadline**: Regular (400), 18-22px desktop / 16-18px mobile, text-gray-400
- **Body Text**: Regular (400), 16-18px, text-gray-300
- **Feature Titles**: Medium (500), 20-24px
- **Stats/Numbers**: Bold (700), 48-64px
- **Buttons**: Medium (500), 16px

## Layout & Spacing System
**Tailwind Units**: 6, 8, 12, 16, 20, 24, 32, 40
- Section padding: py-32 to py-40 desktop, py-16 to py-20 mobile
- Container: max-w-7xl with px-6 to px-8
- Bento grid gaps: gap-4 to gap-6
- Generous whitespace: space-y-12 to space-y-16 between major elements

## Page Structure & Sections

### 1. Hero Section (90vh)
- **Layout**: Centered content on pitch black background
- **Elements**:
  - Small logo/wordmark top-center (h-8)
  - Large hero headline (max-w-4xl centered): "Your fans are slipping away. We'll help you keep them."
  - Subtext (max-w-2xl centered, text-gray-400)
  - Email capture form inline (max-w-md centered)
  - Form: Input + button side-by-side, both with subtle borders, input bg-black
  - Waitlist counter below: "2,847 creators waiting" with small avatars row (8-10 overlapping circles)
- **Background**: Pure black (bg-black), no gradients

### 2. Logo Carousel Strip
- **Layout**: Full-width, py-16, border-t border-b border-gray-900
- **Content**: Horizontal scrolling/auto-sliding row of creator platform logos (Patreon, OnlyFans, Substack, etc.)
- **Style**: Logos in grayscale/white, opacity-60

### 3. Problem Statement Section
- **Layout**: Centered single column, max-w-3xl
- **Content**:
  - Headline: "The $10k/month creator's dilemma"
  - 3-4 pain points in large text blocks (text-xl, text-gray-300)
  - Each separated by generous vertical spacing (space-y-8)
  - Pull quote style: border-l-2 border-white, pl-6

### 4. Features Bento Grid
- **Layout**: Asymmetric bento-style grid using CSS Grid
  - Desktop: 3 columns, varied row spans
  - 2 large feature cards (span 2 rows)
  - 4 smaller feature cards (single height)
- **Card Styling**: 
  - bg-gray-950, border border-gray-900, rounded-2xl, p-8 to p-12
  - Each card: Icon (w-10 h-10), title, description, micro-feature visual
- **Features**:
  1. Smart Fan Categories (large card with category preview)
  2. Engagement Reminders (small card)
  3. Analytics Dashboard (large card with mini chart visual)
  4. Re-engagement Templates (small card)
  5. Churn Prevention Alerts (small card)
  6. Revenue Insights (small card)

### 5. Product Preview Section
- **Layout**: Full-width dark section, py-40
- **Content**:
  - Centered headline: "Built for creators who care about retention"
  - Large dashboard mockup image (max-w-6xl, rounded-xl, border border-gray-900)
  - Floating UI callouts (3-4 small cards pointing to features, absolute positioned)

### 6. Social Proof Grid
- **Layout**: 3-column grid (lg:grid-cols-3), gap-6
- **Cards**: 6 testimonial cards
  - Each: bg-gray-950, border border-gray-900, rounded-xl, p-6
  - Quote text (text-gray-300)
  - Creator avatar (w-12 h-12, rounded-full, border-2 border-gray-800)
  - Name + earnings tier below avatar
  - 5-star rating (small stars)

### 7. Stats Banner
- **Layout**: Full-width, py-24, border-y border-gray-900
- **Content**: 3-column stats grid
  - "2,847 Creators Waiting"
  - "30% Avg. Renewal Lift"
  - "5 Min Setup"
- **Style**: Large numbers (text-6xl font-bold), small descriptive text below (text-gray-400)

### 8. FAQ Section
- **Layout**: Centered, max-w-3xl
- **Elements**:
  - "Frequently Asked Questions" headline
  - Accordion component: 6-8 questions
  - Each item: border-b border-gray-900, py-6
  - Question (text-lg font-medium), expandable answer (text-gray-400)
  - Chevron icon right-aligned

### 9. Final CTA Section
- **Layout**: Centered, py-32
- **Elements**:
  - Headline: "Join the waitlist"
  - Subtext: "Be the first to know when we launch in Q2 2025"
  - Email form (repeated, max-w-md)
  - Small text: "No spam. Launch notification only."

### 10. Footer
- **Layout**: py-12, border-t border-gray-900
- **Content**: 
  - Centered logo + tagline
  - Footer links row (About, Privacy, Terms, Contact) - text-sm, text-gray-500
  - Copyright text-xs, text-gray-600

## Component Specifications

### Email Forms
- Input: h-14, px-6, bg-black, border-2 border-gray-800, rounded-xl, text-white, placeholder-gray-500
- Button: h-14, px-8, bg-white, text-black, rounded-xl, font-medium
- Desktop: flex-row, mobile: stack w-full
- Button on dark bg: backdrop-blur-md, bg-white/90

### Bento Cards
- Background: bg-gray-950 or bg-gray-900 for variation
- Border: border-gray-900 or border-gray-800
- Padding: p-8 to p-12 depending on card size
- Rounded: rounded-2xl to rounded-3xl
- Hover: subtle border-white/10 glow (minimal animation)

### Icons
- **Library**: Heroicons outline
- **Sizes**: w-10 h-10 for feature cards, w-6 h-6 for inline

### Avatars
- Waitlist avatars: w-10 h-10, border-2 border-black, -ml-3 for overlap
- Testimonial avatars: w-12 h-12, border-2 border-gray-800

## Images Section

### Hero Background
**Type**: None - pure black background for maximum contrast

### Product Mockup
**Description**: Full dashboard interface showing dark-themed UI with fan categories, engagement timeline, and analytics cards. Interface should use dark gray panels (bg-gray-900) with white text and colored accent elements.
**Placement**: Product preview section, centered
**Size**: 1400px wide, rounded-xl with subtle border
**Treatment**: border border-gray-900, shadow-2xl

### Creator Avatars
**Description**: Circular profile photos of diverse creators
**Placement**: Below hero email form (8-10 avatars overlapping), testimonial cards
**Sizes**: Hero: w-10 h-10, Testimonials: w-12 h-12

### Logo Carousel Images
**Description**: Platform logos (Patreon, OnlyFans, Substack, Gumroad, Ko-fi, etc.) in white/grayscale
**Placement**: Logo strip section
**Treatment**: opacity-60, auto-scroll animation

## Responsive Behavior
- **Desktop**: Full bento grid, multi-column layouts, py-32 to py-40 spacing
- **Tablet**: 2-column bento, reduce to py-20 spacing
- **Mobile**: Single column, stack all grids, py-16 spacing, maintain visual hierarchy through typography scale

## Key Design Principles
1. **Dark Minimalism**: Pitch black backgrounds, clean white text, subtle gray accents only
2. **Generous Spacing**: Extreme breathing room between sections (py-32+)
3. **Bento Aesthetics**: Asymmetric grid layouts with varied card sizes
4. **Subtle Borders**: Gray-900/gray-800 borders for card definition without harshness
5. **Premium Feel**: Large typography, spacious padding, refined details
6. **Minimal Animation**: Only subtle hover states, no distracting motion