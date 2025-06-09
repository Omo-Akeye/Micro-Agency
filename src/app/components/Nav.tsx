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
                <Link href="/functionstudio" className="bg-[#F5F5F5]  flex py-[10px] px-4 items-center rounded-lg cursor-pointer hover:text-gray-500"> <img src="/new-logo.svg" width={34} className="mr-[10px]"/>Function Studio</Link>
                <div className="mt-3 space-y-3">
                  <Link href="/ore" className="flex items-center bg-[#F5F5F5]  py-[10px] px-4 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/ore.svg" alt="Isaac Oreoluwa" width={34} className="mr-[10px]" />
                    <span>Isaac Oreoluwa - Designer</span>
                  </Link>
                  <Link href="/akeye" className="flex items-center bg-[#F5F5F5] py-[10px] px-4 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
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
              <Link href="/functionstudio" className="text-4xl font-medium underline" 
               onClick={closeMobileMenu} >Function studioo</Link>
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










// import Link from 'next/link';
// import Image from 'next/image'; // Import the Image component
// import React from 'react';

// type HoverCardProps = {
//   title: string;
//   category: string;
//   year?: string;
//   image1: string;
//   image2: string;
//   hoverImage?: string;
//   bgColor?: string;
//   textColor?: string;
//   isComingSoon?: boolean;
//   link?: string; 
// };

// const HoverCard: React.FC<HoverCardProps> = ({ 
//   title, 
//   category, 
//   year, 
//   image1, 
//   image2, 
//   hoverImage,
//   bgColor,
//   textColor,
//   isComingSoon = false,
//   link
// }) => {
//   return (
//     <div className={`group relative ${bgColor} rounded-[10px] p-6 overflow-hidden cursor-pointer sm:h-[380px] h-[320px] max-w-[747px] w-full `}>
//       {/* Header */}
//       <div className={`flex justify-between items-start mb-6 relative z-10 ${textColor}`}>
//         <div>
//           <h3 className="sm:text-2xl text-xl font-medium mb-1">{title}</h3>
//           <p className="text-sm">{category}</p>
//         </div>
//         {year && (
//           <span className="text-sm">{year}</span>
//         )}
//       </div>

//       {/* Arrow Icon - appears on hover */}
//       <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 transform translate-x-2 group-hover:translate-x-0">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`${textColor?.includes('text-[#FFFFFF]') ? 'text-white' : 'text-gray-600'}`}>
//           <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </div>

//       {/* Default Images Container */}
//       <div className="absolute -bottom-[25%] left-6 right-6 h-[350px] w-full transition-all duration-700 ease-out group-hover:opacity-0 group-hover:transform group-hover:scale-95">
//         <div className="absolute overflow-hidden transition-transform duration-500 bottom-[22%] max-w-[270px] sm:max-w-[392px] w-full z-50">
//           <Image 
//             src={image1} 
//             alt={`${title} image 1`}
//             width={392} // Set appropriate width
//             height={350} // Set appropriate height
//             className="w-full h-full object-cover transition-transform duration-500"
//             priority={false} // Set to true for above-the-fold images
//           />
//         </div>

//         <div className="absolute overflow-hidden max-w-[270px] sm:max-w-[392px] w-full right-8 z-10 max-sm:top-[22%]">
//           <Image 
//             src={image2} 
//             alt={`${title} image 2`}
//             width={392} // Set appropriate width
//             height={350} // Set appropriate height
//             className="w-full h-full object-cover transition-transform duration-500"
//             priority={false} // Set to true for above-the-fold images
//           />
//         </div>
//       </div>

//       {/* Hover Content */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform scale-110 group-hover:scale-100">
//         {isComingSoon ? (
//           <div className="text-center z-20">
//             <h2 className={`text-4xl sm:text-8xl font-bold mb-4 text-white transition-all duration-500 transform translate-y-8 group-hover:translate-y-0`}>
//               coming soon
//             </h2>
//             <p className={`text-2xl text-white opacity-60 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0`}>
//               <Image 
//                 src="/dev at work.png" 
//                 alt="dev at work" 
//                 width={392} // Adjust based on your needs
//                 height={350} // Adjust based on your needs
//                 className="w-[80%] sm:w-full h-full object-contain max-sm:mx-auto"
//                 priority={false}
//               />
//             </p>
//           </div>
//         ) : (
//           hoverImage && (
//             <div className="max-w-[392px] h-full flex items-center mt-10 justify-center">
//               <Image 
//                 src={hoverImage} 
//                 alt={`${title} hover image`}
//                 width={392} // Adjust based on your needs
//                 height={350} // Adjust based on your needs
//                 className="max-w-[80%] sm:max-w-full max-h-full object-contain transition-all duration-700 ease-out transform scale-90 group-hover:scale-100 opacity-90 group-hover:opacity-100"
//                 priority={false}
//               />
//             </div>
//           )
//         )}
//       </div>

//       {/* Overlay for smooth transition */}
//       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-500 pointer-events-none"></div>
//     </div>
//   );
// };

// // Rest of the CardGrid component remains unchanged
// const CardGrid = () => {
//   const cards = [
//     {
//       title: "Pay4me",
//       category: "Financial technology",
//       year: "2025",
//       bgColor: "bg-gradient-to-b from-[#AFE274] to-[#D5FFA4]", 
//       image1: '/pay4me1.svg',
//       textColor: "text-[#00000099]",
//       image2: '/pay4me2.svg',
//       hoverImage: '/pay4me-hover.svg', 
//       isComingSoon: false,
//       link: "/pay4me"
//     },
//     {
//       title: "Bime",
//       category: "Financial technology", 
//       year: "2024",
//       bgColor: "bg-gradient-to-b from-[#1DA1F2] to-[#88C9F2]",
//       textColor: "text-[#00000099]",
//       image1: "/bime1.svg",
//       image2: "/bime2.svg",
//       hoverImage: '/bime-hover.svg', 
//       isComingSoon: false,
//       link: "/bime"
//     },
//     {
//       title: "Votdine",
//       category: "Blockchain technology",
//       year: "2025", 
//       bgColor: "bg-gradient-to-b from-[#CE3679] to-[#881045]",
//       image1: "/votdine1.svg",
//       textColor: "text-[#FFFFFF]",
//       image2: "/votdine2.svg",
//       isComingSoon: true,
//       link: ""
//     }
//   ];

//   return (
//     <div className='flex flex-col max-w-[747px] w-full'>
//       <div className='flex justify-between items-center text-[#000000A3] mb-10'>
//         <h2>Featured Projects</h2>
//         <p>[03]</p>
//       </div>
//       <div className="flex flex-col gap-8">
//         {cards.map((card, index) => (
//           card.link ? (
//             <Link key={index} href={card.link}>
//               <HoverCard
//                 title={card.title}
//                 category={card.category}
//                 year={card.year}
//                 bgColor={card.bgColor}
//                 image1={card.image1}
//                 image2={card.image2}
//                 hoverImage={card.hoverImage}
//                 textColor={card.textColor}  
//                 isComingSoon={card.isComingSoon}
//                 link={card.link}
//               />
//             </Link>
//           ) : (
//             <HoverCard
//               key={index}
//               title={card.title}
//               category={card.category}
//               year={card.year}
//               bgColor={card.bgColor}
//               image1={card.image1}
//               image2={card.image2}
//               hoverImage={card.hoverImage}
//               textColor={card.textColor}  
//               isComingSoon={card.isComingSoon}
//               link={card.link}
//             />
//           )
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardGrid;
