
import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import FAQAccordion from "./components/Accordian";
// import CardGrid from "./components/FeaturedCards";
import OfferSection from "./components/OfferSection";
import TestimonialSlider from "./components/Testimonials";
import PlayReelSection from "./components/PlayReelSection";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import CalButton from "./components/CalButton";
import InteractionShowcase from "./components/InteractionShowcase";
import HomeNav from "./components/HomeNav";

export const metadata: Metadata = {
  title: "Function Studio | Design + Dev Duo Building High-Conversion Products",
  description: "A design and development agency helping startups, founders, and small teams go from idea to live product in weeks. Landing pages, MVPs, and full web apps. Based in Lagos, working globally.",
  alternates: {
    canonical: "https://functionstudioo.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is it like working together?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Working with Function Studio means working with a tight, two-person team, designer and developer, who collaborate in real-time. We're fast, focused, and intentional. No handoffs, no delays. You'll be part of a smooth process where ideas turn into usable products quickly. Think of it like working with a product-minded duo that handles both the look and the logic, without the bloat of a big agency."
      }
    },
    {
      "@type": "Question",
      "name": "How much can we get done in a month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A lot, especially because we work as a synced designer–developer team. In one month, we can take an idea from early sketches to a live, working product. That might mean designing and building a full landing page, shipping a small web app, or tackling core parts of a larger platform."
      }
    },
    {
      "@type": "Question",
      "name": "What kinds of projects do you take on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus on digital products - landing pages, web apps, and internal tools. Most of our work involves designing and building front-end experiences that are fast, clean, and easy to use. Whether you're a startup validating an idea or a team refining an existing platform, we step in where design and code need to work closely together."
      }
    },
    {
      "@type": "Question",
      "name": "Who do we work best with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work best with founders, product leads, or small teams who value speed, clear communication, and tight collaboration. If you're looking for a no-fluff team that can move ideas into production without long timelines or layered approvals, we'll likely be a great fit."
      }
    },
    {
      "@type": "Question",
      "name": "What do you need from us to get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once we've had a discovery call and aligned on scope, we'll just need a short brief, what you're trying to build, any existing materials (like brand assets or wireframes), and access to relevant tools. We'll handle the rest from there, keeping you in the loop with frequent updates and check-ins."
      }
    }
  ]
};

  

export default function Home() {
  return (
    <div className="orbit-regular">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <header className="relative h-[520px] overflow-x-clip bg-black sm:h-[620px]">
        <div className="absolute left-1/2 top-6 z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-dashed border-white/25 px-4 py-2 text-[10px] font-medium text-white/75 sm:top-8 sm:text-xs">
          <span className="h-3 w-3 rounded-full bg-[#18d42b] shadow-[0_0_10px_rgba(24,212,43,0.45)]" />
          Limited to 1 new project this month
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 aspect-[1101/615] w-full max-w-[1101px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/homegif.gif"
              alt="Function Studio — turning ideas into impactful digital products"
              width={1101}
              height={615}
              priority
              unoptimized
              className="h-full w-full object-contain"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[2%] right-[0.5%] h-[6%] w-[12%] bg-black"
            />
          </div>
        </div>

        <HomeNav />
      </header>

      <div className="relative z-40 mx-auto h-0 w-full">
        <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-white p-3">
          <Link
            href={ROUTES.START_PROJECT}
            className="rounded-full bg-black px-3 py-2 text-sm font-medium leading-none text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#222] active:scale-95"
          >
            Start a project
          </Link>
          <CalButton className="rounded-full border border-[#e2e2e2] px-3 py-2 text-sm font-medium leading-none text-black transition-colors hover:border-black hover:bg-[#f7f7f7]">
            Book a 15-min audit call
          </CalButton>
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-[2%]">
        <section className=" text-center sm:pt-[68px] pt-14 tracking-[-4%] leading-[28px]">
          <h1 className="font-semibold tracking-[-0.02em] text-black">
            Design + Dev Duo Building Fast, <br className="md:hidden"/> High-Conversion Products
          </h1>
          <p className="mx-auto mt-2 max-w-[520px] text-sm leading-5 text-[#000000B8] sm:text-base sm:leading-6">
            Built for startups, creators &amp; small teams who want to go from<br className="hidden sm:block" /> idea → live in weeks
          </p>
        </section>

        <InteractionShowcase />

    
      </div>

      {/* Full-bleed black background section */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen flex justify-center sm:px-4 mx-0.5">
        <div className="bg-black rounded-[10px] py-8 sm:py-12 w-full max-w-[1370px]">
          <div className="max-w-4xl mx-auto">

      <section className="max-sm:mx-7">

          <OfferSection/>

        <Image 
        src="/function.gif"
        alt="gif"
        width={1440}
        height={365}
        className="w-full md:h-[365px] object-cover rounded-[10px] my-8"
        />

      

      
      
           <div className='flex justify-between items-center  mb-4'>
    <h2 className="font-medium text-white">Why Work With Us?</h2>


      <Link 
  href={ROUTES.START_PROJECT} 
  className="text-white font-medium flex items-center gap-1 group transition-colors duration-300 hover:text-white"
> 
  <span className='underline decoration-[#FFFFFF50] group-hover:decoration-white transition-all duration-300 text-white'>
    Start a project
  </span>  
  <IoIosArrowForward 
    className='text-white mt-[2px] transition-transform duration-300 group-hover:translate-x-1' 
  /> 
</Link>
    
      </div>

      
        <main className="bg-[#F5F5F5] p-3 rounded-[10px] flex flex-col gap-2.5">
          <div className="bg-white p-6 rounded-[10px]">

            <img src="Link.png" alt="Streamlined collaboration icon" className="h-6 w-6"/>

            <h3 className="text-lg font-medium my-2">Streamlined Collaboration</h3>

            <p className="text-[#000000B8]">You don't have to coordinate between designer and dev, we're synced.</p>

          </div>


          <div className="bg-white p-6 rounded-[10px]">

<img src="Star Circle.png" alt="End-to-end expertise icon" className="h-6 w-6"/>

<h3 className="text-lg font-medium my-2">End-to-End Expertise</h3>

<p className="text-[#000000B8]">We think big but execute down to the smallest details, ensuring no aspects pf your product is overlooked. </p>

</div>


<div className="bg-white p-6 rounded-[10px]">

<img src="Glasses.png" alt="Personalized attention icon" className="h-6 w-6"/>

<h3 className="text-lg font-medium my-2">Personalized Attention</h3>

<p className="text-[#000000B8]">As a small team, we prioritize your project with undivided focus and dedication</p>

</div>
        </main>

   
        
     
        
      </section>


      <TestimonialSlider/>

      <FAQAccordion/>

          </div>
        </div>
      </div>
      {/* Resume normal container */}
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-[2%]">
      

 




      <PlayReelSection/>
      </div>
    </div>
  );
}
