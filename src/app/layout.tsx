import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import ScrollToTopButton from "./components/ScrollToTop";

export const metadata: Metadata = {
  title: "Function Studio",
  description: "We Design and Develop websites and applications for your business and digital products.",
  openGraph: {
    images: [
      {
        url: '/opengraph-image.svg', 
        width: 1200, 
        height: 630, 
        alt: 'Function Studioo', 
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/opengraph-image.svg',
        width: 1200, 
        height: 630, 
        alt: 'Function Studioo', 
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/abstract.svg" />
      <body className="sm:overflow-x-hidden inter mx-auto relative">
        <section className="orbit-regular md:max-w-4xl w-full sm:mx-auto sm:px-[2%]">
          <Nav/>
          {children}
          <div className="flex justify-between max-sm:px-7 my-10">
            <p className="text-xs text-[#0000007A]">Function Studio, 2025</p>
            <ScrollToTopButton />
          </div>
        </section>
      </body>
    </html>
  );
}