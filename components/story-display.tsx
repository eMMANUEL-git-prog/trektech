"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Activity, User, Clock, Mountain, Volume2, Lock } from "lucide-react"
import type { StoryData } from "@/lib/story-generator"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useSubscription } from "@/lib/subscription-context"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

interface StoryDisplayProps {
  story: StoryData
  onReset: () => void
}

export function StoryDisplay({ story, onReset }: StoryDisplayProps) {
  const { tier, hasAccess } = useSubscription()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Mock audio duration (in seconds)
  const mockDuration = 180 // 3 minutes

  useEffect(() => {
    setDuration(mockDuration)
  }, [])

  const handlePlayPause = () => {
    if (hasAccess("audio_stories")) {
      setIsPlaying(!isPlaying)
      // Simulate audio playback
      if (!isPlaying) {
        const interval = setInterval(() => {
          setCurrentTime((prev) => {
            if (prev >= mockDuration) {
              setIsPlaying(false)
              clearInterval(interval)
              return 0
            }
            return prev + 1
          })
        }, 1000)
      }
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            variant="ghost"
            onClick={onReset}
            className="text-primary-foreground hover:bg-primary-foreground/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Create Another Journey
          </Button>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
              >
                <MapPin className="w-3 h-3 mr-1" />
                {story.inputs.locationType}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
              >
                <Activity className="w-3 h-3 mr-1" />
                {story.inputs.activity}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
              >
                <User className="w-3 h-3 mr-1" />
                {story.inputs.visitorProfile}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
              >
                <Clock className="w-3 h-3 mr-1" />
                {story.inputs.timeAvailable}
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">{story.title}</h1>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {hasAccess("audio_stories") ? (
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <button
                    onClick={handlePlayPause}
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    {isPlaying ? (
                      <div className="w-4 h-4 flex gap-1">
                        <div className="w-1 h-4 bg-current"></div>
                        <div className="w-1 h-4 bg-current"></div>
                      </div>
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Audio Story</span>
                      <span className="text-xs text-muted-foreground">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/10">
                  Premium
                </Badge>
              </div>
            </Card>
          ) : (
            <Card className="p-6 bg-gradient-to-r from-muted/50 to-muted/30 border-muted-foreground/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Listen to Your Story</h3>
                    <p className="text-sm text-muted-foreground">
                      Upgrade to unlock professional audio narration of your journey
                    </p>
                  </div>
                </div>
                <Button asChild size="sm">
                  <Link href="/pricing">Upgrade Now</Link>
                </Button>
              </div>
            </Card>
          )}

          {/* Opening Hook */}
          <Card className="p-6 sm:p-8 bg-accent/5 border-accent/20">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-accent" />
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h2 className="text-xl font-semibold text-foreground">Your Journey Begins</h2>
                <p className="text-foreground/90 leading-relaxed text-lg">{story.openingHook}</p>
              </div>
            </div>
          </Card>

          {/* Sports-Led Story */}
          <Card className="p-6 sm:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">The Story of This Place</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{story.sportsStory}</p>
              </div>
            </div>
          </Card>

          {/* Cultural Context */}
          <Card className="p-6 sm:p-8 bg-secondary/5 border-secondary/20">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Cultural Context</h2>
              <p className="text-foreground/80 leading-relaxed">{story.culturalContext}</p>
            </div>
          </Card>

          {/* Physical Guidance */}
          <Card className="p-6 sm:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Physical Guidance</h2>
              <ul className="space-y-3">
                {story.physicalGuidance.map((tip, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-foreground/80 leading-relaxed flex-1">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Closing Reflection */}
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Reflection</h2>
              <p className="text-lg text-foreground/90 leading-relaxed italic">{story.closingReflection}</p>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center pt-6">
            <Button onClick={onReset} size="lg" className="h-12 px-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Explore Another Location
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
