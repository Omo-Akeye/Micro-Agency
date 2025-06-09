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
    answer: "Working together is a collaborative experience where we focus on understanding your goals and delivering results that exceed expectations. Our team brings expertise, creativity, and dedication to every project."
  },
  {
    id: 2,
    question: "How much can we get done in a month?",
    answer: "The scope of work depends on project complexity and requirements. Typically, we can complete significant milestones within a month, including design iterations, development phases, or complete feature implementations."
  },
  {
    id: 3,
    question: "Can I use it for just one month?",
    answer: "Yes, we offer flexible engagement options including short-term projects. Whether you need a quick solution or ongoing support, we can tailor our services to match your timeline and budget."
  },
  {
    id: 4,
    question: "What if I'm not happy with the work?",
    answer: "Your satisfaction is our priority. We offer revision rounds and work closely with you throughout the process. If you're not satisfied, we'll make it right through additional revisions or discuss alternative solutions."
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
                className="border-b border-[#00000052] overflow-hidden   duration-300 "
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
                        // <Minus className="w-5 h-5 text-gray-600" />
                        <FaMinus />
                      ) : (
                        // <Plus className="w-5 h-5 text-gray-600" />
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