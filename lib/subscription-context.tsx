"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type SubscriptionTier = "free" | "explorer" | "champion"

interface SubscriptionContextType {
  tier: SubscriptionTier
  setTier: (tier: SubscriptionTier) => void
  hasAccess: (feature: string) => boolean
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [tier, setTierState] = useState<SubscriptionTier>("free")

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("subscription_tier")
    if (saved === "explorer" || saved === "champion") {
      setTierState(saved)
    }
  }, [])

  const setTier = (newTier: SubscriptionTier) => {
    setTierState(newTier)
    localStorage.setItem("subscription_tier", newTier)
  }

  const hasAccess = (feature: string) => {
    const features = {
      free: ["basic_stories"],
      explorer: ["basic_stories", "audio_stories", "hotel_guides"],
      champion: [
        "basic_stories",
        "audio_stories",
        "hotel_guides",
        "activities_guide",
        "priority_support",
        "offline_access",
      ],
    }
    return features[tier].includes(feature)
  }

  return <SubscriptionContext.Provider value={{ tier, setTier, hasAccess }}>{children}</SubscriptionContext.Provider>
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (!context) {
    throw new Error("useSubscription must be used within SubscriptionProvider")
  }
  return context
}
