import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import type { ReactNode } from "react";
import type { Dictionary, Locale } from "@/content/types";
import { siteUrl } from "@/content/profile";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
});

// Runs before paint: enables reveal animations and applies the saved/system theme without a flash.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark')}catch(e){}})()`;

const paths: Record<Locale, string> = { vi: "/", en: "/en" };

export function buildMetadata(dict: Dictionary): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: paths[dict.locale],
      languages: { vi: paths.vi, en: paths.en, "x-default": paths.vi },
    },
    openGraph: {
      type: "website",
      url: paths[dict.locale],
      title: dict.meta.title,
      description: dict.meta.description,
      locale: dict.locale === "vi" ? "vi_VN" : "en_US",
    },
  };
}

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${workSans.variable} antialiased`} suppressHydrationWarning>
      {/* Pattern from Next docs "Preventing flash before hydration"; the lint rule targets the Pages Router */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
