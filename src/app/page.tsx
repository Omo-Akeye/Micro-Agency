import { FaChevronDown } from "react-icons/fa6";
import FAQAccordion from "./components/Accordian";
import CardGrid from "./components/FeaturedCards";
import ProjectSlider from "./components/ProjectSlider";
import OfferSection from "./components/OfferSection";
import TestimonialSlider from "./components/Testimonials";
import PlayReelSection from "./components/PlayReelSection";
import Link from "next/link";


  

export default function Home() {
  return (
    <div className="orbit-regular mt-10">
      {/* <h1 className="font-semibold sm:text-[70.25px] sm:leading-[70px] sm:tracking-[-6%] text-[#000000] merriweather text-[40px] leading-[50.36px] tracking-[-8%]  max-sm:px-7">
        <span className="text-[#000000]/[0.4]">
          From Sketch <br className="sm:hidden"/> to <br className="max-sm:hidden"/>
          Scale: <br className="sm:hidden"/>
        </span>{" "}
        We Design <br className="max-sm:hidden" /> and  <br className="sm:hidden"/>Develop <br className="max-sm:hidden" /> really <br className="sm:hidden"/> good websites
      </h1> */}
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
            <Link href="/startproject" className="text-xs bg-[#000000] text-white rounded-[72px] sm:px-4 px-3 py-2.5 sm:py-3">Start a project</Link>
            <Link 
             href={{
    pathname: '/startproject',
    query: { tab: 'call' }
  }} className="text-xs text-[#000000] border-[0.74px] border-[#D9D9D9] rounded-[44.35px] sm:py-3 py-2.5 sm:px-5 px-4">Book a 15-min audit call</Link>
                       </span>
      </section>

      <section className="mt-12 flex flex-col gap-8 mb-10 max-sm:overflow-hidden  max-sm:px-7">
      
          < CardGrid/>       
      </section>

      <section className=" max-sm:mx-7">
        <h1 className="font-medium mb-4">Why Work With Us?</h1>
        <main className="bg-[#F5F5F5] p-3 rounded-[10px] flex flex-col gap-2.5 mb-12">
          <div className="bg-white p-6 rounded-[10px]">

            <img src="Link.png" alt="link" className="h-6 w-6"/>

            <h1 className="text-lg font-medium my-2">Streamlined Collaboration</h1>

            <p className="text-[#000000B8]">You don’t have to coordinate between designer and dev, we’re synced.</p>

          </div>


          <div className="bg-white p-6 rounded-[10px]">

<img src="Star Circle.png" alt="link" className="h-6 w-6"/>

<h1 className="text-lg font-medium my-2">End-to-End Expertise</h1>

<p className="text-[#000000B8]">We think big but execute down to the smallest details, ensuring no aspects pf your product is overlooked. </p>

</div>


<div className="bg-white p-6 rounded-[10px]">

<img src="Glasses.png" alt="link" className="h-6 w-6"/>

<h1 className="text-lg font-medium my-2">Personalized Attention</h1>

<p className="text-[#000000B8]">As a small team, we prioritize your project with undivided focus and dedication</p>

</div>
        </main>

{/* 
        <h1 className="font-medium mb-4">What We Offer</h1> */}
        <OfferSection/>


        
        
      </section>


      <TestimonialSlider/>

      <FAQAccordion/>


      <PlayReelSection/>
    </div>
  );
}