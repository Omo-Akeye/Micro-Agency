import React from 'react'

interface Social {
  linkTitle: string;
  href: string;
}

interface AboutProps {
  logo: string;
  name: string;
  firstParagraph: string;
  secondParagh: string;
  thirdParagraph: string;
  socials: Social[];  
}
export default function AboutComponent({logo,name,firstParagraph,secondParagh,thirdParagraph,socials}:AboutProps) {
  return (
    <div className='lg:w-[60%] md:my-28 mx-auto w-[80%] sm:my-20 my-10'>
    <img src={logo}/>
    <div className='flex md:mt-7 mt-4 mb-11 gap-x-2'>
      <span className='text-[#00000066] text-opacity-40'>About</span>
      <h1>{name}</h1>
    </div>
 <p>{firstParagraph}</p>
 <p className='my-10'>{secondParagh}</p>
 <p>{thirdParagraph}</p>

 <div className='flex gap-x-9 mt-16 flex-wrap space-y-3'>
    {socials.map((social,index)=> (
       <a className='underline' href={social.href} key={index}>{social.linkTitle}</a> 
    ))}

 </div>
  </div>
  )
}
