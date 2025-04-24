
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='mx-auto md:my-20 my-10 max-sm:mx-7'>
      <section className='flex max-md:flex-col justify-between'>
        <div>
            <h2 className='font-medium'>Bime Revamp Website</h2>
            <p className='text-gray-500 mb-6'>2024-UI design, UX improvement,Developement</p>
             <span className="bg-[#F5F5F5F5] px-[10px] py-[10px] text-xs font-medium rounded-lg">
                Copy Writing by <a href="https://x.com/copybyhabeeb" className='underline'>Copybyhabeeb</a>
             </span>
        </div>
        <div className='space-x-2 max-md:mt-11'>
            <a href="https://revamp-xi.vercel.app/" className='underline flex gap-x-2' >
            Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>
        </div>
      </section>
      <article className="mt-14 md:space-y-20 space-y-16">
        <p>
        Bime is an intelligent business built right into the heart; it allows users to add sales and expenses, and they get to see profit and money generated on a daily, monthly, and annual basis.
        </p>
        <div>
        <Link href="https://revamp-xi.vercel.app" className="inline-flex" >
        <img src="/Group 11.svg" width={466} className='transition ease-in delay-150 hover:scale-125 duration-200' />
        </Link>
       </div>
        
        <p>We were approached to revamp the landing page of 'Bime' after recognizing significant challenges in its current website. First-time visitors struggled to grasp the core message and purpose of the platform, particularly in the hero section, which failed to communicate effectively. As experts, we identified inconsistencies throughout the site that misaligned with the brand’s objectives, potentially impacting conversion rates. Our goal was to reimagine the website to clearly convey the brand’s value while ensuring an engaging and user-friendly experience.</p>
       

       <div>
       <Link href="https://revamp-xi.vercel.app/#business" className="inline-flex" >
        <img src="/Final 1.svg" alt='bime' width={466}  className='transition ease-in- delay-150 hover:scale-125 duration-200'/>
        </Link>
       </div>
        


        <div className='flex-col items-start'>
      <h2 className=" mb-8">Key takeaway</h2>
      <ul className="space-y-8 list-disc pl-[3%]">
        <li>
          Simplified User Experience: The redesigned website offers a streamlined and intuitive user experience, ensuring that visitors can easily find what they're looking for.
        </li>
        <li>
          Clear Messaging:By reevaluating the content strategy, we achieved a concise and compelling communication style, ensuring that the brand's message resonates with users.
        </li>
        <li>
          Enhanced Visual Appeal:The addition of engaging visuals and a well-structured hero section immediately captures users' attention and leaves a lasting impression.
        </li>
        <li>
         Improved Pricing Information:Our comprehensive redesign of the pricing section provides users with clear and accessible details about service plans and their associated costs.
        </li>
        <li>
          Increased User Engagement:The revamp has resulted in higher user engagement and improved conversion rates, aligning with the business's objectives.
        </li>
      </ul>
      <div className="mt-24 md:p-11 p-4 max-sm:text-left w-full border-2 border-black border-dashed rounded-xl flex sm:space-x-16 max-sm:flex-col max-sm:space-y-2">
      <a href="https://revamp-xi.vercel.app/" className='underline flex gap-x-2' >
      Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>

      <a href="#" className='underline flex sm:gap-x-2 max-sm:w-full justify-start' >
      Read full casestudy   <img src="/Arrow Right Up.svg" alt="" /></a>
      </div>

    </div>


    
      </article>
    </div>
  )
}
