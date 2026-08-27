"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import ScrollToTopButton from "./ScrollToTop";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNav = pathname === "/startproject/";
  const isHome = pathname === "/";
  const currentYear = new Date().getFullYear();

  return (
    <section className={isHome ? "orbit-regular relative w-full" : "orbit-regular w-full sm:mx-auto sm:px-[2%] md:max-w-4xl"}>
      {!hideNav && !isHome && <Nav />}
      {children}
      {!hideNav && (
        <div className={`my-10 flex justify-between max-sm:px-7 ${isHome ? "mx-auto w-full max-w-4xl sm:px-[2%]" : ""}`}>
          <p className="text-xs text-[#0000007A]">Function Studio, {currentYear}</p>
          <ScrollToTopButton />
        </div>
      )}
    </section>
  );
}
