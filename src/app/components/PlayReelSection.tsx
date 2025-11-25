"use client";

import React, { useEffect, useState } from 'react';
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
              Tap this 'tiny' button to<br />view snapshots of our work
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn bg-black/50 backdrop-blur-sm">
          {/* Instagram Story Container - 9:16 aspect ratio */}
          <div className="relative w-full max-w-[390px] sm:max-w-[405px] aspect-[9/16] bg-white rounded-[20px] overflow-hidden shadow-2xl">
           
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 z-10 group"
            >
              <IoClose className="text-2xl text-black group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* GIF Container - Full height, covers entire story */}
            <div className="w-full h-full">
              <img
                src="/playreelgif.gif"
                alt="Projects showcase reel"
                className="w-full h-full object-cover"
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