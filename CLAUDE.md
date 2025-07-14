# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for CoFounder AI, an AI-powered business automation platform. The project is a complete Vite + React + TypeScript application with full lead capture functionality, Facebook Pixel tracking, and webhook integration for data submission.

## Key Architecture

### Modern React Application
- **Build System**: Vite with TypeScript
- **Main Component**: `src/CoFounderAI.tsx` - Main landing page component
- **Routing**: React Router with thank you page
- **Lead Form**: Professional lead capture with validation
- **Package Management**: npm with comprehensive dependencies

### Component Architecture
The application is structured as follows:

**Main Components:**
- `CoFounderAI.tsx` - Main landing page with sections and navigation
- `ThankYouPage.tsx` - Post-submission thank you page with next steps
- `LeadForm.tsx` - Lead capture form with validation and submission

**Services:**
- `googleSheets.ts` - Webhook integration for lead submission
- `facebookPixel.ts` - Facebook Pixel tracking utilities

**State Management:**
- React hooks (useState, useEffect)
- Form validation and submission states
- Intersection Observer for scroll animations
- React Router for navigation

## Key Features

### Lead Capture System
- **Professional Form**: Name, phone, company, message fields
- **Real-time Validation**: Client-side form validation with error messages
- **Loading States**: Visual feedback during submission
- **Error Handling**: Graceful error handling with user feedback
- **Webhook Integration**: Direct submission to `https://n8n.conglomerate.cc/webhook/save/leads`

### Facebook Pixel Integration
- **Pixel ID**: `1114606174056981`
- **PageView Tracking**: Automatic page view tracking
- **Lead Events**: Conversion tracking on form submission
- **Thank You Page**: Lead event tracking on successful submission
- **TypeScript Utils**: Type-safe pixel event functions

### Visual Design Elements
- **AI Brain Visualization**: Holographic brain imagery with animations
- **Gradient Backgrounds**: Purple-to-blue gradients creating futuristic AI aesthetic
- **Scroll Animations**: Intersection Observer API for reveal animations
- **Interactive Elements**: Hover effects, animated buttons, and floating components
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Content Sections
1. **Hero Section**: Main value proposition with AI brain visualization
2. **Stats Section**: Key performance metrics
3. **Problems Section**: Customer pain points
4. **Solution Section**: AI feature explanations
5. **Lead Form Section**: Professional lead capture form
6. **Thank You Page**: Post-submission confirmation and next steps

### Routing & Navigation
- **React Router**: Client-side routing with `/` and `/thank-you` routes
- **Smooth Navigation**: All CTA buttons link to form section
- **Thank You Flow**: Automatic redirect after successful form submission

## Technical Implementation

### Dependencies
**Production Dependencies:**
- `react` & `react-dom` - Core React framework
- `react-router-dom` - Client-side routing
- `lucide-react` - Icon library
- `@types/react-router-dom` - TypeScript definitions for routing

**Development Dependencies:**
- `vite` - Build tool and dev server
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS framework
- `eslint` - Code linting
- `@types/*` - TypeScript definitions

### Build Configuration
- **Vite Config**: Modern build tool with fast HMR
- **TypeScript**: Strict type checking enabled
- **Tailwind CSS**: PostCSS integration
- **ESLint**: Code quality enforcement

### Facebook Pixel Setup
The Facebook Pixel is configured in `index.html` with:
- Pixel ID: `1114606174056981`
- PageView tracking on all pages
- Lead conversion tracking
- Noscript fallback for non-JavaScript environments

### Webhook Integration
Form submissions are sent to webhook endpoint:
- **URL**: `https://n8n.conglomerate.cc/webhook/save/leads`
- **Method**: POST with JSON payload
- **Data Format**: Timestamp, name, phone, company, message, source, status
- **Timezone**: Asia/Almaty for timestamp formatting

## File Structure

```
/
├── src/
│   ├── components/
│   │   └── LeadForm.tsx          # Lead capture form component
│   ├── services/
│   │   ├── googleSheets.ts       # Webhook integration service
│   │   └── facebookPixel.ts      # Facebook Pixel utilities
│   ├── utils/
│   │   └── facebookPixel.ts      # Facebook Pixel utilities
│   ├── assets/
│   │   └── images/
│   │       ├── fansy-brain.png   # AI brain visualization
│   │       └── box.png           # Additional assets
│   ├── CoFounderAI.tsx           # Main landing page component
│   ├── ThankYouPage.tsx          # Thank you page component
│   ├── main.tsx                  # App entry point with routing
│   ├── index.css                 # Global styles
│   └── vite-env.d.ts             # Vite type definitions
├── index.html                    # HTML template with Facebook Pixel
├── package.json                  # Dependencies and scripts
├── vite.config.ts                # Vite configuration
├── tailwind.config.cjs           # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── CLAUDE.md                     # This documentation file
```

## Common Development Tasks

### Lead Management
- **Form Fields**: Modify form fields in `src/components/LeadForm.tsx`
- **Validation**: Update validation rules in the `validateForm` function
- **Webhook URL**: Change endpoint in `src/services/googleSheets.ts`
- **Success Flow**: Customize thank you page in `src/ThankYouPage.tsx`

### Facebook Pixel
- **Pixel ID**: Update in `index.html` and `src/utils/facebookPixel.ts`
- **Events**: Add custom events using the utility functions
- **Tracking**: Monitor conversions in Facebook Events Manager

### Content Updates
- **Text Content**: Edit directly in component JSX
- **Statistics**: Update the `stats` array in `CoFounderAI.tsx`
- **Features**: Modify the `features` array for AI capabilities
- **Problems**: Update the `problems` array for customer pain points

### Styling
- **Tailwind Classes**: Modify utility classes throughout components
- **Colors**: Update gradient and color schemes
- **Responsive**: Test and adjust responsive breakpoints
- **Animations**: Customize scroll animations and hover effects

### Deployment
**Build Commands:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Deployment Ready:**
- Optimized Vite build output in `dist/`
- All assets properly bundled
- Facebook Pixel configured
- Webhook integration active

## Integration Notes

### Webhook Payload Format
The form sends JSON data in this format:
```json
{
  "timestamp": "14.07.2025, 15:30:25",
  "name": "User Name",
  "phone": "+7 777 123 4567",
  "company": "Company Name",
  "message": "User message or 'Не указано'",
  "source": "landing_page",
  "status": "Новая заявка"
}
```

### Facebook Pixel Events
- **PageView**: Tracked automatically on all pages
- **Lead**: Fired on form submission and thank you page
- **Custom Events**: Available via utility functions

This is a production-ready landing page with complete lead capture functionality, ready for deployment and advertising campaigns.