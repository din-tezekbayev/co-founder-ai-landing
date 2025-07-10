# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for CoFounder AI, an AI-powered business automation platform. The project consists of a single comprehensive React component that showcases the product's features, benefits, and client testimonials.

## Key Architecture

### Single Component Structure
- **Main Component**: `cofounder_ai_react.tsx` - Contains the entire landing page as a single React component
- **No Build System**: This appears to be a standalone React component without a traditional build configuration
- **No Package Dependencies**: No package.json file exists, suggesting this is designed to be embedded or used within another system

### Component Architecture
The main component (`CoFounderAI`) is structured as follows:

**State Management:**
- `isVisible` - Object tracking visibility states for scroll-triggered animations
- `activeTab` - String controlling active tab state (currently unused but prepared for future tabbed content)

**Key Data Structures:**
- `testimonials` - Array of client testimonial objects with name, handle, followers, revenue, and placeholder images
- `stats` - Array of statistics with icons, numbers, and labels
- `features` - Array of feature objects describing AI capabilities (targeting, sales, scaling)
- `problems` - Array of problem objects highlighting customer pain points

**Styling Approach:**
- Utilizes Tailwind CSS classes extensively for styling
- Gradient backgrounds and AI-themed visual elements
- Responsive design with mobile-first approach
- Custom animations and hover effects

## Key Features

### Visual Design Elements
- **AI Brain Visualization**: Holographic brain imagery with orbital animations
- **Gradient Backgrounds**: Purple-to-blue gradients creating futuristic AI aesthetic
- **Scroll Animations**: Intersection Observer API for reveal animations
- **Interactive Elements**: Hover effects, animated buttons, and floating components

### Content Sections
1. **Hero Section**: Main value proposition with AI brain visualization
2. **Stats Section**: Key performance metrics
3. **Problems Section**: Customer pain points
4. **Solution Section**: AI feature explanations
5. **Results Section**: Client testimonials and success stories
6. **Benefits Section**: Summary of value propositions
7. **CTA Section**: Final call-to-action

### Font Loading
- Custom font loader component for Inter and Montserrat fonts
- Dynamic font loading from Google Fonts
- Cleanup mechanism to prevent memory leaks

## Development Notes

### No Traditional Build Process
Since there's no package.json, this component is likely:
- Embedded within a larger application
- Used with a CDN-based React setup
- Part of a different build system not visible in this directory

### Styling Dependencies
- Assumes Tailwind CSS is available
- Uses Lucide React icons (imported from 'lucide-react')
- Requires both Inter and Montserrat fonts

### State Management
- Uses React hooks (useState, useEffect)
- Intersection Observer for scroll-triggered animations
- No external state management libraries

## Common Development Tasks

Since this is a standalone component without build configuration:

**Testing the Component:**
- Requires integration into a React application with proper dependencies
- Need to ensure Tailwind CSS and Lucide React are available
- Test responsive behavior across different screen sizes

**Making Changes:**
- Edit the `cofounder_ai_react.tsx` file directly
- Focus on the specific section you want to modify
- Maintain the existing Tailwind CSS class structure
- Test animations and interactive elements

**Content Updates:**
- Modify the data arrays (testimonials, stats, features, problems) for content changes
- Update text content directly in the JSX
- Replace placeholder images with actual assets

## Technical Dependencies

**Required External Libraries:**
- React (with hooks support)
- Lucide React (for icons)
- Tailwind CSS (for styling)

**Browser APIs Used:**
- Intersection Observer API (for scroll animations)
- DOM manipulation (for font loading)

## File Structure

```
/
├── cofounder_ai_react.tsx  # Main landing page component
└── CLAUDE.md               # This documentation file
```

This is a minimal project structure focused on a single, comprehensive React component for a business landing page.