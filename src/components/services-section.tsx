import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Brain, Search, Database, Cog, Eye, Zap } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Roadmapping",
      description: "Aligning AI adoption with business objectives."
    },
    {
      icon: Search,
      title: "Use Case Discovery & Validation",
      description: "Identifying opportunities with the highest impact."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building secure, scalable pipelines."
    },
    {
      icon: Cog,
      title: "Model Development & Deployment",
      description: "Production-ready AI systems."
    },
    {
      icon: Eye,
      title: "NLP & Computer Vision",
      description: "Unlocking insights from unstructured data."
    },
    {
      icon: Zap,
      title: "AI Integration & Automation",
      description: "Embedding intelligence into workflows."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6">Our Services</h2>
          <div className="relative max-w-2xl mx-auto mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV0d29ya3xlbnwxfHx8fDE3NTg2NTEwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Abstract visualization of AI workflows"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}