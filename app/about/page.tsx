import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Heart, Users, BookOpen, Mountain, Target, Compass } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-landscape.jpg"
            alt="Nandi County community"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance mb-6">
              Where Stories Meet Footsteps
            </h1>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              We believe every trail in Nandi County carries the spirit of champions, the wisdom of community, and the
              beauty of Kenyan heritage.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex-grow">
        {/* Mission Statement */}
        <div className="space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nandi Stories transforms physical journeys into cultural experiences. We connect visitors with the rich
            heritage of Nandi County, Kenya—the birthplace of legendary runners and a community that has shaped global
            athletics. Through immersive storytelling, we invite you to walk the same paths as Olympic champions, learn
            from Kalenjin traditions, and discover the deep connection between land, people, and perseverance.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Respect & Authenticity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We honor the traditions, achievements, and daily lives of Nandi communities with deep respect and
                    cultural sensitivity.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Community Connection</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every story we tell strengthens the bond between visitors and local communities, creating meaningful
                    exchanges.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Education & Inspiration</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We educate visitors about sports heritage, cultural values, and the dedication that creates
                    champions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Sustainable Tourism</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We promote responsible exploration that preserves natural beauty and supports local economies.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">How It Works</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Share Your Journey Details</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tell us where you're going in Nandi County—a specific trail, village, training route, or landmark.
                    Let us know your activity, time available, and what kind of visitor you are.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Receive Your Custom Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We craft a personalized narrative connecting your location to sports legends, cultural traditions,
                    and the spirit of the community. Each story is tailored to your interests and time.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Experience the Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Follow the story as you explore. You'll receive sports heritage insights, cultural context, physical
                    guidance, and reflections that deepen your connection to the land and its people.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Why Nandi County */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why Nandi County?</h2>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nandi County is not just a place on the map—it's the epicenter of distance running excellence. This
                highland region at 6,500 feet elevation has produced more world-class runners per capita than anywhere
                else on Earth.
              </p>
              <p>
                From Kipchoge Keino in the 1960s to Eliud Kipchoge today, Nandi's athletes have won dozens of Olympic
                medals, broken countless world records, and inspired millions. But their success isn't just about
                altitude or genetics—it's rooted in culture, community support, and the daily discipline passed down
                through generations.
              </p>
              <p>
                When you run these trails or walk these roads, you're experiencing the same landscapes that shaped
                champions. You're learning from a community that values hard work, humility, and collective achievement.
                You're becoming part of a living story that continues to unfold.
              </p>
            </div>
          </Card>
        </div>

        {/* Visit Responsibly */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Visit Responsibly</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Respect Training Times</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Athletes train early morning and late afternoon. Give them space and quiet during these critical
                    hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Support Local Communities</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Buy from local vendors, hire local guides, and contribute to the economy that sustains these
                    training grounds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Honor Cultural Customs</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Learn basic Kalenjin greetings, ask permission before photographing people, and dress modestly when
                    visiting villages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mountain className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Preserve the Environment</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Stay on marked trails, carry out all trash, and protect the natural beauty that makes these training
                    grounds special.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
