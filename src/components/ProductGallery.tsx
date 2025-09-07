import React from 'react';
import ImageGallery from './ImageGallery';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import productVariety from '@/assets/product-variety.jpg';
import customFoodCans from '@/assets/custom-food-cans.jpg';
import beverageCans from '@/assets/beverage-cans.jpg';
import industrialContainers from '@/assets/industrial-containers.jpg';

const ProductGallery = () => {
  const productImages = [
    {
      src: productVariety,
      alt: "Diverse collection of metal cans in various sizes and shapes",
      title: "Product Variety"
    },
    {
      src: customFoodCans,
      alt: "Custom designed metal cans for food industry",
      title: "Food Industry Cans"
    },
    {
      src: beverageCans,
      alt: "Beverage cans with custom branding and designs",
      title: "Beverage Containers"
    },
    {
      src: industrialContainers,
      alt: "Industrial metal containers for chemical and pharmaceutical industries",
      title: "Industrial Containers"
    }
  ];

  const specifications = [
    { label: "Capacity Range", value: "50ml - 5L" },
    { label: "Material", value: "Tinplate, Aluminum" },
    { label: "Wall Thickness", value: "0.15mm - 0.30mm" },
    { label: "Custom Shapes", value: "Round, Square, Oval" },
    { label: "Printing", value: "Full Color, Embossing" },
    { label: "Closure Types", value: "Easy Open, Standard" }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Product Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of metal cans and containers, crafted with precision for various industries and applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ImageGallery images={productImages} columns={2} />
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Product Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Custom Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Need something unique? We specialize in custom metal can solutions tailored to your specific requirements.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Custom sizes and shapes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Specialized coatings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Brand-specific designs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Volume-based pricing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;