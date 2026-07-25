"use client";

import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const PlayReelSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
    
      <section className="mt-[200px] my-12 flex justify-center items-center max-sm:mx-7 relative">
        <div className="relative">

          <div className="absolute -top-[50px] sm:-top-[60px] left-[10px] sm:left-[60px] z-20">
            <p className="text-sm sm:text-base text-[#000000A3] font-normal whitespace-nowrap transform -rotate-[6deg] sm:-rotate-[7deg] margarine">
              Tap this 'tiny' button to<br />view our latest exploration
            </p>
         
          <img src="/playarrow.png" alt="" className='absolute sm:-top-[10px] top-[10px]   right-[-60px] sm:right-[-80px] ' />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="relative group cursor-pointer"
            aria-label="Play reel"
          >
          
     
              <img 
    src="/playreelshadow.png" 
    alt="" 
    className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[940px] h-auto transition-transform duration-300 group-hover:scale-105 pointer-events-none"
  />
  

  <img 
    src="/playreelbtn.png" 
    alt="Play reel" 
    className="relative z-10 w-[300px] sm:w-[537.82px] h-auto transition-transform duration-300 group-hover:scale-105"
  />
          </button>
        </div>
      </section>

   
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn bg-black/70 backdrop-blur-sm">

          <div className="relative w-full max-w-5xl aspect-[1871/1098] max-h-[85vh]  rounded-[5px] sm:rounded-[24px] overflow-hidden  flex items-center justify-center ">
           
      
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white shadow-lg transition-all duration-300 z-20 group border border-white/20"
            >
              <IoClose className="text-xl sm:text-2xl group-hover:rotate-90 transition-transform duration-300" />
            </button>

            
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/playreelgif1.gif"
                alt="Projects showcase reel"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default PlayReelSection;