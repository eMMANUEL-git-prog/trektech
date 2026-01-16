"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mountain, Footprints, Compass, Clock } from "lucide-react"
import { StoryDisplay } from "@/components/story-display"
import type { StoryData } from "@/lib/story-generator"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { generateStory } from "@/lib/story-generator"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const [formData, setFormData] = useState({
    placeName: "",
    locationType: "",
    activity: "",
    visitorProfile: "",
    timeAvailable: "",
  })
  const [story, setStory] = useState<StoryData | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate processing time for better UX
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const generatedStory = generateStory(formData)
    setStory(generatedStory)
    setIsGenerating(false)
  }

  const resetForm = () => {
    setStory(null)
    setFormData({
      placeName: "",
      locationType: "",
      activity: "",
      visitorProfile: "",
      timeAvailable: "",
    })
  }

  if (story) {
    return <StoryDisplay story={story} onReset={resetForm} />
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="relative h-[600px] bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-landscape.jpg" alt="Nandi County landscape" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Mountain className="w-4 h-4" />
              <span>{t.hero.location}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">{t.hero.title}</h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8"
                onClick={() => {
                  document.getElementById("journey-form")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t.hero.startButton}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => (window.location.href = "/trails")}
              >
                {t.hero.exploreButton}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="journey-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Card className="p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.form.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.form.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Place Name */}
              <div className="space-y-2">
                <Label htmlFor="placeName" className="text-base font-medium">
                  {t.form.placeName}
                </Label>
                <Input
                  id="placeName"
                  placeholder={t.form.placeNamePlaceholder}
                  value={formData.placeName}
                  onChange={(e) => setFormData({ ...formData, placeName: e.target.value })}
                  required
                  className="h-11"
                />
              </div>

              {/* Location Type */}
              <div className="space-y-2">
                <Label htmlFor="locationType" className="text-base font-medium flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  {t.form.locationType}
                </Label>
                <Select
                  value={formData.locationType}
                  onValueChange={(value) => setFormData({ ...formData, locationType: value })}
                  required
                >
                  <SelectTrigger id="locationType" className="h-11">
                    <SelectValue placeholder={t.form.locationTypePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trail">{t.locationTypes.trail}</SelectItem>
                    <SelectItem value="hill">{t.locationTypes.hill}</SelectItem>
                    <SelectItem value="road">{t.locationTypes.road}</SelectItem>
                    <SelectItem value="training-route">{t.locationTypes.trainingRoute}</SelectItem>
                    <SelectItem value="village">{t.locationTypes.village}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Activity */}
              <div className="space-y-2">
                <Label htmlFor="activity" className="text-base font-medium flex items-center gap-2">
                  <Footprints className="w-4 h-4" />
                  {t.form.activity}
                </Label>
                <Select
                  value={formData.activity}
                  onValueChange={(value) => setFormData({ ...formData, activity: value })}
                  required
                >
                  <SelectTrigger id="activity" className="h-11">
                    <SelectValue placeholder={t.form.activityPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="walking">{t.activities.walking}</SelectItem>
                    <SelectItem value="running">{t.activities.running}</SelectItem>
                    <SelectItem value="cycling">{t.activities.cycling}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Visitor Profile */}
              <div className="space-y-2">
                <Label htmlFor="visitorProfile" className="text-base font-medium">
                  {t.form.visitorProfile}
                </Label>
                <Select
                  value={formData.visitorProfile}
                  onValueChange={(value) => setFormData({ ...formData, visitorProfile: value })}
                  required
                >
                  <SelectTrigger id="visitorProfile" className="h-11">
                    <SelectValue placeholder={t.form.visitorProfilePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tourist">{t.visitorProfiles.tourist}</SelectItem>
                    <SelectItem value="athlete">{t.visitorProfiles.athlete}</SelectItem>
                    <SelectItem value="student">{t.visitorProfiles.student}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Time Available */}
              <div className="space-y-2">
                <Label htmlFor="timeAvailable" className="text-base font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {t.form.timeAvailable}
                </Label>
                <Select
                  value={formData.timeAvailable}
                  onValueChange={(value) => setFormData({ ...formData, timeAvailable: value })}
                  required
                >
                  <SelectTrigger id="timeAvailable" className="h-11">
                    <SelectValue placeholder={t.form.timeAvailablePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">{t.timeOptions.short}</SelectItem>
                    <SelectItem value="half-day">{t.timeOptions.halfDay}</SelectItem>
                    <SelectItem value="full-day">{t.timeOptions.fullDay}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-base font-medium" disabled={isGenerating}>
                {isGenerating ? t.form.generatingButton : t.form.generateButton}
              </Button>
            </form>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
              <Mountain className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground">{t.features.heritage.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.features.heritage.description}</p>
          </div>
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-2">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground">{t.features.culture.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.features.culture.description}</p>
          </div>
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary-foreground mb-2">
              <Footprints className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground">{t.features.guided.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.features.guided.description}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
