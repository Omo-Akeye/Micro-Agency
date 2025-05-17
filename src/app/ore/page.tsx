import { InfiniteScrolling, InfiniteScrollingRight } from "../components/InfiniteScrolling";

const page = () => {

    const images1 = [
        "/oreframe1.svg","/oreframe2.svg","/oreframe3.svg","/oreframe4.svg","/oreframe5.svg","/oreframe6.svg","/oreframe7.svg","/oreframe8.svg","/oreframe9.svg","/oreframe10.svg"
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));

      const images2 = [
        "/oreframe12.svg","/oreframe13.svg","/oreframe14.svg","/oreframe15.svg","/oreframe16.svg","/oreframe17.svg","/oreframe18.svg","/oreframe19.svg","/oreframe20.svg","/oreframe21.svg","/oreframe22.svg"
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
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
     
     <InfiniteScrollingRight images={images2} speed={50000} />

     <InfiniteScrolling images={images1} speed={50000}   />
    
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
            <img src="/ore-rive.svg" width={73}/>
          </span>
          <span className="text-lg" >
            <p className="bg-[#FFFFFF1F] p-1">Oreoluwa <span className="text-white">(Reo)</span></p>
            <h1>De$igner</h1>
          </span>
        </div>
    </section>
    <img src="/Rectangle 30609.svg" alt="rectangle" className="w-full relative max-sm:hidden"/>
    <img src="/Rectangle 30609 (1).svg" alt="rectangle" className="w-full relative sm:hidden"/>
   
</div>
        </article>
      </div>
    )
  }
  
  export default page