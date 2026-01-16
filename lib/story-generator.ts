export interface StoryInputs {
  placeName: string
  locationType: string
  activity: string
  visitorProfile: string
  timeAvailable: string
}

export interface StoryData {
  inputs: StoryInputs
  title: string
  openingHook: string
  sportsStory: string
  culturalContext: string
  physicalGuidance: string[]
  closingReflection: string
}

export function generateStory(inputs: StoryInputs): StoryData {
  const { placeName, locationType, activity, visitorProfile, timeAvailable } = inputs

  // Generate contextual content based on inputs
  const locationDescriptor = getLocationDescriptor(locationType)
  const activityVerb = getActivityVerb(activity)
  const paceGuidance = getPaceGuidance(activity, timeAvailable)
  const visitorContext = getVisitorContext(visitorProfile)

  return {
    inputs,
    title: `${placeName}: Where ${locationDescriptor} Meets Legacy`,

    openingHook: `This ${locationType} has witnessed countless ${activity === "running" ? "training sessions" : "journeys"} of those who would become champions. ${visitorContext.hook} As you ${activityVerb} here, you follow in the footsteps of dedication and endurance.`,

    sportsStory: `Every morning before dawn, athletes from across the region gather at ${placeName} for training. The ${locationType} demands respect—its ${getTerrainDescription(locationType)} tests both body and spirit. This is where discipline is forged, not in comfort, but through consistent effort against altitude and terrain.\n\nCoaches speak of this place with reverence. "If you can train here," they say, "you can compete anywhere." The thin air at elevation forces lungs to adapt, legs to strengthen, and minds to persevere. Champions are not born—they are built through morning after morning of pushing through fatigue, finding rhythm in discomfort.\n\nThis tradition continues today. Young athletes arrive early, learning not just to run, but to understand the land, to respect the journey, and to embrace the values that have defined this community: humility, hard work, and unwavering commitment to excellence.`,

    culturalContext: `${placeName} sits within a landscape shaped by generations of community life. The ${locationType} connects villages where families have lived for centuries, maintaining traditions of hospitality and mutual support. Local elders speak of the land as a teacher—each ${locationType} has lessons about patience, endurance, and finding your rhythm. The athletic excellence that emerges here is inseparable from these deeper cultural values: respect for elders, community over individual glory, and the understanding that true strength comes from within.`,

    physicalGuidance: [
      `${paceGuidance.pace} - ${visitorContext.paceAdvice}`,
      `Terrain: ${getTerrainDescription(locationType)}. ${paceGuidance.terrain}`,
      `${getTimeSpecificGuidance(timeAvailable)}`,
      `Respect the environment: Stay on marked paths, greet locals warmly, and leave no trace of your visit`,
      `${getActivityTip(activity)} while observing the landscape and its rhythms around you`,
    ],

    closingReflection: `${placeName} is more than a ${locationType}—it is a living connection to legacy. As you ${activityVerb} here, you experience what generations of athletes and community members have known: that movement through this landscape is movement through history, values, and the enduring spirit of those who call this home. This is where the land shapes the runner, and the runner honors the land.`,
  }
}

function getLocationDescriptor(locationType: string): string {
  const descriptors: Record<string, string> = {
    trail: "Earth and Effort",
    hill: "Elevation and Endurance",
    road: "Path and Purpose",
    "training-route": "Discipline and Dedication",
    village: "Community and Culture",
  }
  return descriptors[locationType] || "Place and Purpose"
}

function getActivityVerb(activity: string): string {
  const verbs: Record<string, string> = {
    walking: "walk",
    running: "run",
    cycling: "ride",
  }
  return verbs[activity] || "move"
}

function getTerrainDescription(locationType: string): string {
  const descriptions: Record<string, string> = {
    trail: "uneven paths and natural obstacles challenge your footing and awareness",
    hill: "steep inclines test cardiovascular fitness and mental fortitude",
    road: "steady surface allows for rhythm, but altitude and distance demand respect",
    "training-route": "varied surfaces from packed earth to grass, with strategic elevation changes",
    village: "gentle paths connecting community spaces, offering cultural immersion",
  }
  return descriptions[locationType] || "varied terrain requires attention and adaptation"
}

function getPaceGuidance(activity: string, timeAvailable: string) {
  const isShort = timeAvailable === "short"
  const isHalfDay = timeAvailable === "half-day"

  if (activity === "running") {
    return {
      pace: isShort ? "Easy to moderate pace recommended" : "Start easy, maintain steady rhythm",
      terrain: isShort ? "Focus on form over speed" : "Allow time to adjust to altitude and terrain",
    }
  } else if (activity === "walking") {
    return {
      pace: "Comfortable walking pace with regular rest stops",
      terrain: "Take your time—this journey is about observation and connection",
    }
  } else {
    return {
      pace: isShort ? "Moderate pace on maintained paths" : "Steady cycling with mindful gear selection",
      terrain: isHalfDay ? "Be prepared for variable surfaces" : "Technical sections require dismounting and walking",
    }
  }
}

function getVisitorContext(visitorProfile: string) {
  const contexts: Record<string, { hook: string; paceAdvice: string }> = {
    tourist: {
      hook: "You arrive as a visitor, but the land welcomes all who approach with respect and curiosity.",
      paceAdvice: "Take your time to absorb the atmosphere and landscape",
    },
    athlete: {
      hook: "You come to test yourself where legends have trained, seeking to understand their discipline.",
      paceAdvice: "Focus on controlled effort and learning from the environment",
    },
    student: {
      hook: "You come to learn—not just about athletics, but about how place shapes character and community.",
      paceAdvice: "Observe thoughtfully, noting how people interact with this landscape",
    },
  }
  return contexts[visitorProfile] || contexts["tourist"]
}

function getTimeSpecificGuidance(timeAvailable: string): string {
  const guidance: Record<string, string> = {
    short: "Duration: 30-60 minutes allows for a focused experience of key locations",
    "half-day": "Duration: 2-4 hours enables deeper exploration with rest and reflection time",
    "full-day": "Duration: 5+ hours for comprehensive journey including community interaction and meals",
  }
  return guidance[timeAvailable] || guidance["short"]
}

function getActivityTip(activity: string): string {
  const tips: Record<string, string> = {
    walking: "Maintain steady, mindful steps",
    running: "Find your sustainable rhythm early",
    cycling: "Stay alert for terrain changes and local traffic",
  }
  return tips[activity] || "Move with intention and awareness"
}
