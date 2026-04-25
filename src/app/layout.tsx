import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import LayoutWrapper from "./components/LayoutWrapper"; 


export const metadata: Metadata = {
  metadataBase: new URL('https://functionstudioo.com'),
  title: {
    default: "Function Studio | Design + Dev Duo Building High-Conversion Products",
    template: "%s | Function Studio",
  },
  description: "We Design and Develop websites and applications for your business and digital products. A design + development agency helping startups, founders, and small teams go from idea to live in weeks.",
  keywords: ["web design agency Lagos", "website developer Nigeria", "Next.js developer", "MVP development", "landing page design", "fintech website developer", "UI/UX design Lagos", "React developer", "Function Studio"],
  authors: [
    { name: "Isaac Oreoluwa", url: "https://functionstudioo.com/ore/" },
    { name: "Akeye Saheed", url: "https://functionstudioo.com/akeye/" },
  ],
  creator: "Function Studio",
  publisher: "Function Studio",
  alternates: {
    canonical: "https://functionstudioo.com",
  },
  icons: {
    icon: "/new-logo.png",
    shortcut: "/new-logo.png",
  },
  openGraph: {
    title: "Function Studio | Design + Dev Duo Building High-Conversion Products",
    description: "We Design and Develop websites and applications for your business and digital products.",
    url: "https://functionstudioo.com", 
    siteName: "Function Studio",
    type: "website", 
    locale: "en_US",
    images: [
      {
        url: "https://ik.imagekit.io/9t24q4vku9/Frame%201000003438.png?updatedAt=1747869845550",
        width: 1200,
        height: 630,
        alt: "Function Studio — Design + Development Agency", 
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Function Studio | Design + Dev Duo Building High-Conversion Products", 
    description: "We Design and Develop websites and applications for your business and digital products.", 
    site: "@functionstudioo",
    creator: "@functionstudioo",
    images: [
      {
        url: "https://ik.imagekit.io/9t24q4vku9/Frame%201000003438.png?updatedAt=1747869845550",
        width: 1200,
        height: 630,
        alt: "Function Studio — Design + Development Agency", 
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Function Studio",
  "alternateName": "Function Studioo",
  "url": "https://functionstudioo.com",
  "logo": "https://functionstudioo.com/new-logo.png",
  "image": "https://ik.imagekit.io/9t24q4vku9/Frame%201000003438.png?updatedAt=1747869845550",
  "description": "Design + Development agency building high-conversion websites, landing pages, MVPs, and digital products for startups, founders, and small teams.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.5244",
    "longitude": "3.3792"
  },
  "areaServed": [
    { "@type": "Country", "name": "Nigeria" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Canada" },
    "Worldwide"
  ],
  "serviceType": [
    "Web Design",
    "Web Development",
    "UI/UX Design",
    "MVP Development",
    "Landing Page Design",
    "SaaS Development",
    "Fintech Website Development",
    "E-commerce Development"
  ],
  "knowsAbout": [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Figma",
    "Paystack", "Flutterwave", "Stripe", "Prisma", "PostgreSQL"
  ],
  "founder": [
    { "@type": "Person", "name": "Isaac Oreoluwa", "jobTitle": "Product Designer", "url": "https://functionstudioo.com/ore/" },
    { "@type": "Person", "name": "Akeye Saheed", "jobTitle": "Frontend Developer", "url": "https://functionstudioo.com/akeye/" }
  ],
  "sameAs": [
    "https://x.com/functionstudioo"
  ],
  "email": "function@functionstudio.online",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="ai" href="https://functionstudioo.com/ai.json" />
        <link rel="alternate" href="https://functionstudioo.com/llms.txt" type="text/plain" title="LLMs.txt" />
        <link rel="alternate" href="https://functionstudioo.com/llms-full.txt" type="text/plain" title="LLMs Full Context" />
        <link rel="alternate" href="https://functionstudioo.com/llm.json" type="application/json" title="LLM JSON" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="sm:overflow-x-hidden inter mx-auto relative">
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}