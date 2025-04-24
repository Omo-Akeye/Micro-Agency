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
    
      <body className="sm:overflow-x-hidden inter mx-auto relative">
        <section className="orbit-regular md:max-w-4xl w-full sm:mx-auto sm:px-[2%] border-2 border-red-500 ">
        <Nav/>
        {children}


        <div className="flex justify-between  max-sm:px-7 my-10">
          <p className="text-xs text-[#0000007A]">Funtion Studioo, 2025</p>
          <img src="/arrow-up.svg" alt="" />
        </div>
        </section>
       
      </body>
    </html>
  );
}
