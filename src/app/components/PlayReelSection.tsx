"use client";

import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const PlayReelSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Play Reel Button Section */}
      <section className="mt-[300px] my-12 flex justify-center items-center max-sm:mx-7 relative">
        <div className="relative">
          {/* Text Label with Arrow - Positioned above and to the left */}
          <div className="absolute -top-[50px] sm:-top-[60px] left-[10px] sm:left-[60px] z-20">
            <p className="text-sm sm:text-base text-[#000000A3] font-normal whitespace-nowrap transform -rotate-[6deg] sm:-rotate-[7deg] margarine">
              Tap this 'tiny' button to<br />view snapshots of our work
            </p>
            {/* Curved Arrow pointing down-right */}
          <img src="/playarrow.png" alt="" className='absolute sm:-top-[10px] top-[10px]   right-[-60px] sm:right-[-80px] ' />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="relative group cursor-pointer"
            aria-label="Play reel"
          >
            {/* Shadow Image - Behind the button */}
            <img 
              src="/playreelshadow.png" 
              alt="" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[640px] h-auto transition-transform duration-300 group-hover:scale-105"
              style={{ zIndex: 0 }}
            />
            
            {/* Main Button Image */}
            <img 
              src="/playreelbtn.png" 
              alt="Play reel" 
              className="relative w-[300px] sm:w-[537.82px] h-auto transition-transform duration-300 group-hover:scale-105"
              style={{ zIndex: 1 }}
            />
          </button>
        </div>
      </section>

      {/* Modal with GIF */}
      {isModalOpen && (
        <div className="fixed inset-0  z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-[1031px] sm:max-h-[90vh] max-h-[100vh] backdrop-blur-[186.1px] bg-white rounded-[20px] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 sm:top-[-2%] right-4 sm:right-[20%] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 z-10 group"
            >
              <IoClose className="text-xl sm:text-2xl text-black group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* GIF Container */}
            <div className="w-full h-full flex items-center justify-center  p-4 sm:p-8">
              <img
                src="/playreelgif.gif"
                alt="Projects showcase reel"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
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