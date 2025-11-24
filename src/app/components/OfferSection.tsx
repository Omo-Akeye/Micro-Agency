"use client";

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

interface OfferCardProps {
  title: string;
  description: string;
  items: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

interface Offer {
  title: string;
  description: string;
  items: string[];
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, items, isExpanded, onToggle }) => {
  return (
    <div className={`bg-white p-6 rounded-[10px] relative transition-all duration-500 ease-in-out ${
      isExpanded ? 'col-span-full' : ''
    }`}>
  
   
      <button 
        onClick={onToggle}
        className={`absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 z-10 ${
          isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <IoClose className="text-xl" />
      </button>

      <h1 className="text-lg font-medium my-2">{title}</h1>
      <p className="text-[#000000B8]">{description}</p>
      
  
      <div className={`transition-all duration-300 ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto mt-2.5'}`}>
        <button 
          onClick={onToggle}
          className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-70"
          
          disabled={isExpanded} 
        >
          <FaChevronDown className="transition-transform duration-300 max-sm:size-3" />
          <p className="text-[#000000B8] underline">What's included</p>
        </button>
      </div>

     
  
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden min-h-0">
         
          <button 
            onClick={onToggle}
            className="flex items-center gap-2 mb-4 cursor-pointer transition-opacity hover:opacity-70"
          >
            <FaChevronDown className="rotate-180 transition-transform duration-300" />
            <p className="text-[#000000B8] underline">What's included</p>
          </button>
          
          <ul className="space-y-3 text-[#000000B8]">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function OfferSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const offers: Offer[] = [
    {
      title: "Landing Page Package",
      description: "For founders who want a clean, fast, high-converting page — launched quickly.",
      items: [
        "Custom landing page UI design (no templates)",
        "Copy structure + messaging layout",
        "Responsive web development",
        "Micro-interactions & subtle animations",
        "Launch setup (domain, hosting, analytics)",
        "1-2 revision cycles",
        "Delivery in 1-2 weeks"
      ]
    },
    {
      title: "Web App MVP",
      description: "For teams who want a functional, beautiful MVP without managing multiple contractors.",
      items: [
        "Full product UI/UX design",
        "Interactive prototype",
        "Frontend + backend development",
        "Database setup & integration",
        "User authentication",
        "Core feature implementation",
        "Testing & bug fixes",
        "Deployment & launch support"
      ]
    },
    {
      title: "Full Product Build",
      description: "For founders ready to take an idea from zero, all the way to launch.",
      items: [
        "Complete product strategy & planning",
        "Full UI/UX design system",
        "End-to-end development",
        "Advanced features & integrations",
        "Performance optimization",
        "Security implementation",
        "Ongoing support & maintenance",
        "Scalability considerations"
      ]
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section>
      <h1 className="font-medium mb-4">What We Offer</h1>
      <main className="bg-[#F5F5F5] p-3 rounded-[10px] grid sm:grid-cols-2 gap-2.5">
        {offers.map((offer, index) => (
      
          expandedIndex === null || expandedIndex === index ? (
            <OfferCard
              key={index}
              title={offer.title}
              description={offer.description}
              items={offer.items}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ) : null
        ))}
      </main>
    </section>
  );
}