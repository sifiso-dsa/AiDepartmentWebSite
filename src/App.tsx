
import { AboutSection } from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import { CaseStudiesSection } from "./components/case-studies-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import LandingPage from "./components/LandingPage.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}