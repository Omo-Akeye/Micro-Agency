import React from 'react'
import ProjectSlider from '../components/OtherProjects';
import { HoverCard } from '../components/FeaturedCards';
import Link from 'next/link';

export default function page() {

  const featuredProjects = [
    {
      title: "Pay4me",
      category: "Financial technology",
      year: "2025",
      bgColor: "bg-gradient-to-b from-[#AFE274] to-[#D5FFA4]", 
      image1: '/pay4me1.png',
      textColor: "text-[#000000]",
      image2: '/pay4me2.png',
      hoverImage: '/pay4me-hover.png', 
      isComingSoon: false,
      link: "/pay4me"
    },

  ];
  return (
    <div className='mx-auto  my-10 max-sm:mx-7'>
      <section className='flex max-md:flex-col justify-between'>
        <div>
            <h2 className='font-medium'>Bime Revamp Website</h2>
            <p className='text-[#00000099] mb-6'>2024 - Financial technology</p>
        </div>
        <div className='space-x-2 '>
            <a href="https://revamp-xi.vercel.app/" className='underline flex gap-x-2' >
            Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>
        </div>
      </section>
      <article className=" space-y-6">
   
     
       
        <img src="https://ik.imagekit.io/9t24q4vku9/bime%201.svg?updatedAt=1747834841674" alt='bime'   className='transform transition-transform duration-300 ease-in-out hover:scale-105 w-full flex shadow-xs'/>
      

       <p>
        Bime is an intelligent business built right into the heart; it allows users to add sales and expenses, and they get to see profit and money generated on a daily, monthly, and annual basis.
        </p>
        
        <p>We were approached to revamp the landing page of 'Bime' after recognizing significant challenges in its current website. First-time visitors struggled to grasp the core message and purpose of the platform, particularly in the hero section, which failed to communicate effectively. As experts, we identified inconsistencies throughout the site that misaligned with the brand’s objectives, potentially impacting conversion rates. Our goal was to reimagine the website to clearly convey the brand’s value while ensuring an engaging and user-friendly experience.</p>
       

   
        <img src="https://ik.imagekit.io/9t24q4vku9/Final%201.svg?updatedAt=1747834851940" alt='bime'  className='transform transition-transform duration-300 ease-in-out hover:scale-105 w-full flex shadow-xs'/>
     


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

    </div>

          <span className="bg-[#F5F5F5F5] px-[10px] py-[10px] text-xs font-medium rounded-lg inline-flex">
                Copy Writing by <a href="https://x.com/copybyhabeeb" className='underline'>Copybyhabeeb</a>
             </span>


             <div className="">
      <a href="https://revamp-xi.vercel.app/" className='underline flex gap-x-2' >
      Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>

      {/* <a href="#" className='underline flex sm:gap-x-2 max-sm:w-full justify-start text-[#0000007A]' >
      Read full casestudy   <img src="/Arrow Right Up.svg" alt="" /></a> */}
      </div>
    
      </article>

            <div className='mt-20'>
              <h2 className='text-[#000000] mb-5'>Other Projects</h2>
                 {featuredProjects.map((card, index) => (
         
            <Link key={index} href={card.link}>
              <HoverCard
                title={card.title}
                category={card.category}
                year={card.year}
                bgColor={card.bgColor}
                image1={card.image1}
                image2={card.image2}
                hoverImage={card.hoverImage}
                textColor={card.textColor}  
                isComingSoon={card.isComingSoon}
                link={card.link}
              />
              </Link>
            ))}
            </div>
    </div>
  )
}
