import { Button } from "./ui/button";
import exampleImage from 'figma:asset/e50e9f55593dc25ca227e7f5688a89b8eb6c2a14.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={exampleImage}
          alt="AI brain network pattern background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-7xl ml-0 px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight tracking-tight">
            ENGINEERING<br />
            INTELLIGENCE<br />
            FOR THE FUTURE
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-lg">
            Transforming cutting-edge AI research and engineering into responsible, scalable solutions.
          </p>
          <Button
            size="lg"
            className="text-base px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-lg uppercase tracking-wide"
          >
            PARTNER WITH US
          </Button>
        </div>
      </div>
    </section>
  );
}