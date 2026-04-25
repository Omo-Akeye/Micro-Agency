'use client';

import { useState, useRef } from 'react';

export default function BrandsSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverVisible, setHoverVisible] = useState(false);
  const [top, setTop] = useState(0);
  const triggerRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setTop(rect.top - 12);
    }
    setHoverVisible(true);
  };

  return (
    <div className="flex flex-col sm:mt-10 sm:mb-16 mt-5 mb-8 sm:max-w-[420px] w-full">
    
      <div className="flex justify-between items-center gap-4">

   
        <div className="relative w-fit">
          <img
            ref={triggerRef}
            src="/SORTMYSCENE.png"
            alt="SortMyScene"
            width={146}
            height={15}
            className="cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHoverVisible(false)}
            onClick={() => setMobileOpen((o) => !o)}
          />

          {/* Desktop hover card */}
          {hoverVisible && (
            <div
              className="fixed left-0 right-0 z-50 pointer-events-none hidden sm:block"
              style={{ top: `${top}px`, transform: 'translateY(-100%)' }}
              onMouseEnter={() => setHoverVisible(true)}
              onMouseLeave={() => setHoverVisible(false)}
            >
              <div className="max-w-4xl w-full mx-auto sm:px-[2%]">
                <div className="bg-[#F5F5F5] border border-[#DDDDDD] rounded-[10px] overflow-hidden pointer-events-auto animate-in fade-in duration-150 sm:p-[27px] p-3">
                  <CardContent />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Brand 2 */}
        <img
          src="/brand2.png"
          alt="brand2"
          width={120.7}
          height={24}
          className="transition-opacity duration-200 hover:opacity-50 cursor-pointer"
        />

        {/* Brand 1 */}
        <img
          src="/brand1.png"
          alt="brand1"
          width={46}
          height={24}
          className="transition-opacity duration-200 hover:opacity-50 cursor-pointer"
        />
      </div>

      {/* Mobile card — sibling below the brands row, doesn't affect flex layout */}
      {mobileOpen && (
        <div className="sm:hidden mt-4 animate-in fade-in-0 slide-in-from-top-2 zoom-in-95 duration-300 ease-out">
          <div className="bg-[#F5F5F5] border border-[#DDDDDD] rounded-[10px] overflow-hidden p-3 sm:p-[27px] relative">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-[#00000010] text-[#000000B8] hover:bg-[#00000020] transition-colors text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
            <CardContent />
          </div>
        </div>
      )}
    </div>
  );
}

function CardContent() {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[#000000B8] text-sm font-medium leading-[23.91px] tracking-[4%] inter1">
        At SortMyScene, I led a focused redesign to make event discovery faster, clearer, and easier to
        navigate, especially for users with short attention spans and inconsistent internet. I simplified
        browsing, reworked filtering, and improved the overall flow so users can find relevant events with
        less effort.
      </p>
      <p className="text-[#000000B8] text-sm font-medium leading-[23.91px] tracking-[4%] inter1">
        Beyond UI, I shaped key product decisions, defining scalable filters, refining the marketplace
        structure, and improving tools for organizers. My work helped align the experience with real user
        behavior, making the platform more efficient for attendees and more effective for event promoters.
      </p>
      <div className="flex items-center justify-between mt-[61px]">
        <span className="text-sm text-[#00000066] font-medium">Dec 202X – Mar 202X &nbsp;·&nbsp; 0 mos</span>
        <img
          src="/SORTMYSCENE.png"
          alt="SortMyScene"
          width={146}
          height={15}
          className="w-[106px] sm:w-[126px] h-auto"
        />
      </div>
    </div>
  );
}
