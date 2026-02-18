import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BooksSection from '@/components/BooksSection';
import CategoriesSection from '@/components/CategoriesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <CartDrawer />
        <HeroSection />
        <BooksSection />
        <CategoriesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
