import { Separator } from "./ui/separator";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "figma:asset/b321be79106be5303a38f795ca1e3943941e3544.png";

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--footer-background)', color: 'var(--footer-foreground)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img src={logo} alt="DSA Logo" className="h-20 w-auto" />
          </div>
          
          {/* Content on the right */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl mb-2">The Data Science Academy</h3>
            <p className="text-lg mb-4 opacity-90">AI Engineering Department</p>
            <p className="text-base mb-8 opacity-80">
              Innovating responsibly. Engineering intelligence. Impacting the future.
            </p>
            
            <Separator className="my-8 bg-white/20" />
            
            <div className="flex justify-center md:justify-start items-center gap-6">
              <span className="text-sm opacity-80">Follow us:</span>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Youtube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}