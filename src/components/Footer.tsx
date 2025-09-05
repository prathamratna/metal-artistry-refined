import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Products', href: '#products' },
      { name: 'Quality Assurance', href: '#quality' },
      { name: 'Careers', href: '#careers' }
    ],
    services: [
      { name: 'Custom Manufacturing', href: '#custom' },
      { name: 'Bulk Orders', href: '#bulk' },
      { name: 'Quality Testing', href: '#testing' },
      { name: 'Technical Support', href: '#support' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Terms & Conditions', href: '#terms' },
      { name: 'Privacy Policy', href: '#privacy' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-industrial-dark text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BMB</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold">Bharat Metal Box</h1>
                  <p className="text-xs text-white/80">Packaging Pvt. Ltd</p>
                </div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                Leading manufacturer of premium quality metal cans and packaging solutions. 
                Serving diverse industries with excellence since 1998.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Industrial Area, Sector 25<br />
                      Gurgaon, Haryana 122001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <a 
                      href="tel:+919876543210"
                      className="text-white/90 hover:text-primary transition-colors text-sm"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <a 
                      href="mailto:info@bmbpack.in"
                      className="text-white/90 hover:text-primary transition-colors text-sm"
                    >
                      info@bmbpack.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="text-sm font-semibold text-white/90 mb-3">Certifications</h4>
                <div className="flex space-x-3">
                  <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">ISO</span>
                  </div>
                  <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">CE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © {currentYear} Bharat Metal Box Packaging Pvt. Ltd. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {footerLinks.support.slice(2).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;