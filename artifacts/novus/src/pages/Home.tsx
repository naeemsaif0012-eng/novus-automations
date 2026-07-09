import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ParticleMotif } from '@/components/ParticleMotif';
import { ArrowRight, Cpu, Network, CheckCircle2, Bot, Layers, MessageCircle, Mail, Search, ClipboardList, Hammer, Rocket, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export function Home() {
  const [formSent, setFormSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.05)_0%,rgba(0,0,0,0)_60%)]" />
        <ParticleMotif className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10" count={60} />
        
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest mb-8 text-primary backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Accepting New Projects
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
              AI Automations That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Actually Save Time.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light mb-12 leading-relaxed"
          >
            NOVUS builds AI agents, automations, and intelligent systems that eliminate repetitive work, reduce operational overhead, and help businesses scale efficiently.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
              View Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Services</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl uppercase tracking-widest leading-relaxed">
              Custom AI systems designed to automate operations and increase efficiency.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <Bot className="w-6 h-6 text-primary" />,
                title: "AI Agents",
                items: ["Research agents", "Admin assistants", "Customer support agents", "Knowledge assistants"]
              },
              {
                icon: <Network className="w-6 h-6 text-primary" />,
                title: "Workflow Automation",
                items: ["n8n workflows", "Make.com automations", "CRM automation", "Lead routing"]
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-primary" />,
                title: "AI Chatbots",
                items: ["Website chatbots", "Support bots", "FAQ assistants", "Lead qualification bots"]
              },
              {
                icon: <Layers className="w-6 h-6 text-primary" />,
                title: "Custom Integrations",
                items: ["API integrations", "Webhooks", "Database connections", "Software integrations"]
              }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={staggerItem}
                className="group p-10 bg-secondary/30 border border-white/5 rounded-sm hover:bg-secondary/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="mb-6 p-4 bg-background inline-block rounded-sm border border-white/5 group-hover:border-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 bg-secondary/10 relative overflow-hidden">
        <ParticleMotif className="top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] opacity-10" count={40} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Featured Projects</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl uppercase tracking-widest leading-relaxed">
              Real automation solutions and AI systems.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "AI Lead Qualification System",
                stack: "OpenAI + n8n",
                items: ["AI scores and routes leads", "CRM integration", "Automated follow-up sequencing"]
              },
              {
                title: "Content Automation Workflow",
                stack: "OpenAI + Notion + n8n",
                items: ["Research automation", "Content generation", "Automated publishing pipeline"]
              },
              {
                title: "Customer Support AI Assistant",
                stack: "AI-powered support",
                items: ["Handles repetitive questions", "Knowledge base integration", "Seamless human handoff"]
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                variants={staggerItem}
                className="group flex flex-col p-10 border border-white/5 bg-background rounded-sm hover:border-primary/30 transition-all duration-500"
              >
                <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4">{project.stack}</span>
                <h3 className="text-2xl font-medium mb-6">{project.title}</h3>
                <ul className="flex-1 space-y-3">
                  {project.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 relative overflow-hidden">
        <ParticleMotif className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] opacity-10" count={30} />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-10">About NOVUS</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p><span className="text-foreground">NOVUS</span> is an AI Automation Agency focused on helping businesses streamline operations through AI agents, workflow automation, and custom integrations.</p>
              <p>
                Our team designs and deploys AI agents, workflow automations, and intelligent business systems that help businesses eliminate repetitive work and operate more efficiently.
              </p>
              <p>
                Using tools like OpenAI, n8n, Make, APIs, and custom integrations, we build practical automation solutions that save time and deliver measurable business value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-32 bg-secondary/10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">How We Work</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            {[
              { icon: <Search className="w-5 h-5 text-primary" />, step: "01", title: "Discovery", desc: "Identify bottlenecks and opportunities." },
              { icon: <ClipboardList className="w-5 h-5 text-primary" />, step: "02", title: "Planning", desc: "Design automation architecture." },
              { icon: <Hammer className="w-5 h-5 text-primary" />, step: "03", title: "Development", desc: "Build and test workflows." },
              { icon: <Rocket className="w-5 h-5 text-primary" />, step: "04", title: "Deployment", desc: "Launch and integrate systems." },
              { icon: <TrendingUp className="w-5 h-5 text-primary" />, step: "05", title: "Optimization", desc: "Monitor and improve performance." },
            ].map((phase, i) => (
              <motion.div key={i} variants={staggerItem} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-background inline-flex rounded-sm border border-white/5">
                    {phase.icon}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">{phase.step}</span>
                </div>
                <h3 className="text-lg font-medium">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-secondary/10 relative overflow-hidden">
        <ParticleMotif className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] opacity-5" count={50} />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Let's Automate Your Business</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl uppercase tracking-widest leading-relaxed">
              Ready to eliminate repetitive tasks and scale efficiently?
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto"
          >
            {[
              { icon: <Mail className="w-5 h-5 text-primary" />, label: "Email", value: "novus.ai.automation@gmail.com", href: "mailto:novus.ai.automation@gmail.com" },
              { icon: <MessageCircle className="w-5 h-5 text-primary" />, label: "WhatsApp", value: "0329-9615669", href: "https://wa.me/923299615669" },
            ].map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={staggerItem}
                className="flex flex-col items-center text-center gap-3 p-6 bg-background border border-white/5 rounded-sm hover:border-primary/30 transition-all duration-500"
              >
                <div className="p-3 bg-secondary/30 rounded-sm border border-white/5">
                  {card.icon}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{card.label}</span>
                <span className="text-sm text-foreground/80">{card.value}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-white/10 bg-background/50 backdrop-blur-xl p-8 md:p-16 rounded-sm shadow-2xl"
          >
            {formSent ? (
              <div className="text-center py-16 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-medium mb-4">Message Received</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thanks for reaching out. Our team will get back to you shortly to schedule your discovery call.
                </p>
                <Button className="mt-8" variant="outline" onClick={() => setFormSent(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Book a Discovery Call</h2>
                <p className="text-muted-foreground mb-10 max-w-lg">
                  Tell us about the repetitive work slowing your business down, and our team will outline how to automate it.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-secondary/50 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="John Doe / Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                      <input 
                        required 
                        type="email" 
                        className="w-full bg-secondary/50 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="john@acme.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">What would you like to automate?</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full bg-secondary/50 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Describe the manual process currently slowing down your operations..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Book a Discovery Call <Cpu className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

    </main>
  );
}