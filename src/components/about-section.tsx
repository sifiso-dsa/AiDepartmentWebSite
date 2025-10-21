import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The AI Engineering Department at The Data Science Academy (DSA) is a forward-looking hub 
              dedicated to transforming artificial intelligence research into real-world, impactful solutions. 
              We bridge the gap between society's needs, business success, and client aspirations by delivering 
              intelligent systems built for scale, grounded in ethics, and designed for measurable value.
            </p>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1531535807748-218331acbcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwdGVjaG5vbG9neSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4NjUxMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team of engineers collaborating"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}