import React from 'react';
import { Utensils, Zap, Droplets, Car, Pill, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import ImageGallery from './ImageGallery';
import industryApplications from '@/assets/industry-applications.jpg';
import customFoodCans from '@/assets/custom-food-cans.jpg';
import beverageCans from '@/assets/beverage-cans.jpg';
import industrialContainers from '@/assets/industrial-containers.jpg';

const IndustriesServed = () => {
  const industries = [
    {
      icon: Utensils,
      name: "Food & Beverage",
      description: "Premium cans for food processing, canned goods, and beverage packaging",
      applications: ["Canned foods", "Pet food", "Sauces", "Beverages"],
      image: customFoodCans
    },
    {
      icon: Zap,
      name: "Energy & Oil",
      description: "Specialized containers for lubricants, oils, and energy sector products",
      applications: ["Engine oils", "Lubricants", "Fuel additives", "Hydraulic fluids"],
      image: industrialContainers
    },
    {
      icon: Droplets,
      name: "Chemical",
      description: "Chemical-resistant containers for safe storage and transportation",
      applications: ["Paints", "Solvents", "Adhesives", "Chemical compounds"],
      image: industryApplications
    },
    {
      icon: Car,
      name: "Automotive",
      description: "Durable packaging solutions for automotive industry components",
      applications: ["Auto parts", "Fluids", "Cleaners", "Maintenance products"],
      image: beverageCans
    },
    {
      icon: Pill,
      name: "Pharmaceutical",
      description: "Medical-grade containers meeting strict pharmaceutical standards",
      applications: ["Medicines", "Supplements", "Medical devices", "Healthcare products"],
      image: industrialContainers
    },
    {
      icon: Package,
      name: "Consumer Goods",
      description: "Versatile packaging for various consumer products and retail items",
      applications: ["Cosmetics", "Aerosols", "Household products", "Personal care"],
      image: customFoodCans
    }
  ];

  const galleryImages = [
    {
      src: industryApplications,
      alt: "Various industry applications of metal cans",
      title: "Industry Applications"
    },
    {
      src: customFoodCans,
      alt: "Food industry metal cans",
      title: "Food & Beverage"
    },
    {
      src: beverageCans,
      alt: "Beverage industry containers",
      title: "Beverage Packaging"
    },
    {
      src: industrialContainers,
      alt: "Industrial and chemical containers",
      title: "Industrial Solutions"
    }
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From food and beverage to industrial applications, our metal cans serve diverse industries with specialized solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm">Applications:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Industry Applications Gallery
            </h3>
            <p className="text-muted-foreground">
              See our metal cans in action across different industries and applications
            </p>
          </div>
          
          <ImageGallery images={galleryImages} columns={4} />
          
          <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;