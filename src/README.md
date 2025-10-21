# AI Engineering Department Landing Page

A modern, responsive landing page for The Data Science Academy's AI Engineering Department built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ **Hero Section** with AI brain network background and compelling headline
- ✅ **About Us** section describing DSA's AI engineering hub
- ✅ **Services** section covering AI strategy through automation
- ✅ **Case Studies** highlighting finance, healthcare, and retail successes
- ✅ **Testimonials** from enterprise clients
- ✅ **Contact** information for Cape Town location
- ✅ **Footer** with DSA logo and social links
- ✅ Fully responsive design
- ✅ Modern UI components using shadcn/ui
- ✅ TypeScript support
- ✅ Tailwind CSS v4.0 styling

## Quick Start

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your assets:**
   - Place your AI brain network background image in `/public/assets/ai-brain-network.png`
   - Place your DSA logo in `/public/assets/dsa-logo.png`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:5173](http://localhost:5173) in your browser**

## Project Structure

```
src/
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── case-studies-section.tsx
│   ├── testimonials-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── styles/
│   └── globals.css       # Tailwind CSS and custom styles
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Customization

### Colors & Styling
Modify the CSS variables in `src/styles/globals.css` to match your brand:

```css
:root {
  --primary: #030213;
  --footer-background: #0d1142;
  /* ... other variables */
}
```

### Content
Update the content in each component file:
- **Hero**: Modify headline and description in `hero-section.tsx`
- **About**: Update company description in `about-section.tsx`
- **Services**: Add/modify services in `services-section.tsx`
- **Case Studies**: Update success stories in `case-studies-section.tsx`
- **Contact**: Update contact information in `contact-section.tsx`

### Images
- Replace Unsplash URLs with your own images
- Update asset paths in components that reference local images

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS v4.0** - Styling framework
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library
- **Vite** - Build tool

## Deployment

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

The build artifacts will be stored in the `dist/` directory.

## Support

For questions or support regarding this landing page, please contact The Data Science Academy at info@datascienceacademy.org.

---

Built with ❤️ for The Data Science Academy