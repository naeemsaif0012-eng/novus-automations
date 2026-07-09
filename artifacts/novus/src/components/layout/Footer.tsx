import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        
        <div className="flex flex-col gap-6 max-w-sm">
          <Logo />
          <p className="text-muted-foreground text-sm font-mono leading-relaxed">
            Architecting intelligent systems for the modern enterprise. We replace operational friction with seamless, deterministic automation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 font-mono text-sm tracking-widest uppercase">
          <div className="flex flex-col gap-4">
            <span className="text-foreground font-bold mb-2">Index</span>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#work" className="text-muted-foreground hover:text-primary transition-colors">Work</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-foreground font-bold mb-2">Connect</span>
            <a href="mailto:hello@novus.agency" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">X (Twitter)</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-muted-foreground uppercase tracking-widest gap-4">
        <span>© {new Date().getFullYear()} Novus Agency. All Rights Reserved.</span>
        <span>Systems Online.</span>
      </div>
    </footer>
  );
}