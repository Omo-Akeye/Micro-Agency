import FAQAccordion from "./components/Accordian";
import CardGrid from "./components/FeaturedCards";
import ProjectSlider from "./components/ProjectSlider";


  

export default function Home() {
  return (
    <div className="orbit-regular mt-10">
      <h1 className="font-semibold sm:text-[70.25px] sm:leading-[70px] sm:tracking-[-6%] text-[#000000] merriweather text-[40px] leading-[50.36px] tracking-[-8%]  max-sm:px-7">
        <span className="text-[#000000]/[0.4]">
          From Sketch <br className="sm:hidden"/> to <br className="max-sm:hidden"/>
          Scale: <br className="sm:hidden"/>
        </span>{" "}
        We Design <br className="max-sm:hidden" /> and  <br className="sm:hidden"/>Develop <br className="max-sm:hidden" /> really <br className="sm:hidden"/> good websites
      </h1>

      <section className="mt-12 flex flex-col gap-8 mb-10 max-sm:overflow-hidden  max-sm:px-7">
      
          < CardGrid/>       
      </section>

      <section className=" max-sm:mx-7">
        <h1 className="font-medium mb-4">Why Work With Us?</h1>
        <main className="bg-[#F5F5F5] p-3 rounded-[10px] flex flex-col gap-2.5 mb-12">
          <div className="bg-white p-6 rounded-[10px]">

            <img src="Link.png" alt="link" className="h-6 w-6"/>

            <h1 className="text-lg font-medium my-2">Streamlined Collaboration</h1>

            <p className="text-[#000000B8]">No back-and-forth between separate teams; we’re in sync from start to finish.</p>

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


        <h1 className="font-medium mb-4">What you get</h1>
        <main className="bg-[#F5F5F5] p-3 rounded-[10px] grid sm:grid-cols-2 gap-2.5">

        <div className="bg-white pl-6 py-11 pr-14 rounded-[10px]">



<h1 className="text-lg font-medium my-2">End-to-End Expertise</h1>

<p className="text-[#000000B8]">Thoughtful experiences that put your users first</p>

</div>


<div className="bg-white pl-6 py-11 pr-14 rounded-[10px]">



<h1 className="text-lg font-medium my-2">Tailored aesthetic</h1>

<p className="text-[#000000B8]">Visually distinct interfaces shaped around your brand </p>

</div>

<div className="bg-white pl-6 py-11 pr-14 rounded-[10px]">



<h1 className="text-lg font-medium my-2">Dynamic animatons</h1>

<p className="text-[#000000B8]">Smooth, scroll-triggered and auto-play interactions that bring your site to life</p>

</div>

<div className="bg-white pl-6 py-11 pr-14 rounded-[10px]">



<h1 className="text-lg font-medium my-2">Custom web development</h1>

<p className="text-[#000000B8]">Thoughtful experiences that put your users first</p>

</div>

<div className="bg-white pl-6 py-11 pr-14 rounded-[10px]">



<h1 className="text-lg font-medium my-2">High-converting eCommerce</h1>

<p className="text-[#000000B8]">Optimized storefronts built to drive sales</p>

</div>

        </main>
      </section>

      <FAQAccordion/>
    </div>
  );
}