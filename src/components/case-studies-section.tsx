import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Intelligent Automation for Finance",
      description: "Streamlined invoice processing using NLP, reducing manual effort by 70%."
    },
    {
      title: "Healthcare Predictive Analytics",
      description: "Developed machine learning models to predict patient risks, improving early intervention outcomes."
    },
    {
      title: "Retail Customer Insights",
      description: "Applied clustering to segment customers and boost targeted marketing ROI by 35%."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6">Case Studies</h2>
          <div className="relative max-w-2xl mx-auto mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg2MjE4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business meeting with data dashboards"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {study.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}