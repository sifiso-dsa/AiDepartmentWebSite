# AI Engineering Department Landing Page - Download Package

This package contains your complete AI Engineering Department landing page built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
ai-engineering-landing/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── separator.tsx
│   │   │   └── ... (all shadcn components)
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── services-section.tsx
│   │   ├── case-studies-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── assets/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Setup Instructions

1. **Create a new React project:**
   ```bash
   npm create vite@latest ai-engineering-landing -- --template react-ts
   cd ai-engineering-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm install lucide-react
   npm install class-variance-authority
   npm install clsx
   npm install tailwind-merge
   ```

3. **Replace the generated files with the ones from this package**

4. **Add your assets:**
   - Place your AI brain network background image in `/public/assets/`
   - Place your DSA logo in `/public/assets/`
   - Update the import paths in the components

5. **Run the development server:**
   ```bash
   npm run dev
   ```

## Key Features

- ✅ Hero section with AI brain network background
- ✅ About Us section with team collaboration imagery
- ✅ Services section with AI workflow visualizations
- ✅ Case Studies showcasing finance, healthcare, and retail successes
- ✅ Testimonials from enterprise clients
- ✅ Contact section with Cape Town location details
- ✅ Footer with DSA logo and social links
- ✅ Fully responsive design
- ✅ Modern UI components using shadcn/ui
- ✅ TypeScript support
- ✅ Tailwind CSS styling

## Dependencies Required

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

## Asset Requirements

You'll need to replace the following asset imports with your actual files:

1. **AI Brain Network Background Image**
   - Currently imported as: `exampleImage from 'figma:asset/...'`
   - Replace with: `import heroBackground from './assets/ai-brain-network.png'`

2. **DSA Logo**
   - Currently imported as: `logo from 'figma:asset/...'`
   - Replace with: `import logo from './assets/dsa-logo.png'`

## Customization

- **Colors**: Modify the CSS variables in `styles/globals.css`
- **Typography**: Adjust font sizes and weights in the same file
- **Content**: Update text content in each component file
- **Images**: Replace Unsplash URLs with your own images as needed

## Notes

- The project uses Tailwind CSS v4.0 with custom CSS variables
- All components are modular and can be easily customized
- The design is fully responsive and works on all screen sizes
- shadcn/ui components provide a consistent design system

---

Built with ❤️ for The Data Science Academy