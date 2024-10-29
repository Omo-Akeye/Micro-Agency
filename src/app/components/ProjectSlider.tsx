import React, { useState } from 'react';

type Project = {
  title: string;
  description: string;
  hoverIMG: string;
};

const projects: Project[] = [
  {
    title: "Bime website revamp",
    description: "2024 - UI design, UX improvement, development",
    hoverIMG: "/Group 11.svg",
  },
  {
    title: "Bime website revamp",
    description: "2024 - UI design, UX improvement, development",
    hoverIMG: "/Group 11.svg",
  },
  {
    title: "Bime website revamp",
    description: "2024 - UI design, UX improvement, development",
    hoverIMG: "/Group 11.svg",
  },
  {
    title: "Bime website revamp",
    description: "2024 - UI design, UX improvement, development",
    hoverIMG: "/Group 11.svg",
  },

];

export default function ProjectSlider() {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);

  return (
    <div className="inline-flex flex-col space-y-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="px-5 py-4 rounded-[10px] hover:bg-[#000000] hover:bg-opacity-10 inline-block cursor-pointer hover:ease-in-out"
          onMouseEnter={() => setHoveredProjectIndex(index)}
          onMouseLeave={() => setHoveredProjectIndex(null)}
        >
          <h1 className="underline capitalize mb-[8px]">{project.title}</h1>
          <p className="text-[#000000] text-opacity-60">{project.description}</p>
          {hoveredProjectIndex === index && (
            <div className="absolute flex items-center justify-center rounded-[10px] transition-opacity duration-300 ease-in-out max-w-[550px] max-h-80 right-0 top-[10%]">
              <img
                src={project.hoverIMG}
                alt="Project preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
