"use client";

import React, { useState, useEffect } from 'react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials: Testimonial[] = [
    {
      text: "Function Studioo took our scattered idea and turned it into a clean, functional MVP in weeks. The designer–developer duo workflow saved us so much time. We didn’t have to explain things twice ..they just got it",
      author: "David K.",
      role: "Founder, Pay4Me"
    },
        {
      text: "Function Studioo took our scattered idea and turned it into a clean, functional MVP in weeks. The designer–developer duo workflow saved us so much time. We didn’t have to explain things twice ..they just got it",
      author: "David K.",
      role: "Founder, Pay4Me"
    },
        {
      text: "Function Studioo took our scattered idea and turned it into a clean, functional MVP in weeks. The designer–developer duo workflow saved us so much time. We didn’t have to explain things twice ..they just got it",
      author: "David K.",
      role: "Founder, Pay4Me"
    }

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="max-sm:mx-7 my-12">
      <div className=" relative overflow-hidden">
      
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

        <div
          className={`transition-all duration-300 ${
            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}
        >
          <p className="text-[26px] sm:text-[40.9px] leading-[40px] sm:leading-[63.63px] tracking-[-0.04em] font-medium mb-6 sm:mb-8">
            {testimonials[currentIndex].text}
          </p>

          <p className="text-[20px] sm:text-[26.6px] leading-[30px] sm:leading-[40px] tracking-[-0.04em] font-normal sedgwick ">
            <span className="">{testimonials[currentIndex].author}</span>
            <span className="font-normal">, {testimonials[currentIndex].role}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;