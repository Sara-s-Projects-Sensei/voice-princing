
"use client";

import { useState } from "react";
import { Dashboard } from "@/components/voxchat/Dashboard";
import { Button } from "@/components/ui/button";
import { 
  Mic, 
  ArrowRight, 
  Play, 
  Sparkles, 
  TrendingUp,
  BarChart3,
  ChevronRight,
  FileText,
  UserCheck,
  Layout,
  LucideIcon
} from "lucide-react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-[#080B0A] text-foreground flex flex-col font-body selection:bg-primary selection:text-black">
      {/* BARRE DE MENU HORIZONTALE */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-[#080B0A]/95 backdrop-blur-xl border-b border-white/10 z-[100] flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center digital-glow">
              <BarChart3 className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">SAWT <span className="text-primary">IA</span></span>
          </div>

          {/* Navigation Horizontale */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#api" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">API</a>
            <a href="#contact" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <a href="#voice-over" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Voice-Over</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <a href="#demo" className="text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors hidden sm:block">Demander une démo</a>
            <Button 
              className="bg-primary text-black hover:bg-primary/90 digital-glow px-8 h-12 rounded-full font-black uppercase tracking-tighter transition-all active:scale-95"
              onClick={() => setShowDashboard(true)}
            >
              Accéder aux agents
            </Button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] text-reveal">
            🚀 AI VOICE & CONVERSATIONAL AGENTS
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-reveal" style={{ animationDelay: '0.1s' }}>
            DES AGENTS IA QUI <br />
            PARLENT À VOS CLIENTS <br />
            <span className="text-primary italic">24/7.</span>
          </h1>

          <p className="text-xl md:text-3xl text-muted-foreground max-w-2xl mx-auto font-bold text-reveal flex items-center justify-center gap-4" style={{ animationDelay: '0.2s' }}>
            Leads qualifiés • Ventes automatisées • ROI maximisé
            <TrendingUp className="w-8 h-8 text-primary" />
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 text-reveal" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-black hover:bg-primary/90 digital-glow px-12 h-16 rounded-full text-xl font-black uppercase tracking-tighter group"
              onClick={() => setShowDashboard(true)}
            >
              Démarrer gratuitement <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 hover:border-primary text-white hover:text-primary px-12 h-16 rounded-full text-xl font-bold bg-white/5 backdrop-blur-sm"
            >
              Voir la démo <Play className="ml-2 w-5 h-5 fill-current" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-10 pt-16 text-muted-foreground font-black uppercase tracking-widest text-xs opacity-60">
            <div className="flex items-center gap-2">☎ Téléphone</div>
            <div className="flex items-center gap-2">💬 WhatsApp</div>
            <div className="flex items-center gap-2">🌐 Site web</div>
            <div className="flex items-center gap-2">📱 Meta</div>
          </div>
        </div>

        {/* VISUEL PRODUIT (MOCKUP DASHBOARD) */}
        <div className="mt-24 max-w-6xl mx-auto relative group w-full px-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-20" />
          <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-[#0A0D0C] shadow-2xl p-16 md:p-32 flex flex-col items-center justify-center text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 text-2xl md:text-6xl font-black uppercase tracking-tighter text-primary">
               <span>Conversations</span>
               <span className="opacity-20 text-white font-light">|</span>
               <span>Agents</span>
               <span className="opacity-20 text-white font-light">|</span>
               <span>Analytics</span>
            </div>
            <p className="mt-10 text-muted-foreground/40 text-[10px] uppercase tracking-[0.5em] font-black">SAWT IA INTERFACE SYSTEM v2.0</p>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-32 px-6 bg-[#0E1210] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-24 tracking-tighter uppercase">COMMENT ÇA MARCHE</h2>
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

      {/* POUR QUOI UTILISER SAWT IA ? */}
      <section id="services" className="py-32 px-6 bg-[#080B0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-24 tracking-tighter uppercase">POUR QUOI UTILISER SAWT IA ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* ANALYSE INTELLIGENTE */}
      <section className="py-32 px-6 bg-[#0E1210] overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">ANALYSE <br /><span className="text-primary">INTELLIGENTE</span></h2>
            <ul className="space-y-8">
              <AnalysisItem icon={FileText} text="Transcription automatique" />
              <AnalysisItem icon={Sparkles} text="Résumé IA des conversations" />
              <AnalysisItem icon={UserCheck} text="Analyse des intentions clients" />
              <AnalysisItem icon={Layout} text="Tableau de bord centralisé" />
            </ul>
          </div>
          <div className="flex-1 relative w-full">
            <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full opacity-20" />
            <div className="rounded-3xl border border-white/10 relative z-10 bg-[#0A0D0C]/80 backdrop-blur-xl p-10 digital-glow aspect-video flex flex-col justify-end gap-4 overflow-hidden">
              <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] font-black text-primary/40">Real-time Analytics Feed</div>
              <div className="flex items-end gap-2 h-48">
                 <div className="flex-1 bg-primary/10 rounded-t-xl h-[30%] animate-pulse" />
                 <div className="flex-1 bg-primary/20 rounded-t-xl h-[50%] animate-pulse" style={{ animationDelay: '0.1s' }} />
                 <div className="flex-1 bg-primary/40 rounded-t-xl h-[80%] animate-pulse" style={{ animationDelay: '0.2s' }} />
                 <div className="flex-1 bg-primary/20 rounded-t-xl h-[40%] animate-pulse" style={{ animationDelay: '0.3s' }} />
                 <div className="flex-1 bg-primary/60 rounded-t-xl h-[90%] animate-pulse" style={{ animationDelay: '0.4s' }} />
                 <div className="flex-1 bg-primary/30 rounded-t-xl h-[60%] animate-pulse" style={{ animationDelay: '0.5s' }} />
                 <div className="flex-1 bg-primary/10 rounded-t-xl h-[40%] animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <div className="flex justify-between text-[8px] uppercase tracking-widest opacity-30 font-black pt-6 border-t border-white/5">
                 <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTÉGRATIONS */}
      <section className="py-32 border-b border-white/5 bg-[#080B0A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-16">Nos Intégrations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 font-black text-2xl md:text-5xl tracking-tighter">
             <span>Google</span>
             <span className="text-primary opacity-50">•</span>
             <span>Shopify</span>
             <span className="text-primary opacity-50">•</span>
             <span>CRM</span>
             <span className="text-primary opacity-50">•</span>
             <span>API</span>
             <span className="text-primary opacity-50">•</span>
             <span>n8n</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6 text-center bg-[#080B0A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">PRÊT À CRÉER <br />VOTRE AGENT ?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-bold italic">Automatisez vos conversations dès aujourd’hui.</p>
          <Button 
            size="lg" 
            className="bg-primary text-black hover:bg-primary/90 digital-glow px-16 h-20 rounded-full text-2xl font-black uppercase tracking-tighter transition-all active:scale-95"
            onClick={() => setShowDashboard(true)}
          >
            Créer mon agent IA
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <BarChart3 className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter">SAWT IA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">La plateforme d'intelligence conversationnelle ultime pour propulser votre relation client dans l'ère de l'IA.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <FooterLinks title="Produit" links={['Solutions', 'API', 'Agents', 'Tarifs']} />
            <FooterLinks title="Société" links={['À propos', 'Blog', 'Contact']} />
            <FooterLinks title="Légal" links={['Confidentialité', 'Conditions', 'Cookies']} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em]">
          <p>© 2025 SAWT IA. Tous droits réservés.</p>
          <div className="flex gap-10">
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
    <div className="relative p-12 rounded-[40px] bg-card/30 border border-white/5 hover:border-primary/20 transition-all group overflow-hidden">
      <div className="text-5xl mb-8">{number}</div>
      <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed font-medium">{description}</p>
    </div>
  );
}

function IndustryCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="p-10 rounded-3xl bg-card/20 border border-white/5 hover:bg-white/5 hover:border-primary/10 transition-all text-left group">
      <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">
        {icon}
      </div>
      <h4 className="text-xl font-black mb-3 uppercase tracking-tight">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{description}</p>
    </div>
  );
}

function AnalysisItem({ icon: Icon, text }: { icon: LucideIcon, text: string }) {
  return (
    <li className="flex items-center gap-5 text-xl">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/10">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-foreground font-bold tracking-tight">{text}</span>
    </li>
  );
}

function FooterLinks({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-6">
      <h4 className="font-black text-xs uppercase tracking-[0.3em] text-primary">{title}</h4>
      <ul className="space-y-3">
        {links.map(link => (
          <li key={link}>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-tight">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
