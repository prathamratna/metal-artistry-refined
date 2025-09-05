import { Calendar, Users, Globe, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import qualityImage from '@/assets/quality-control.jpg';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      value: "25+",
      label: "Years Experience",
      color: "text-primary"
    },
    {
      icon: Users,
      value: "100+",
      label: "Skilled Workers",
      color: "text-primary-glow"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Industries Served",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: "2M+",
      label: "Monthly Capacity",
      color: "text-primary-glow"
    }
  ];

  const milestones = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Started with a vision to provide quality metal packaging solutions"
    },
    {
      year: "2005",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management"
    },
    {
      year: "2015",
      title: "Expansion Phase",
      description: "Expanded production capacity to 2M+ cans per month"
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description: "Launched digital platform for enhanced customer experience"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Trusted Partner for{' '}
            <span className="text-primary">Premium Quality</span> Metal Cans
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Delivering excellence with 25+ years experience and 2M+ monthly capacity. 
            We are committed to providing innovative packaging solutions that protect and enhance your products.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-premium hover:scale-105 transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <stat.icon className={`w-8 h-8 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Building Trust Through Quality and Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Since our inception in 1998, Bharat Metal Box has been at the forefront of metal 
              packaging innovation. We combine traditional craftsmanship with modern technology 
              to deliver packaging solutions that meet the evolving needs of diverse industries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our state-of-the-art manufacturing facility, skilled workforce, and commitment to 
              quality have made us a preferred partner for businesses across India. From small 
              startups to large corporations, we provide customized solutions that drive success.
            </p>
            
            {/* Key Strengths */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Advanced Manufacturing</h4>
                  <p className="text-sm text-muted-foreground">State-of-the-art machinery and automated processes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">Rigorous testing and ISO certified processes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Customer-Centric Approach</h4>
                  <p className="text-sm text-muted-foreground">Dedicated support and customized solutions</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={qualityImage} 
              alt="Quality control process in metal can manufacturing" 
              className="rounded-2xl w-full h-96 object-cover shadow-industrial"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">ISO</div>
                <div className="text-sm text-white/90">Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Our Journey of Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="group hover:shadow-premium hover:scale-105 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">{milestone.year.slice(-2)}</span>
                    </div>
                    <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                    <h4 className="font-bold text-foreground mb-3">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;