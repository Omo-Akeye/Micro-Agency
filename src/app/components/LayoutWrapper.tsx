"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import ScrollToTopButton from "./ScrollToTop";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNav = pathname === "/startproject/";

  return (
    <section className="orbit-regular md:max-w-4xl w-full sm:mx-auto sm:px-[2%]">
      {!hideNav && <Nav />}
      {children}
      {!hideNav && (
        <div className="flex justify-between max-sm:px-7 my-10">
          <p className="text-xs text-[#0000007A]">Function Studio, 2025</p>
          <ScrollToTopButton />
        </div>
      )}
    </section>
  );
}
