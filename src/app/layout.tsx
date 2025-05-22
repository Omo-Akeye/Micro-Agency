// import type { Metadata } from "next";
// import "./globals.css";
// import Nav from "./components/Nav";
// import ScrollToTopButton from "./components/ScrollToTop";

// export const metadata: Metadata = {
//   title: "Function Studio",
//   description: "We Design and Develop websites and applications for your business and digital products.",
//   openGraph: {
//     images: [
//       {
//         url: '/opengraph-image.svg', 
//         width: 1200, 
//         height: 630, 
//         alt: 'Function Studioo', 
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     images: [
//       {
//         url: '/opengraph-image.svg',
//         width: 1200, 
//         height: 630, 
//         alt: 'Function Studioo', 
//       },
//     ],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <link rel="shortcut icon" href="/abstract.svg" />
//       <body className="sm:overflow-x-hidden inter mx-auto relative">
//         <section className="orbit-regular md:max-w-4xl w-full sm:mx-auto sm:px-[2%]">
//           <Nav/>
//           {children}
//           <div className="flex justify-between max-sm:px-7 my-10">
//             <p className="text-xs text-[#0000007A]">Function Studio, 2025</p>
//             <ScrollToTopButton />
//           </div>
//         </section>
//       </body>
//     </html>
//   );
// }





import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper"; // adjust path if needed

export const metadata: Metadata = {
  title: "Function Studio",
  description: "We Design and Develop websites and applications for your business and digital products.",
  openGraph: {
    title: "Function Studio",
    description: "We Design and Develop websites and applications for your business and digital products.",
    url: "https://functionstudio.online", 
    siteName: "Function Studio",
    type: "website", // Add this
    images: [
      {
        url: "https://ik.imagekit.io/9t24q4vku9/Frame%201000003438.png?updatedAt=1747869845550",
        width: 1200,
        height: 630,
        alt: "Function Studio", // Fixed typo (was "Function Studioo")
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Function Studio", // Add this
    description: "We Design and Develop websites and applications for your business and digital products.", // Add this
    images: [
      {
        url: "https://ik.imagekit.io/9t24q4vku9/Frame%201000003438.png?updatedAt=1747869845550",
        width: 1200,
        height: 630,
        alt: "Function Studio", // Fixed typo
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
      <link rel="shortcut icon" href="/abstract.svg" />
      <body className="sm:overflow-x-hidden inter mx-auto relative">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
