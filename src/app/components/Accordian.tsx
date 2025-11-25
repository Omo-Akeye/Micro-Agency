"use client"
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';


interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
  className?: string;
}

const defaultFAQData: FAQItem[] = [
  {
    id: 1,
    question: "What is it like working together?",
    answer: "Working with Function Studio means working with a tight, two-person team, designer and developer, who collaborate in real-time. We're fast, focused, and intentional. No handoffs, no delays. You’ll be part of a smooth process where ideas turn into usable products quickly. Think of it like working with a product-minded duo that handles both the look and the logic, without the bloat of a big agency."
  },
  {
    id: 2,
    question: "How much can we get done in a month?",
    answer: "A lot, especially because we work as a synced designer–developer team. In one month, we can take an idea from early sketches to a live, working product. That might mean designing and building a full landing page, shipping a small web app, or tackling core parts of a larger platform. The exact output depends on the scope, but our setup removes the usual back-and-forth and helps us move fast without cutting corners"
  },
  {
    id: 3,
    question: "What kinds of projects do you take on?",
    answer: "We focus on digital products - landing pages, web apps, and internal tools. Most of our work involves designing and building front-end experiences that are fast, clean, and easy to use. Whether you're a startup validating an idea or a team refining an existing platform, we step in where design and code need to work closely together."
  },
  {
    id: 4,
    question: "Who do we work best with?",
    answer: "We work best with founders, product leads, or small teams who value speed, clear communication, and tight collaboration. If you're looking for a no-fluff team that can move ideas into production without long timelines or layered approvals, we’ll likely be a great fit."
  },
    {
    id: 5,
    question: "What do you need from us to get started?",
    answer: "Once we’ve had a discovery call and aligned on scope, we’ll just need a short brief, what you're trying to build, any existing materials (like brand assets or wireframes), and access to relevant tools. We’ll handle the rest from there, keeping you in the loop with frequent updates and check-ins"
  }
];

const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  items = defaultFAQData, 
  className = "" 
}) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number): void => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={` mt-12 ${className} max-sm:mx-7`}>
     
    

      
      <div className="space-y-4">
        <h2 className="font-medium text-[#000000A3] mb-6">FAQs</h2>
        
        <div className="space-y-3">
          {items.map((item: FAQItem) => {
            const isOpen: boolean = openItem === item.id;
            
            return (
              <div
                key={item.id}
                className="border-b border-[#00000052] overflow-hidden border-opacity-60   duration-300 last:border-none"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full  py-4 text-left flex items-center justify-between  transition-all duration-300 ease-out"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                >
                  <span className="text-lg font-medium text-[#000000] pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className={`transform transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      {isOpen ? (
                    
                        <FaMinus />
                      ) : (
                     
                        <FaPlus />
                      )}
                    </div>
                  </div>
                </button>
                
                <div
                  id={`faq-content-${item.id}`}
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                >
                  <div className={`pb-4 transform transition-transform duration-300 ease-out ${
                    isOpen ? 'translate-y-0' : '-translate-y-2'
                  }`}>
                    <p className="text-[#000000B8] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;