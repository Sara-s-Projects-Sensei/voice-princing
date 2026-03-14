"use client";

import { useState } from "react";
import { Dashboard } from "@/components/voxchat/Dashboard";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  TrendingUp,
  Mic,
} from "lucide-react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-[#080B0A] text-foreground flex flex-col font-body selection:bg-primary selection:text-black">
      {/* BARRE DE MENU */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-[#080B0A] border-b border-white/5 z-[100] flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Sawt IA */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center digital-glow">
              <Mic className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">
              SAWT <span className="text-primary">IA</span>
            </span>
          </div>

          {/* Navigation Horizontale */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Accueil</a>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Pricing</a>
            <a href="#api" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">API</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Contact</a>
            
            {/* Bouton Signature */}
            <Button 
              className="bg-primary text-black hover:bg-primary/90 digital-glow px-8 h-11 rounded-full font-bold transition-all active:scale-95 ml-4"
              onClick={() => setShowDashboard(true)}
            >
              Accéder aux agents
            </Button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] text-reveal">
            🚀 AI VOICE & CONVERSATIONAL AGENTS
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-reveal" style={{ animationDelay: '0.1s' }}>
            DES AGENTS IA QUI PARLENT <br />
            À VOS CLIENTS <span className="text-primary italic">24/7.</span>
          </h1>

          <div className="space-y-3 text-reveal" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm md:text-base font-bold text-primary uppercase tracking-widest">
              Darija marocaine native • 32+ langues
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-bold flex items-center justify-center gap-3 whitespace-nowrap">
              Leads qualifiés • Ventes automatisées • ROI maximisé
              <TrendingUp className="w-5 h-5 text-primary" />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 text-reveal" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-black hover:bg-primary/90 digital-glow px-10 h-14 rounded-full text-lg font-black uppercase tracking-tighter group"
              onClick={() => setShowDashboard(true)}
            >
              Démarrer gratuitement <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 hover:border-primary text-white hover:text-primary px-10 h-14 rounded-full text-lg font-bold bg-white/5 backdrop-blur-sm"
            >
              Voir la démo <Play className="ml-2 w-4 h-4 fill-current" />
            </Button>
          </div>

          {/* BOUTON VOCAL SECONDAIRE */}
          <div className="pt-8 text-reveal" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary hover:bg-primary/10 font-black uppercase tracking-[0.2em] flex items-center gap-4 mx-auto px-12 h-20 rounded-full border border-primary/30 transition-all active:scale-95 text-xl digital-glow bg-primary/5"
            >
              <Mic className="w-6 h-6" /> Parlez à Sawt IA
            </Button>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-32 px-6 bg-[#0E1210] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-24 tracking-tighter uppercase">COMMENT ÇA MARCHE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              number="1️⃣"
              title="Configurez votre agent IA"
              description="Choisissez sa voix, son rôle et ses scénarios de conversation selon votre activité."
            />
            <StepCard 
              number="2️⃣"
              title="Connectez vos canaux"
              description="Déployez votre agent sur Téléphone, WhatsApp, Website et Meta (Facebook & Instagram) pour répondre à vos clients partout."
            />
            <StepCard 
              number="3️⃣"
              title="Intégrez vos outils"
              description="Connectez SAWT IA à votre CRM, ERP, Shopify, WooCommerce, Google Sheets ou Google Agenda pour synchroniser automatiquement vos données."
            />
            <StepCard 
              number="4️⃣"
              title="Automatisez vos conversations"
              description="L’agent IA répond aux clients, qualifie les leads, planifie des rendez-vous et alimente vos outils automatiquement."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Mic className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter">SAWT <span className="text-primary">IA</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">La plateforme d'intelligence conversationnelle ultime pour propulser votre relation client dans l'ère de l'IA.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <FooterLinks title="Produit" links={['Solutions', 'API', 'Tarifs']} />
            <FooterLinks title="Société" links={['À propos', 'Blog', 'Contact']} />
            <FooterLinks title="Légal" links={['Confidentialité', 'Conditions']} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] text-center">
          <p>© 2025 SAWT IA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative p-8 rounded-[40px] bg-card/30 border border-white/5 hover:border-primary/20 transition-all group overflow-hidden h-full">
      <div className="text-5xl mb-8">{number}</div>
      <h3 className="text-xl font-black mb-4 uppercase tracking-tight leading-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed font-medium text-sm">{description}</p>
    </div>
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
