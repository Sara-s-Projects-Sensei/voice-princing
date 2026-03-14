"use client";

import { useState, useEffect } from "react";
import { Dashboard } from "@/components/voxchat/Dashboard";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  TrendingUp,
  Mic,
  Sun,
  Moon,
  Home as HomeIcon,
  ShoppingBag,
  Headset,
  Calendar,
  MessageSquare,
  Stethoscope,
  Building2,
  ShieldCheck,
  GraduationCap,
  Target,
  TrendingDown,
  Layers,
  Clock,
  Cpu,
  LineChart,
  ShieldAlert
} from "lucide-react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
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

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary selection:text-black">
      {/* BARRE DE MENU */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md border-b border-border z-[100] flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Sawt IA */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center digital-glow">
              <Mic className="text-primary-foreground w-6 h-6" />
            </div>
            <div className="flex items-center text-2xl font-black tracking-tighter uppercase">
              <span className="text-foreground">SAWT</span>
              <span className="text-primary ml-1">IA</span>
            </div>
          </div>

          {/* Navigation Horizontale */}
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Accueil</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
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

              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 digital-glow px-8 h-11 rounded-full font-bold transition-all active:scale-95"
                onClick={() => setShowDashboard(true)}
              >
                Accéder aux agents
              </Button>
            </div>
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
            <p className="text-base md:text-lg font-bold text-primary uppercase tracking-widest">
              Darija marocaine native • 32+ langues
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-bold flex items-center justify-center gap-3 whitespace-nowrap">
              Leads qualifiés • Ventes automatisées • ROI maximisé
              <TrendingUp className="w-4 h-4 text-primary" />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 text-reveal" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 digital-glow px-6 h-10 rounded-full text-xs font-black uppercase tracking-tighter group"
              onClick={() => setShowDashboard(true)}
            >
              Démarrer gratuitement <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-border hover:border-primary text-foreground hover:text-primary px-6 h-10 rounded-full text-xs font-bold bg-card/50 backdrop-blur-sm"
            >
              Voir la démo <Play className="ml-2 w-2 h-2 fill-current" />
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
      <section className="py-20 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-black text-center mb-12 tracking-tighter uppercase">COMMENT ÇA MARCHE</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

      {/* SECTION LOGOS / INTÉGRATIONS */}
      <section className="py-12 px-6 border-b border-border bg-background/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-center text-muted-foreground mb-10">Connectez vos outils préférés</p>
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-24 pr-12 md:pr-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <LogoItem name="Google" />
              <LogoItem name="Google Sheets" />
              <LogoItem name="Shopify" />
              <LogoItem name="Immotech" />
              <LogoItem name="Bitrix24" />
              <LogoItem name="WooCommerce" />
              <LogoItem name="WhatsApp" />
              <LogoItem name="Facebook" />
              <LogoItem name="Instagram" />
              <LogoItem name="SIP Trunk" />
              <LogoItem name="Google" />
              <LogoItem name="Google Sheets" />
              <LogoItem name="Shopify" />
              <LogoItem name="Immotech" />
              <LogoItem name="Bitrix24" />
              <LogoItem name="WooCommerce" />
              <LogoItem name="WhatsApp" />
              <LogoItem name="Facebook" />
              <LogoItem name="Instagram" />
              <LogoItem name="SIP Trunk" />
            </div>
          </div>
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">Cas d’usage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Découvrez comment SAWT IA transforme la relation client dans différents secteurs d'activité.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard 
              icon={<HomeIcon className="w-6 h-6 text-primary" />}
              title="Immobilier"
              description="Automatisez la qualification de vos leads immobiliers dès le premier contact. L’agent IA répond aux prospects, pose les bonnes questions (budget, surface, localisation, financement) et planifie automatiquement des visites ou rendez-vous avec vos commerciaux via Google Agenda ou votre CRM."
            />
            <UseCaseCard 
              icon={<ShoppingBag className="w-6 h-6 text-primary" />}
              title="E-commerce"
              description="Offrez un support client instantané 24/7 sans mobiliser votre équipe. L’agent IA répond aux questions sur les produits, vérifie l’état des commandes, informe sur les livraisons et accompagne vos clients dans leur parcours d’achat."
            />
            <UseCaseCard 
              icon={<Headset className="w-6 h-6 text-primary" />}
              title="Centres d’appel"
              description="Optimisez votre centre d’appel grâce à des agents vocaux intelligents capables de gérer des milliers d’interactions simultanément. SAWT IA peut répondre aux appels entrants, lancer des campagnes d’appels sortants et qualifier les prospects automatiquement."
            />
            <UseCaseCard 
              icon={<Calendar className="w-6 h-6 text-primary" />}
              title="Prise de rendez-vous"
              description="Simplifiez la gestion de vos agendas. L’agent IA propose des créneaux disponibles, confirme les rendez-vous et synchronise automatiquement les réservations avec Google Agenda ou votre CRM."
            />
            <UseCaseCard 
              icon={<MessageSquare className="w-6 h-6 text-primary" />}
              title="Service client"
              description="Améliorez l’expérience client grâce à des réponses instantanées et personnalisées 24/7. L’agent IA traite les demandes, répond aux questions fréquentes et redirige les cas complexes vers vos équipes humaines si nécessaire."
            />
            <UseCaseCard 
              icon={<Stethoscope className="w-6 h-6 text-primary" />}
              title="Santé & cliniques"
              description="Simplifiez la gestion de votre accueil et de vos rendez-vous. L’agent IA prend en charge la prise de rendez-vous médicaux, envoie des rappels automatiques aux patients et répond aux questions fréquentes concernant les consultations."
            />
            <UseCaseCard 
              icon={<Building2 className="w-6 h-6 text-primary" />}
              title="Banque"
              description="Améliorez l’expérience client grâce à des réponses rapides et automatisées. L’agent IA qualifie les demandes des clients, répond aux questions courantes sur les services bancaires et oriente les clients vers le service approprié."
            />
            <UseCaseCard 
              icon={<ShieldCheck className="w-6 h-6 text-primary" />}
              title="Assurance"
              description="Automatisez le traitement des premières demandes clients. L’agent IA peut répondre aux questions sur les contrats, qualifier les demandes de devis ou de sinistre et planifier des rendez-vous avec un conseiller 24/7."
            />
            <UseCaseCard 
              icon={<GraduationCap className="w-6 h-6 text-primary" />}
              title="Éducation & formation"
              description="Automatisez la gestion des demandes d’information des étudiants et des candidats. L’agent IA répond aux questions sur les programmes, qualifie les candidats potentiels et planifie automatiquement les rendez-vous d’inscription ou d’orientation."
            />
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="py-24 px-6 bg-card/10 border-t border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">Fonctionnalités</h2>
            <p className="text-lg md:text-xl text-primary font-bold max-w-4xl mx-auto leading-tight italic">
              Une plateforme conçue pour augmenter vos revenus, réduire vos coûts opérationnels et sécuriser vos interactions clients à grande échelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Target className="w-6 h-6" />}
              title="Génération de leads qualifiés"
              description="SAWT IA identifie et qualifie automatiquement les prospects en posant les bonnes questions. Vos équipes commerciales reçoivent des leads prêts à convertir, directement dans vos outils."
            />
            <FeatureCard 
              icon={<TrendingDown className="w-6 h-6" />}
              title="Optimisation des coûts opérationnels"
              description="Automatisez les interactions répétitives et réduisez la charge de vos équipes. Les agents IA peuvent gérer des milliers de conversations simultanément, tout en diminuant les coûts liés au support et aux centres d’appel."
            />
            <FeatureCard 
              icon={<Layers className="w-6 h-6" />}
              title="Scalabilité illimitée"
              description="Accompagnez la croissance de votre activité sans augmenter vos ressources humaines. SAWT IA permet de traiter un volume élevé de conversations et d’appels en parallèle, tout en maintenant une expérience client fluide."
            />
            <FeatureCard 
              icon={<Clock className="w-6 h-6" />}
              title="Disponibilité 24/7"
              description="Vos clients obtiennent des réponses instantanées à toute heure. Ne perdez plus d’opportunités commerciales en dehors des horaires de bureau."
            />
            <FeatureCard 
              icon={<Cpu className="w-6 h-6" />}
              title="Intégration à votre écosystème"
              description="Connectez facilement SAWT IA à vos CRM, ERP, plateformes e-commerce et outils métiers pour centraliser et exploiter vos données clients."
            />
            <FeatureCard 
              icon={<LineChart className="w-6 h-6" />}
              title="Analyse et performance"
              description="Accédez à des tableaux de bord détaillés pour suivre les interactions, analyser les leads générés et mesurer l’impact sur votre croissance."
            />
          </div>
        </div>
      </section>

      {/* SÉCURITÉ ET PROTECTION DES DONNÉES */}
      <section className="py-24 px-6 bg-background border-t border-border overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto border border-primary/20 digital-glow">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Sécurité et protection des données</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            Les données et conversations sont traitées avec des standards élevés de sécurité, garantissant la confidentialité et la protection des informations de votre entreprise et de vos clients.
          </p>
          <div className="flex justify-center gap-4 pt-4">
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground">
               <ShieldAlert className="w-3 h-3 text-primary" /> Chiffrement Bout-en-Bout
             </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground">
               <ShieldCheck className="w-3 h-3 text-primary" /> Conformité RGPD
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Mic className="text-primary-foreground w-6 h-6" />
              </div>
              <div className="flex items-center text-2xl font-black tracking-tighter uppercase">
                <span className="text-foreground">SAWT</span>
                <span className="text-primary ml-1">IA</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">La plateforme d'intelligence conversationnelle ultime pour propulser votre relation client dans l'ère de l'IA.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <FooterLinks title="Produit" links={['Solutions', 'API', 'Tarifs']} />
            <FooterLinks title="Société" links={['À propos', 'Blog', 'Contact']} />
            <FooterLinks title="Légal" links={['Confidentialité', 'Conditions']} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-border text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] text-center">
          <p>© 2025 SAWT IA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative p-4 rounded-2xl bg-card/50 border border-border hover:border-primary/20 transition-all group overflow-hidden h-full flex flex-col">
      <div className="text-xl mb-3">{number}</div>
      <h3 className="text-xs font-black mb-1 uppercase tracking-tight leading-tight">{title}</h3>
      <p className="text-muted-foreground leading-tight font-medium text-[10px]">{description}</p>
    </div>
  );
}

function UseCaseCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl bg-card/40 border border-border hover:border-primary/20 transition-all group h-full space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card/30 border border-border/50 hover:bg-card/50 transition-all space-y-4">
      <div className="text-primary">{icon}</div>
      <h3 className="text-lg font-black uppercase tracking-tight leading-tight">{title}</h3>
      <p className="text-xs text-muted-foreground font-medium leading-relaxed">{description}</p>
    </div>
  );
}

function LogoItem({ name }: { name: string }) {
  return (
    <span className="text-xs md:text-sm font-black tracking-tighter uppercase text-foreground hover:text-primary transition-colors cursor-default whitespace-nowrap">
      {name}
    </span>
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
