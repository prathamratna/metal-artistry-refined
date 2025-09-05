import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Bharat Metal Box Packaging Pvt. Ltd",
        "Industrial Area, Sector 25",
        "Gurgaon, Haryana 122001"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 98765 43210",
        "+91 98765 43211",
        "Toll Free: 1800-123-4567"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@bmbpack.in",
        "sales@bmbpack.in",
        "support@bmbpack.in"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-muted to-accent">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch with{' '}
            <span className="text-primary">Our Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your metal packaging needs? Our team of experts is here to 
            provide you with customized solutions and competitive quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-premium hover:scale-105 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional Info */}
            <Card className="bg-gradient-to-br from-primary to-primary-glow border-none">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Our customer support team is available to help you with any urgent queries.
                </p>
                <Button variant="glass" size="sm" className="w-full">
                  Call Now: +91 98765 43210
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-industrial">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Request a Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Enter your full name" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input 
                      placeholder="Enter your company name" 
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      placeholder="Enter your email address" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      type="tel"
                      placeholder="Enter your phone number" 
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product Requirements *
                  </label>
                  <Textarea 
                    placeholder="Please describe your metal can requirements including size, quantity, and any special features..."
                    className="w-full h-32 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Expected Quantity
                    </label>
                    <Input 
                      placeholder="e.g., 10,000 units" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Timeline
                    </label>
                    <Input 
                      placeholder="e.g., Within 2 weeks" 
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="hero" size="lg" className="w-full group">
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    By submitting this form, you agree to our terms and privacy policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Website Redesign Notice
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our website is currently undergoing a redesign to serve you better. 
                For immediate inquiries, please contact us directly at{' '}
                <a href="mailto:info@bmbpack.in" className="text-primary font-semibold hover:underline">
                  info@bmbpack.in
                </a>
                {' '}or call us at{' '}
                <a href="tel:+919876543210" className="text-primary font-semibold hover:underline">
                  +91 98765 43210
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;