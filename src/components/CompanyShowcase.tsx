import React from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import ImageGallery from './ImageGallery';
import facilityExterior from '@/assets/facility-exterior.jpg';
import warehouse from '@/assets/warehouse.jpg';
import designOffice from '@/assets/design-office.jpg';
import teamPhoto from '@/assets/team-photo.jpg';
import ceoPortrait from '@/assets/ceo-portrait.jpg';
import certifications from '@/assets/certifications.jpg';

const CompanyShowcase = () => {
  const facilityImages = [
    {
      src: facilityExterior,
      alt: "Modern manufacturing facility exterior",
      title: "Manufacturing Facility"
    },
    {
      src: warehouse,
      alt: "Large warehouse with organized inventory",
      title: "Warehouse & Storage"
    },
    {
      src: designOffice,
      alt: "Modern office with design team",
      title: "Design Office"
    },
    {
      src: teamPhoto,
      alt: "Professional team photo",
      title: "Our Team"
    },
    {
      src: certifications,
      alt: "Quality certifications and awards",
      title: "Certifications"
    },
    {
      src: ceoPortrait,
      alt: "CEO portrait in manufacturing facility",
      title: "Leadership"
    }
  ];

  const companyStats = [
    {
      icon: Clock,
      label: "Years of Experience",
      value: "15+",
      description: "Serving the industry with excellence"
    },
    {
      icon: Users,
      label: "Skilled Workforce",
      value: "500+",
      description: "Dedicated professionals"
    },
    {
      icon: MapPin,
      label: "Global Reach",
      value: "25+",
      description: "Countries served worldwide"
    },
    {
      icon: Award,
      label: "Quality Certifications",
      value: "ISO",
      description: "International standards certified"
    }
  ];

  const achievements = [
    "ISO 9001:2015 Quality Management Certified",
    "BRC Global Standard for Food Safety",
    "HACCP Certified Manufacturing",
    "Environmental Management ISO 14001",
    "Occupational Health & Safety OHSAS 18001",
    "Customer Excellence Award 2023"
  ];

  return (
    <section id="company" className="py-16 sm:py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Company
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look inside our world-class manufacturing facility and meet the team behind our exceptional metal can solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <ImageGallery images={facilityImages} columns={3} />
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Company Overview</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Established in 2008, we have grown to become a leading manufacturer of high-quality metal cans and containers. Our commitment to innovation, quality, and customer satisfaction has made us a trusted partner for businesses worldwide.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With state-of-the-art facilities and a dedicated team of professionals, we continue to set new standards in the metal packaging industry.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {companyStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <div className="p-2 bg-primary/10 rounded-lg mx-auto mb-3 w-fit">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Award className="w-5 h-5 text-primary mr-2" />
                Certifications & Awards
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                To provide innovative, sustainable, and high-quality metal packaging solutions that exceed customer expectations while contributing to a more sustainable future.
              </p>
              
              <h4 className="font-semibold text-foreground mb-2">Core Values:</h4>
              <div className="space-y-2">
                {["Quality Excellence", "Customer Focus", "Innovation", "Sustainability"].map((value, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;