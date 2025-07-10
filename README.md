# CoFounder AI Landing Page

A modern, responsive landing page for CoFounder AI - an AI-powered business automation platform that helps businesses increase their sales by 2x in 2 months.

## Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **AI-Themed Visuals**: Holographic brain imagery and gradient animations
- **Interactive Elements**: Scroll-triggered animations and hover effects
- **Performance Optimized**: Fast loading with modern build tools

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:din-tezekbayev/co-founder-ai-landing.git
   cd co-founder-ai-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## Project Structure

```
src/
├── CoFounderAI.tsx     # Main landing page component
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind

public/
└── vite.svg           # Favicon

Configuration files:
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── .eslintrc.cjs      # ESLint configuration
```

## Component Architecture

The landing page is built as a single comprehensive React component with the following sections:

1. **Hero Section** - Main value proposition with AI brain visualization
2. **Stats Section** - Key performance metrics
3. **Problems Section** - Customer pain points
4. **Solution Section** - AI feature explanations
5. **Results Section** - Client testimonials and success stories
6. **Benefits Section** - Summary of value propositions
7. **CTA Section** - Final call-to-action

## Customization

### Content Updates

Edit the data arrays in `src/CoFounderAI.tsx`:
- `testimonials` - Client testimonials
- `stats` - Performance statistics
- `features` - AI capabilities
- `problems` - Customer pain points

### Styling

The project uses Tailwind CSS for styling. Key customizations:
- Custom fonts: Inter and Montserrat
- AI-themed gradient backgrounds
- Responsive breakpoints
- Custom animations

## Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- GitHub Pages

Build command: `npm run build`
Output directory: `dist`

## License

MIT License - see LICENSE file for details

## Author

Din Tezekbayev