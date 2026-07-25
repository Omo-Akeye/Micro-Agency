"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ratingRows = [
  ["Rewards value", 4],
  ["Rewards flexibility", 5],
  ["Features", 4],
] as const;

function ClickPrompt({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute -top-12 z-20 flex items-center gap-2 text-[#1d1b1c] ${
        direction === "right" ? "left-8" : "right-8 flex-row-reverse"
      }`}
    >
      <span className="sedgwick whitespace-nowrap text-2xl  text-[#1C1C1B]/40">Click me</span>
      <svg
        aria-hidden="true"
        className={`text-[#1C1C1B]/40 ${direction === "left" ? "-scale-x-100" : ""}`}
        width="36"
        height="25"
        viewBox="0 0 36 25"
        fill="none"
      >
        <path
          d="M.65 1.99c10.2-1.21 27.77-4.89 30.45 9.18.65 3.45-.7 6.18-1.97 9.27-.06.13-1.84 3.02-1.98 2.56-.36-1.22-2.62-8.38-1.2-3.72.15.49.6 4 1.11 4.21 1.37.57 6.79-3.02 8.23-3.61"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}



function LogoLink({
  href,
  src,
  mobileSrc, 
  alt,
  className = "",
  isLink = true,
}: {
  href?: string;
  src: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
  isLink?: boolean;
}) {
  const content = (
    <>
      {mobileSrc ? (
        <>
          {/* Mobile Image */}
          <Image 
            src={mobileSrc} 
            alt={alt} 
            width={730} 
            height={402} 
            className="h-auto w-full object-contain md:hidden" 
          />
       
          <Image 
            src={src} 
            alt={alt} 
            width={730} 
            height={402} 
            className="hidden h-auto w-full object-contain md:block" 
          />
        </>
      ) : (
        <Image src={src} alt={alt} width={730} height={402} className="h-auto w-full object-contain" />
      )}

     
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full [clip-path:ellipse(49%_49%_at_50%_50%)]">
        <span aria-hidden="true" className="interaction-logo-shine absolute inset-y-0 -left-1/2 w-1/3 bg-white/70 blur-sm" />
      </div>
    </>
  );

  const containerClassName = `interaction-logo relative block overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`;

  if (!isLink || !href) {
    return <div className={containerClassName}>{content}</div>;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={containerClassName}
    >
      {content}
    </Link>
  );
}

function MobileProjectCard({
  image,
  imageAlt,
  logo,
  logoAlt,
  mobileLogo,
  href,
}: {
  image: string;
  imageAlt: string;
  logo: string;
  mobileLogo?: string;
  logoAlt: string;
  href: string;
}) {
  return (
    <article className="relative block pt-10 md:hidden">
    
      <div className="absolute left-[10%] top-[-5%] z-30 flex flex-col items-start pointer-events-none">
        <span className="sedgwick text-base text-[#1C1C1B]/40">Click me</span>
        <svg
          aria-hidden="true"
          className="ml-3 -mt-0.5 text-[#1C1C1B]/40"
          width="24"
          height="18"
          viewBox="0 0 36 25"
          fill="none"
        >
          <path
            d="M.65 1.99c10.2-1.21 27.77-4.89 30.45 9.18.65 3.45-.7 6.18-1.97 9.27-.06.13-1.84 3.02-1.98 2.56-.36-1.22-2.62-8.38-1.2-3.72.15.49.6 4 1.11 4.21 1.37.57 6.79-3.02 8.23-3.61"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative block aspect-[1.72] w-full rounded-[5px] group"
      >
       
        <div className="absolute top-[-20%] left-1/2 z-20 flex w-[163px] -translate-x-1/2 justify-center">
          <LogoLink
            src={logo}
            mobileSrc={mobileLogo}
            alt={logoAlt}
            isLink={false}
            className="h-[90px] max-w-[200px] min-w-[163px] w-full object-contain"
          />
        </div>

      
        <div className="relative h-full w-full overflow-hidden rounded-[5px] transition-transform duration-300 group-active:scale-[0.98]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover"
          />
        </div>
      </Link>
    </article>
  );
}

function ProjectInteraction({
  image,
  imageAlt,
  logo,
  logoAlt,
  mobileLogo,
  href,
  reversed = false,
}: {
  image: string;
  imageAlt: string;
  logo: string;
  logoAlt: string;
  mobileLogo?: string;
  href: string;
  reversed?: boolean;
}) {
  return (
    <article className="relative">
      <MobileProjectCard
        image={image}
        imageAlt={imageAlt}
        logo={logo}
        mobileLogo={mobileLogo}
        logoAlt={logoAlt}
        href={href}
      />

      <div className={`hidden items-center md:flex ${reversed ? "justify-start" : "justify-end"}`}>
        <div className="relative aspect-[1.72] w-[70%] overflow-hidden rounded-[5px]">
          <Image src={image} alt={imageAlt} fill sizes="650px" className="object-cover" />
        </div>

        <div
          className={`absolute top-1/2 z-10 w-[34%] max-w-[360px] -translate-y-1/2 ${
            reversed ? "right-0" : "left-0"
          }`}
        >
          <div className="relative">
            <ClickPrompt direction={reversed ? "left" : "right"} />
            <LogoLink href={href} src={logo} alt={logoAlt} mobileSrc={mobileLogo} />
          </div>
        </div>
      </div>
    </article>
  );
}

function Stars({ score }: { score: number }) {
  return (
    <span className="flex gap-0.5 text-[#ffb800]" aria-label={`${score} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill={star <= score ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </span>
  );
}

function AccordionRow({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[#d8f8f4]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium"
      >
        {title}
        <svg aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="px-4 pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

function AmericanExpressInteraction() {
  const [selected, setSelected] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [openRows, setOpenRows] = useState({ ratings: true, rewards: false, pros: false });

  const toggleRow = (row: keyof typeof openRows) => {
    setOpenRows((current) => ({ ...current, [row]: !current[row] }));
  };

  return (
    <article className="overflow-hidden rounded-[14px] border-[6px] border-t-0 border-[#e6fffc] bg-white text-[#161a1f] sm:rounded-[20px]">
      <div className="bg-[#e6fffc] px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-[#00655b] sm:text-xs">
        Limited-time offer: $300 credit + 60,000 bonus points
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Image src="/america-card.png" alt="Blue Cash Everyday American Express card" width={480} height={304} className="h-auto w-[92px] shrink-0 sm:w-[150px]" />
            <div className="min-w-0">
              <h2 className="text-sm font-medium leading-5 sm:text-lg">Blue Cash Everyday® Card from American Express</h2>
              <div className="relative mt-3 hidden items-center gap-2 text-xs sm:flex">
                <span>Cocardy rating</span>
                <Stars score={4} />
                <span>4.0</span>
                <button
                  type="button"
                  aria-label="About this rating"
                  onMouseEnter={() => setShowInfo(true)}
                  onMouseLeave={() => setShowInfo(false)}
                  onClick={() => setShowInfo((visible) => !visible)}
                  className="flex h-4 w-4 items-center justify-center rounded-full border border-current text-[10px]"
                >
                  i
                </button>
                <div className={`absolute left-0 top-7 z-20 w-72 rounded-md bg-[#f5f5f5] p-3 text-[11px] leading-4 shadow-lg transition-all ${showInfo ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}>
                  Our writers, editors and industry experts score credit cards based on card features, bonus offers and independent research.
                </div>
              </div>
            </div>
          </div>
          <Image src="/america-logo.png" alt="American Express" width={340} height={213} className="hidden h-auto w-[105px] shrink-0 sm:block" />
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs sm:hidden">
          <span>Cocardy rating</span>
          <Stars score={4} />
          <span>4.0</span>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm sm:grid-cols-4">
            {[
              ["Intro offer", "$200"],
              ["Rewards rate", "1% – 8%"],
              ["Annual fee", "$0"],
              ["Regular APR", "19.99% – 29.99%"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="mb-1 text-[9px] uppercase text-[#161a1f]/70 sm:text-[10px]">{label}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <label className="flex cursor-pointer items-center gap-2 whitespace-nowrap text-xs">
                <input type="checkbox" checked={selected} onChange={(event) => setSelected(event.target.checked)} className="h-5 w-5 accent-[#000080]" />
                Select to compare
              </label>
              <Image src="/america-logo.png" alt="American Express" width={340} height={213} className="h-auto w-[82px] sm:hidden" />
              <button type="button" className="hidden rounded-full bg-[#000080] px-5 py-2.5 text-xs font-bold text-white transition hover:scale-105 hover:bg-[#000066] sm:block">
                Check eligibility
              </button>
            </div>
            <span className="hidden text-right text-[9px] sm:block">on American Express&apos;s website</span>
          </div>
        </div>
      </div>

      <AccordionRow title="Ratings" open={openRows.ratings} onToggle={() => toggleRow("ratings")}>
        <div className="flex flex-col gap-3 text-[11px] sm:text-xs">
          {ratingRows.map(([label, score]) => (
            <div key={label} className="grid grid-cols-[1fr_auto_auto] items-center gap-3">
              <span>{label}</span>
              <Stars score={score} />
              <span>{score}.0 / 5.0</span>
            </div>
          ))}
        </div>
      </AccordionRow>

      <AccordionRow title="Reward details" open={openRows.rewards} onToggle={() => toggleRow("rewards")}>
        <ul className="list-disc space-y-2 pl-5 text-xs leading-5 text-[#161a1f]/80">
          <li>Earn rewards on everyday purchases with no annual fee.</li>
          <li>Receive statement credits and bonus points when offer requirements are met.</li>
          <li>Terms and eligibility requirements apply.</li>
        </ul>
      </AccordionRow>

      <AccordionRow title="Pros and Cons" open={openRows.pros} onToggle={() => toggleRow("pros")}>
        <div className="grid gap-5 text-xs leading-5 sm:grid-cols-2">
          <div><strong className="mb-2 block text-[#009819]">Pros</strong><p>No annual fee and flexible everyday rewards.</p></div>
          <div><strong className="mb-2 block text-[#e40017]">Cons</strong><p>Travel-focused benefits and lounge access are limited.</p></div>
        </div>
      </AccordionRow>

      <div className="border-t border-[#d8f8f4] p-4 sm:hidden">
        <button type="button" className="w-full rounded-full bg-[#000080] px-5 py-3 text-xs font-bold text-white">Check eligibility</button>
        <p className="mt-2 text-center text-[9px]">on American Express&apos;s website</p>
      </div>
    </article>
  );
}

export default function InteractionShowcase() {
  return (
    <section
      aria-label="Interactive work samples"
      className="relative left-1/2 my-12 flex w-[calc(100vw-32px)] max-w-[1144px] -translate-x-1/2 flex-col gap-y-14 sm:my-16 sm:gap-y-11"
    >
      <ProjectInteraction
        image="/home-lavis.png"
        imageAlt="Lavis furniture store interface"
        logo="/lavis-logo.png"
        logoAlt="Open the Lavis project"
        href="https://ecommerce-function-studioo.vercel.app/"
      />
      <ProjectInteraction
        image="/lyngo-hover.png"
        imageAlt="Lyngo vocabulary app interface"
        logo="/lyngologo.png"
        mobileLogo="/lyngo-mobile.png"
        logoAlt="Open the Lyngo website"
        href="https://lyngo.live/"
        reversed
      />
      <AmericanExpressInteraction />

      <style jsx global>{`
        .interaction-logo-shine {
          animation: interaction-shine 2.8s ease-in-out infinite;
          transform: skewX(-22deg);
        }
        @keyframes interaction-shine {
          0%, 30% { transform: translateX(-180%) skewX(-22deg); }
          70%, 100% { transform: translateX(520%) skewX(-22deg); }
        }
      `}</style>
    </section>
  );
}
