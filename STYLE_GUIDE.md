# WeatherPro - Complete Style Guide

## Overview
This style guide documents the comprehensive design system for WeatherPro, a premium modern weather mobile application featuring dark purple gradients, glassmorphism design, and smooth animations. Built for iPhone 14 Pro (393x852px).

---

## 🎨 Color Palette

### Primary Colors
- **Background**: `#1a1d3a` - Deep navy blue base
- **Background Gradient**: `from-[#1a1d3a] via-[#2d2557] to-[#1a1d3a]` - Purple-blue gradient
- **Primary Blue**: `#5b9ef5` - Accents, icons, interactive elements
- **Foreground Text**: `#ffffff` - White for primary text

### Secondary Colors
- **Card Background**: `rgba(45, 52, 95, 0.5)` - Semi-transparent dark purple
- **Secondary Purple**: `#2d345f` - Popovers and secondary elements
- **Muted Text**: `#8b93c0` - Secondary text
- **Muted Foreground**: `#a8b0d9` - Tertiary text

### Transparency & Effects
- **Glass Effect**: `backdrop-blur-md bg-white/5` - Glassmorphism
- **Border**: `rgba(91, 158, 245, 0.2)` - Subtle blue border (20% opacity)
- **Hover State**: `bg-white/10` - Hover overlay

### Weather Condition Colors
- **Sunny**: `text-yellow-300` (#fde047)
- **Cloudy**: `text-blue-200` (#bfdbfe)
- **Rainy**: `text-blue-400` (#60a5fa)
- **Drizzle**: `text-blue-300` (#93c5fd)
- **Snow**: `text-blue-100` (#dbeafe)

### Button Gradients
- **Primary/Floating**: `from-blue-500 to-purple-600` - Call-to-action
- **Card Highlight**: `from-blue-500/20 to-purple-600/20` - Active states

---

## 📝 Typography

### Font Family
- **Primary**: System font stack (Tailwind defaults)
- **Weight Normal**: `400`
- **Weight Medium**: `500`

### Text Sizes
- **4xl**: `text-4xl` (36px) - App name, large headings
- **3xl**: `text-3xl` (30px) - Page titles
- **2xl**: `text-2xl` (24px) - Section headers, large values
- **xl**: `text-xl` (20px) - Subheadings
- **lg**: `text-lg` (18px) - Important body text
- **base**: `text-base` (16px) - Standard body text
- **sm**: `text-sm` (14px) - Helper text, labels
- **7xl**: `text-7xl` (72px) - Main temperature display only

### Text Colors & Opacity Hierarchy
- **Primary**: `text-white` - 100% opacity
- **Secondary**: `text-white/90` - 90% opacity
- **Tertiary**: `text-white/80` - 80% opacity
- **Muted**: `text-white/60` - 60% opacity
- **Disabled**: `text-white/50` - 50% opacity
- **Hint**: `text-white/40` - 40% opacity

---

## 📐 Spacing System

### Container Spacing
- **Page Padding**: `p-6` (24px) - Main screens
- **Large Card Padding**: `p-8` (32px) - Hero cards
- **Standard Card Padding**: `p-6` (24px) - Most cards
- **Small Card Padding**: `p-5` (20px) - Detail cards
- **Compact Padding**: `p-4` (16px) - List items

### Gap Spacing
- **XL Gap**: `gap-8` (32px) - Major sections
- **Large Gap**: `gap-6` (24px) - Between cards
- **Medium Gap**: `gap-4` (16px) - Within cards
- **Small Gap**: `gap-3` (12px) - Icons + text
- **XS Gap**: `gap-2` (8px) - Inline elements

### Margin Spacing
- **Large Bottom**: `mb-8` (32px) - Major sections
- **Standard Bottom**: `mb-6` (24px) - Section separation
- **Medium Bottom**: `mb-4` (16px) - Element spacing
- **Small Bottom**: `mb-2` (8px) - Tight spacing

---

## 🔲 Border Radius

### Radius Scale
- **3xl**: `rounded-3xl` (24px) - Main cards, nav bar
- **2xl**: `rounded-2xl` (16px) - Detail cards, inputs
- **xl**: `rounded-xl` (12px) - Small buttons
- **Full**: `rounded-full` - Circular elements, pills
- **Custom Logo**: `rounded-[2.5rem]` (40px) - Splash screen logo

---

## 🧩 Component Library

### UI Components

#### GlassCard
**Purpose**: Primary container with glassmorphism effect

**Specifications**:
```tsx
<GlassCard className="p-6">
  {children}
</GlassCard>
```
- Background: `backdrop-blur-md bg-white/5`
- Border: `border border-white/10`
- Border Radius: `rounded-3xl`
- Hover: Optional `hover:bg-white/10`

#### Button (3 Variants)

**Primary Button**:
- Background: `bg-gradient-to-r from-blue-500 to-purple-600`
- Text: `text-white`
- Hover: `hover:shadow-lg hover:shadow-purple-500/50`
- Padding: `px-6 py-3`
- Border Radius: `rounded-full`

**Ghost Button**:
- Background: `bg-white/5`
- Border: `border border-white/10`
- Text: `text-white`
- Hover: `hover:bg-white/10`

**Floating Button**:
- Background: `bg-gradient-to-r from-blue-500 to-purple-600`
- Shadow: `shadow-lg shadow-purple-500/50`
- Hover: `hover:scale-105`
- Size: `w-14 h-14` (bottom nav center)

#### SearchInput
**Specifications**:
- Background: `bg-white/5`
- Border: `border border-white/10`
- Border Radius: `rounded-2xl`
- Padding: `pl-12 pr-4 py-4` (for icon)
- Focus: `focus:border-blue-500/50 focus:bg-white/10`
- Icon: Left-aligned, `text-white/40`

#### BottomNavigation
**Specifications**:
- Position: `fixed bottom-0`
- Container: `backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl`
- Padding: `p-4`
- Icons: `w-6 h-6`
- Active State: `bg-blue-500/20 text-blue-400`
- Inactive: `text-white/50 hover:text-white`
- Center Button: Elevated (`-mt-8`), `w-14 h-14`

---

### Weather Components

#### WeatherIcon
**Purpose**: Dynamic weather condition icons

**Sizes**:
- Small: `w-8 h-8` - List items, hourly forecast
- Medium: `w-16 h-16` - Cards, daily forecast
- Large: `w-32 h-32` - Home screen hero

**Conditions Mapped**:
- Sunny/Clear → Sun (yellow-300)
- Rainy/Rain → CloudRain (blue-400)
- Drizzle → CloudDrizzle (blue-300)
- Cloudy/Partly → Cloud (blue-200)
- Snow → CloudSnow (blue-100)
- Wind → Wind (blue-200)
- Fog/Mist → CloudFog (gray-300)

#### HourlyForecastItem
**Specifications**:
- Container: `min-w-[70px] p-4`
- Border Radius: `rounded-2xl`
- Active State: `bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20`
- Layout: Vertical flex with centered items
- Gap: `gap-3`

**Contents**:
- Time: `text-sm` with opacity based on active state
- Weather Icon: Small size (32x32)
- Temperature: `font-medium`

#### DailyForecastCard
**Specifications**:
- Base: GlassCard with `p-5`
- Clickable: `cursor-pointer hover:bg-white/10`

**Layout**:
1. Header Row: Day/Date + Weather Icon
2. Temperature Row: High (2xl) + Low (xl, 50% opacity)
3. Details Row: Humidity + Wind speed icons

#### CityWeatherCard
**Purpose**: Search results preview card

**Specifications**:
- Base: GlassCard with `p-6`
- Layout: Horizontal split

**Left Section**:
- City name + country badge
- Large temperature (4xl)
- Condition text
- High/Low temps

**Right Section**:
- Medium weather icon

---

## 📱 Screen Specifications

### 1. Splash Screen
**Layout**:
- Full screen gradient background
- Centered content column
- Logo: 128x128 rounded square with glow effect
- App name: `text-4xl font-bold`
- Tagline: `text-white/60`
- CTA Button: Floating variant
- Footer: API attribution

**Animations**:
- Logo: Scale in + floating animation
- Text: Fade up with stagger
- Button: Delayed fade in
- Auto-navigate: 3 second timer

### 2. Home Screen
**Layout Sections**:
1. **Header** (pt-4):
   - City name (3xl, bold)
   - Country code (white/60)

2. **Hero Card**:
   - Large weather icon (animated scale in)
   - Temperature (7xl, animated)
   - Condition + feels like
   - High/Low temps

3. **Hourly Forecast**:
   - Title + "See More" link
   - Horizontal scroll (hide scrollbar)
   - First item active state

4. **Today's Details**:
   - 2x2 grid of detail cards
   - Icons: Droplets, Wind, Eye, Gauge
   - Values in 2xl

**Bottom Spacing**: `pb-28` (for fixed nav)

### 3. Forecast Screen
**Layout**:
- Back button + Page title
- City subtitle
- Vertical stack of DailyForecastCards
- Staggered entrance animations (delay: index * 0.1)

**Spacing**: `space-y-4` between cards

### 4. Search Screen
**Layout Sections**:
1. **Header**:
   - Back button + Title
   - SearchInput

2. **Conditional Content**:
   - Loading: Centered spinner
   - Results: Stacked CityWeatherCards
   - No Results: EmptyState
   - Default: Recent Locations list

**Recent Locations**:
- Button list with MapPin icon
- City name + country
- Hover effect

### 5. Settings Screen
**Layout Sections**:
1. **Preferences Group**:
   - Dark Mode toggle
   - Temperature Unit toggle (C/F indicator)
   - Notifications toggle

2. **Account Group**:
   - Profile button

3. **About Group**:
   - About + version
   - Contact button

**Toggle Switch**:
- Width: `w-12 h-6`
- Active: Gradient background
- Knob: `w-5 h-5` white circle
- Animation: `transition-transform`

---

## 🎭 Animations

### Motion (Framer Motion) Usage

**Screen Entrance**:
```tsx
initial={{ y: -20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5 }}
```

**Staggered List**:
```tsx
transition={{ delay: index * 0.1, duration: 0.3 }}
```

**Scale In**:
```tsx
initial={{ scale: 0 }}
animate={{ scale: 1 }}
transition={{ type: "spring" }}
```

**Logo Float** (Splash):
```tsx
animate={{
  rotate: [0, 10, -10, 0],
  y: [0, -10, 0]
}}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

**Button Hover**:
- Scale: `hover:scale-105`
- Shadow: `hover:shadow-lg`
- Background: `hover:bg-white/10`
- Transition: `transition-all` or `transition-colors`

---

## 🔄 State Components

### LoadingSpinner
- Dual-ring spinner
- Outer ring: `border-white/20 border-t-blue-500`
- Inner pulse: Gradient blur blob
- Size: `w-16 h-16`

### ErrorState
- Red icon circle (w-20)
- AlertCircle icon
- Title + message
- Optional "Try Again" button

### EmptyState
- Gray icon circle
- CloudOff icon
- Title + description
- No action button

---

## 🌐 API Integration Structure

### Service Layer (`weatherApi.ts`)

**Mock Mode** (Default):
- Realistic delays (300-500ms)
- Complete weather data
- No API key needed

**Production Mode**:
- OpenWeatherMap API
- Endpoints: `/weather`, `/forecast`, `/find`
- Uncomment API calls
- Add `VITE_OPENWEATHER_API_KEY` to `.env`

**Data Types**:
- `WeatherData`: Main weather object
- `HourlyForecast`: Hourly data array
- `DailyForecast`: 7-day forecast

### Context (`WeatherContext`)

**State Management**:
- `weatherData`: Current weather object
- `loading`: Boolean for loading state
- `error`: Error message string
- `isCelsius`: Temperature unit toggle
- `isDarkMode`: Theme toggle
- `notificationsEnabled`: Notification toggle

**Methods**:
- `setCity(city: string)`: Fetch weather for city
- `toggleTemperatureUnit()`: C ↔ F
- `toggleDarkMode()`: Theme switch
- `toggleNotifications()`: Alert toggle
- `convertTemp(temp: number)`: Unit conversion

---

## 📐 Layout & Dimensions

### Mobile Frame
- **Width**: `393px` (max-w-[393px])
- **Height**: `852px` (min-h-screen)
- **Platform**: iPhone 14 Pro

### Safe Areas
- **Top Padding**: `pt-4` (16px) - Status bar clearance
- **Bottom Padding**: `pb-28` (112px) - Bottom nav clearance
- **Side Padding**: `px-6` (24px) - Horizontal margins

### Scrolling
- Parent: `overflow-auto` or default
- Horizontal lists: `overflow-x-auto scrollbar-hide`
- Vertical content: Natural scroll

---

## ♿ Accessibility

### Touch Targets
- Minimum: 44x44px (iOS guideline)
- Buttons: 48px height minimum
- Icon buttons: 44x44px minimum
- Spacing: 8px minimum between targets

### Color Contrast
- Primary text: WCAG AAA (7:1+)
- Secondary text (80%): WCAG AA (4.5:1+)
- Interactive elements: High contrast hover/active states

### Focus States
- Inputs: Clear focus ring
- Buttons: Visible hover/active states
- Navigation: Active page indicator

---

## 🎨 Design Principles

1. **Premium Feel**: High-quality gradients, smooth animations, generous spacing
2. **Glassmorphism First**: Layered transparency creates depth
3. **Dark Optimized**: Colors and contrasts designed for dark environments
4. **Minimal Content**: Only essential information, no clutter
5. **Touch Friendly**: Large targets, clear feedback, gesture support
6. **Smooth Transitions**: Everything animated, nothing jarring
7. **Icon Driven**: Visual icons as primary communication
8. **Futuristic Aesthetic**: Modern, clean, tech-forward design

---

## 📦 Export & Handoff

### Component Organization
```
src/app/components/
├── ui/              # Reusable UI primitives
├── weather/         # Domain-specific components
└── figma/           # Figma-specific utilities
```

### Naming Conventions
- **Components**: PascalCase (`GlassCard`, `WeatherIcon`)
- **Files**: Match component name (`GlassCard.tsx`)
- **Props**: camelCase (`onClick`, `className`)
- **CSS Classes**: Tailwind utilities

### Type Safety
- All components fully typed
- Props interfaces exported
- API responses typed
- Context fully typed

### Ready for Conversion
- React Native: Component structure translates directly
- Flutter: Design tokens easily mapped
- Web: Production-ready as-is

---

## 📚 File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── SearchInput.tsx
│   │   │   ├── BottomNavigation.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorState.tsx
│   │   │   └── EmptyState.tsx
│   │   └── weather/
│   │       ├── WeatherIcon.tsx
│   │       ├── HourlyForecastItem.tsx
│   │       ├── DailyForecastCard.tsx
│   │       └── CityWeatherCard.tsx
│   ├── context/
│   │   └── WeatherContext.tsx
│   ├── screens/
│   │   ├── SplashScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── ForecastScreen.tsx
│   │   ├── SearchScreen.tsx
│   │   └── SettingsScreen.tsx
│   └── App.tsx
├── services/
│   └── weatherApi.ts
└── styles/
    ├── theme.css
    └── fonts.css
```

---

## 🔧 Technical Stack

- **Framework**: React 18.3.1
- **Router**: React Router DOM 7.15.0
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React 0.487.0
- **Build Tool**: Vite 6.3.5
- **Package Manager**: pnpm

---

## 📋 Version History

**Version**: 2.0  
**Last Updated**: May 14, 2026  
**Design Source**: Weather App Mobile UI Reference  
**Status**: Production Ready ✅

---

## 🚀 Quick Start Checklist

- [ ] Install dependencies: `pnpm install`
- [ ] Copy `.env.example` to `.env`
- [ ] (Optional) Add OpenWeatherMap API key
- [ ] Review `README_WEATHER_APP.md` for full documentation
- [ ] Start dev server
- [ ] Navigate through all 5 screens
- [ ] Test responsive behavior
- [ ] Verify animations
- [ ] Test search functionality
- [ ] Toggle settings

---

*This style guide is comprehensive and reflects the production-ready WeatherPro application with all screens, components, and functionality implemented.*
