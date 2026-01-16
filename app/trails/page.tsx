"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, TrendingUp, Users, Mountain, Footprints } from "lucide-react"
import { Footer } from "@/components/footer"

const trails = [
  {
    name: "Kaptagat Forest Loop",
    difficulty: "Moderate",
    distance: "8.5 km",
    elevation: "450m gain",
    duration: "2-3 hours",
    type: "Forest Trail",
    image: "/images/kaptagat-forest.jpg",
    description:
      "The legendary training ground where Eliud Kipchoge honed his skills. This trail winds through dense forest with soft, forgiving terrain perfect for building endurance.",
    highlights: ["Kipchoge's training route", "Shaded forest paths", "Wildlife viewing", "Soft dirt surface"],
    bestFor: ["Runners", "Nature lovers", "Photography"],
    culturalNote: "Respect the quiet hours when athletes are training (early morning)",
  },
  {
    name: "Nandi Hills Circuit",
    difficulty: "Challenging",
    distance: "15 km",
    elevation: "680m gain",
    duration: "3-4 hours",
    type: "Hill Route",
    image: "/images/nandi-hills-circuit.jpg",
    description:
      "A demanding route through rolling hills that has produced countless champions. Experience the altitude training that gives Nandi runners their legendary strength.",
    highlights: [
      "Panoramic valley views",
      "Traditional Kalenjin villages",
      "Tea plantations",
      "Champion training spots",
    ],
    bestFor: ["Experienced runners", "Athletes in training", "Serious hikers"],
    culturalNote: "Greet local runners with 'Chamge!' (Hello in Kalenjin)",
  },
  {
    name: "Kipchoge Keino Heritage Trail",
    difficulty: "Easy",
    distance: "5 km",
    elevation: "180m gain",
    duration: "1-2 hours",
    type: "Heritage Walk",
    image: "/images/keino-trail.jpg",
    description:
      "A gentle introduction to Nandi's running culture, connecting landmarks associated with Olympic legend Kipchoge Keino and the community he inspired.",
    highlights: ["Kipchoge Keino Stadium", "Community training grounds", "Historical markers", "Local running clubs"],
    bestFor: ["Families", "Beginners", "Cultural enthusiasts"],
    culturalNote: "Visit the stadium on weekday afternoons to see young athletes training",
  },
  {
    name: "Nandi Escarpment Trail",
    difficulty: "Challenging",
    distance: "12 km",
    elevation: "820m gain",
    duration: "4-5 hours",
    type: "Mountain Trail",
    image: "/images/escarpment-trail.jpg",
    description:
      "An epic trail along the dramatic Nandi Escarpment offering breathtaking views of the Rift Valley. This is where mental toughness is built.",
    highlights: ["Rift Valley panoramas", "Rock formations", "Diverse ecosystems", "Wilson Kipketer training site"],
    bestFor: ["Experienced hikers", "Adventure seekers", "Photographers"],
    culturalNote: "Carry your own water and respect private land boundaries",
  },
  {
    name: "Tea Plantation Road Run",
    difficulty: "Easy",
    distance: "10 km",
    elevation: "220m gain",
    duration: "1.5-2 hours",
    type: "Road Route",
    image: "/images/tea-plantation.jpg",
    description:
      "A scenic road run through emerald green tea plantations. Popular with local runners for tempo runs and recovery jogs.",
    highlights: ["Tea plantation views", "Smooth tarmac surface", "Morning mist atmosphere", "Local farm stands"],
    bestFor: ["Road runners", "Cyclists", "Morning exercisers"],
    culturalNote: "Buy fresh chai from roadside vendors to support the community",
  },
  {
    name: "Mosoriot Village Trail",
    difficulty: "Moderate",
    distance: "7 km",
    elevation: "340m gain",
    duration: "2 hours",
    type: "Village Route",
    image: "/images/mosoriot-village.jpg",
    description:
      "A cultural immersion trail passing through traditional Kalenjin villages where running champions grew up. Experience authentic rural life.",
    highlights: ["Traditional homesteads", "Community schools", "Cultural interactions", "Sally Kipyego's hometown"],
    bestFor: ["Cultural tourists", "Photographers", "Community visitors"],
    culturalNote: "Always ask permission before taking photos of people or homes",
  },
]

export default function TrailsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/nandi-hills.jpg"
            alt="Nandi Hills trails"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mountain className="w-4 h-4" />
              <span>Explore Nandi</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance mb-6">
              Trails That Built Champions
            </h1>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Discover the legendary routes where Olympic medalists train. Each trail tells a story of dedication,
              community, and the pursuit of excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Trails Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {trails.map((trail, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              {/* Trail Image */}
              <div className="aspect-video bg-muted overflow-hidden">
                <img src={trail.image || "/placeholder.svg"} alt={trail.name} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{trail.name}</h2>
                      <p className="text-sm text-muted-foreground">{trail.type}</p>
                    </div>
                    <Badge
                      variant={
                        trail.difficulty === "Easy"
                          ? "secondary"
                          : trail.difficulty === "Moderate"
                            ? "default"
                            : "destructive"
                      }
                      className="shrink-0"
                    >
                      {trail.difficulty}
                    </Badge>
                  </div>

                  {/* Trail Stats */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Footprints className="w-4 h-4" />
                      <span>{trail.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{trail.elevation}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{trail.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">{trail.description}</p>
                </div>

                <div className="space-y-3 flex-1">
                  {/* Highlights */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">Trail Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {trail.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Best For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {trail.bestFor.map((audience, i) => (
                        <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Cultural Note */}
                  <div className="pt-3 border-t border-border">
                    <div className="flex gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-foreground mb-1">Cultural Note</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{trail.culturalNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Ready for Your Journey?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Create a personalized storytelling experience for any trail or location in Nandi County. Let the landscape
              and legacy guide your adventure.
            </p>
            <Button size="lg" asChild>
              <Link href="/">Create My Story</Link>
            </Button>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
