"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Hotel, Utensils, Tent, MapPin, Star, Phone, Mail, Lock, Crown } from "lucide-react"
import { useSubscription } from "@/lib/subscription-context"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function GuidePage() {
  const { tier, hasAccess } = useSubscription()
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("hotels")

  const t = {
    en: {
      badge: "Visitor Guide",
      title: "Hotels, Camps & Activities",
      subtitle: "Discover the best places to stay and things to do in Nandi County",
      upgradeTitle: "Unlock Premium Guide",
      upgradeDescription: "Get access to curated hotels, camps, restaurants, and local activities",
      upgradeButton: "Upgrade to Pathfinder",
      tabs: {
        hotels: "Hotels",
        camps: "Camps",
        restaurants: "Restaurants",
        activities: "Activities",
      },
      priceRange: "Price Range",
      contact: "Contact",
      location: "Location",
      rating: "Rating",
      premiumOnly: "Premium Feature",
    },
    sw: {
      badge: "Mwongozo wa Mgeni",
      title: "Hoteli, Kambi na Shughuli",
      subtitle: "Gundua maeneo bora ya kukaa na mambo ya kufanya katika Kaunti ya Nandi",
      upgradeTitle: "Fungua Mwongozo wa Premium",
      upgradeDescription: "Pata ufikiaji wa hoteli, kambi, mikahawa, na shughuli za ndani",
      upgradeButton: "Pandisha hadi Mwongozaji",
      tabs: {
        hotels: "Hoteli",
        camps: "Kambi",
        restaurants: "Mikahawa",
        activities: "Shughuli",
      },
      priceRange: "Bei",
      contact: "Mawasiliano",
      location: "Mahali",
      rating: "Ukadiriaji",
      premiumOnly: "Kipengele cha Premium",
    },
    fr: {
      badge: "Guide du Visiteur",
      title: "Hôtels, Camps et Activités",
      subtitle: "Découvrez les meilleurs endroits où séjourner et les choses à faire dans le comté de Nandi",
      upgradeTitle: "Débloquer le Guide Premium",
      upgradeDescription: "Accédez aux hôtels, camps, restaurants et activités locales sélectionnés",
      upgradeButton: "Passer à Éclaireur",
      tabs: {
        hotels: "Hôtels",
        camps: "Camps",
        restaurants: "Restaurants",
        activities: "Activités",
      },
      priceRange: "Gamme de Prix",
      contact: "Contact",
      location: "Emplacement",
      rating: "Évaluation",
      premiumOnly: "Fonctionnalité Premium",
    },
    es: {
      badge: "Guía del Visitante",
      title: "Hoteles, Campamentos y Actividades",
      subtitle: "Descubre los mejores lugares para alojarse y cosas que hacer en el condado de Nandi",
      upgradeTitle: "Desbloquear Guía Premium",
      upgradeDescription: "Obtén acceso a hoteles, campamentos, restaurantes y actividades locales seleccionadas",
      upgradeButton: "Actualizar a Pionero",
      tabs: {
        hotels: "Hoteles",
        camps: "Campamentos",
        restaurants: "Restaurantes",
        activities: "Actividades",
      },
      priceRange: "Rango de Precio",
      contact: "Contacto",
      location: "Ubicación",
      rating: "Calificación",
      premiumOnly: "Característica Premium",
    },
  }

  const content = t[language] || t.en

  const hotels = [
    {
      name: "Nandi Hills Hotel",
      description: "Comfortable accommodation with stunning views of the Nandi Hills and tea plantations",
      location: "Kapsabet Town",
      rating: 4.5,
      priceRange: "$$",
      contact: "+254 722 123 456",
      email: "info@nandihillshotel.com",
      image: "https://placeholder.svg?height=200&width=300&query=modern hotel with mountain views",
    },
    {
      name: "Kipchoge Training Center Lodge",
      description: "Stay where champions train. Basic but authentic accommodation near legendary training grounds",
      location: "Kaptagat",
      rating: 4.2,
      priceRange: "$",
      contact: "+254 733 234 567",
      email: "lodge@kipchoge-tc.com",
      image: "https://placeholder.svg?height=200&width=300&query=rustic training lodge kenya",
    },
    {
      name: "Nandi Escarpment Resort",
      description: "Luxury resort overlooking the Great Rift Valley with world-class amenities",
      location: "Nandi Escarpment",
      rating: 4.8,
      priceRange: "$$$",
      contact: "+254 700 345 678",
      email: "reservations@nandiresort.co.ke",
      image: "https://placeholder.svg?height=200&width=300&query=luxury resort rift valley",
    },
  ]

  const camps = [
    {
      name: "Kaptagat Forest Camp",
      description: "Eco-friendly camping grounds in the heart of the forest where champions run",
      location: "Kaptagat Forest",
      rating: 4.3,
      priceRange: "$",
      contact: "+254 711 456 789",
      email: "camp@kaptagatforest.com",
      image: "https://placeholder.svg?height=200&width=300&query=forest camping tents kenya",
    },
    {
      name: "Mosoriot Adventure Camp",
      description: "Family-friendly camping with guided trail experiences and cultural activities",
      location: "Mosoriot",
      rating: 4.1,
      priceRange: "$",
      contact: "+254 722 567 890",
      email: "info@mosoriotcamp.com",
      image: "https://placeholder.svg?height=200&width=300&query=adventure camp kenya",
    },
  ]

  const restaurants = [
    {
      name: "Champions Cafe",
      description: "Local cuisine with energy-packed meals loved by athletes. Try the Ugali and Sukuma Wiki",
      location: "Kapsabet",
      rating: 4.4,
      priceRange: "$",
      contact: "+254 733 678 901",
      email: "hello@championscafe.co.ke",
      image: "https://placeholder.svg?height=200&width=300&query=kenyan local restaurant",
    },
    {
      name: "Tea Plantation Restaurant",
      description: "Fine dining with panoramic views of tea estates. Known for fusion cuisine",
      location: "Nandi Hills",
      rating: 4.6,
      priceRange: "$$",
      contact: "+254 700 789 012",
      email: "dining@teaplantation.com",
      image: "https://placeholder.svg?height=200&width=300&query=restaurant tea plantation view",
    },
  ]

  const activities = [
    {
      name: "Guided Running Tours",
      description: "Run with local athletes on legendary training routes. Morning sessions available",
      location: "Various Locations",
      rating: 4.9,
      priceRange: "$$",
      contact: "+254 722 890 123",
      email: "tours@nandirunning.com",
      image: "https://placeholder.svg?height=200&width=300&query=group running tour kenya",
    },
    {
      name: "Cultural Village Experience",
      description: "Learn about Kalenjin traditions, language, and community values from local elders",
      location: "Mosoriot Village",
      rating: 4.7,
      priceRange: "$",
      contact: "+254 711 901 234",
      email: "culture@nandiheritagetours.com",
      image: "https://placeholder.svg?height=200&width=300&query=kenya cultural village experience",
    },
    {
      name: "Tea Factory Tour",
      description: "Discover the tea-making process from leaf to cup with tastings included",
      location: "Nandi Tea Estate",
      rating: 4.5,
      priceRange: "$",
      contact: "+254 733 012 345",
      email: "tours@nanditeaestate.com",
      image: "https://placeholder.svg?height=200&width=300&query=tea factory tour kenya",
    },
  ]

  if (!hasAccess("hotel_guides")) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <section className="relative pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4">
                {content.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{content.title}</h1>
              <p className="text-xl text-muted-foreground text-balance">{content.subtitle}</p>
            </div>

            <Card className="max-w-2xl mx-auto p-8 text-center bg-gradient-to-br from-muted/50 to-muted/30">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{content.upgradeTitle}</h2>
              <p className="text-muted-foreground mb-8 text-lg">{content.upgradeDescription}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-left">
                  <Hotel className="w-5 h-5 text-primary" />
                  <span>Curated Hotels & Lodges</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <Tent className="w-5 h-5 text-primary" />
                  <span>Camping Grounds</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <Utensils className="w-5 h-5 text-primary" />
                  <span>Local Restaurants</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Activities & Tours</span>
                </div>
              </div>
              <Button size="lg" asChild className="h-12 px-8">
                <Link href="/pricing">{content.upgradeButton}</Link>
              </Button>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {content.badge}
              <Crown className="w-3 h-3 ml-1" />
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{content.title}</h1>
            <p className="text-xl text-muted-foreground text-balance">{content.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="hotels">{content.tabs.hotels}</TabsTrigger>
              <TabsTrigger value="camps">{content.tabs.camps}</TabsTrigger>
              <TabsTrigger value="restaurants">{content.tabs.restaurants}</TabsTrigger>
              <TabsTrigger value="activities">{content.tabs.activities}</TabsTrigger>
            </TabsList>

            <TabsContent value="hotels" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{hotel.name}</CardTitle>
                        <Badge variant="secondary">{hotel.priceRange}</Badge>
                      </div>
                      <CardDescription>{hotel.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{hotel.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{hotel.rating} / 5.0</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{hotel.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate">{hotel.email}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="camps" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {camps.map((camp, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={camp.image || "/placeholder.svg"}
                        alt={camp.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{camp.name}</CardTitle>
                        <Badge variant="secondary">{camp.priceRange}</Badge>
                      </div>
                      <CardDescription>{camp.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{camp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{camp.rating} / 5.0</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{camp.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate">{camp.email}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="restaurants" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                        <Badge variant="secondary">{restaurant.priceRange}</Badge>
                      </div>
                      <CardDescription>{restaurant.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{restaurant.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{restaurant.rating} / 5.0</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{restaurant.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate">{restaurant.email}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activities" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{activity.name}</CardTitle>
                        <Badge variant="secondary">{activity.priceRange}</Badge>
                      </div>
                      <CardDescription>{activity.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{activity.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{activity.rating} / 5.0</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{activity.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate">{activity.email}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
