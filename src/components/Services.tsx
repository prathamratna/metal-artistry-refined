import { Settings, Shield, Truck, Zap, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import productsImage from '@/assets/products-showcase.jpg';
const Services = () => {
  const services = [{
    icon: Settings,
    title: "Custom Can Solutions",
    description: "Tailored metal cans designed precisely to meet your unique product requirements. Ensuring perfect fit and protection for your products.",
    features: ["Bespoke sizing", "Custom shapes", "Brand integration"]
  }, {
    icon: Shield,
    title: "Quality Assurance",
    description: "Stringent quality checks at every stage, ensuring durable, reliable, and compliant metal packaging solutions always.",
    features: ["ISO certification", "Multi-stage testing", "100% inspection"]
  }, {
    icon: Zap,
    title: "High Volume Production",
    description: "Efficient manufacturing processes capable of handling large orders while maintaining consistent quality standards.",
    features: ["2M+ monthly capacity", "Fast turnaround", "Scalable production"]
  }, {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Timely delivery across India with secure packaging and tracking. Your orders reach you safely and on schedule.",
    features: ["Pan-India delivery", "Secure packaging", "Real-time tracking"]
  }, {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team of packaging experts ready to assist with technical guidance and customer support.",
    features: ["24/7 support", "Technical consultation", "After-sales service"]
  }, {
    icon: Award,
    title: "Industry Leadership",
    description: "25+ years of industry experience with recognition for innovation and excellence in metal packaging solutions.",
    features: ["Industry awards", "Innovation focus", "Proven track record"]
  }];
  return <section id="products" className="section-padding bg-gradient-to-br from-accent to-muted">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Excellence in Metal Can{' '}
            <span className="text-primary">Manufacturing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to delivery, we provide comprehensive metal packaging solutions 
            that meet the highest industry standards and exceed customer expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => <Card key={index} className="group hover:shadow-industrial hover:scale-105 transition-all duration-500 border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Product Showcase */}
        <div className="relative rounded-2xl overflow-hidden">
          <img src={productsImage} alt="Various metal cans and containers showcase" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-industrial-dark/80 flex items-center">
            <div className="container-width px-8 py-[32px]">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Customized Size and Shape
                </h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  We specialize in crafting metal cans tailored to your exact specifications. 
                  From unique shapes to custom sizes, we ensure your product stands out while 
                  maintaining optimal protection.
                </p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-glow">500+</div>
                    <div className="text-white/80 text-sm">Designs Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-glow">50+</div>
                    <div className="text-white/80 text-sm">Industries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-glow">99%</div>
                    <div className="text-white/80 text-sm">Quality Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;