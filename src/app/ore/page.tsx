// import { InfiniteScrolling, InfiniteScrollingRight } from "../components/InfiniteScrolling";

import { OptimizedScroller } from "../components/InfiniteScrolling";

const page = () => {

   
  const optimizeImageUrl = (url: string) => url.replace(/\?.*$/, '');
  
  // Process image arrays just once, not on every render
  const images1 = [
    "https://ik.imagekit.io/9t24q4vku9/oreframe1.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe2.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe3.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe4.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe6.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe7.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe8.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe9.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe10.svg"
  ].map((image) => ({
    id: crypto.randomUUID(),
    image: optimizeImageUrl(image)
  }));

  const images2 = [
    "https://ik.imagekit.io/9t24q4vku9/oreframe12.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe13.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe14.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe15.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe16.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe17.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe18.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe19.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe20.svg",
    "https://ik.imagekit.io/9t24q4vku9/oreframe22.svg"
  ].map((image) => ({
    id: crypto.randomUUID(),
    image: optimizeImageUrl(image)
  }));



    return (
      <div className="sm:mt-20 mt-7 ">
        <section className="flex max-sm:flex-col justify-between max-sm:mx-7 sm:mb-10 max-sm:gap-7">
     

          <h1 className='merriweather md:text-[75.85px] sm:text-6xl md:leading-[80px] sm:tracking-[-4%] text-[32px] leading-[40.36px] tracking-[-8%]'>
          <span  className="text-[#00000066] text-opacity-40">O</span>reo<span className="text-[#00000066] text-opacity-40">luwa</span> here<span className="text-[#00000066] text-opacity-40">.</span> <br /> 
I design with <br /> 
impact, and <br /> 
it shows <br /> 
          </h1>

          <div className="flex flex-col justify-between max-md:mb-10">
          <span className="flex sm:flex-col gap-4 max-sm:flex-wrap sm:items-end">
        <a href="https://www.behance.net/isaacoreoluwa" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px] max-w-[105px] w-full">
            <p className="text-xs"> Behance</p>
            <img src="/bio-arrow.svg"/>
        </a>
        <a href="http://linkedin.com/in/oshideroore/" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  max-w-[105px] w-full">
            <p className="text-xs">LinkedIn</p>
            <img src="/bio-arrow.svg"/>
        </a>
        <a href="http://twitter.com/reoworx" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  max-w-[105px] w-full">
            <p className="text-xs">Twitter</p>
            <img src="/bio-arrow.svg"/>
        </a>
        <a href="#" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  max-w-[105px] w-full">
            <p className="text-xs">Contra</p>
            <img src="/bio-arrow.svg"/>
        </a>

     
          </span>
       


          <div className="inline-flex gap-3 max-md:mt-10">
          <a href="#" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  ">
            <p className="text-xs">CV</p>
            <img src="/CV.svg"/>
        </a>
        <a href="mailto:oshiderooreoluwa@gmail.com" className="inline-flex gap-2 bg-[#FDBA04] items-center px-3 py-2.5 rounded-[36.88px]">
            <p className="text-xs">Work with me</p>
         
        </a>

          </div>
       
          </div>
    
        </section>
           <div className="max-sm:overflow-hidden">
          
             <div className="w-full flex flex-col gap-y-10">
     
     {/* <InfiniteScrollingRight images={images2} speed={50000} />

     <InfiniteScrolling images={images1} speed={50000}   /> */}
      <OptimizedScroller images={images2} speed={50000} direction="right" />
          <OptimizedScroller images={images1} speed={50000} direction="left" />
    
      </div>
           </div>
       

        <article className="flex flex-col gap-y-6 mt-11 max-sm:mx-7">
            <p>I’m a passionate product designer driven by the power of ideas and their ability to shape impactful, user-centric experiences. I thrive on transforming concepts into tangible, meaningful designs that resonate with users and meet business goals. 

 </p>
<p>With a sharp eye for detail and a strategic mindset, I specialize in crafting products that not only look great but function seamlessly.</p>

<div className="relative">
    <section className="absolute text-white z-50 sm:left-[5%] left-5 right-7  sm:right-[8%] top-[15%]">
        {/* <p className="text-xs mb-4">STATUS</p> */}
        <h1 className="sm:text-xl font-medium ">Currently learning Rive. Also exploring framer alongside a designer i connected with on X..</h1>

        <div className="flex gap-2.5 mt-4">
          <span>
            <img src="https://ik.imagekit.io/9t24q4vku9/ore-rive.svg?updatedAt=1747833271092" alt="ore" width={73}/>
          </span>
          <span className="text-lg" >
            <p className="bg-[#FFFFFF1F] p-1 rounded-[4px]">Oreoluwa <span className="text-white">(Reo)</span></p>
            <h1>De$igner</h1>
          </span>
        </div>
    </section>
    <img src="https://ik.imagekit.io/9t24q4vku9/Rectangle%2030609.svg?updatedAt=1747832745544" alt="rectangle" className="w-full relative max-sm:hidden"/>
    <img src="https://ik.imagekit.io/9t24q4vku9/Rectangle%2030609%20(1).svg?updatedAt=1747832743904" alt="rectangle" className="w-full relative sm:hidden"/>
   
</div>
        </article>
      </div>
    )
  }
  
  export default page