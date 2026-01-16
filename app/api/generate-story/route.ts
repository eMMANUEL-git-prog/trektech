import { generateText } from "ai"
import type { StoryInputs } from "@/lib/story-generator"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const formData: StoryInputs = await req.json()
    const { placeName, locationType, activity, visitorProfile, timeAvailable } = formData

    const { text } = await generateText({
      model: "openai/gpt-5",
      prompt: `You are a cultural storytelling guide for Nandi County, Kenya - the birthplace of legendary long-distance runners. Generate an immersive, respectful storytelling experience based on these inputs:

Location: ${placeName}
Type: ${locationType}
Activity: ${activity}
Visitor: ${visitorProfile}
Time: ${timeAvailable}

Create a JSON response with this exact structure:
{
  "title": "Engaging title connecting place to legacy",
  "openingHook": "2-3 sentences introducing the place with respect and inspiration",
  "sportsStory": "3 paragraphs about training culture, champions, and athletic heritage",
  "culturalContext": "2 paragraphs about community values, traditions, and local life",
  "physicalGuidance": ["5 specific practical tips for the journey"],
  "closingReflection": "Inspiring conclusion about connection to place and legacy"
}

Focus on:
- Authentic Kenyan running heritage and champion athletes
- Community values: humility, hard work, respect for elders
- Practical guidance for ${activity} at this ${locationType}
- Respectful cultural storytelling
- Connection between landscape and legacy
- Altitude training benefits and terrain characteristics

Write with reverence, inspiration, and authenticity. Be specific about Nandi County's athletic legacy while honoring local culture.`,
      maxOutputTokens: 2000,
      temperature: 0.8,
    })

    // Parse the AI response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error("Failed to parse AI response")
    }

    const storyContent = JSON.parse(jsonMatch[0])

    const story = {
      inputs: formData,
      title: storyContent.title,
      openingHook: storyContent.openingHook,
      sportsStory: storyContent.sportsStory,
      culturalContext: storyContent.culturalContext,
      physicalGuidance: storyContent.physicalGuidance,
      closingReflection: storyContent.closingReflection,
    }

    return Response.json(story)
  } catch (error) {
    console.error("Error generating story:", error)
    return Response.json({ error: "Failed to generate story" }, { status: 500 })
  }
}
