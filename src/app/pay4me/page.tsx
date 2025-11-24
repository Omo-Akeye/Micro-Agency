"use client"
import React from 'react'
import Link from 'next/link';
import { HoverCard } from '../components/FeaturedCards';

const page = () => {
  const featuredProjects = [
    {
      title: "Bime",
      category: "Financial technology", 
      year: "2024",
      bgColor: "bg-gradient-to-b from-[#1DA1F2] to-[#88C9F2]",
      textColor: "text-[#000000]",
      image1: "/bime1.png",
      image2: "/bime2.png",
      hoverImage: '/bime-hover.png', 
      isComingSoon: false,
      link: "/bime"
    },


  ];
  return (
    <div className='mx-auto md:my-20 my-10 max-sm:mx-7 z-0'>
       <section className='flex max-md:flex-col justify-between max-sm:mb-4'>
        <div>
            <h2 className='font-semibold'>Pay4me</h2>
            <p className='text-gray-500 mb-6'>2025 - Financial technology</p>
        </div>
        <div className='space-x-2 '>
            <a href="https://pay4meee.netlify.app/" className='underline flex gap-x-2' >
            Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>
        </div>
      </section>

      <main>
       
        <img src="/bime-main.png" alt="pay4me" className="w-full  rounded-sm transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-xs"/>
      

        <article className="flex flex-col gap-5 sm:mt-11 mt-6">
            <p>When we partnered with Pay4Me, it wasn’t just about giving the website a facelift, it was about meeting people in moments that really matter. Whether it's paying tuition halfway across the world or sorting out visa fees at the last minute, their users need speed, clarity, and trust. The old site didn’t reflect that urgency or care.</p>
            <p>We set out to shift that.</p>
            <p>Instead of leading with features, we focused on the feeling of using Pay4Me: peace of mind in stressful times. Every design decision, from content structure to visual hierarchy, was guided by one question: Can someone new understand and trust this within 10 seconds?</p>
                    
                    <div className="mt-2">

                    <p>From there, we rebuilt the site to do two things really well:</p>
  <ol className="list-decimal list-inside space-y-2 mt-1">
    <li>Explain the product clearly.</li>
    <li>Inspire confidence, fast.</li>
  </ol>

                    </div>
 

                    <div className="my-14 flex flex-col w-full justify-center gap-6">
  <img 
    src="/Frame 1000003401.png"
   alt="pay4me"
    className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-xs" 
  />
  <img 
    src="/Frame 1000003402.png" 
   alt="pay4me" 
    className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-xs" 
  />

    <img 
    src="/Frame 1000003526.png" 
   alt="pay4me" 
    className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-xs" 
  />
</div>

          

            <p>What changed?</p>
            <p>We introduced a cleaner layout, reworked the messaging, and rebuilt the hero section to speak directly to Pay4Me’s core users. Navigation is now effortless, service explanations are crisp, and conversion points are placed with intent—not assumption.</p>
            <p>The result?</p>
            <p>More engagement. More clarity. And more users finding exactly what they need—faster than ever.</p>
        
        </article>

        <div className="mt-14 sm:mt-24 max-sm:text-left w-full flex sm:space-x-16 max-sm:flex-col max-sm:space-y-2 sm:items-center">
      <a href="https://pay4meee.netlify.app/" className='underline flex gap-x-2' >
      Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>

    
      </div>


      </main>


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

export default page
