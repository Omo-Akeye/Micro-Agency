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

interface ProjectSliderProps {
  projects: Project[];
  title: string;
  defaultOpen?: boolean;
}

export default function ProjectSlider({ 
  projects, 
  title = "Featured projects", 
  defaultOpen = true 
}: ProjectSliderProps) {
  const [showProjects, setShowProjects] = useState<boolean>(defaultOpen);

  // Toggle project visibility
  const toggleProjects = (): void => {
    setShowProjects(!showProjects);
  };

  return (
    <section className={`border-2 border-[#D0D0D05C] px-5 pt-2.5 md:mt-14 mt-7 pb-4  sm:w-full ${showProjects ? 'rounded-[10px]' : 'rounded-[20px]'}`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleProjects}>
        <p className='text-[#000000A3]'>{title}</p>
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
        {/* <section className="flex items-center gap-6 max-sm:flex-col">  */}
        <section className="grid grid-cols-2 items-center gap-6 max-sm:grid-col"> 
          {projects.map((project) => (
            <Link 
              key={project.id}
              href={project.href}
              className='bg-[#F5F5F5] rounded-[6px] p-4 h-44 mt-2.5 flex flex-col justify-between w-full'
            >
              <span>
                <div className='flex justify-between items-center'>
                  <h2 className="text-[#000000] font-semibold">{project.name}</h2>
                  <p className='text-[#00000099] text-sm'>{project.year}</p>
                </div>
                <h2 className="text-[#00000099] text-sm mt-3">{project.category}</h2>
              </span>
              <img src={project.logoSrc} alt={project.logoAlt} className='w-24 h-4.5' />
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}