"use client";

import { useState } from "react";
import { Dashboard } from "@/components/voxchat/Dashboard";
import { Button } from "@/components/ui/button";
import { Mic, Shield, Search, Zap, CheckCircle, ArrowRight, Play, Sparkles } from "lucide-react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <header className="px-10 py-6 flex justify-between items-center bg-background/80 backdrop-blur-lg fixed top-0 w-full z-50 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center digital-glow">
            <Mic className="text-background w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">VoxChat <span className="text-primary">AI</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#security" className="hover:text-primary transition-colors">Security</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-primary"
            onClick={() => setShowDashboard(true)}
          >
            Login
          </Button>
          <Button 
            className="bg-primary text-background hover:bg-primary/90 digital-glow px-6 rounded-full"
            onClick={() => setShowDashboard(true)}
          >
            Get Started Free
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest text-reveal">
            <Sparkles className="w-3 h-3" /> Powered by GenAI
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-reveal" style={{ animationDelay: '0.1s' }}>
            YOUR VOICES, <br />
            <span className="text-primary italic">INTELLIGENTLY</span> <br />
            TRANSCRIBED.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light text-reveal" style={{ animationDelay: '0.2s' }}>
            Automatically transcribe, analyze, and extract deep insights from every conversation with state-of-the-art multilingual AI reasoning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 text-reveal" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-background hover:bg-primary/90 digital-glow px-10 h-14 rounded-full text-lg font-bold group"
              onClick={() => setShowDashboard(true)}
            >
              Launch Dashboard <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:border-primary text-primary px-10 h-14 rounded-full text-lg bg-white/5"
            >
              Watch Demo <Play className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#121614] shadow-2xl">
            <img 
              src="https://picsum.photos/seed/voxpreview/1200/800" 
              alt="VoxChat Dashboard Preview" 
              className="w-full opacity-80"
              data-ai-hint="dashboard interface"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121614] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-[#0E1210]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Real-time Reasoning"
              description="Our AI doesn't just transcribe; it understands context, nuances, and intent behind every spoken word."
            />
            <FeatureCard 
              icon={<Search className="w-8 h-8 text-primary" />}
              title="Semantic Discovery"
              description="Perform intelligent keyword and concept searches across all your meetings using vector embeddings."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Enterprise Security"
              description="End-to-end encryption for all audio recordings and generated transcripts. Your data remains yours."
            />
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <Stat value="1M+" label="Calls Processed" />
          <Stat value="50+" label="Languages" />
          <Stat value="99.2%" label="Accuracy Rate" />
          <Stat value="24/7" label="AI Support" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Mic className="text-background w-5 h-5" />
              </div>
              <span className="text-xl font-bold">VoxChat AI</span>
            </div>
            <p className="text-sm text-muted-foreground">The ultimate intelligence platform for voice conversations. Modern, fast, and secure.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <FooterLinks title="Product" links={['Features', 'API', 'Security', 'Roadmap']} />
            <FooterLinks title="Company" links={['About', 'Blog', 'Careers', 'Contact']} />
            <FooterLinks title="Legal" links={['Terms', 'Privacy', 'Security', 'Cookies']} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-muted-foreground">
          <p>© 2025 VoxChat AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-10 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all group">
      <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary">{value}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function FooterLinks({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-sm uppercase tracking-wider">{title}</h4>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link}>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
