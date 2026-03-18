
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Mic, ArrowLeft, Sun, Moon, Zap, Star, ShieldCheck, Crown } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const plans = [
    {
      name: "Discovery",
      icon: <Zap className="w-5 h-5 text-primary" />,
      dot: "🟢",
      price: "0 DH",
      period: "/ mois",
      tagline: "Testez la puissance de SAWT IA",
      description: "Testez comment SAWT IA répond à vos clients 24/7",
      features: [
        "1 Agent IA (Chat ou Voice)",
        "1 projet omnicanal : Téléphone • WhatsApp • Website • Meta",
        "Campagne Inbound : réception appels & messages",
        "Choix de langue : Darija marocaine native + 32+ langues",
        "Prise de rendez-vous automatique (Google Agenda)",
        "Capture & stockage des leads (Google Sheets)",
        "Scénarios prêts à l’emploi (FAQ, qualification…)",
        "Historique & données conservés 30 jours",
        "Accès limité à 30 jours"
      ],
      buttonText: "Tester gratuitement",
      highlight: false,
      footerTip: "Sans engagement — testez avant d’investir"
    },
    {
      name: "Launch",
      icon: <Star className="w-5 h-5 text-primary" />,
      dot: "🟡",
      price: "279 DH",
      period: "/ mois",
      tagline: "Commencez à automatiser",
      description: "Ne perdez plus vos leads — automatisez dès aujourd’hui",
      features: [
        "1 Agent IA intelligent",
        "1 projet omnicanal : Téléphone • WhatsApp • Website • Meta",
        "Campagne Inbound : réception & qualification automatique",
        "Choix de langue : Darija marocaine native + 32+ langues",
        "Tokens inclus + recharge flexible",
        "Qualification automatique des prospects",
        "Prise de rendez-vous automatisée",
        "Dashboard de suivi (leads, appels, conversions)",
        "Connexion Google Sheets & Google Agenda",
        "Scénarios personnalisables",
        "Support standard",
        "Upgrade agent multilingue"
      ],
      buttonText: "Démarrer maintenant",
      highlight: false,
      footerTip: "Gagnez du temps et structurez votre acquisition"
    },
    {
      name: "Automation",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      dot: "🟠",
      price: "379 DH",
      period: "/ mois",
      tagline: "Générez plus de leads et automatisez vos ventes",
      description: "Transformez chaque interaction en opportunité",
      features: [
        "2 Agents IA",
        "2 projets omnicanaux : Téléphone • WhatsApp • Website • Meta",
        "Campagnes Inbound & Outbound (acquisition + relance)",
        "Choix de langue : Darija marocaine native + 32+ langues",
        "Automatisation Google (Sheets + Agenda)",
        "Qualification intelligente + scoring des leads",
        "Suivi client automatisé (messages + appels)",
        "Gestion simultanée multi-canaux",
        "Priorisation des prospects chauds",
        "Tokens rechargeables",
        "Upgrade agent multilingue"
      ],
      buttonText: "Choisir le plan le plus populaire",
      highlight: true,
      footerTip: "Plus de leads • Plus de ventes • Moins d’effort"
    },
    {
      name: "Scale AI",
      icon: <Crown className="w-5 h-5 text-primary" />,
      dot: "🔵",
      price: "779 DH",
      period: "/ mois",
      tagline: "Passez à une machine de croissance automatisée",
      description: "Scalez votre business sans recruter",
      features: [
        "2 Agents IA avancés",
        "2 projets omnicanaux : Téléphone • WhatsApp • Website • Meta",
        "Campagnes Inbound & Outbound avancées",
        "Choix de langue : Darija marocaine native + 32+ langues",
        "Agent multilingue inclus (sans upgrade)",
        "Agent Expert (logique métier & scénarios avancés)",
        "Automatisation complète du cycle client",
        "Intégration CRM & ERP",
        "Shopify / WooCommerce",
        "API & outils métiers",
        "Gestion de volume élevé (appels + messages simultanés)",
        "Optimisation des coûts opérationnels",
        "Support prioritaire"
      ],
      buttonText: "Contacter un expert",
      highlight: false,
      footerTip: "Moins de coûts • Plus de performance • Scalabilité totale"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary selection:text-black">
      {/* BARRE DE MENU - IDENTIQUE À LA HOME */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md border-b border-border z-[100] flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Sawt IA */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center digital-glow">
              <Mic className="text-primary-foreground w-6 h-6" />
            </div>
            <div className="flex items-center text-2xl font-black tracking-tighter uppercase">
              <span className="text-foreground">SAWT</span>
              <span className="text-primary ml-1">IA</span>
            </div>
          </Link>

          {/* Navigation Horizontale */}
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Accueil</Link>
            <Link href="/#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
            <Link href="/pricing" className="text-sm font-medium text-primary transition-colors">Pricing</Link>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">API</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            
            {/* Theme Toggle & Bouton */}
            <div className="flex items-center ml-4 border-l border-border pl-6 gap-4">
               <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="rounded-full w-9 h-9 text-muted-foreground hover:text-foreground"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              <Link href="/">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 digital-glow px-8 h-11 rounded-full font-bold transition-all active:scale-95"
                >
                  Accéder aux agents
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-reveal">
              PRICING <span className="text-primary">SAWT IA</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
              Choisissez le plan adapté à votre croissance et automatisez vos conversations dès aujourd'hui.
            </p>
          </div>

          {/* AJOUT PSYCHOLOGIQUE */}
          <div className="text-center max-w-3xl mx-auto text-reveal" style={{ animationDelay: '0.2s' }}>
             <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 digital-glow">
                <p className="text-lg md:text-2xl font-black text-primary uppercase tracking-tighter leading-tight italic">
                  ⚡ “Chaque lead non traité est une opportunité perdue. Automatisez dès maintenant.”
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-reveal" style={{ animationDelay: '0.3s' }}>
            {plans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative flex flex-col bg-card/40 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden group ${plan.highlight ? 'ring-2 ring-primary border-primary shadow-[0_0_30px_rgba(26,238,111,0.15)]' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg tracking-widest">
                    Le plus populaire
                  </div>
                )}
                
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{plan.dot}</span>
                    <CardTitle className="text-xl font-black uppercase tracking-tighter">{plan.name}</CardTitle>
                  </div>
                  <div className="text-xs font-bold text-primary uppercase tracking-tight mb-4">
                    {plan.tagline}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-4 font-bold leading-relaxed italic border-l-2 border-primary/30 pl-3">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 p-6 pt-0 space-y-4">
                  <div className="h-px bg-border w-full" />
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-[10px] font-medium group-hover:translate-x-1 transition-transform">
                        <CheckCircle2 className={`w-3 h-3 mt-0.5 shrink-0 text-primary`} />
                        <span className="text-muted-foreground leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6 flex flex-col gap-4">
                  <Button 
                    className={`w-full font-black uppercase tracking-tighter rounded-xl transition-all active:scale-95 text-xs h-11 ${plan.highlight ? 'bg-primary text-primary-foreground hover:bg-primary/90 digital-glow' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                  >
                    {plan.buttonText}
                  </Button>
                  <p className="text-[9px] text-center font-black text-primary uppercase tracking-widest leading-none">
                    💡 {plan.footerTip}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="pt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em]">
            © 2025 SAWT IA. TOUS DROITS RÉSERVÉS.
          </p>
        </div>
      </footer>
    </div>
  );
}
