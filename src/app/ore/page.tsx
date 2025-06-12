import { FaSquareXTwitter } from "react-icons/fa6";


const page = () => {

   

  

    return (
      <div className="sm:mt-20 mt-7 ">
        <section className="flex flex-col justify-between max-sm:mx-7 sm:mb-10 max-sm:gap-7">
     

          <h1 className='merriweather md:text-[75.85px] sm:text-6xl md:leading-[80px] sm:tracking-[-4%] text-[32px] leading-[40.36px] tracking-[-8%]'>
          <span  className="text-[#00000066] text-opacity-40">O</span>reo<span className="text-[#00000066] text-opacity-40">luwa</span> here<span className="text-[#00000066] text-opacity-40">.</span>
I <br />  design with
impact,  <br />  and 
it shows <br /> 
          </h1>

          <div className="flex  justify-between sm:mt-10 max-sm:flex-col max-sm:gap-4 max-sm:mb-7">

          <div className="inline-flex gap-2 max-h-10 h-full">
          <a href="#" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  ">
            <p className="text-xs">CV</p>
            <img src="/CV.svg"/>
        </a>
        <a href="mailto:oshiderooreoluwa@gmail.com" className="inline-flex gap-2 bg-[#FDBA04] items-center px-3 py-2.5 rounded-[36.88px]">
            <p className="text-xs">Work with me</p>
         
        </a>

          </div>
          <span className="flex  gap-2 max-sm:flex-wrap sm:items-end">
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
       


       
       
          </div>
    
        </section>
   
       

        <article className="flex flex-col gap-y-6 max-sm:mx-7 text-[#000000B8]">
            <p>I’m a passionate product designer driven by the power of ideas and their ability to shape impactful, user-centric experiences. I thrive on transforming concepts into tangible, meaningful designs that resonate with users and meet business goals. 

 </p>
<p>With a sharp eye for detail and a strategic mindset, I specialize in crafting products that not only look great but function seamlessly.</p>

<section className="grid sm:grid-cols-3 bg-[#F5F5F5] p-2 gap-3 rounded-[10px]">
  <div className="bg-white p-6 flex justify-center items-center rounded-md">
  <img src="/brand1.png" alt="brand1" className="h-6"  />
  </div>

  <div className="bg-white p-6 flex justify-center items-center rounded-md">
  <img src="/brand3.png" alt="brand2"  className="h-6"  />
  </div>

 <div className="bg-white p-6 flex justify-center items-center rounded-md">
 <img src="/brand2.png" alt="brand3" className="h-6" />
 </div>

</section>

<div className="relative sm:h-[180px] h-[250px]">
    <section className="absolute text-white z-50 sm:left-[3%] left-5 right-7  sm:right-[8%] top-[15%]">
     
        <h1 className="sm:text-xl font-medium ">Currently diving into Rive to expand my motion design skills , exploring how subtle interactions can elevate product feel</h1>

        <div className="flex gap-2.5 mt-8">
           <span>
            <img src="https://ik.imagekit.io/9t24q4vku9/ore-rive.svg?updatedAt=1747833271092" alt="ore" className="h-[49px] w-[51.49px] rounded-full"/>
          </span>
        
          <span className="text-xl" >
            <p className="p-1 rounded-[4px] text-[#FFFFFFA3]">Oreoluwa <span className="text-white">(Reo)</span></p>
          </span>

         
        </div>
    </section>
    <img src="/ore-rectangle.png" alt="rectangle" className="w-full relative max-sm:hidden h-full "/>
    <img src="/ore-rectangle2.png" alt="rectangle" className="w-full relative sm:hidden h-full"/>
   
</div>
        </article>
      </div>
    )
  }
  
  export default page