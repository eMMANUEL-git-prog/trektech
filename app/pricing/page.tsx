"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap } from "lucide-react"
import { useSubscription } from "@/lib/subscription-context"
import { useLanguage } from "@/lib/language-context"
import { useRouter } from "next/navigation"

export default function PricingPage() {
  const { tier, setTier } = useSubscription()
  const { language } = useLanguage()
  const router = useRouter()
  const [isAnnual, setIsAnnual] = useState(false)

  const t = {
    en: {
      badge: "Pricing Plans",
      title: "Choose Your Adventure",
      subtitle: "Unlock premium features and dive deeper into Nandi's cultural heritage",
      monthly: "Monthly",
      annual: "Annual",
      saveText: "Save 20%",
      currentPlan: "Current Plan",
      selectPlan: "Select Plan",
      upgradeNow: "Upgrade Now",
      perMonth: "/month",
      billedAnnually: "billed annually",
      free: {
        name: "Explorer",
        tagline: "Perfect for casual visitors",
        price: "Free",
        features: [
          "Basic storytelling experiences",
          "Access to all trails information",
          "Cultural heritage content",
          "Community guidelines",
        ],
      },
      explorer: {
        name: "Pathfinder",
        tagline: "For dedicated adventurers",
        price: isAnnual ? "$8" : "$10",
        popular: "Most Popular",
        features: [
          "Everything in Explorer",
          "Audio storytelling guides",
          "Hotels & accommodation finder",
          "Extended trail details",
          "Priority customer support",
        ],
      },
      champion: {
        name: "Champion",
        tagline: "Ultimate Nandi experience",
        price: isAnnual ? "$19" : "$24",
        features: [
          "Everything in Pathfinder",
          "Activities & experiences guide",
          "Restaurant recommendations",
          "Local events calendar",
          "Offline access to all content",
          "Personal trip planning assistance",
          "Exclusive champion interviews",
        ],
      },
    },
    sw: {
      badge: "Mipango ya Bei",
      title: "Chagua Aventure Yako",
      subtitle: "Fungua vipengele vya premium na ujifunze zaidi kuhusu urithi wa Nandi",
      monthly: "Kila Mwezi",
      annual: "Kila Mwaka",
      saveText: "Okoa 20%",
      currentPlan: "Mpango wa Sasa",
      selectPlan: "Chagua Mpango",
      upgradeNow: "Pandisha Sasa",
      perMonth: "/mwezi",
      billedAnnually: "iliyolipwa kila mwaka",
      free: {
        name: "Mchunguzi",
        tagline: "Inafaa kwa wageni wa kawaida",
        price: "Bure",
        features: [
          "Uzoefu wa msingi wa hadithi",
          "Ufikiaji wa habari za njia zote",
          "Maudhui ya urithi wa kitamaduni",
          "Miongozo ya jamii",
        ],
      },
      explorer: {
        name: "Mwongozaji",
        tagline: "Kwa wanatafuta adventure",
        price: isAnnual ? "$8" : "$10",
        popular: "Maarufu Zaidi",
        features: [
          "Kila kitu katika Mchunguzi",
          "Miongozo ya hadithi za sauti",
          "Kitafuta hoteli na malazi",
          "Maelezo ya ziada ya njia",
          "Msaada wa kipaumbele",
        ],
      },
      champion: {
        name: "Shujaa",
        tagline: "Uzoefu kamili wa Nandi",
        price: isAnnual ? "$19" : "$24",
        features: [
          "Kila kitu katika Mwongozaji",
          "Mwongozo wa shughuli na uzoefu",
          "Mapendekezo ya mikahawa",
          "Kalenda ya matukio ya ndani",
          "Ufikiaji nje ya mtandao",
          "Msaada wa kupanga safari binafsi",
          "Mahojiano ya kipekee ya mashujaa",
        ],
      },
    },
    fr: {
      badge: "Plans Tarifaires",
      title: "Choisissez Votre Aventure",
      subtitle: "Débloquez des fonctionnalités premium et plongez dans l'héritage culturel de Nandi",
      monthly: "Mensuel",
      annual: "Annuel",
      saveText: "Économisez 20%",
      currentPlan: "Plan Actuel",
      selectPlan: "Sélectionner",
      upgradeNow: "Mettre à Niveau",
      perMonth: "/mois",
      billedAnnually: "facturé annuellement",
      free: {
        name: "Explorateur",
        tagline: "Parfait pour les visiteurs occasionnels",
        price: "Gratuit",
        features: [
          "Expériences narratives de base",
          "Accès aux informations sur tous les sentiers",
          "Contenu du patrimoine culturel",
          "Directives communautaires",
        ],
      },
      explorer: {
        name: "Éclaireur",
        tagline: "Pour les aventuriers dévoués",
        price: isAnnual ? "$8" : "$10",
        popular: "Le Plus Populaire",
        features: [
          "Tout dans Explorateur",
          "Guides audio narratifs",
          "Recherche d'hôtels et hébergements",
          "Détails étendus des sentiers",
          "Support client prioritaire",
        ],
      },
      champion: {
        name: "Champion",
        tagline: "Expérience ultime de Nandi",
        price: isAnnual ? "$19" : "$24",
        features: [
          "Tout dans Éclaireur",
          "Guide d'activités et expériences",
          "Recommandations de restaurants",
          "Calendrier des événements locaux",
          "Accès hors ligne à tout le contenu",
          "Assistance personnalisée pour la planification",
          "Interviews exclusives de champions",
        ],
      },
    },
    es: {
      badge: "Planes de Precios",
      title: "Elige Tu Aventura",
      subtitle: "Desbloquea funciones premium y sumérgete en el patrimonio cultural de Nandi",
      monthly: "Mensual",
      annual: "Anual",
      saveText: "Ahorra 20%",
      currentPlan: "Plan Actual",
      selectPlan: "Seleccionar Plan",
      upgradeNow: "Actualizar Ahora",
      perMonth: "/mes",
      billedAnnually: "facturado anualmente",
      free: {
        name: "Explorador",
        tagline: "Perfecto para visitantes ocasionales",
        price: "Gratis",
        features: [
          "Experiencias narrativas básicas",
          "Acceso a información de todos los senderos",
          "Contenido del patrimonio cultural",
          "Pautas comunitarias",
        ],
      },
      explorer: {
        name: "Pionero",
        tagline: "Para aventureros dedicados",
        price: isAnnual ? "$8" : "$10",
        popular: "Más Popular",
        features: [
          "Todo en Explorador",
          "Guías narrativas de audio",
          "Buscador de hoteles y alojamiento",
          "Detalles extendidos de senderos",
          "Soporte prioritario al cliente",
        ],
      },
      champion: {
        name: "Campeón",
        tagline: "Experiencia definitiva de Nandi",
        price: isAnnual ? "$19" : "$24",
        features: [
          "Todo en Pionero",
          "Guía de actividades y experiencias",
          "Recomendaciones de restaurantes",
          "Calendario de eventos locales",
          "Acceso sin conexión a todo el contenido",
          "Asistencia personal para planificación",
          "Entrevistas exclusivas con campeones",
        ],
      },
    },
  }

  const content = t[language] || t.en

  const handleSelectPlan = (selectedTier: "free" | "explorer" | "champion") => {
    setTier(selectedTier)
    // Simulate payment success
    setTimeout(() => {
      router.push("/")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {content.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{content.title}</h1>
            <p className="text-xl text-muted-foreground text-balance">{content.subtitle}</p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={!isAnnual ? "font-semibold" : "text-muted-foreground"}>{content.monthly}</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={isAnnual ? "font-semibold" : "text-muted-foreground"}>{content.annual}</span>
              {isAnnual && (
                <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                  {content.saveText}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="relative flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Zap className="h-8 w-8 text-primary" />
                  {tier === "free" && (
                    <Badge variant="secondary" className="bg-primary/10">
                      {content.currentPlan}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl">{content.free.name}</CardTitle>
                <CardDescription>{content.free.tagline}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{content.free.price}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {content.free.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier === "free" ? "secondary" : "outline"}
                  className="w-full"
                  disabled={tier === "free"}
                  onClick={() => handleSelectPlan("free")}
                >
                  {tier === "free" ? content.currentPlan : content.selectPlan}
                </Button>
              </CardContent>
            </Card>

            {/* Explorer Plan */}
            <Card className="relative flex flex-col border-primary shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">{content.explorer.popular}</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Star className="h-8 w-8 text-primary" />
                  {tier === "explorer" && (
                    <Badge variant="secondary" className="bg-primary/10">
                      {content.currentPlan}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl">{content.explorer.name}</CardTitle>
                <CardDescription>{content.explorer.tagline}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{content.explorer.price}</span>
                  <span className="text-muted-foreground">{content.perMonth}</span>
                  {isAnnual && <div className="text-sm text-muted-foreground">{content.billedAnnually}</div>}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {content.explorer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier === "explorer" ? "secondary" : "default"}
                  className="w-full"
                  disabled={tier === "explorer"}
                  onClick={() => handleSelectPlan("explorer")}
                >
                  {tier === "explorer" ? content.currentPlan : content.upgradeNow}
                </Button>
              </CardContent>
            </Card>

            {/* Champion Plan */}
            <Card className="relative flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Crown className="h-8 w-8 text-primary" />
                  {tier === "champion" && (
                    <Badge variant="secondary" className="bg-primary/10">
                      {content.currentPlan}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl">{content.champion.name}</CardTitle>
                <CardDescription>{content.champion.tagline}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{content.champion.price}</span>
                  <span className="text-muted-foreground">{content.perMonth}</span>
                  {isAnnual && <div className="text-sm text-muted-foreground">{content.billedAnnually}</div>}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {content.champion.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier === "champion" ? "secondary" : "default"}
                  className="w-full"
                  disabled={tier === "champion"}
                  onClick={() => handleSelectPlan("champion")}
                >
                  {tier === "champion" ? content.currentPlan : content.upgradeNow}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
