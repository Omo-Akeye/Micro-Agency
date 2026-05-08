"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalButtonProps {
  children?: React.ReactNode;
  className?: string;
  calLink?: string;
}

export default function CalButton({ 
  children = "Book a 15-min discovery call", 
  className = "text-xs text-[#000000] border-[0.74px] border-[#D9D9D9] rounded-[44.35px] sm:py-3 py-2.5 sm:px-5 px-4 transition-all duration-300 hover:border-black hover:bg-gray-50 group",
  calLink = "function-studioo/15min"
}: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
