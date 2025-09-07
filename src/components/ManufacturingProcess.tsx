import React from 'react';
import { Settings, Zap, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import manufacturingProcess from '@/assets/manufacturing-process.jpg';
import productionLine from '@/assets/production-line.jpg';
import metalForming from '@/assets/metal-forming.jpg';
import qualityControl from '@/assets/quality-control.jpg';

const ManufacturingProcess = () => {
  const processSteps = [
    {
      icon: Settings,
      title: "Raw Material Preparation",
      description: "High-grade steel and aluminum sheets are prepared and inspected for quality standards.",
      image: metalForming,
      details: ["Material inspection", "Sheet cutting", "Quality verification"]
    },
    {
      icon: Zap,
      title: "Forming & Shaping",
      description: "Advanced machinery shapes the metal into precise can bodies with consistent dimensions.",
      image: productionLine,
      details: ["Deep drawing", "Wall ironing", "Trimming & beading"]
    },
    {
      icon: Shield,
      title: "Coating & Protection",
      description: "Specialized coatings are applied to ensure product safety and extend shelf life.",
      image: manufacturingProcess,
      details: ["Interior coating", "Exterior coating", "Curing process"]
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Rigorous testing ensures every can meets international quality and safety standards.",
      image: qualityControl,
      details: ["Leak testing", "Dimension checks", "Coating integrity"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Manufacturing Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our state-of-the-art manufacturing process ensures precision, quality, and consistency in every metal can we produce.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`relative h-64 md:h-80 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                  
                  <div className={`p-6 sm:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-primary">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground">Quality Rate</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Production</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">50M+</div>
            <div className="text-sm text-muted-foreground">Cans/Month</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">ISO</div>
            <div className="text-sm text-muted-foreground">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;