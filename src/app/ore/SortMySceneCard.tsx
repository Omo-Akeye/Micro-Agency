'use client';

import { useRef, useState } from 'react';

export default function SortMySceneCard() {
  const triggerRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false); 
  const [top, setTop] = useState(0);

  const handleMouseEnter = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setTop(rect.top - 12); 
    }
    setVisible(true);
  };

  return (
    <div className="relative w-fit">
   
      <img
        ref={triggerRef}
        src="/SORTMYSCENE.png"
        alt="SortMyScene"
        width={146}
        height={15}
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setVisible(false)}
      />

  
      {visible && (
        <div
          className="fixed left-0 right-0 z-50 pointer-events-none hidden md:block"
          style={{ top: `${top}px`, transform: 'translateY(-100%)' }}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="max-w-4xl w-full mx-auto sm:px-[2%]">
            <div className="bg-[#F5F5F5] border border-[#DDDDDD] rounded-[10px] overflow-hidden  pointer-events-auto animate-in fade-in duration-150 p-[27px]">
          
              <div className=" flex flex-col gap-1">
                <p className="text-[#000000B8] text-sm font-medium  leading-[23.91px] tracking-[4%] inter1" >
                  At SortMyScene, I led a focused redesign to make event discovery faster, clearer, and easier to
                  navigate, especially for users with short attention spans and inconsistent internet. I simplified
                  browsing, reworked filtering, and improved the overall flow so users can find relevant events with
                  less effort.
                </p>
                <p className="text-[#000000B8] text-sm font-medium leading-[23.91px] tracking-[4%] inter1" >
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
        className="cursor-pointer"
      />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
