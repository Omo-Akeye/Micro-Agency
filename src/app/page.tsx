"use client"
import { useState } from "react";
import ProjectSlider from "./components/ProjectSlider";



export default function Home() {
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto  orbit-regular mb-32">
      <nav className="w-[90%] flex justify-between mt-[3%] mx-auto items-center relative">
        <span className="flex items-center gap-4">
          <img src="/Group 2.svg" alt="profile" width={60} className="cursor-pointer"/>
          <div className="flex items-center gap-x-2 px-3 py-2 border-[#D9D9D9] border-2 rounded-[36.88px]">
            <img src="/Ellipse 4.svg" alt="active" width={14} />
            <p className="text-xs">
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
              <div className="rounded-md transition-opacity duration-300  bg-[#F5F5F5] flex items-center ml-2 py-2 px-1">
                Let’s Chat
              </div>
            )}
          </div>
        </span>







        <div className="flex gap-x-6">
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
                <ul className="mt-3 space-y-3">
                  <li className="flex items-center bg-[#F5F5F5]  py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/ore.svg" alt="Isaac Oreoluwa" width={34} className="mr-[10px]" />
                    <span>Isaac Oreoluwa - Designer</span>
                  </li>
                  <li className="flex items-center bg-[#F5F5F5] py-[10px] px-6 flex-shrink-0 rounded-lg cursor-pointer hover:text-gray-500">
                    <img src="/akeye.svg" alt="Akeye Saheed" width={34} className="mr-[10px]" />
                    <span>Akeye Saheed - Developer</span>
                  </li>
                </ul>
              </div>
            )}

          </div>
        
          <img src="/Rocket.svg" alt="rocket" />
        </div>
      </nav>

      <section className="flex items-center w-[40%] mx-auto gap-x-3 mt-24">
        <p>Design <span className="text-[#000000] text-opacity-60 underline">Isaac Oreoluwa</span></p>
        <span>.</span>
        <p>Development <span className="text-[#000000] text-opacity-60 underline">Akeye Saheed</span></p>
      </section>

      <section className="mt-[70px] relative w-[80%] mx-auto">
        <h2 className="uppercase ml-5 mb-6">Featured Projects</h2>
      

     <ProjectSlider/>
      </section>
    </div>
  );
}
