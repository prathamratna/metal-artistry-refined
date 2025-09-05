import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-manufacturing.jpg';

const Hero = () => {
  const achievements = [
    { icon: CheckCircle, text: "25+ Years Experience" },
    { icon: CheckCircle, text: "2M+ Monthly Capacity" },
    { icon: CheckCircle, text: "ISO Certified Quality" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern metal can manufacturing facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-semibold">Quality Assured</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-white">
            <div className="text-2xl font-bold">2M+</div>
            <div className="text-sm opacity-90">Monthly Production</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-width section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/10 text-white border-white/20">
            Trusted Metal Can Manufacturer Since 1998
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Quality Cans,{' '}
            <span className="metallic-text bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Custom Made
            </span>{' '}
            Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Manufacturing excellence in tin and metal cans for diverse industries. 
            Delivering precision, quality, and reliability with every product.
          </p>

          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="glass-card px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <achievement.icon className="w-4 h-4 text-primary-glow" />
                <span className="text-white text-sm font-medium">{achievement.text}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="animate-glow">
              Explore Our Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glass" size="xl">
              Request Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by Industry Leaders</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-20 h-8 bg-white/20 rounded animate-pulse"></div>
              <div className="w-20 h-8 bg-white/20 rounded animate-pulse"></div>
              <div className="w-20 h-8 bg-white/20 rounded animate-pulse"></div>
              <div className="w-20 h-8 bg-white/20 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;