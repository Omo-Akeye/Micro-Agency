"use client";

import React, { useState, useEffect } from 'react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      text: "Function Studioo took our scattered idea and turned it into a clean, functional MVP in weeks. The designer–developer duo workflow saved us so much time. We didn’t have to explain things twice ..they just got it",
      author: "David K.",
      role: "Founder, Pay4Me"
    },
    {
      text: "They redesigned our landing page and the difference was immediate. Our page finally feels premium. The animations, the flow, the mobile experience, everything feels intentional. Easily one of the best teams we’ve worked with.",
      author: "Anita S.",
      role: "Operations Lead, Votdine"
    },
    {
      text: "Working with Function Studioo felt like working with an in-house team. Fast, clear communication and no messy handoffs. They shipped exactly what we needed, and the execution was flawless.",
      author: "Rahul M.",
      role: "Manager, Bime"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };


  const getSlideClass = (index: number) => {
    if (index === currentIndex) {
     
      return 'translate-x-0 opacity-100 z-10 scale-100';
    } 
    
 
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    
    if (index === prevIndex) {
     
      return '-translate-x-full opacity-0 z-0 scale-95';
    }

  
    return 'translate-x-full opacity-0 z-0 scale-95';
  };

  return (
    <section className="max-sm:mx-7 my-12">
      <div className="relative">
      
        {/* Navigation Dots */}
        <div className="flex gap-2 mb-6 sm:mb-8 justify-start">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#8B8B8B] w-4'
                  : 'bg-[#D9D9D9] hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

   
        <div className="grid grid-cols-1 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${getSlideClass(index)}`}
            >
              <p className="text-[26px] sm:text-[40.9px] leading-[40px] sm:leading-[63.63px] tracking-[-0.04em] font-medium mb-6 sm:mb-8">
                {testimonial.text}
              </p>

              <p className="text-[20px] sm:text-[26.6px] leading-[30px] sm:leading-[40px] tracking-[-0.04em] font-normal sedgwick">
                <span className="">{testimonial.author}</span>
                <span className="font-normal">, {testimonial.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;