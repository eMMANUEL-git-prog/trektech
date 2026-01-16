"use client";

import Link from "next/link";
import { Mountain, Mail, MapPin, Heart } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors"
            >
              <Mountain className="w-6 h-6 text-primary" />
              <span>TREKTECH</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.footer.explore}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/trails"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.trails}
                </Link>
              </li>
              <li>
                <Link
                  href="/champions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.champions}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.footer.resources}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Visitor Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cultural Etiquette
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Local Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Travel Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.footer.connect}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span>Nandi County, Kenya</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <a
                  href="mailto:info@nandistories.com"
                  className="hover:text-primary transition-colors"
                >
                  info@nandistories.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>{t.footer.madeWith}</span>
              TREKTECH
              <span>for the running community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
