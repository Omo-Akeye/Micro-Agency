"use client"
import React, { useState } from 'react';
import Link from 'next/link';
interface Project {
  id: string;
  name: string;
  year: string;
  category: string;
  logoSrc: string;
  logoAlt: string;
  href: string;
}

export default function ProjectSlider() {
 
  const [showProjects, setShowProjects] = useState<boolean>(true);

  const projects: Project[] = [
    {
      id: 'pay4me',
      name: 'Pay4me',
      year: '2025',
      category: 'Financial technology',
      logoSrc: '/pay4me.svg',
      logoAlt: 'Pay4me logo',
      href: '/pay4me'
    },
    {
      id: 'bime',
      name: 'Bime',
      year: '2025',
      category: 'Financial technology',
      logoSrc: '/bimelogo.svg',
      logoAlt: 'Bime logo',
      href: '/bime'
    },
  
  ];


  const toggleProjects = (): void => {
    setShowProjects(!showProjects);
  };

  return (
    <section className={`border-2 border-[#D0D0D05C] px-5 pt-2.5  pb-4 max-sm:mx-7 sm:w-full  ${showProjects ? 'rounded-[10px]' : 'rounded-[20px]'}`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleProjects}>
        <p className='text-[#000000A3]'>Featured projects</p>
        <img 
          src="/Stroke.svg" 
          alt="stroke" 
          className={`transition-transform mt-1 duration-300 ${showProjects ? 'rotate-180' : ''}`}
        />
      </div>
      
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showProjects 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
 
         <section className="grid grid-cols-2 items-center gap-6 max-sm:grid-cols-1"> 
       

          {projects.map((project) => (
            <Link 
              key={project.id}
              href={project.href}
              className='bg-[#F5F5F5] rounded-[6px] p-4 h-44 w-full mt-2.5 flex flex-col justify-between'
            >
              <span>
                <div className='flex justify-between items-center'>
                  <h2 className="text-[#000000] font-semibold">{project.name}</h2>
                  <p className='text-[#00000099] text-sm'>{project.year}</p>
                </div>
                <h2 className="text-[#00000099] text-sm mt-3">{project.category}</h2>
              </span>
              <img src={project.logoSrc} alt={project.logoAlt} className='w-24 h-4.5'  />
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}