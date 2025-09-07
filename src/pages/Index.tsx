import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGallery from '@/components/ProductGallery';
import Services from '@/components/Services';
import ManufacturingProcess from '@/components/ManufacturingProcess';
import IndustriesServed from '@/components/IndustriesServed';
import CompanyShowcase from '@/components/CompanyShowcase';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGallery />
      <Services />
      <ManufacturingProcess />
      <IndustriesServed />
      <CompanyShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
