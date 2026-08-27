"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyButtonBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel scrolls out of view (above the viewport), stick the bar
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel element — sits at the button bar's natural position */}
      <div ref={sentinelRef} className="relative z-40 mx-auto h-0 w-full" aria-hidden="true" />

      {/* Button bar */}
      <div
        className={
          isStuck
            ? "fixed left-0 right-0 top-0 z-50 flex justify-center py-3"
            : "relative z-40 mx-auto h-0 w-full"
        }
      >
        <div
          className={
            isStuck
              ? "flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white p-3 shadow-lg"
              : "absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-white p-3"
          }
        >
          {children}
        </div>
      </div>
    </>
  );
}
