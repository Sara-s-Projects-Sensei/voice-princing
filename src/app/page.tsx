
"use client";

import { useState } from "react";
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
  Layout,
  LucideIcon,
  TrendingUp,
  BarChart3,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-[#080B0A] text-foreground flex flex-col">
      {/* Navigation */}
      <header className="px-6 md:px-12 py-4 flex justify-between items-center bg-[#080B0A]/90 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5">
            <BarChart3 className="text-primary w-5 h-5" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">Sawt <span className="text-primary">IA</span></span>
        </div>
        
        <nav className="hidden xl:flex items-center gap-10 text-sm font-medium">
          <a href="#" className="text-primary hover:text-primary transition-colors">Accueil</a>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          <a href="#api" className="text-muted-foreground hover:text-primary transition-colors">API</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          <a href="#voice-over" className="text-muted-foreground hover:text-primary transition-colors">Voice-Over</a>
        </nav>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#demo" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Demander une démo</a>
          <Button 
            className="bg-gradient-to-r from-[#1A4D3E] to-[#9BE963] text-white hover:opacity-90 px-8 rounded-full font-bold flex items-center gap-2 h-12 shadow-lg border-none"
            onClick={() => setShowDashboard(true)}
          >
            Accéder aux agents <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest text-reveal">
            🚀 AI VOICE & CONVERSATIONAL AGENTS
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-reveal" style={{ animationDelay: '0.1s' }}>
            Des agents IA qui parlent <br />
            à vos clients <span className="text-primary italic">24/7.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-bold text-reveal flex items-center justify-center gap-3" style={{ animationDelay: '0.2s' }}>
            Leads qualifiés • Ventes automatisées • ROI maximisé
            <TrendingUp className="w-6 h-6 text-primary" />
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
            <div className="flex items-center gap-2 text-primary font-bold">☎ Téléphone</div>
            <div className="flex items-center gap-2 text-primary font-bold">💬 WhatsApp</div>
            <div className="flex items-center gap-2 text-primary font-bold">🌐 Site web</div>
            <div className="flex items-center gap-2 text-primary font-bold">📱 Meta</div>
          </div>
        </div>

        {/* Dashboard Preview Labels Only */}
        <div className="mt-20 max-w-6xl mx-auto relative group w-full px-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-20" />
          <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-[#0A0D0C] shadow-2xl p-16 md:p-32 flex flex-col items-center justify-center text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 text-2xl md:text-5xl font-black uppercase tracking-tighter text-primary">
               <span>Conversations</span>
               <span className="opacity-20 text-white font-light">|</span>
               <span>Agents</span>
               <span className="opacity-20 text-white font-light">|</span>
               <span>Analytics</span>
            </div>
            <p className="mt-8 text-muted-foreground/40 text-[10px] uppercase tracking-[0.4em] font-bold">SAWT IA Dashboard Interface</p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-24 px-6 bg-[#0E1210] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter uppercase">COMMENT ÇA MARCHE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepCard 
              number="1️⃣"
              title="Créez votre agent IA"
              description="Configurez sa voix, son métier et son comportement selon vos besoins spécifiques."
            />
            <StepCard 
              number="2️⃣"
              title="Connectez vos canaux"
              description="Déployez instantanément sur Téléphone, WhatsApp, site web ou Meta (Facebook/Instagram)."
            />
            <StepCard 
              number="3️⃣"
              title="Automatisez vos conversations"
              description="L'IA répond aux questions, qualifie les leads et analyse chaque échange automatiquement."
            />
          </div>
        </div>
      </section>

      {/* Cas d'utilisation */}
      <section id="services" className="py-24 px-6 bg-[#080B0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter uppercase">Pour quoi utiliser SAWT IA ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard 
              icon="🏢"
              title="Immobilier"
              description="Qualification automatique des prospects et planification de visites."
            />
            <IndustryCard 
              icon="🛒"
              title="E-commerce"
              description="Réponses clients instantanées et suivi de commandes automatisé."
            />
            <IndustryCard 
              icon="📞"
              title="Call centers"
              description="Automatisation intelligente des appels entrants et sortants à grande échelle."
            />
            <IndustryCard 
              icon="🏥"
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">ANALYSE <span className="text-primary">INTELLIGENTE</span></h2>
            <ul className="space-y-6">
              <AnalysisItem icon={FileText} text="Transcription automatique" />
              <AnalysisItem icon={Sparkles} text="Résumé IA des conversations" />
              <AnalysisItem icon={UserCheck} text="Analyse des intentions clients" />
              <AnalysisItem icon={Layout} text="Tableau de bord centralisé" />
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <div className="rounded-2xl border border-white/10 relative z-10 bg-card/40 backdrop-blur-sm p-8 digital-glow aspect-video flex flex-col justify-end gap-2 overflow-hidden">
              <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold opacity-30">Real-time Insights</div>
              <div className="flex items-end gap-1 h-32">
                 <div className="flex-1 bg-primary/20 rounded-t-lg h-[40%] animate-pulse" />
                 <div className="flex-1 bg-primary/40 rounded-t-lg h-[60%] animate-pulse" />
                 <div className="flex-1 bg-primary/60 rounded-t-lg h-[80%] animate-pulse" />
                 <div className="flex-1 bg-primary/30 rounded-t-lg h-[50%] animate-pulse" />
                 <div className="flex-1 bg-primary/50 rounded-t-lg h-[70%] animate-pulse" />
                 <div className="flex-1 bg-primary/25 rounded-t-lg h-[45%] animate-pulse" />
                 <div className="flex-1 bg-primary/55 rounded-t-lg h-[65%] animate-pulse" />
              </div>
              <div className="flex justify-between text-[6px] md:text-[8px] uppercase tracking-widest opacity-40 font-bold pt-4">
                 <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 border-b border-white/5 bg-[#080B0A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-12">Nos Intégrations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 font-bold text-xl md:text-3xl tracking-tight">
             <span>Google</span>
             <span className="text-primary">•</span>
             <span>Shopify</span>
             <span className="text-primary">•</span>
             <span>CRM</span>
             <span className="text-primary">•</span>
             <span>API</span>
             <span className="text-primary">•</span>
             <span>n8n</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-[#080B0A]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">PRÊT À CRÉER VOTRE AGENT ?</h2>
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
                <BarChart3 className="text-background w-5 h-5" />
              </div>
              <span className="text-xl font-black uppercase">SAWT IA</span>
            </div>
            <p className="text-sm text-muted-foreground">La plateforme d'intelligence conversationnelle ultime pour propulser votre relation client dans l'ère de l'IA.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <FooterLinks title="Produit" links={['Solutions', 'API', 'Agents', 'Tarifs']} />
            <FooterLinks title="Société" links={['À propos', 'Blog', 'Contact']} />
            <FooterLinks title="Légal" links={['Confidentialité', 'Conditions', 'Cookies']} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-muted-foreground uppercase font-bold tracking-widest">
          <p>© 2025 SAWT IA. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative p-10 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all group overflow-hidden">
      <div className="text-4xl mb-6">{number}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function IndustryCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-card border border-white/5 hover:bg-white/5 transition-all text-left">
      <div className="text-4xl mb-6">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function AnalysisItem({ icon: Icon, text }: { icon: LucideIcon, text: string }) {
  return (
    <li className="flex items-center gap-4 text-lg">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-foreground/90 font-medium">{text}</span>
    </li>
  );
}

function FooterLinks({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-sm uppercase tracking-wider text-primary">{title}</h4>
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
