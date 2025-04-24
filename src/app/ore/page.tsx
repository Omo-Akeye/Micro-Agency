

// const page = () => {
//   return (
//     <div>
//       <section>
//         <h1 className='merriweather sm:text-[75.85px] sm:leading-[80px] sm:tracking-[-4%] mt-7 mb-12  text-[30px] leading-[30.36px] tracking-[-6%]'>
//     <span className="text-[#00000066] text-opacity-40">  Hello.</span> I’m <br/>
// Oreoluwa(<img src="/Layers.svg" alt="layer" width={48}/>),<br/>
// a standout <br/>
// designer
//         </h1>
//       </section>
//     </div>
//   )
// }

import InfiniteScrollImages from "../components/InfiniteScrolling"

// export default page


const page = () => {
    return (
      <div className="sm:mt-20 mt-7 ">
        <section className="flex max-sm:flex-col justify-between max-sm:mx-7 sm:mb-10 max-sm:gap-7">
          <h1 className='merriweather sm:text-[75.85px] sm:leading-[80px] sm:tracking-[-4%]  text-[32px] leading-[40.36px] tracking-[-8%]'>
            <span className="text-[#00000066] text-opacity-40">Hello.</span> I'm <br /> 
            Oreoluwa(
            <span className="inline-flex items-center align-middle">
              <img src="/Layers.svg" alt="layer" className="w-auto sm:h-[48px] inline-block align-middle transform translate-y-0" />
            </span>
            ),<br className="max-sm:hidden"/> a <br className="sm:hidden"/> standout <br className="max-sm:hidden"/> designer
          </h1>

          <div className="flex flex-col justify-between max-md:mb-10">
          <span className="flex sm:flex-col gap-4 max-sm:flex-wrap">
        <a href="#" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]">
            <p className="text-xs"> Behance</p>
            <img src="/bio-arrow.svg"/>
        </a>
        <a href="#" className="flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]">
            <p className="text-xs">LinkedIn</p>
            <img src="/bio-arrow.svg"/>
        </a>
        <a href="#" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]">
            <p className="text-xs">Twitter</p>
            <img src="/bio-arrow.svg"/>
        </a>
        <a href="#" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]">
            <p className="text-xs">Contra</p>
            <img src="/bio-arrow.svg"/>
        </a>

        <a href="#" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px] sm:hidden">
            <p className="text-xs">CV</p>
            <img src="/CV.svg"/>
        </a>
          </span>

          <a href="#" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  max-sm:hidden">
            <p className="text-xs">CV</p>
            <img src="/CV.svg"/>
        </a>
          </div>
    
        </section>
           <div className="max-sm:overflow-hidden">
           <InfiniteScrollImages/>
           </div>
       

        <article className="flex flex-col gap-y-6 mt-11 max-sm:mx-7">
            <p>I’m a passionate product designer driven by the power of ideas and their ability to shape impactful, user-centric experiences. I thrive on transforming concepts into tangible, meaningful designs that resonate with users and meet business goals. 

 </p>
<p>With a sharp eye for detail and a strategic mindset, I specialize in crafting products that not only look great but function seamlessly.</p>

<div className="relative">
    <section className="absolute text-white z-50 sm:left-[5%] left-5 right-7  sm:right-[15%] top-[25%]">
        <p className="text-xs mb-4">STATUS</p>
        <h1 className="sm:text-xl font-medium ">Currently learning Rive. Also exploring framer alongside a designer i connected with on X..</h1>
    </section>
    <img src="/Rectangle 30609.svg" alt="rectangle" className="w-full relative max-sm:hidden"/>
    <img src="/Rectangle 30609 (1).svg" alt="rectangle" className="w-full relative sm:hidden"/>
   
</div>
        </article>
      </div>
    )
  }
  
  export default page