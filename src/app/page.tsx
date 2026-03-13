
"use client";

import { useState, cloneElement } from "react";
import { Dashboard } from "@/components/voxchat/Dashboard";
import { Button } from "@/components/ui/button";
import { 
  Mic, 
  Search, 
  ArrowRight, 
  Play, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  Globe, 
  Facebook, 
  Bot, 
  Share2, 
  Cpu, 
  Building2, 
  ShoppingCart, 
  Headphones, 
  Hospital,
  FileText,
  UserCheck,
  Layout
} from "lucide-react";

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
          <span className="text-2xl font-bold tracking-tighter">SAWT <span className="text-primary">IA</span></span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Accueil</a>
          <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#api" className="hover:text-primary transition-colors">API</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <Button 
            className="bg-primary text-background hover:bg-primary/90 digital-glow px-6 rounded-full font-bold ml-4"
            onClick={() => setShowDashboard(true)}
          >
            Accéder aux agents
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Sky-like glow removed here */}
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest text-reveal">
            🚀 AI VOICE & CONVERSATIONAL AGENTS
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-reveal" style={{ animationDelay: '0.1s' }}>
            DES AGENTS IA QUI RÉPONDENT <br />
            À VOS CLIENTS <span className="text-primary italic">24H/24</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light text-reveal" style={{ animationDelay: '0.2s' }}>
            Automatisez vos appels, WhatsApp, chats web et réseaux sociaux avec des agents intelligents capables de répondre, qualifier et vendre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 text-reveal" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-background hover:bg-primary/90 digital-glow px-10 h-14 rounded-full text-lg font-bold group"
              onClick={() => setShowDashboard(true)}
            >
              Démarrer gratuitement <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:border-primary text-primary px-10 h-14 rounded-full text-lg bg-white/5"
            >
              Voir la démo <Play className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-10 text-muted-foreground font-medium">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Téléphone</div>
            <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp</div>
            <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Site web</div>
            <div className="flex items-center gap-2"><Facebook className="w-4 h-4 text-primary" /> Meta</div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#121614] shadow-2xl">
            <img 
              src="https://picsum.photos/seed/voxpreview/1200/800" 
              alt="SAWT IA Dashboard Preview" 
              className="w-full opacity-80"
              data-ai-hint="dashboard dark interface"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#121614] to-transparent flex justify-center gap-12">
               <span className="text-xs uppercase tracking-widest font-bold opacity-60">Conversations</span>
               <span className="text-xs uppercase tracking-widest font-bold opacity-60">Agents</span>
               <span className="text-xs uppercase tracking-widest font-bold opacity-60">Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-24 px-6 bg-[#0E1210] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter">COMMENT ÇA MARCHE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepCard 
              number="1"
              icon={<Bot className="w-8 h-8 text-primary" />}
              title="Créez votre agent IA"
              description="Configurez sa voix, son métier et son comportement selon vos besoins spécifiques."
            />
            <StepCard 
              number="2"
              icon={<Share2 className="w-8 h-8 text-primary" />}
              title="Connectez vos canaux"
              description="Déployez instantanément sur Téléphone, WhatsApp, site web ou Meta (Facebook/Instagram)."
            />
            <StepCard 
              number="3"
              icon={<Cpu className="w-8 h-8 text-primary" />}
              title="Automatisez vos conversations"
              description="L'IA répond aux questions, qualifie les leads et analyse chaque échange automatiquement."
            />
          </div>
        </div>
      </section>

      {/* Cas d'utilisation */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter uppercase">Pour quoi utiliser SAWT IA ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard 
              icon={<Building2 className="w-6 h-6" />}
              title="Immobilier"
              description="Qualification automatique des prospects et planification de visites."
            />
            <IndustryCard 
              icon={<ShoppingCart className="w-6 h-6" />}
              title="E-commerce"
              description="Réponses clients instantanées et suivi de commandes automatisé."
            />
            <IndustryCard 
              icon={<Headphones className="w-6 h-6" />}
              title="Call centers"
              description="Automatisation intelligente des appels entrants et sortants à grande échelle."
            />
            <IndustryCard 
              icon={<Hospital className="w-6 h-6" />}
              title="Cliniques"
              description="Prise de rendez-vous intelligente et rappels personnalisés."
            />
          </div>
        </div>
      </section>

      {/* Analyse intelligente */}
      <section className="py-24 px-6 bg-[#0E1210] overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Analyse <span className="text-primary">Intelligente</span></h2>
            <ul className="space-y-6">
              <AnalysisItem icon={<FileText />} text="Transcription automatique en temps réel" />
              <AnalysisItem icon={<Sparkles />} text="Résumé IA précis de chaque conversation" />
              <AnalysisItem icon={<UserCheck />} text="Analyse approfondie des intentions clients" />
              <AnalysisItem icon={<Layout />} text="Tableau de bord centralisé pour piloter vos agents" />
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <img 
              src="https://picsum.photos/seed/analysis/800/600" 
              alt="AI Analysis Visual" 
              className="rounded-2xl border border-white/10 relative z-10 digital-glow"
              data-ai-hint="digital data chart"
            />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-center text-muted-foreground mb-12">Nos Intégrations</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold">Google</span>
             <span className="text-xl font-bold">Shopify</span>
             <span className="text-xl font-bold">CRM</span>
             <span className="text-xl font-bold">API</span>
             <span className="text-xl font-bold">n8n</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">PRÊT À CRÉER VOTRE AGENT ?</h2>
          <p className="text-xl text-muted-foreground">Automatisez vos conversations dès aujourd’hui et libérez votre temps.</p>
          <Button 
            size="lg" 
            className="bg-primary text-background hover:bg-primary/90 digital-glow px-12 h-16 rounded-full text-xl font-bold"
            onClick={() => setShowDashboard(true)}
          >
            Créer mon agent IA
          </Button>
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
              <span className="text-xl font-bold">SAWT IA</span>
            </div>
            <p className="text-sm text-muted-foreground">La plateforme d'intelligence conversationnelle ultime pour propulser votre relation client dans l'ère de l'IA.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <FooterLinks title="Produit" links={['Solutions', 'API', 'Agents', 'Tarifs']} />
            <FooterLinks title="Société" links={['À propos', 'Blog', 'Contact']} />
            <FooterLinks title="Légal" links={['Confidentialité', 'Conditions', 'Cookies']} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-muted-foreground">
          <p>© 2025 SAWT IA. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ number, icon, title, description }: { number: string, icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="relative p-10 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all group overflow-hidden">
      <div className="absolute top-4 right-6 text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity">{number}</div>
      <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:bg-primary/10 transition-colors relative z-10">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 relative z-10">{title}</h3>
      <p className="text-muted-foreground leading-relaxed relative z-10">{description}</p>
    </div>
  );
}

function IndustryCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-card border border-white/5 hover:bg-white/5 transition-all text-left">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function AnalysisItem({ icon, text }: { icon: React.ReactElement, text: string }) {
  return (
    <li className="flex items-center gap-4 text-lg">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <span className="text-foreground/90">{text}</span>
    </li>
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
