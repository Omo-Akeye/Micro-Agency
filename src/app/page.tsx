
import type { Metadata } from "next";
import FAQAccordion from "./components/Accordian";
import CardGrid from "./components/FeaturedCards";
import OfferSection from "./components/OfferSection";
import TestimonialSlider from "./components/Testimonials";
import PlayReelSection from "./components/PlayReelSection";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

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
    <div className="orbit-regular mt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section>
   

      <h1 className="font-normal text-[40px] leading-[50.36px] tracking-[-0.08em] sm:text-[70.25px] sm:leading-[72px] sm:tracking-[-0.06em] text-[#000000]/40 merriweather max-sm:px-7">
  <span className="text-[#000000]">
    Design + Dev Duo
  </span>
  <br /> 
  Building Fast, High-
  <br /> 
  Conversion Products
</h1>

           <p className="sm:my-[18px] max-sm:mt-3 max-sm:mb-7  max-sm:px-7 max-sm:text-sm">Built for startups, creators & small teams who want to go from idea → live in weeks</p>

           <span className="gap-3 flex items-center  max-sm:px-7 font-medium">
      
            <Link 
    href="/startproject" 
    className="text-xs bg-[#000000] text-white rounded-[72px] sm:px-4 px-3 py-2.5 sm:py-3 
    transition-all duration-300 ease-out hover:scale-105 hover:bg-[#222] active:scale-95"
  >
            
            Start a project</Link>
            <Link 
    href="https://cal.com/function-studioo/15min"
  target="_blank"
  rel="noopener noreferrer"
  
  className="text-xs text-[#000000] border-[0.74px] border-[#D9D9D9] rounded-[44.35px] sm:py-3 py-2.5 sm:px-5 px-4
    transition-all duration-300 hover:border-black hover:bg-gray-50 group"
  >Book a 15-min discovery call</Link>
                       </span>
      </section>

      <section className="mt-12 flex flex-col gap-8 mb-10 max-sm:overflow-hidden  max-sm:px-7">
      
          < CardGrid/>       
      </section>

      <section className=" max-sm:mx-7">
      
           <div className='flex justify-between items-center  mb-4'>
    <h2 className="font-medium">Why Work With Us?</h2>


      <Link 
  href="/startproject" 
  className="text-[#000000A3] font-medium flex items-center gap-1 group transition-colors duration-300 hover:text-black"
> 
  <span className='underline decoration-[#00000050] group-hover:decoration-black transition-all duration-300'>
    Start a project
  </span>  
  <IoIosArrowForward 
    className='text-black mt-[2px] transition-transform duration-300 group-hover:translate-x-1' 
  /> 
</Link>
    
      </div>
        <main className="bg-[#F5F5F5] p-3 rounded-[10px] flex flex-col gap-2.5 mb-12">
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


        <OfferSection/>


        
        
      </section>


      <TestimonialSlider/>

      <FAQAccordion/>
      

 

      <Link href="/startproject" className="flex justify-between items-center max-sm:px-7 max-sm:mt-4 group py-4"> 
  <h2 className='text-[#000000A3] text-4xl max-sm:text-2xl leading-[91.21px] font-medium tracking-[4%] transition-colors duration-300 group-hover:text-black'>
    Start a 
  </h2> 

  <div className="flex items-center gap-2"> 
    <h2 className="text-[#000000A3] text-4xl max-sm:text-2xl leading-[91.21px] font-medium tracking-[4%] transition-colors duration-300 group-hover:text-black">
      project
    </h2>
   
    <IoIosArrowForward 
      className='text-black mt-[2px] transition-all duration-300 transform group-hover:translate-x-4 group-hover:scale-110' 
      size={36} 
    /> 
  </div>
</Link>


      <PlayReelSection/>
    </div>
  );
}