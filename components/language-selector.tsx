"use client"
import { Globe } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Language } from "@/lib/translations"

interface LanguageSelectorProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const languages = [
    { code: "en" as Language, name: "English", flag: "🇬🇧" },
    { code: "sw" as Language, name: "Kiswahili", flag: "🇰🇪" },
    { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
    { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  ]

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Select value={currentLanguage} onValueChange={onLanguageChange}>
        <SelectTrigger className="w-[140px] h-9 text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
