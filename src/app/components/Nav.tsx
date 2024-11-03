"use client"
import Link from 'next/link';
import React, { useState } from 'react'
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

    const params = useParams();
    
   
    const currentProfile = params?.name as string;
    const images = navImages[currentProfile as keyof typeof navImages] || navImages.default;
  return (
    <nav className="w-[90%] flex max-md:flex-col justify-between md:mt-[3%] mt-[41px] mx-auto items-center relative ">
        <span className="flex items-center gap-4 relative">
            {/* <Link href={"/"}>
            <img src="/Group 2.svg" alt="profile" width={60} className="cursor-pointer"/>
            </Link> */}

<Link href={"/"}>
            <img 
              src={images.profile} 
              alt="profile" 
              width={60} 
              className="cursor-pointer"
            />
          </Link>
          
        
<div className="flex items-center gap-x-2 px-3 py-2 border-[#D9D9D9] border-2 rounded-[36.88px]">
      <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-pulse" />
      <p className="md:text-xs text-[10px]">
        <span className="mr-2 text-[#000000] text-opacity-60">Status:</span> Open to work
      </p>
    </div>
      
          <div
            className=" cursor-pointer flex"
            onMouseEnter={() => setShowChatPopup(true)}
            onMouseLeave={() => setShowChatPopup(false)}
            onClick={() => setShowChatPopup(!showChatPopup)}
          >
           <img src="/Frame 418.svg" alt="" className=""/>  
            {showChatPopup && (
              <div className="rounded-md transition-opacity duration-300  bg-[#F5F5F5] flex items-center ml-2 py-2 px-1 max-md:absolute max-md:right-[4%] max-md:bottom-[-55%]">
                Let’s Chat
              </div>
            )}
          </div>
        </span>







        <div className="md:flex gap-x-6 hidden">
          <p className="flex underline items-center gap-x-3">
            Links <img src="/Vector (Stroke).svg" alt="arrow" />
          </p>
          

          <div >
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
              <div className="absolute top-8 right-0 rounded-md transition-opacity duration-300 ease-in-out opacity-100 mt-8 max-w-[350px]">
                <div className="bg-[#F5F5F5]  flex py-[10px] px-6 items-center rounded-lg cursor-pointer hover:text-gray-500"> <img src="/abstract.svg" width={34} className="mr-[10px]"/>Our micro team</div>
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
          <img src="/Rocket.svg" alt="rocket" className="rotate-animation" />
     
        </div>
      </nav>
  )
}
