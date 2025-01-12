"use client"
import { useEffect, useRef, useState } from "react";
import ProjectSlider from "./components/ProjectSlider";
import Link from "next/link";



export default function Home() {
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showLinkPopup, setShowLinkPopup] = useState(false);
  const aboutPopupRef = useRef<HTMLDivElement | null>(null);
  const linkPopupRef = useRef<HTMLDivElement | null>(null);
  const [shotLinkPopup, setShotLinkPopup] = useState(false);
  const shotPopupRef = useRef<HTMLDivElement | null>(null);
  


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
    <div className="max-w-[1440px] mx-auto  orbit-regular mb-32">
    

        <main className="w-[90%] mx-auto sm:text-center md:mt-28 mt-14 z-0 md:space-y-[-4px]">
        <h1 className="text-[#000000]/[0.4] xl:text-[80px] xl:leading-[88px]  min-[860px]:text-6xl text-5xl tracking-tight">
          From Sketch to Scale:
          </h1>
        <h1 className="xl:text-[80px] xl:leading-[88px] min-[860px]:text-6xl text-5xl tracking-tight">   
         We Design and Develop
         </h1>
        </main>
        
      <section className="flex md:items-center md:justify-center md:w-[80%] w-[90%] xl:w-[50%] md:mt-24 mx-auto mt-12 max-md:flex-col ">
        <div className="flex gap-x-3"><img src="/Layers.svg" alt="design" />Design <a href="https://www.behance.net/isaacoreoluwa" className="text-[#000000] text-opacity-60 underline">Isaac Oreoluwa</a></div>
        <img src="/dot.png" alt="dot" className="mx-6 max-md:hidden" />
        <div className="flex gap-x-3 max-md:mt-2"> <img src="/Code 2.svg" alt="code"  />Development <a href="https://akeye-portfolio.netlify.app/" className="text-[#000000] text-opacity-60 underline">Akeye Saheed</a></div>
      </section>


      <div className="flex gap-x-6 md:hidden mt-10 w-[90%] mx-auto relative">
          <div ref={linkPopupRef} >
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
              <div className="absolute top-8 left-0 rounded-md transition-opacity duration-300 ease-in-out opacity-100 mt-2 max-w-[350px] bg-white flex flex-col space-y-3 z-20">
                <a href="mailto:functionstudio247@gmail.com " className="bg-[#F5F5F5]  inline-flex py-[10px] pr-12 pl-4 items-center rounded-lg cursor-pointer hover:text-gray-500 "> 
                  Email
                </a>
                  <a href="https://x.com/functionstudioo" className="inline-flex items-center bg-[#F5F5F5] py-[10px] pr-12 pl-4 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500 ">
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
       
            {showAboutPopup && (
              <div className="absolute top-0 left-2 rounded-md transition-opacity duration-300 ease-in-out opacity-100 mt-8 max-w-[350px] z-20 bg-white">
                <Link href="/functionstudio" className="bg-[#F5F5F5]  flex py-[10px] px-6 items-center rounded-lg cursor-pointer hover:text-gray-500"> <img src="/abstract.svg" width={34} className="mr-[10px]"/>Function Studio</Link>
                <div className="mt-3 space-y-3">
                  <Link href="/about/oreoluwa" className="flex items-center bg-[#F5F5F5]  py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
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

          <div ref={shotPopupRef} >
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
              <div className="absolute top-[4%] right-[10%] max-[440px]:right-0  transition-opacity duration-300 ease-in-out opacity-100 mt-8  max-[400px]:w-80 w-96 z-20 bg-[#F5F5F5] flex flex-col space-y-3 px-3 rounded-xl py-4">
                <h1 className="text-xl mb-4">Rad.ng</h1>
                <img src="https://s3-alpha-sig.figma.com/img/4007/0f9d/0c488b1a64e07be477b93322045d38d0?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sn-23Eg2kZiPz3QkxfntNOGHq9E7DLvIqr2NEw0Y25GJBpUn0llQIwUmZnMcoFRfQzPP6--AU2Fr0~VfLhJtPKboFvLX~~BiZyinRI7-du3oRyhNSKl~swDw8LR0Vpnv4SFF41WdolTvKVv22ryaMibYmnIRtuAg6aYrWO8jpTu4Z3VOnh0GMkBg3dK0X8sD1Ne44x8sWpzumo4omBIdDtys5hgWQXM2X0DmnizC5DXxFfOcrlPJEhG4OD6QY0NDhFjPbITbfQCPY-tLGBzKfJgVbtjoNv6QKOh16DIYcE8pFTSG~jeZyToorlOzuJh-IdCWHFqR7YiwymOyhtJyiQ__"
                className="w-full" alt="gif" />
              </div>
            )}

          </div>
        
        </div>

      <section className="md:mt-[70px] relative lg:w-[80%] mx-auto mt-14 w-[90%]">
        <h2 className="uppercase md:ml-5 mb-6">Featured Projects</h2>
      

     <ProjectSlider/>
      </section>
    </div>
  );
}
