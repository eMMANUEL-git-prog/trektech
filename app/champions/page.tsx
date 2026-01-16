import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, MapPin, Calendar } from "lucide-react";
import { Footer } from "@/components/footer";

const champions = [
  {
    name: "Eliud Kipchoge",
    title: "Marathon Legend",
    achievements: [
      "Olympic Gold Medalist (2016, 2020)",
      "First sub-2 hour marathon (1:59:40)",
      "World Record Holder",
      "Berlin Marathon Champion (4x)",
    ],
    hometown: "Kapsisiywa",
    era: "2003-Present",
    image: "/images/kipchoge.jpeg",
    quote:
      "No human is limited. If you believe in yourself, you can achieve anything you set your mind to.",
    trainingGround: "Kaptagat Forest",
  },
  {
    name: "Henry Rono",
    title: "The Record Breaker",
    achievements: [
      "4 World Records in 81 days (1978)",
      "3000m Steeplechase WR",
      "5000m World Record",
      "10,000m World Record",
    ],
    hometown: "Kaptabengwo",
    era: "1976-1983",
    image: "/images/rono.jpeg",
    quote:
      "Running is about dedication, discipline, and the spirit to push beyond limits.",
    trainingGround: "Nandi Hills Circuit",
  },
  {
    name: "Pamela Jelimo",
    title: "800m Queen",
    achievements: [
      "Olympic Gold Medalist (2008)",
      "World Junior Champion",
      "IAAF Golden League Winner",
      "First Kenyan woman to win Olympic track gold",
    ],
    hometown: "Kabirirsang",
    era: "2007-2016",
    image: "/images/jelimo.jpeg",
    quote:
      "Success comes from hard work, belief in yourself, and the support of your community.",
    trainingGround: "Kipchoge Keino Stadium",
  },
  {
    name: "Wilson Kipketer",
    title: "800m Phenomenon",
    achievements: [
      "3x World Champion (1995, 1997, 1999)",
      "World Record Holder (800m)",
      "Olympic Silver Medalist (2000)",
      "7 of 13 fastest 800m times",
    ],
    hometown: "Kapchemoiywo",
    era: "1993-2005",
    image: "/images/kipketer.jpeg",
    quote:
      "The track taught me that every second counts, and every step matters.",
    trainingGround: "Nandi Escarpment Trails",
  },
  {
    name: "Moses Tanui",
    title: "Road Racing Master",
    achievements: [
      "2x World Champion (10,000m)",
      "Boston Marathon Champion (1996, 1998)",
      "Chicago Marathon Winner",
      "Commonwealth Games Gold",
    ],
    hometown: "Nandi Hills",
    era: "1988-2001",
    image: "/images/tanui.jpeg",
    quote:
      "The roads of Nandi made me strong. The community made me a champion.",
    trainingGround: "Nandi County Roads",
  },
  {
    name: "Sally Kipyego",
    title: "Distance Star",
    achievements: [
      "Olympic Silver Medalist (10,000m)",
      "World Cross Country Champion",
      "NCAA Champion (7x)",
      "Boston Marathon Champion (2017)",
    ],
    hometown: "Kipsaiya",
    era: "2006-Present",
    image: "/images/kipyego.jpeg",
    quote:
      "Every trail in Nandi prepared me for every race I would face in the world.",
    trainingGround: "Kaptagat Forest Loop",
  },
];

export default function ChampionsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/runner-silhouette.jpg"
            alt="Champion runner silhouette"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              <span>Legends of Nandi</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance mb-6">
              Champions Born from the Hills
            </h1>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Nandi County has produced some of the world's greatest runners.
              Their stories inspire generations and put Kenya on the global
              sports map.
            </p>
          </div>
        </div>
      </div>

      {/* Champions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="space-y-12">
          {champions.map((champion, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-3 gap-6 p-6 lg:p-8">
                {/* Image */}
                <div className="md:col-span-1">
                  <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                    <img
                      src={champion.image || "/placeholder.svg"}
                      alt={champion.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 flex flex-col gap-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                          {champion.name}
                        </h2>
                        <p className="text-lg text-accent font-medium">
                          {champion.title}
                        </p>
                      </div>
                      <Badge variant="secondary" className="shrink-0">
                        <Medal className="w-3 h-3 mr-1" />
                        Legend
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{champion.hometown}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{champion.era}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        Major Achievements
                      </h3>
                      <ul className="space-y-1">
                        {champion.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <Trophy className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <blockquote className="italic text-sm text-muted-foreground leading-relaxed">
                        &ldquo;{champion.quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 text-sm bg-primary/5 text-primary px-3 py-1.5 rounded-md">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="font-medium">Training Ground:</span>
                        <span>{champion.trainingGround}</span>
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
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Walk Where Champions Trained
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the same trails and training grounds that shaped these
              legendary athletes. Create your own journey through their stories.
            </p>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
