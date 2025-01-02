import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";



export const metadata: Metadata = {
  title: "Function Studio",
  description: "We Design and Develop websites and applications for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="shortcut icon" href="/abstract.svg" />
    
      <body className="orbit-regular">
        <Nav/>
        {children}
      </body>
    </html>
  );
}
