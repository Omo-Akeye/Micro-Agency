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
    <div className={`bg-white p-6 rounded-[10px] relative transition-all duration-300 ${
      isExpanded ? 'col-span-full' : ''
    }`}>
      {/* Close Button - Only visible when expanded */}
      {isExpanded && (
        <button 
          onClick={onToggle}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 z-10"
        >
          <IoClose className="text-xl" />
        </button>
      )}

      <h1 className="text-lg font-medium my-2">{title}</h1>
      <p className="text-[#000000B8]">{description}</p>
      
      {!isExpanded && (
        <button 
          onClick={onToggle}
          className="flex items-center  gap-2 mt-2.5 cursor-pointer transition-opacity hover:opacity-70"
        >
          <FaChevronDown className="transition-transform duration-300 max-sm:size-3" />
          <p className="text-[#000000B8] underline">What's included</p>
        </button>
      )}

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 animate-fadeIn">
          <button 
            onClick={onToggle}
            className="flex items-center gap-2 mb-4 cursor-pointer transition-opacity hover:opacity-70"
          >
            <FaChevronDown className="rotate-180 transition-transform duration-300" />
            <p className="text-[#000000B8] underline">What's included</p>
          </button>
          
          <ul className="space-y-3  text-[#000000B8]">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span >•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
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
    <section >
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

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}