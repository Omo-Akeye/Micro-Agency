"use client"
import Link from 'next/link';
import React, { useState,useEffect, useRef } from 'react'
import { useParams } from 'next/navigation';

const navImages = {
  akeye: {
    logo: "/Code 2.svg",
    profile: "/akeye-nav.svg"
  },
  ore: {
    logo: "/Layers.svg",
    profile: "/ore-nav.svg"
  },
  default: {
    logo: "/Group 2.svg",
    profile: "/Group 2.svg"
  }
};

export default function Nav() {
    const [showChatPopup, setShowChatPopup] = useState(false);
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const [showLinkPopup, setShowLinkPopup] = useState(false);

    const params = useParams();
    const aboutPopupRef = useRef<HTMLDivElement | null>(null);
    const linkPopupRef = useRef<HTMLDivElement | null>(null);
    
   
    const currentProfile = params?.name as string;
    const images = navImages[currentProfile as keyof typeof navImages] || navImages.default;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (aboutPopupRef.current && !aboutPopupRef.current.contains(event.target as Node)) {
          setShowAboutPopup(false);
        }
        if (linkPopupRef.current && !linkPopupRef.current.contains(event.target as Node)) {
          setShowLinkPopup(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <nav className="w-[90%] flex max-md:flex-col justify-between md:mt-[3%] mt-[41px] mx-auto items-center relative ">
        <span className="flex items-center md:gap-4 max-md:justify-between relative max-md:w-full">
     
     <div className=" flex items-center gap-4">
      
<Link href={"/"}>
            <img 
              src={images.profile} 
              alt="profile" 
              width={60} 
              className="cursor-pointer"
            />
          </Link>
          
        
<div className="flex items-center gap-x-2 px-3 py-2 border-[#D9D9D9] border-2 rounded-[36.88px] h-fit">
      <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-pulse" />
      <p className="md:text-xs font-medium text-[10px]">
      1 spot remaining
      </p>
    </div>
      
     </div>

          <div
            className=" cursor-pointer flex"
            onMouseEnter={() => setShowChatPopup(true)}
            onMouseLeave={() => setShowChatPopup(false)}
            onClick={() => setShowChatPopup(!showChatPopup)}
          >
           <img src="/Frame 418.svg" alt="" className=""/>  
            {showChatPopup && (
              <div className="max-md:hidden rounded-md transition-opacity duration-300  bg-[#F5F5F5] flex items-center ml-2 py-2 px-1 max-md:absolute max-md:right-[4%] max-md:bottom-[-55%]">
                Let’s Chat
              </div>
            )}
          </div>
        </span>







        <div className="md:flex gap-x-6 hidden">

<div ref={linkPopupRef} className='relative'>
          <div
              className="flex underline items-center gap-x-3 cursor-pointer"
              onClick={() => setShowLinkPopup(!showLinkPopup)}
            >
              Link{" "}
              <img
                src="/Vector (Stroke).svg"
                alt="arrow"
                className={`transition-transform duration-300 ${showLinkPopup ? "rotate-180" : ""}`}
              />
            </div>
            {/* link Popup */}
            {showLinkPopup && (
              <div className="absolute top-[4%] right-0 rounded-md transition-opacity duration-300 ease-in-out opacity-100 mt-8 max-w-[350px] bg-white flex flex-col space-y-3">
                <a href="#" className="bg-[#F5F5F5]  inline-flex py-[10px] pr-12 pl-4 items-center rounded-lg cursor-pointer hover:text-gray-500 "> 
                  Email
                </a>
              
                  <a href="#" className="inline-flex items-center bg-[#F5F5F5]  py-[10px] pr-12 pl-4 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500 ">
                   LinkedIn
                  </a>
                  <a href="#" className="inline-flex items-center bg-[#F5F5F5] py-[10px] pr-12 pl-4 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500 ">
                    Twitter
                  </a>
                
              </div>
            )}

          </div>
          

          <div ref={aboutPopupRef} >
          <p
              className="flex underline items-center gap-x-3 cursor-pointer"
              onClick={() => setShowAboutPopup(!showAboutPopup)}
            >
              About{" "}
              <img
                src="/Vector (Stroke).svg"
                alt="arrow"
                className={`transition-transform duration-300 ${showAboutPopup ? "rotate-180" : ""}`}
              />
            </p>
            {/* About Popup */}
            {showAboutPopup && (
              <div className="absolute top-7 right-0 rounded-md transition-opacity duration-300 ease-in-out opacity-100 mt-8 max-w-[350px] bg-white">
                <Link href="/microteam" className="bg-[#F5F5F5]  flex py-[10px] px-6 items-center rounded-lg cursor-pointer hover:text-gray-500"> <img src="/abstract.svg" width={34} className="mr-[10px]"/>Our micro team</Link>
                <div className="mt-3 space-y-3">
                  <Link href="/about/ore" className="flex items-center bg-[#F5F5F5]  py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/ore.svg" alt="Isaac Oreoluwa" width={34} className="mr-[10px]" />
                    <span>Isaac Oreoluwa - Designer</span>
                  </Link>
                  <Link href="/about/akeye" className="flex items-center bg-[#F5F5F5] py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/akeye.svg" alt="Akeye Saheed" width={34} className="mr-[10px]" />
                    <span>Akeye Saheed - Developer</span>
                  </Link>
                </div>
              </div>
            )}

          </div>
          <img src="/Help.svg" alt="rocket" className="rotate-animation" />
     
        </div>
      </nav>
  )
}
