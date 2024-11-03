import type { Metadata } from "next";

import "./globals.css";
import Nav from "./components/Nav";



export const metadata: Metadata = {
  title: "Micro Agency",
  description: "our micro agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="shortcut icon" href="/Group 2.svg" />
      <body className="orbit-regular">
        <Nav/>
        {children}
      </body>
    </html>
  );
}
