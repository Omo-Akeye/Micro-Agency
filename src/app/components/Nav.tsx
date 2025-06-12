"use client"
import Link from 'next/link';
import React, { useState,useEffect, useRef } from 'react'
import { useParams } from 'next/navigation';


const navImages = {
  akeye: {

        logo: "/abstract.svg",
    profile: "/abstract.svg"
  },
  ore: {
   
        logo: "/abstract.svg",
    profile: "/abstract.svg"
  },
  default: {
    logo: "/abstract.svg",
    profile: "/abstract.svg"
  }
};

export default function Nav() {
    const [showChatPopup, setShowChatPopup] = useState(false);
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const [showLinkPopup, setShowLinkPopup] = useState(false);
    const [shotLinkPopup, setShotLinkPopup] = useState(false);
    const closeMobileMenu = () => {
      setShowMobileMenu(false);
    };

    const [showMobileMenu, setShowMobileMenu] = useState(false);


    const params = useParams();
    const aboutPopupRef = useRef<HTMLDivElement | null>(null);
    const linkPopupRef = useRef<HTMLDivElement | null>(null);
    const shotPopupRef = useRef<HTMLDivElement | null>(null);
    
   
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
        if (shotPopupRef.current && !shotPopupRef.current.contains(event.target as Node)) {
          setShotLinkPopup(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
      const closeAboutPopup = () => {
    setShowAboutPopup(false);
  };

  return (

    <>
     <nav className="w-full flex  justify-between md:mt-[3%] mt-[41px] mx-auto items-center relative max-sm:px-[2%]">
        <span className="flex items-center md:gap-4 max-[900px]:justify-between relative max-md:w-full">
     
     <div className=" flex items-center sm:gap-x-2">
      
<Link href={"/"}>
            <img 
              src='/new-logo.svg'
              alt="profile" 
              width={60} 
              className="cursor-pointer"
            />
          </Link>
          
        
<div className="flex items-center gap-x-2 px-3 py-2.5 border-[#D9D9D9] border rounded-[36.88px] h-fit max-sm:mr-1.5">
      <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-pulse" />
      <p className="md:text-xs font-medium text-[10px] max-sm:hidden">
      1 spot remaining
      </p>
    </div>



<Link href="/startproject">
  <div className="text-xs bg-[#000000] text-white flex items-center gap-2 px-3 py-2.5 rounded-[36.88px] cursor-pointer group">
    Start a project 
    <img 
      src="/arrow-left.svg" 
      className="transition-transform duration-300 group-hover:translate-x-2" 
      alt="Arrow"
    />
  </div>
</Link>


</div> 
        </span>

        <img src="/Hamburger Menu.svg" alt="hamburger" className="min-[900px]:hidden cursor-pointer"
         onClick={() => setShowMobileMenu(true)} />

        <div className="min-[900px]:flex gap-x-6 hidden items-center">

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
          
            {showLinkPopup && (
              <div className="absolute top-7 right-0 rounded-md transition-opacity duration-300 ease-in-out opacity-100  max-w-[350px] bg-white flex flex-col space-y-3 mt-4">
                <a href="mailto:function@functionstudio.online " className="bg-[#F5F5F5]  inline-flex py-[10px] pr-12 pl-4 items-center rounded-lg cursor-pointer hover:text-gray-500 "> 
                  Email
                </a>
            
                  <a href="https://x.com/functionstudioo" className="inline-flex items-center bg-[#F5F5F5] py-[10px] pr-12 pl-4 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500 ">
                    Twitter
                  </a>
                
              </div>
            )}

          </div>
          

          <div ref={aboutPopupRef}  >
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
              <div className="absolute top-7 right-0 rounded-md transition-opacity duration-300 ease-in-out opacity-100 max-w-[350px] bg-white mt-8 z-50">
                {/* <Link href="/functionstudio" className="bg-[#F5F5F5]  flex py-[10px] px-4 items-center rounded-lg cursor-pointer hover:text-gray-500"> <img src="/new-logo.svg" width={34} className="mr-[10px]"/>Function Studio
                </Link> */}
                <div className="mt-3 space-y-3">
                  <Link href="/ore" className="flex items-center bg-[#F5F5F5]  py-[10px] px-4 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500"
                     onClick={closeAboutPopup}>
                    <img src="/ore.svg" alt="Isaac Oreoluwa" width={34} className="mr-[10px]" />
                    <span>Isaac Oreoluwa - Designer</span>
                  </Link>
                  <Link href="/akeye" className="flex items-center bg-[#F5F5F5] py-[10px] px-4 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500"
                     onClick={closeAboutPopup}>
                    <img src="/akeye.svg" alt="Akeye Saheed" width={34} className="mr-[10px]" />
                    <span>Akeye Saheed - Developer</span>
                  </Link>
                </div>
              </div>
            )}

          </div>

{/* 
          </div> */}
          <img src="/Help.svg" alt="rocket" className="rotate-animation" />
     
        </div>
      </nav>

  

{showMobileMenu && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto p-4 min-[900px]:hidden pt-[41px]">
          




          <div className="flex items-center justify-end mb-16">
       


            <button 
              onClick={() => setShowMobileMenu(false)}
              
            >
              <img src="/Close Circle.svg" alt="Close" className="w-6 h-6" />
            </button>
          </div>
         
          
          <div className="space-y-8">
            {/* Links Section */}
            <div>
              <h2 className="text-4xl text-[#00000066] mb-4 merriweather font-medium">Links</h2>
              <ul className="flex items-center  gap-4">
                <li className=" py-2">
                  <a href="https://twitter.com/functionstudioo" className="text-4xl underline font-medium">Twitter</a>
                </li>
                <li className="py-2">
                  <a href="https://linkedin.com" className="text-4xl underline font-medium">LinkedIn</a>
                </li>
              </ul>
            </div>
            
            {/* About Section */}
            <div>
              <h2 className="text-4xl text-[#00000066] mb-4 merriweather font-medium">About</h2>
              {/* <Link href="/functionstudio" className="text-4xl font-medium underline" 
               onClick={closeMobileMenu} >Function studioo</Link> */}
              <ul className="flex flex-col mt-6 gap-6">
            
                <li className="">
                  <Link href="/ore" className="text-4xl flex items-center gap-2 underline font-medium" 
                   onClick={closeMobileMenu} >
                  <img src="/ore.svg" alt="Isaac Oreoluwa" width={34} className="mr-[10px]" />
                    Isaac Oreoluwa - Designer
                  </Link>
                </li>
                <li className="">
                  <Link href="/akeye" className="text-4xl flex items-center gap-2 underline font-medium" 
                   onClick={closeMobileMenu} >
                    Akeye Saheed
                   
                    -Developer

                     <img src="/akeye.svg" alt="Akeye Saheed" width={34} className="" /> 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

     
    </>
   
  )
}


