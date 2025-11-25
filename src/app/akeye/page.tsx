
const page = () => {
    return (
      <div className="sm:mt-20 mt-7 ">
        <section className="flex max-sm:flex-col justify-between max-sm:mx-7 sm:mb-10 max-sm:gap-7">
          <h1 className='merriweather sm:text-[75.85px] sm:leading-[80px] sm:tracking-[-4%]  text-[32px] leading-[40.36px] tracking-[-8%]'>
            <span className="text-[#00000066] text-opacity-40">Hello.</span> I'm <br /> 
            Akeye(
            <span className="inline-flex items-center align-middle">
              <img src="/Code 2.svg" alt="code" className="w-auto sm:h-[48px] inline-block align-middle transform translate-y-0" />
            </span>
            ),<br className="max-sm:hidden"/> a <br className="sm:hidden"/> skilled<br className="max-sm:hidden"/> Developer
          </h1>

    

    <div className="flex flex-col justify-between max-md:mb-10">
          <span className="flex sm:flex-col gap-4 max-sm:flex-wrap sm:items-end">
        <a href="https://github.com/Omo-Akeye" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px] max-w-[105px] w-full">
        <p className="text-xs">Github</p>
        <img src="/bio-arrow.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/akeye001/"className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  max-w-[105px] w-full">
            <p className="text-xs">LinkedIn</p>
            <img src="/bio-arrow.svg"/>
        </a>
        <a href="https://x.com/omo_akeye"  className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  max-w-[105px] w-full">
            <p className="text-xs">Twitter</p>
            <img src="/bio-arrow.svg"/>
        </a>
        <a href="https://akeye-portfolio.netlify.app/" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  max-w-[145px] w-full">
        <p className="text-xs">Portolio website</p>
        <img src="/bio-arrow.svg"/>
        </a>

   
          </span>
       


          <div className="inline-flex gap-3 max-md:mt-10">
          <a href="/akeye-cv20251.pdf" className="inline-flex gap-2 bg-[#F5F5F5] items-center px-3 py-2.5 rounded-[36.88px]  ">
            <p className="text-xs">CV</p>
            <img src="/CV.svg"/>
        </a>
        <a href="mailto:akeyesunkanmi@gmail.com" className="inline-flex gap-2 bg-[#FDBA04] items-center px-3 py-2.5 rounded-[36.88px]">
            <p className="text-xs">Work with me</p>
            
        </a>

          </div>
       
          </div>
    
        </section>
     

           <ul className="sm:w-full max-sm:mx-7 max-sm:text-sm flex flex-col gap-y-4">
            <li className="flex justify-between items-center border-[#B3B3B399] rounded-[10px] border p-5 font-medium">
              <p>Getricht Food</p>

              <span className="flex gap-2">
                <a href="https://getricht-akey.netlify.app/" className="underline">Live link</a>
                <img src="/bio-arrow.svg" alt="arrow" />
              </span>
            </li>

            <li className="flex justify-between items-center border-[#B3B3B399] rounded-[10px] border p-5 font-medium">
              <p>Sharries E-commerce</p>

              <span className="flex gap-2">
                <a href="https://sharries.vercel.app/" className="underline">Live link</a>
                <img src="/bio-arrow.svg" alt="arrow" />
              </span>
            </li>

            <li className="flex justify-between items-center border-[#B3B3B399] rounded-[10px] border p-5 font-medium">
              <p>User Dashboard</p>

              <span className="flex gap-2">
                <a href="https://usersettings-akeye.netlify.app/" className="underline">Live link</a>
                <img src="/bio-arrow.svg" alt="arrow" />
              </span>
            </li>
           </ul>
       

        <article className="flex flex-col gap-y-6 mt-11 max-sm:mx-7">
            <p>I am a frontend developer specialize in creating responsive,functional, accessible and visually appealing websites. I have a keen eye for beautiful designs, user-friendly and functionality web applications.

 </p>
<p>I have hands-on experience in building websites and writing reusable, maintainable code. I am continually evolving my skills and staying up-to-date with the latest web development technologies. I align technical solutions with the broader project vision, bringing both expertise and passion to every project I undertake.</p>


        </article>
      </div>
    )
  }
  
  export default page


