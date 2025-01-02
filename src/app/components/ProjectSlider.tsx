
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Project = {
  title: string;
  description: string;
  hoverIMG: string;
  Link: string;
  year: number;
  descriptionLink?: string;
};

const projects: Project[] = [
  {
    title: "Bime website revamp",
    description: "UI design,UX improvement,developement. Copywriting",
    hoverIMG: "/Group 11.svg",
    Link: "https://revamp-xi.vercel.app/",
    year: 2024,
    descriptionLink: "https://x.com/copybyhabeeb"
  }
];

export default function ProjectSlider() {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleDescriptionLinkClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation(); 
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="inline-flex flex-col xl:w-[45%] sm:w-[55%] w-full">
      {projects.map((project, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredProjectIndex(index)}
          onMouseLeave={() => setHoveredProjectIndex(null)}
        >
       
          <div 
            onClick={() => router.push('/projectdetails')}
            className="px-5 py-4 rounded-[10px] hover:bg-[#F5F5F5] inline-flex flex-col cursor-pointer hover:ease-in-out max-sm:relative"
          >
            <p className="underline capitalize mb-[8px] inline-flex">
              {project.title}
            </p>
            <div className="flex items-center text-[#000000] text-opacity-60 text-sm">
              <p>{project.year}</p>
              <p className="mx-2 roun">-</p>
              <p>
                {project.description}
                {project.descriptionLink && (
                  <span>
                    {' '}
                    <span
                      onClick={(e) => handleDescriptionLinkClick(e, project.descriptionLink!)}
                      className="underline cursor-pointer"
                    >
                      (by copybyhabeeb)
                    </span>
                  </span>
                )}
              </p>
            </div>
          </div>

         
          {hoveredProjectIndex === index && (
            <div className="absolute flex items-center justify-center rounded-[10px] transition-opacity duration-300 ease-in-out max-w-[550px] max-h-80 sm:right-0 sm:top-[10%] max-md:w-[300px] z-20 max-sm:hidden">
              <img
                src={project.hoverIMG}
                alt={`${project.title} preview`}
                className="lg:w-full lg:h-full object-cover md:w-[80%] md:h-[80%] h-full w-full"
              />
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between mt-8 max-md:inline-block">
        <div 
          className="px-5 py-3 inline-flex"
        >
          Pay4Me Website Redesign
        </div>
        <div className="inline-flex px-2 py-2 rounded bg-[#F5F5F5] items-center">
          <img src="/Hourglass Line.svg" alt="hour-glass" />
          Coming soon
        </div>
      </div>
    </div>
  );
}