import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <Logo />
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-foreground transition-colors">Home</button>
          <button onClick={() => scrollTo('services')} className="hover:text-foreground transition-colors">Services</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-foreground transition-colors">Projects</button>
          <button onClick={() => scrollTo('about')} className="hover:text-foreground transition-colors">About</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-foreground transition-colors">Contact</button>
        </div>

        <Button variant={scrolled ? "primary" : "outline"} size="sm" onClick={() => scrollTo('contact')}>
          <span className="hidden sm:inline">Get in touch</span>
          <span className="sm:hidden">Book a Call</span>
        </Button>
      </div>
    </motion.nav>
  );
}