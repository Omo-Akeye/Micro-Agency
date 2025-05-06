"use client";

import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if we've scrolled down enough to show the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`cursor-pointer transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'} bounce`}
      aria-label="Scroll to top"
    >
      <img src="/arrow-up.svg" alt="scroll-up" />
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </button>
  );
};

export default ScrollToTopButton;