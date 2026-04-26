"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const OreAvatarPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState<{ bottom: number; left: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPos({
        bottom: window.innerHeight - rect.bottom + 60,
        left: rect.left - 10,
      });
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => setIsOpen(false);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        aria-label="Preview Oreoluwa portrait"
        aria-expanded={isOpen}
        className="focus:outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/ore.png"
          alt="Oreoluwa portrait"
          width={51}
          height={49}
          className={`h-[49px] w-[51.49px] rounded-full object-cover transition duration-300 ${
            isOpen ? "blur-[1.5px] brightness-75" : ""
          }`}
        />
      </button>

     
      {pos && (
        <div
          className={`fixed z-[9999] pointer-events-none transition-all duration-300 origin-bottom ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ bottom: pos.bottom, left: pos.left, width: 356, height: 339 }}
        >
          <Image
            src="/ore-big.png"
            alt="Oreoluwa portrait enlarged"
            fill
            className="object-cover"
            sizes="356px"
            priority
          />
        </div>
      )}
    </>
  );
};

export default OreAvatarPreview;