import { ArrowRight, CheckCircle, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-manufacturing.jpg';
const Hero = () => {
  const achievements = [{
    icon: CheckCircle,
    text: "25+ Years Experience"
  }, {
    icon: CheckCircle,
    text: "2M+ Monthly Capacity"
  }, {
    icon: CheckCircle,
    text: "ISO Certified Quality"
  }];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster={heroImage}>
          <source src="https://cdn.pixabay.com/vimeo/431235989/industrial-factory.mp4?width=1920&hash=ad5f2e5c4bd2d7e3c24c6e80c8b8c4d2e8f9b1c3" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src={heroImage} alt="Modern metal can manufacturing facility" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Floating Elements - Hidden on mobile for cleaner look */}
      <div className="hidden lg:block absolute top-16 right-4 xl:right-10 animate-float">
        <div className="glass-card p-3 xl:p-4 rounded-xl">
          <div className="flex items-center space-x-2">
            <Star className="w-4 xl:w-5 h-4 xl:h-5 text-yellow-400 fill-current" />
            <span className="text-white font-semibold text-sm xl:text-base">Quality Assured</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-16 left-4 xl:left-10 animate-float" style={{
      animationDelay: '2s'
    }}>
        <div className="glass-card p-3 xl:p-4 rounded-xl">
          <div className="text-white">
            <div className="text-xl xl:text-2xl font-bold">2M+</div>
            <div className="text-xs xl:text-sm opacity-90">Monthly Production</div>
          </div>
        </div>
      </div>

      {/* Main Content - Perfectly Centered and Responsive */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-[100px]">
          {/* Badge */}
          <div className="mb-4 sm:mb-6">
            <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-white/10 text-white border-white/20">
              Trusted Metal Can Manufacturer Since 1998
            </Badge>
          </div>

          {/* Main Heading - Responsive Typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Quality Cans,{' '}
            <span className="block sm:inline metallic-text bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Custom Made
            </span>{' '}
            <span className="block sm:inline">Solutions</span>
          </h1>

          {/* Subtitle - Better spacing and readability */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Manufacturing excellence in tin and metal cans for diverse industries. 
            Delivering precision, quality, and reliability with every product.
          </p>

          {/* Achievement Badges - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-10 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => <div key={index} className="glass-card px-3 sm:px-4 py-2 rounded-full flex items-center justify-center space-x-2">
                <achievement.icon className="w-3 sm:w-4 h-3 sm:h-4 text-primary-glow flex-shrink-0" />
                <span className="text-white text-xs sm:text-sm font-medium">{achievement.text}</span>
              </div>)}
          </div>

          {/* Call to Action - Stacked on mobile, side by side on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button variant="hero" size="xl" className="animate-glow w-full sm:w-auto">
              Explore Our Products
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
            
          </div>

          {/* Trust Indicators - Responsive */}
          <div className="pt-6 sm:pt-8 border-t border-white/20">
            <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">Trusted by Industry Leaders</p>
            <div className="flex justify-center items-center space-x-4 sm:space-x-8 opacity-60">
              <div className="w-12 sm:w-16 lg:w-20 h-6 sm:h-8 bg-white/20 rounded animate-pulse"></div>
              <div className="w-12 sm:w-16 lg:w-20 h-6 sm:h-8 bg-white/20 rounded animate-pulse"></div>
              <div className="w-12 sm:w-16 lg:w-20 h-6 sm:h-8 bg-white/20 rounded animate-pulse"></div>
              <div className="hidden sm:block w-16 lg:w-20 h-6 sm:h-8 bg-white/20 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;