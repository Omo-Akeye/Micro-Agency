import Image from 'next/image'
import Link from 'next/link'
import { HoverCard } from '../components/FeaturedCards'

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
            <h2 className='font-semibold'>Lyngo</h2>
            <p className='text-gray-500 mb-6'>2026 - Consumer/Edtech</p>
        </div>
        <div className='space-x-2 '>
            <a href="https://lyngo.live/" className='underline flex gap-x-2' >
            Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>
        </div>
      </section>

      <main>
        <Image
        
        width={1200}
        height={600}
        src="/landing1.png"
        alt="Lyngo landing page"
        className="w-full"
        style={{ maxHeight: '466px' }}
        />

        <article className="flex flex-col gap-5 sm:my-16 my-10 sm:[&_p]:leading-7 sm:[&_p]:tracking-[-0.04em]">
   <p>When we built Lyngo, we weren't trying to build another learning app. We were trying to answer a quieter question: what does it look like to grow, without it feeling like work?



</p>

<p>Most vocabulary tools treat learning like a task to complete. A lesson. A module. Something to get through. But curiosity doesn't work like that. It shows up in small moments — between meetings, before bed, during a commute. It doesn't need a syllabus. It just needs a door.
Lyngo is that door.</p>

<p>We designed it around one principle: one word, clearly explained, every day. Not a list. Not a quiz. Just one thing worth knowing, delivered in a way that actually sticks.</p>
        </article>


          <Image
        
        width={1200}
        height={466}
        src="/Landing2.png"
        alt="Lyngo landing page 2"
        className="w-full"
        style={{ maxHeight: '416px' }}
        />

        <article className="flex flex-col gap-5 sm:my-16 my-10 sm:[&_p]:leading-7 sm:[&_p]:tracking-[-0.04em]">

          <h1 className="font-semibold mb-1">
            The thinking behind it





          </h1>
   <p>We started with the person, not the product. Who actually shows up for this? Not the person chasing fluency or studying for an exam. It's the curious professional who paused on a word and wanted to understand it better. The designer who wants sharper language. The builder who thinks in ideas. 
</p>

<p>For that person, friction is the enemy. So we removed it.</p>

<p>Niche selection means your daily word is never random — it fits your world. Streaks reward consistency without pressure. The whole experience is built to feel like a moment, not a commitment.</p>
        </article>
         <Image
        
        width={1200}
        height={600}
        src="/Landing3.png"
        alt="Lyngo landing page 3"
        className="w-full"
        style={{ maxHeight: '496px' }}
        />


             <article className="flex flex-col gap-5 sm:my-16 my-10  sm:[&_p]:leading-7 sm:[&_p]:tracking-[-0.04em]">

          <h1 className="font-semibold mb-1">
            What we built


          </h1>
   <p>
    A clean, focused web app with niche-based personalization, daily word delivery, streak tracking, and a reward system that makes showing up feel worthwhile. No bloat. No unnecessary flows. Just the thing you came for, done well. <br />
The result is something that respects your time and rewards your curiosity — every single day.
</p>

        </article>

        <section className="flex flex-col gap-10">

   

             <Image
        
        width={1200}
        height={600}
        src="/Landing4.png"
        alt="Lyngo landing page 4"
        className="w-full"
        style={{ maxHeight: '496px' }}
        />

             <Image
        
        width={1200}
        height={600}
        src="/Landing5.png"
        alt="Lyngo landing page 5"
        className="w-full"
        style={{ maxHeight: '496px' }}
        />

              <Image
        
        width={1200}
        height={646}
        src="/Landing7.png"
        alt="Lyngo landing page 7"
        className="w-full"
        style={{ maxHeight: '646px' }}
        />

             </section>

        <article className="flex flex-col  sm:my-16 my-10  sm:leading-7 sm:tracking-[-0.04em]">
          <p className="mb-1">
            Lyngo was developed end-to-end within Function Studioo:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <li>Product Strategy: Defined the problem space and core experience</li>
            <li>UX/UI Design: Simplified complex evaluation systems into usable flows</li>
            <li>Development: Built a scalable, performant platform aligned with the design system</li>
          </ul>
          <p className='mt-2'>Design and development worked as one system—not separate phases.</p>
        </article>

            <Image
        
        width={1200}
        height={416}
        src="/Landing8.png"
        alt="Lyngo landing page 8"
        className="w-full"
        style={{ maxHeight: '416px' }}
        />
        <article className="flex flex-col sm:my-16 my-10  sm:leading-7 sm:tracking-[-0.04em]">
          <p className="mb-1">Lyngo reflects how Function Studioo approaches products:</p>
          <ul className="list-disc pl-10 flex flex-col gap-1">
            <li>Build from real problems, not assumptions</li>
            <li>Prioritize clarity over feature volume</li>
            <li>Align design and development from day one</li>
            <li>Focus on outcomes, not just interfaces</li>
          </ul>
        </article>

             <Image
        
        width={1200}
        height={416}
        src="/Landing9.png"
        alt="Lyngo landing page 9"
        className="w-full"
        style={{ maxHeight: '416px' }}
        />


            <div className="mt-14 sm:mt-24 max-sm:text-left w-full flex sm:space-x-16 max-sm:flex-col max-sm:space-y-2 sm:items-center">
      <a href="https://lyngo.live/" className='underline flex gap-x-2' >
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