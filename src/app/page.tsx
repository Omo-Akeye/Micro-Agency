"use client"
import { useState } from "react";
import ProjectSlider from "./components/ProjectSlider";



export default function Home() {
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto  orbit-regular mb-32">
      <nav className="w-[90%] flex max-md:flex-col justify-between md:mt-[3%] mt-[41px] mx-auto items-center relative">
        <span className="flex items-center gap-4 relative">
          <img src="/Group 2.svg" alt="profile" width={60} className="cursor-pointer"/>
          <div className="flex items-center gap-x-2 px-3 py-2 border-[#D9D9D9] border-2 rounded-[36.88px]">
            <img src="/Ellipse 4.svg" alt="active" width={14} />
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
                  <a href="https://www.behance.net/isaacoreoluwa" className="flex items-center bg-[#F5F5F5]  py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/ore.svg" alt="Isaac Oreoluwa" width={34} className="mr-[10px]" />
                    <span>Isaac Oreoluwa - Designer</span>
                  </a>
                  <a href="https://akeye-portfolio.netlify.app/" className="flex items-center bg-[#F5F5F5] py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/akeye.svg" alt="Akeye Saheed" width={34} className="mr-[10px]" />
                    <span>Akeye Saheed - Developer</span>
                  </a>
                </div>
              </div>
            )}

          </div>
        
          <img src="/Rocket.svg" alt="rocket" />
        </div>
      </nav>

      <section className="flex md:items-center md:justify-center md:w-[80%] w-[90%] xl:w-[50%] md:mt-24 mx-auto mt-[68px] max-md:flex-col ">
        <div className="flex gap-x-3"><img src="/Layers.svg" alt="design" />Design <a href="https://www.behance.net/isaacoreoluwa" className="text-[#000000] text-opacity-60 underline">Isaac Oreoluwa</a></div>
        <img src="/dot.png" alt="dot" className="mx-6 max-md:hidden" />
        <div className="flex gap-x-3 max-md:mt-2"> <img src="/Code 2.svg" alt="code"  />Development <a href="https://akeye-portfolio.netlify.app/" className="text-[#000000] text-opacity-60 underline">Akeye Saheed</a></div>
      </section>


      <div className="flex gap-x-6 md:hidden mt-10 w-[90%] mx-auto relative ">
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
       
            {showAboutPopup && (
              <div className="absolute top-0 left-2 rounded-md transition-opacity duration-300 ease-in-out opacity-100 mt-8 max-w-[350px] z-20 sm:bg-white">
                <div className="bg-[#F5F5F5]  flex py-[10px] px-6 items-center rounded-lg cursor-pointer hover:text-gray-500"> <img src="/abstract.svg" width={34} className="mr-[10px]"/>Our micro team</div>
                <div className="mt-3 space-y-3">
                  <a href="https://www.behance.net/isaacoreoluwa" className="flex items-center bg-[#F5F5F5]  py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/ore.svg" alt="Isaac Oreoluwa" width={34} className="mr-[10px]" />
                    <span>Isaac Oreoluwa - Designer</span>
                  </a>
                  <a href="https://akeye-portfolio.netlify.app/" className="flex items-center bg-[#F5F5F5] py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/akeye.svg" alt="Akeye Saheed" width={34} className="mr-[10px]" />
                    <span>Akeye Saheed - Developer</span>
                  </a>
                </div>
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
