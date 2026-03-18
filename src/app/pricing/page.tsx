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
      name: "Free",
      icon: <Zap className="w-5 h-5 text-green-400" />,
      dot: "🟢",
      price: "0 DH",
      period: "/ mois",
      description: "Pour découvrir SAWT IA et tester un agent.",
      features: [
        "1 Agent Basic ou Advanced",
        "1 Projet",
        "1 connexion SIP",
        "1 WhatsApp",
        "1 site web",
        "Agent Chat ou Voice",
        "Campagnes Inbound uniquement",
        "Choix de langues (dont Darija native)",
        "Connexion Google Sheets",
        "Connexion Google Agenda",
        "Données conservées 1 mois",
        "Accès valable 1 mois"
      ],
      buttonText: "Démarrer gratuitement",
      highlight: false
    },
    {
      name: "Plan A",
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      dot: "🟡",
      price: "279 DH",
      period: "/ mois",
      description: "Pour les entreprises qui souhaitent commencer à automatiser.",
      features: [
        "Tout le plan Free, plus :",
        "Allocation mensuelle de tokens",
        "Accès à la recharge de tokens",
        "Option Agent multilingue (upgrade)",
        "Support prioritaire"
      ],
      buttonText: "Choisir le Plan A",
      highlight: false
    },
    {
      name: "Plan B",
      icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
      dot: "🟠",
      price: "379 DH",
      period: "/ mois",
      description: "Pour automatiser les interactions et gérer des campagnes.",
      features: [
        "Tout le Plan A, plus :",
        "Campagnes Inbound & Outbound",
        "2 Agents IA",
        "2 Projets",
        "Recharge de tokens"
      ],
      buttonText: "Choisir le Plan B",
      highlight: true
    },
    {
      name: "Plan C",
      icon: <Crown className="w-5 h-5 text-blue-400" />,
      dot: "🔵",
      price: "779 DH",
      period: "/ mois",
      description: "Pour les entreprises avec un volume élevé et besoins avancés.",
      features: [
        "Tout le Plan B, plus :",
        "4 Agents IA",
        "7 Projets",
        "Agent Expert",
        "Connexion multi-tools avancée",
        "Intégration CRM / ERP",
        "Intégration Shopify / WooCommerce",
        "Intégrations via API",
        "Option Agent multilingue inclus"
      ],
      buttonText: "Choisir le Plan C",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md border-b border-border z-[100] flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center digital-glow group-hover:scale-110 transition-transform">
              <Mic className="text-primary-foreground w-6 h-6" />
            </div>
            <div className="flex items-center text-2xl font-black tracking-tighter uppercase">
              <span className="text-foreground">SAWT</span>
              <span className="text-primary ml-1">IA</span>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Accueil</Link>
            <Link href="/pricing" className="text-sm font-medium text-primary transition-colors">Pricing</Link>
            
            <div className="flex items-center ml-4 border-l border-border pl-6 gap-4">
               <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="rounded-full w-9 h-9 text-muted-foreground hover:text-foreground"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-reveal">
              PRICING <span className="text-primary">SAWT IA</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
              Choisissez le plan adapté à votre croissance et automatisez vos conversations dès aujourd'hui.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative flex flex-col bg-card/40 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden group ${plan.highlight ? 'ring-2 ring-primary border-primary shadow-[0_0_30px_rgba(26,238,111,0.1)]' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg tracking-widest">
                    Populaire
                  </div>
                )}
                
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{plan.dot}</span>
                    <CardTitle className="text-xl font-black uppercase tracking-tighter">{plan.name}</CardTitle>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 font-medium leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 p-6 pt-0 space-y-4">
                  <div className="h-px bg-border w-full" />
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs font-medium group-hover:translate-x-1 transition-transform">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${fIdx === 0 && plan.name !== "Free" ? "text-primary" : "text-primary/60"}`} />
                        <span className={fIdx === 0 && plan.name !== "Free" ? "font-bold text-foreground" : "text-muted-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6">
                  <Button 
                    className={`w-full font-black uppercase tracking-tighter rounded-xl transition-all active:scale-95 ${plan.highlight ? 'bg-primary text-primary-foreground hover:bg-primary/90 digital-glow' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                  >
                    {plan.buttonText}
                  </Button>
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
