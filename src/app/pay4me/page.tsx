import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-[80%] lg:w-[60%] mx-auto md:my-20 my-10'>
       <section className='flex max-md:flex-col justify-between'>
        <div>
            <h2 className='font-semibold'>Pay4me</h2>
            <p className='text-gray-500 mb-6'>2025 - Financial technology</p>
        </div>
        <div className='space-x-2 max-md:mt-11'>
            <a href="https://pay4meee.netlify.app/" className='underline flex gap-x-2' >
            Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>
        </div>
      </section>

      <main>
        <span className="w-full h-[361px] flex">

        </span>

        <article className="flex flex-col gap-5">
            <p>What changed?</p>
            <p>We introduced a cleaner layout, reworked the messaging, and rebuilt the hero section to speak directly to Pay4Me’s core users. Navigation is now effortless, service explanations are crisp, and conversion points are placed with intent—not assumption.</p>
            <p>The result?</p>
            <p>More engagement. More clarity. And more users finding exactly what they need—faster than ever.</p>
            <p>We introduced a cleaner layout, reworked the messaging, and rebuilt the hero section to speak directly to Pay4Me’s core users. Navigation is now effortless, service explanations are crisp, and conversion points are placed with intent—not assumption.
            We introduced a cleaner layout, reworked the messaging, and rebuilt the hero section to speak directly to Pay4Me’s core users. Navigation is now effortless, service explanations are crisp, and conversion points are placed with intent—not assumption.</p>
            <img src="/pay4me1.svg" alt="" />
            <img src="/pay4me2.svg" alt="" />
            {/* <Image src="/pay4me1.svg" alt="paymee"/> */}
        </article>


      </main>
    </div>
  )
}

export default page
