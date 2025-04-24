"use client"
import Link from 'next/link';
import React, { useState,useEffect, useRef } from 'react'
import { useParams } from 'next/navigation';
import ContactForm from './ContactForm';

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
  return (

    <>
     <nav className="w-full flex  justify-between md:mt-[3%] mt-[41px] mx-auto items-center relative max-sm:px-[2%]">
        <span className="flex items-center md:gap-4 max-[900px]:justify-between relative max-md:w-full">
     
     <div className=" flex items-center sm:gap-x-2">
      
<Link href={"/"}>
            <img 
              src={images.profile} 
              alt="profile" 
              width={60} 
              className="cursor-pointer"
            />
          </Link>
          
        
<div className="flex items-center gap-x-2 px-3 py-2 border-[#D9D9D9] border-2 rounded-[36.88px] h-fit max-sm:mr-1.5">
      <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-pulse" />
      <p className="md:text-xs font-medium text-[10px] max-sm:hidden">
      1 spot remaining
      </p>
    </div>

    <div className='text-xs bg-[#000000] text-white flex gap-2 px-3 py-2.5 rounded-[36.88px] cursor-pointer' onClick={()=>setShowChatPopup(!showChatPopup)}>
          Start a project <img src="/arrow-left.svg"/>
          </div>
      
     </div>

   

        

        </span>


        <img src="/Hamburger Menu.svg" alt="hamburger" className="min-[900px]:hidden" />







        <div className="min-[900px]:flex gap-x-6 hidden">

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
                <a href="mailto:functionstudio247@gmail.com " className="bg-[#F5F5F5]  inline-flex py-[10px] pr-12 pl-4 items-center rounded-lg cursor-pointer hover:text-gray-500 "> 
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
              <div className="absolute top-7 right-0 rounded-md transition-opacity duration-300 ease-in-out opacity-100 max-w-[350px] bg-white mt-8">
                <Link href="/functionstudio" className="bg-[#F5F5F5]  flex py-[10px] px-6 items-center rounded-lg cursor-pointer hover:text-gray-500"> <img src="/abstract.svg" width={34} className="mr-[10px]"/>Function Studio</Link>
                <div className="mt-3 space-y-3">
                  <Link href="/ore" className="flex items-center bg-[#F5F5F5]  py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
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

          <div ref={shotPopupRef} className='relative'>
          <div
              className="flex underline items-center gap-x-3 cursor-pointer"
              onClick={() => setShotLinkPopup(!shotLinkPopup )}
            >
              Shots{" "}
              <img
                src="/Vector (Stroke).svg"
                alt="arrow"
                className={`transition-transform duration-300 ${shotLinkPopup ? "rotate-180" : ""}`}
              />
            </div>
          
            {shotLinkPopup && (
              <div className="absolute top-7 right-0  transition-opacity duration-300 ease-in-out opacity-100 w-[517px] bg-[#F5F5F5] flex flex-col space-y-3 px-6 rounded-xl py-8 mt-4 z-50 mb-4">
                
                <h1 className="text-2xl mb-8">Rad.ng</h1>
                <img src="/gif.gif"
                className="w-full" alt="gif" />
                  <h1 className="text-2xl my-8">Pay4me</h1>
                  
                <img src="/pay4me.gif"
                className="w-full" alt="gif" />
              </div>
            )}

          </div>
          <img src="/Help.svg" alt="rocket" className="rotate-animation" />
     
        </div>
      </nav>

      {showChatPopup && (
 <div className="fixed bg-white w-full h-full inset-0 z-50 items-center flex justify-center">

 <main>
    


 {/* <section className="w-[890px] flex gap-16 merriweather px-10 py-[74px] border-2 border-[#D0D0D0] rounded-[15px] items-center justify-center">
 <div>
   <h1 className="text-[81.4px] leading-[73.7px] tracking-[-4%]">Let’s <br/>
   </h1>

   <span className="flex items-center">
 <h1 className="text-[81.4px] leading-[73.7px] tracking-[-4%]">
  chat
 </h1>
 <img src="/Arrow 1 (1).svg" alt="arrow" />
 </span>
 </div>
 <span className="w-[0.83px] bg-[#000000] h-[340px]"></span>
 <div >
 <h1 className="text-[81.4px] leading-[73.7px] tracking-[-4%]">
 Book a 
 </h1>
 <span className="flex items-center">
 <h1 className="text-[81.4px] leading-[73.7px] tracking-[-4%]">
  call
 </h1>
 <img src="/Arrow 1 (1).svg" alt="arrow" />
 </span>


 </div>
</section> */}
<ContactForm setShowChatPopup={setShowChatPopup} showChatPopup={showChatPopup}/>
 </main>

</div>
      )}

     
    </>
   
  )
}
