import Link from 'next/link';
import React from 'react';


type HoverCardProps = {
  title: string;
  category: string;
  year?: string;
  image1: string;
  image2: string;
  hoverImage?: string;
  bgColor?: string;
  textColor?: string;
  isComingSoon?: boolean;
  link?: string; 
};

const HoverCard: React.FC<HoverCardProps> = ({ 
  title, 
  category, 
  year, 
  image1, 
  image2, 
  hoverImage,
  bgColor,
  textColor,
  isComingSoon = false,
  link
}) => {
  return (
    <div className={`group relative ${bgColor} rounded-[10px] p-6 overflow-hidden cursor-pointer sm:h-[380px] h-[320px] max-w-[747px] w-full `}>
      {/* Header */}
      <div className={`flex justify-between items-start mb-6 relative z-10 ${textColor} transition-all duration-300`}>
        <div>
          <h3 className="sm:text-2xl text-xl font-medium mb-1 ">{title}</h3>
          <p className="text-sm  transition-all duration-300 ">{category}</p>
        </div>
        {year && (
          <span className="text-sm transition-all duration-300 group-hover:opacity-0">{year}</span>
        )}
      </div>

      {/* Arrow Icon - appears on hover */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 transform translate-x-2 group-hover:translate-x-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`${textColor?.includes('text-[#FFFFFF]') ? 'text-white' : 'text-gray-600'}`}>
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Default Images Container */}
      <div className="absolute -bottom-[25%] left-6 right-6 h-[350px] w-full transition-all duration-700 ease-out group-hover:opacity-0 group-hover:transform group-hover:scale-95">
        <div className="absolute overflow-hidden transition-transform duration-500 bottom-[22%] max-w-[270px] sm:max-w-[392px] w-full z-50">
          <img 
            src={image1} 
            alt={`${title} image 1`}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>

        <div className="absolute overflow-hidden max-w-[270px] sm:max-w-[392px] w-full right-8 z-10 max-sm:top-[22%]">
          <img 
            src={image2} 
            alt={`${title} image 2`}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform scale-110 group-hover:scale-100">
        {isComingSoon ? (
          <div className="text-center z-20">
            <h2 className={`text-4xl sm:text-8xl font-bold mb-4 text-white transition-all duration-500 transform translate-y-8 group-hover:translate-y-0`}>
              coming soon
            </h2>
            <p className={`text-2xl text-white opacity-60 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0`}>
             <img src="/dev at work.png" alt="dev at work" className='w-[80%] sm:w-full h-full object-contain max-sm:mx-auto' />
            </p>
          </div>
        ) : (
          hoverImage && (
            <div className="max-w-[392px] h-full flex items-center mt-10 justify-center">
              <img 
                src={hoverImage} 
                alt={`${title} hover image`}
                className=" max-w-[80%] sm:max-w-full max-h-full object-contain transition-all duration-700 ease-out transform scale-90 group-hover:scale-100 opacity-90 group-hover:opacity-100"
              />
            </div>
          )
        )}
      </div>

      {/* Overlay for smooth transition */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

const CardGrid = () => {

  const cards = [
    {
      title: "Pay4me",
      category: "Financial technology",
      year: "2025",
      bgColor: "bg-gradient-to-b from-[#AFE274] to-[#D5FFA4]", 
      image1: '/pay4me1.svg',
      textColor: "text-[#000000]",
      image2: '/pay4me2.svg',
      hoverImage: '/pay4me-hover.svg', 
      isComingSoon: false,
      link: "/pay4me"
    },
    {
      title: "Bime",
      category: "Financial technology", 
      year: "2024",
      bgColor: "bg-gradient-to-b from-[#1DA1F2] to-[#88C9F2]",
      textColor: "text-[#000000]",
      image1: "/bime1.svg",
      image2: "/bime2.svg",
      hoverImage: '/bime-hover.svg', 
      isComingSoon: false,
      link: "/bime"
    },
    {
      title: "Votdine",
      category: "Blockchain technology",
      year: "2025", 
      bgColor: "bg-gradient-to-b from-[#CE3679] to-[#881045]",
      image1: "/votdine1.svg",
      textColor: "text-[#FFFFFF]",
      image2: "/votdine2.svg",
      isComingSoon: true,
      link: ""
    }
  ];



  return (
   
    <div className='flex flex-col  max-w-[747px] w-full'>
      <div className='flex justify-between items-center text-[#000000A3] mb-10'>
        <h2 className=''>Featured Projects</h2>
      <p>[03]</p>
      </div>
        <div className="flex flex-col gap-8">
      
           {cards.map((card, index) => (
          card.link ? (
            <Link key={index} href={card.link}>
              <HoverCard
                title={card.title}
                category={card.category}
                year={card.year}
                bgColor={card.bgColor}
                image1={card.image1}
                image2={card.image2}
                hoverImage={card.hoverImage}
                textColor={card.textColor}  
                isComingSoon={card.isComingSoon}
                link={card.link}
              />
            </Link>
          ) : (
            <HoverCard
              key={index}
              title={card.title}
              category={card.category}
              year={card.year}
              bgColor={card.bgColor}
              image1={card.image1}
              image2={card.image2}
              hoverImage={card.hoverImage}
              textColor={card.textColor}  
              isComingSoon={card.isComingSoon}
              link={card.link}
            />
          )
        ))}
        </div>
    </div>
   
 
  );
};

export default CardGrid;


























// const HoverCard: React.FC<HoverCardProps> = ({ title, category, year, image1, image2, bgColor = "bg-blue-500" }) => {
//   return (
//     <div className={`relative ${bgColor} rounded-lg p-6 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 h-80`}>
//       {/* Header */}
//       <div className="flex justify-between items-start mb-6 relative z-10">
//         <div>
//           <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
//           <p className="text-white/80 text-sm">{category}</p>
//         </div>
//         {year && (
//           <span className="text-white/60 text-sm font-medium">{year}</span>
//         )}
//       </div>

//       {/* Arrow Icon - appears on hover */}
//       <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
//         {/* <ArrowRight className="w-6 h-6 text-white" /> */}
//       </div>

//       {/* Image Container */}
//       <div className="absolute bottom-6 left-6 right-6 h-48">
//         {/* First Image - slides out on hover */}
//         <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-500 group-hover:translate-x-12 group-hover:opacity-80">
//           <img 
//             src={image1} 
//             alt={`${title} image 1`}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Second Image - centers on hover */}
//         <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-lg transform translate-x-8 transition-transform duration-500 group-hover:translate-x-0">
//           <img 
//             src={image2} 
//             alt={`${title} image 2`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };