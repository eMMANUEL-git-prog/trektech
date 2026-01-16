import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { SubscriptionProvider } from "@/lib/subscription-context";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nandi Stories - Walk Through Legacy",
  description:
    "Experience Nandi County, Kenya through AI-powered immersive sports-led cultural storytelling. Discover the birthplace of champions with personalized journey narratives.",
  keywords: [
    "Nandi County",
    "Kenya",
    "running",
    "athletics",
    "cultural tourism",
    "AI storytelling",
    "heritage trails",
    "Eliud Kipchoge",
  ],
  icons: {
    icon: [
      {
        url: "/",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/",
        type: "image/svg+xml",
      },
    ],
    apple: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <SubscriptionProvider>{children}</SubscriptionProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
