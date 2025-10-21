import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The DSA AI Engineering team transformed how we operate. Their AI solutions helped us scale seamlessly and responsibly.",
      author: "Enterprise Client",
      company: "Retail"
    },
    {
      quote: "From strategy to deployment, DSA has been a trusted partner in our AI journey.",
      author: "Healthcare Partner",
      company: "Healthcare"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6">Testimonials</h2>
          <div className="relative max-w-2xl mx-auto mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc1ODU4NjE0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Smiling professionals shaking hands"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="block">{testimonial.author}</span>
                    <span>{testimonial.company}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}