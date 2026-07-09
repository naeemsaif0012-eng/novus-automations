import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ParticleMotif } from '@/components/ParticleMotif';
import { ArrowRight, Cpu, Network, Zap, CheckCircle2, Bot, Layers } from 'lucide-react';
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
              Accepting New Partners
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
              Frictionless <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Operations.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light mb-12 leading-relaxed"
          >
            We engineer autonomous workflows and AI agents for businesses that refuse to scale on human effort. Precise. Invisible. Inevitable.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Initiate System <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
              View Architecture
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CLIENT / LOGO CLOUD - ABSTRACT */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">Systems deployed for forward-thinking nodes</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale transition-all hover:grayscale-0">
            {/* Placeholder abstract logos for tech vibe */}
            {['Nexus', 'Aura', 'Vertex', 'Quant', 'Stratos'].map((name, i) => (
              <div key={i} className="flex items-center gap-2 font-mono text-lg font-bold tracking-widest">
                <div className="w-6 h-6 border-2 border-current rounded-sm transform rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-current" />
                </div>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Capabilities</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl uppercase tracking-widest leading-relaxed">
              We replace brittle manual processes with robust, self-healing automated architectures.
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
                icon: <Network className="w-6 h-6 text-primary" />,
                title: "Workflow Orchestration",
                desc: "Complex data pipelines built on n8n and Make. We connect isolated software silos into unified neural networks that run without supervision."
              },
              {
                icon: <Bot className="w-6 h-6 text-primary" />,
                title: "Autonomous Agents",
                desc: "LLM-driven entities that read, think, and execute. From customer success triage to deep-research content generation."
              },
              {
                icon: <Layers className="w-6 h-6 text-primary" />,
                title: "Custom Integrations",
                desc: "API bridging and webhook management for legacy systems. If it has an endpoint, we can make it talk to the rest of your stack."
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "Operational Audits",
                desc: "We analyze your team's friction points and map out an automation blueprint to reclaim thousands of hours per quarter."
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
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO / WORK SECTION */}
      <section id="work" className="py-32 bg-secondary/10 relative overflow-hidden">
        <ParticleMotif className="top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] opacity-10" count={40} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Deployed Systems</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl uppercase tracking-widest leading-relaxed">
              Illustrative case studies -- placeholder projects demonstrating the class of problem we solve.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12">
            {[
              {
                client: "Client Alpha",
                title: "E-commerce Fulfillment Engine",
                metric: "94%",
                metricDesc: "Reduction in manual entry",
                details: "Replaced a 3-person data entry team with an n8n pipeline that processes orders, verifies inventory across 4 warehouses, and routes complex shipping logic in real-time."
              },
              {
                client: "Startup Beta",
                title: "Autonomous CS Agent",
                metric: "60%",
                metricDesc: "Tier-1 ticket resolution",
                details: "Deployed an OpenAI-powered agent connected to Zendesk and internal docs. It reads context, suggests refunds, and executes API calls for approved actions."
              },
              {
                client: "Agency Gamma",
                title: "Content Pipeline Automation",
                metric: "10x",
                metricDesc: "Output speed multiplier",
                details: "Built a fully autonomous system that takes brief inputs, generates drafts via LLM, pulls reference imagery, and stages everything in Webflow for final human review."
              }
            ].map((work, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group flex flex-col lg:flex-row border border-white/5 bg-background rounded-sm overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                <div className="p-10 lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/5 bg-secondary/30 flex flex-col justify-center">
                  <span className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-widest mb-2 border border-white/10 rounded-sm px-2 py-1 w-fit">Placeholder Project</span>
                  <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4">{work.client}</span>
                  <div className="text-6xl font-medium tracking-tighter mb-2">{work.metric}</div>
                  <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{work.metricDesc}</div>
                </div>
                <div className="p-10 lg:w-2/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-medium mb-4">{work.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">{work.details}</p>
                  <div className="mt-8 flex items-center gap-4 text-sm font-mono text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    System Active
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="mb-20 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Investment</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl uppercase tracking-widest leading-relaxed">
              Transparent scaling for operational dominance. Placeholder pricing for demonstration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Sprint", 
                price: "$2k+", 
                desc: "Targeted workflow automation.", 
                features: ["1 Core Workflow", "n8n / Make Setup", "Basic Error Handling", "2 Weeks Delivery"],
                highlighted: false
              },
              { 
                name: "System", 
                price: "$6k+", 
                desc: "Autonomous agent integration.", 
                features: ["Custom AI Agent", "Multi-platform Integration", "Advanced Fallbacks", "4 Weeks Delivery"], 
                highlighted: true 
              },
              { 
                name: "Scale", 
                price: "Custom", 
                desc: "Retained operational partner.", 
                features: ["Unlimited Automations", "Dedicated Engineers", "24/7 Monitoring", "Continuous Optimization"],
                highlighted: false
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative p-10 border rounded-sm flex flex-col ${
                  tier.highlighted 
                    ? 'border-primary bg-primary/5 shadow-[0_0_30px_rgba(147,51,234,0.1)] lg:-translate-y-4' 
                    : 'border-white/5 bg-secondary/20'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest rounded-sm">
                    Recommended Node
                  </div>
                )}
                
                <h3 className="text-2xl font-medium mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{tier.desc}</p>
                
                <div className="my-8 pb-8 border-b border-white/5">
                  <span className="text-4xl font-medium tracking-tight">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground font-mono text-sm ml-2">/ project</span>}
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={tier.highlighted ? "primary" : "outline"} 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Select Tier
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-secondary/10 relative overflow-hidden">
        <ParticleMotif className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] opacity-5" count={50} />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
                <h3 className="text-3xl font-medium mb-4">Transmission Received</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Your inquiry has been logged. Our systems will route this to an engineer, and we will initiate contact shortly.
                </p>
                <Button className="mt-8" variant="outline" onClick={() => setFormSent(false)}>
                  Reset Form
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Initialize Connection</h2>
                <p className="text-muted-foreground mb-10 max-w-lg">
                  Detail the operational friction you wish to eliminate. We will architect a solution.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Entity Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-secondary/50 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="John Doe / Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Comm Link</label>
                      <input 
                        required 
                        type="email" 
                        className="w-full bg-secondary/50 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="john@acme.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">System Requirements / Friction Points</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full bg-secondary/50 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Describe the manual process currently slowing down your operations..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Transmit Data <Cpu className="ml-2 w-4 h-4" />
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