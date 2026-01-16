"use client";

import Link from "next/link";
import { Mountain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "@/lib/language-context";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors"
          >
            <img src="/logo.webp" alt="" className="h-80" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/trails"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.trails}
            </Link>
            <Link
              href="/champions"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.champions}
            </Link>
            <Link
              href="/guide"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Guide
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.pricing}
            </Link>
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
            <Button size="sm" asChild>
              <Link href="/">{t.nav.startJourney}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link
              href="/"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/trails"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.trails}
            </Link>
            <Link
              href="/champions"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.champions}
            </Link>
            <Link
              href="/guide"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Guide
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/pricing"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.pricing}
            </Link>
            <div className="pt-2">
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            </div>
            <Button size="sm" className="w-full" asChild>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                {t.nav.startJourney}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
