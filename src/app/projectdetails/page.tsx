import React from 'react'

export default function page() {
  return (
    <div className='w-[80%] lg:w-[60%] mx-auto md:my-20 my-10'>
      <section className='flex max-md:flex-col justify-between'>
        <div>
            <h2 className='font-medium'>Bime Revamp Website</h2>
            <p className='text-gray-500 mb-6'>2024-UI design, UX improvement,Developement</p>
             <span className="bg-[#F5F5F5F5] px-[10px] py-[10px] text-sm font-medium rounded-lg">
                Copy Writing by <a href="https://x.com/copybyhabeeb" className='underline'>Copybyhabeeb</a>
             </span>
        </div>
        <div className='space-x-2 max-md:mt-11'>
            <a href="https://revamp-xi.vercel.app/" className='underline flex gap-x-2' >
            Visit website    <img src="/Arrow Right Up.svg" alt="" /></a>
        </div>
      </section>
      <article className="mt-14">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in.
        </p>

        <img src="/Group 11.svg" width={466} className='my-10'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in.</p>
        <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in.</p>
      </article>
    </div>
  )
}
