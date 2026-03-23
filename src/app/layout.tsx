import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import LayoutWrapper from "./components/LayoutWrapper"; 


export const metadata: Metadata = {
  title: "Function Studio",
  description: "We Design and Develop websites and applications for your business and digital products.",
  openGraph: {
    title: "Function Studio",
    description: "We Design and Develop websites and applications for your business and digital products.",
    url: "https://functionstudio.online", 
    siteName: "Function Studio",
    type: "website", 
    images: [
      {
        url: "https://ik.imagekit.io/9t24q4vku9/Frame%201000003438.png?updatedAt=1747869845550",
        width: 1200,
        height: 630,
        alt: "Function Studioo", 
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Function Studio", 
    description: "We Design and Develop websites and applications for your business and digital products.", 
    images: [
      {
        url: "https://ik.imagekit.io/9t24q4vku9/Frame%201000003438.png?updatedAt=1747869845550",
        width: 1200,
        height: 630,
        alt: "Function Studioo", 
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/fav-icon.svg" />
      <link rel="ai" href="https://functionstudio.online/ai.json" />
<link rel="alternate" href="https://functionstudio.online/llm.txt" type="text/plain" />
<link rel="alternate" href="https://functionstudio.online/llm.json" type="application/json" />

      <body className="sm:overflow-x-hidden inter mx-auto relative">
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}
