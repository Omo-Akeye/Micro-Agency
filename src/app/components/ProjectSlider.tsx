
import React, { useState } from 'react';

type Project = {
  title: string;
  description: string;
  hoverIMG: string;
  Link: string;
  year:number;
  descriptionLink?: string;
};

const projects: Project[] = [
  {
    title: "Bime website revamp",
    description: "UI design, UX improvement, development.Copywriting",
    hoverIMG: "/Group 11.svg",
    Link: "https://revamp-xi.vercel.app/",
    year:2024,
    descriptionLink:"https://x.com/copybyhabeeb"
  },
  {
    title: "Bime website revamp",
    description: "UI design, UX improvement, development",
    hoverIMG: "/Group 11.svg",
    Link: "https://revamp-xi.vercel.app/",
    year:2024
  },
  {
    title: "Bime website revamp",
    description: "UI design, UX improvement, development",
    hoverIMG: "/Group 11.svg",
    Link: "https://revamp-xi.vercel.app/",
    year:2024
  },
  {
    title: "Bime website revamp",
    description: "UI design, UX improvement, development",
    hoverIMG: "/Group 11.svg",
    Link: "https://revamp-xi.vercel.app/",
    year:2024
  },

];

export default function ProjectSlider() {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);

  return (
    <div className="inline-flex flex-col space-y-4 xl:w-[45%] sm:w-[55%] w-full">
      {projects.map((project, index) => (
        <div
          key={index}
         
          onMouseEnter={() => setHoveredProjectIndex(index)}
          onMouseLeave={() => setHoveredProjectIndex(null)}
        >
          <div  className="px-5 py-4 rounded-[10px] hover:bg-[#000000] hover:bg-opacity-10 inline-flex flex-col cursor-pointer hover:ease-in-out max-sm:relative">
          <a href={`${project.Link}`} className="underline capitalize mb-[8px] inline-flex">{project.title}</a>
        
             
          
            <div className='flex items-center text-[#000000] text-opacity-60 text-sm'>
            <p >
            {project.year} 
            </p>
           <p className='mx-2'>-</p>
            <p> 
            {project.description}
                {project.descriptionLink && (
                  <a href={project.descriptionLink} className=" underline" target="_blank" rel="noopener noreferrer">
                    (by copybyhabeeb)
                  </a>
                )}
            </p>
            </div>
         
          </div>
         
          {hoveredProjectIndex === index && (
            <div className="absolute flex items-center justify-center rounded-[10px] transition-opacity duration-300 ease-in-out max-w-[550px] max-h-80 sm:right-0 sm:top-[10%] max-md:w-[300px] z-20 max-sm:w-[200px] max-sm:right-0">
              <img
                src={project.hoverIMG}
                alt="Project preview"
                className="lg:w-full lg:h-full object-cover md:w-[80%] md:h-[80%] h-full w-full"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 




