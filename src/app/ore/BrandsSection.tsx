'use client';

import { useState, useRef } from 'react';

export default function BrandsSection() {
  const [activeMobileCard, setActiveMobileCard] = useState<React.ReactNode | null>(null);

  const handleMobileClick = (content: React.ReactNode) => {
    setActiveMobileCard(prev => (prev === content ? null : content));
  };

  const sortMySceneContent = (
    <CardContent
      paragraphs={[
        "At SortMyScene, I led a focused redesign to make event discovery faster, clearer, and easier to navigate, especially for users with short attention spans and inconsistent internet. I simplified browsing, reworked filtering, and improved the overall flow so users can find relevant events with less effort.",
        "Beyond UI, I shaped key product decisions, defining scalable filters, refining the marketplace structure, and improving tools for organizers. My work helped align the experience with real user behavior, making the platform more efficient for attendees and more effective for event promoters."
      ]}
      date="April 2025 · Still WIP"
      logoSrc="/SORTMYSCENE.png"
      logoWidth={146}
      logoHeight={15}
      logoClassName="w-[106px] sm:w-[126px] h-auto"
    />
  );

  const ivoryContent = (
    <CardContent
      paragraphs={[
        "At Ivory Finance, I led the end-to-end design of the AI assistant that powers portfolio insights and research workflows, making it easier for users to understand their investments and take action. I worked closely with product and engineering to shape MVPs from the ground up, defining user flows, designing interfaces, and ensuring the experience stayed simple and useful.",
        "I also designed dashboards and tools that help users track portfolio health and discover new investment opportunities. Beyond execution, I contributed to early product thinking around AI in UX, helping define how prompts, responses, and conversations should work so the system feels clear, reliable, and easy to use."
      ]}
      date="Jul 2024 - Mar 2025 · 9 mos"
      logoSrc="/ivory.png"
      logoWidth={120.7}
      logoHeight={24}
      logoClassName="w-[88px] sm:w-[100px] h-auto"
    />
  );

  const syxLabsContent = (
    <CardContent
      paragraphs={[
        "At SYX Labs, I started by designing the platform itself from the ground up—translating an early-stage vision into a clear, usable product. I defined the structure, user flows, and overall experience, making sure the platform communicated its value while staying simple and easy to navigate.",
        "Beyond the foundation, I worked on refining the experience as the product evolved, improving usability, aligning design with the studio’s focus on building modern, tech-driven solutions, and ensuring consistency across the platform. My role was about turning a rough idea into a functional, well-structured product that clearly represents what the studio does and how it delivers value."
      ]}
      date="Feb 2023"
      logoSrc="/brand3.png"
      logoWidth={46}
      logoHeight={24}
      logoClassName="w-[34px] sm:w-[46px] h-auto"
    />
  );

  return (
    <div className="flex flex-col sm:mt-10 sm:mb-16 mt-5 mb-8 sm:max-w-[420px] w-full">
      <div className="flex justify-between items-center gap-4">
        <HoverableBrand
          src="/SORTMYSCENE.png"
          alt="SortMyScene"
          width={146}
          height={15}
          className="cursor-pointer transition-opacity duration-200 hover:opacity-50"
          content={sortMySceneContent}
          onMobileClick={() => handleMobileClick(sortMySceneContent)}
        />

        <HoverableBrand
          src="/ivory.png"
          alt="brand2"
          width={120.7}
          height={24}
          className="transition-opacity duration-200 hover:opacity-50 cursor-pointer"
          content={ivoryContent}
          onMobileClick={() => handleMobileClick(ivoryContent)}
        />

        <HoverableBrand
          src="/brand3.png"
          alt="SYX Labs"
          width={46}
          height={24}
          className="transition-opacity duration-200 hover:opacity-50 cursor-pointer"
          content={syxLabsContent}
          onMobileClick={() => handleMobileClick(syxLabsContent)}
        />
      </div>

      {/* Mobile card */}
      {activeMobileCard && (
        <div className="sm:hidden mt-4 animate-in fade-in-0 slide-in-from-top-2 zoom-in-95 duration-300 ease-out">
          <div className="bg-[#F5F5F5] border border-[#DDDDDD] rounded-[10px] overflow-hidden p-3 sm:p-[27px] relative flex flex-col">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setActiveMobileCard(null)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#00000010] text-[#000000B8] hover:bg-[#00000020] transition-colors text-lg leading-none shrink-0"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            {activeMobileCard}
          </div>
        </div>
      )}
    </div>
  );
}

function HoverableBrand({ src, alt, width, height, className, content, onMobileClick }: any) {
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
    <div className="relative w-fit">
      <img
        ref={triggerRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHoverVisible(false)}
        onClick={onMobileClick}
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
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CardContent({ paragraphs, date, logoSrc, logoWidth, logoHeight, logoClassName }: any) {
  return (
    <div className="flex flex-col gap-1">
      {paragraphs.map((p: string, i: number) => (
        <p key={i} className="text-[#000000B8] text-sm font-medium leading-[23.91px] tracking-[4%] inter1">
          {p}
        </p>
      ))}
      <div className="flex items-center justify-between mt-[61px]">
        <span className="text-sm text-[#00000066] font-medium">{date}</span>
        <img
          src={logoSrc}
          alt="logo"
          width={logoWidth}
          height={logoHeight}
          className={logoClassName}
        />
      </div>
    </div>
  );
}
