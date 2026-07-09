import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        
        <div className="flex flex-col gap-4 max-w-sm">
          <Logo />
          <p className="text-foreground font-medium">Muhammad Naeem</p>
          <p className="text-muted-foreground text-sm font-mono leading-relaxed">
            AI Automation Specialist
          </p>
        </div>

        <div className="flex flex-col gap-4 font-mono text-sm tracking-widest uppercase">
          <span className="text-foreground font-bold mb-2">Index</span>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-muted-foreground uppercase tracking-widest gap-4">
        <span>© {new Date().getFullYear()} Muhammad Naeem. All Rights Reserved.</span>
      </div>
    </footer>
  );
}