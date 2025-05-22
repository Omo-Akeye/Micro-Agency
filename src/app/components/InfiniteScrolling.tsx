// interface Image {
//     id: any;
//     image: string;
//   }
  
//   interface InfiniteScrollingProps {
//     images: Image[];
//     speed?: number;
//   }
  
// const InfiniteScrolling = ({ images, speed = 5000 }:InfiniteScrollingProps) => {
//     return (
//       <div className="inner ">
//         <div className="wrapper">
//           <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
//             {images.map(({ id, image }) => (
//               <div className="image" key={id}>
//                 <img src={image} alt={id} className="rounded-[10px]" />
//               </div>
//             ))}
//           </section>
//           <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
//             {images.map(({ id, image }) => (
//               <div className="image" key={id}>
//                 <img src={image} alt={id} className="rounded-[10px]" />
//               </div>
//             ))}
//           </section>
//           <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
//             {images.map(({ id, image }) => (
//               <div className="image" key={id}>
//                 <img src={image} alt={id} className="rounded-[10px]" />
//               </div>
//             ))}
//           </section>
//         </div>
//       </div>
//     );
//   };
  
// import Image from 'next/image';
// import React from 'react';

// interface ImageItem {
//   id: any;
//   image: string;
// }

// interface InfiniteScrollingProps {
//   images: ImageItem[];
//   speed?: number;
// }

// export const InfiniteScrolling = ({ images, speed = 5000 }: InfiniteScrollingProps) => {
//   return (
//     <div className="inner">
//       <div className="wrapper">
//         <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
//           {images.map(({ id, image }) => (
//             <div className="image flex-shrink-0" key={id}>
//               <img
//                 // src={image}
//                 src={`${image.replace(/\?.*$/, '')}?tr=w-468,f-auto`}
//                 alt={`Image ${id}`}
//                 width={468}
//                 height={311}
//                 className="object-cover  h-full"
//                  loading="lazy"
//                 // quality={80}
//                 // priority={false}
//               />
//             </div>
//           ))}
//         </section>
//         <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
//           {images.map(({ id, image }) => (
//             <div className="image flex-shrink-0" key={id}>
//               <img
//                 // src={image}
//                 src={`${image.replace(/\?.*$/, '')}?tr=w-468,f-auto`}
//                 alt={`Image ${id}`}
//                 width={468}
//                 height={311}
//                 className="object-cover  h-full"
//                  loading="lazy"
//                 // quality={80}
//                 // priority={false}
//               />
//             </div>
//           ))}
//         </section>
//         <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
//           {images.map(({ id, image }) => (
//             <div className="image flex-shrink-0" key={id}>
//               <img
//                 // src={image}
//                 src={`${image.replace(/\?.*$/, '')}?tr=w-468,f-auto`}
//                 alt={`Image ${id}`}
//                 width={468}
//                 height={311}
//                 className=" object-cover  h-full"
//                  loading="lazy"
//                 // quality={80}
//                 // priority={false}
//               />
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };


// // import React from 'react';
// // import Image from 'next/image';

// interface ImageItem {
//   id: any;
//   image: string;
// }

// interface InfiniteScrollingRightProps {
//   images: ImageItem[];
//   speed?: number;
// }

// export const InfiniteScrollingRight = ({ 
//   images, 
//   speed = 5000 
// }: InfiniteScrollingRightProps) => {
//   return (
//     <div className="inner">
//       <div className="wrapper-right">
//         {/* First set */}
//         <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
//           {images.map(({ id, image }) => (
//             <div className="image " key={`right-first-${id}`}>
//               <img
//                 // src={image}
//                 src={`${image.replace(/\?.*$/, '')}?tr=w-468,f-auto`}
//                 alt={`Image ${id}`}
//                 width={468}
//                 height={311}
//                 className=" object-cover  h-full "
//                  loading="lazy"
//                 // quality={80}
//                 // priority={false}
//               />
//             </div>
//           ))}
//         </section>
        
//         {/* Second set (duplicate for seamless looping) */}
//         <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
//           {images.map(({ id, image }) => (
//             <div className="image " key={`right-second-${id}`}>
//               <img
//                 // src={image}
//                 src={`${image.replace(/\?.*$/, '')}?tr=w-468,f-auto`}
//                 alt={`Image ${id}`}
//                 width={468}
//                 height={311}
//                 // className="rounded-2xl object-cover  h-full"
//                 className=" object-cover  h-full"
//                  loading="lazy"
//                 // quality={80}
//                 // priority={false}
//               />
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };


"use client"

import React, { useEffect, useRef, useState } from 'react';

interface ImageItem {
  id: any;
  image: string;
}

interface InfiniteScrollingProps {
  images: ImageItem[];
  speed?: number;
  direction?: 'left' | 'right';
}

/**
 * Optimized Infinite Scrolling Component
 * - Uses IntersectionObserver for lazy loading
 * - Implements proper image optimization techniques
 * - Reduces DOM elements by using fewer sections
 */
export const OptimizedScroller = ({ 
  images, 
  speed = 50000,
  direction = 'left'
}: InfiniteScrollingProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Only start animation when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Transform ImageKit URLs for better loading
  const optimizeImageUrl = (url: string) => {
    // Remove any existing query parameters
    const baseUrl = url.replace(/\?.*$/, '');
    
    // Add optimized transformation parameters:
    // - w-468: width constraint
    // - q-75: quality at 75% (good balance)
    // - f-auto: format auto for webp when supported
    // - pr-true: progressive loading
    return `${baseUrl}?tr=w-468,q-75,f-auto,pr-true`;
  };

  const wrapperClass = direction === 'right' ? 'wrapper-right' : 'wrapper';
  const animationClass = isVisible ? 'animation-running' : 'animation-paused';

  return (
    <div className="inner" ref={containerRef}>
      <div className={`${wrapperClass}`} style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>
        {/* Use only two sections instead of three */}
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div className="image flex-shrink-0" key={id}>
              <img
                src={optimizeImageUrl(image)}
                alt={`Image ${id}`}
                width={468}
                height={311}
                className="object-cover h-full rounded-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div className="image flex-shrink-0" key={`dup-${id}`}>
              <img
                src={optimizeImageUrl(image)}
                alt={`Image ${id}`}
                width={468}
                height={311}
                className="object-cover h-full rounded-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

// Legacy components with the same API for backward compatibility
export const InfiniteScrolling = (props: InfiniteScrollingProps) => {
  return <OptimizedScroller {...props} direction="left" />;
};

export const InfiniteScrollingRight = (props: InfiniteScrollingProps) => {
  return <OptimizedScroller {...props} direction="right" />;
};

export default  OptimizedScroller;





  // const InfiniteScrollImages = () => {
  //   const images = [
  //       "https://ik.imagekit.io/9t24q4vku9/scroll-image1.svg?updatedAt=1747830834689","https://ik.imagekit.io/9t24q4vku9/scroll-image2.svg?updatedAt=1747830767470","https://ik.imagekit.io/9t24q4vku9/scroll-image4.svg?updatedAt=1747830527959","https://ik.imagekit.io/9t24q4vku9/scroll-image5.svg?updatedAt=1747829072341",
  //       "https://ik.imagekit.io/9t24q4vku9/scroll-image6.svg?updatedAt=1747830718758","https://ik.imagekit.io/9t24q4vku9/scroll-image7.svg?updatedAt=1747830775004","https://ik.imagekit.io/9t24q4vku9/scroll-image8.svg?updatedAt=1747830632054","https://ik.imagekit.io/9t24q4vku9/scroll-image10.svg?updatedAt=1747830498402"
  //     ].map((image) => ({
  //       id: crypto.randomUUID(),
  //       image
  //     }));
  //   return (
  //     <div className=" w-full">
  //    {/* <InfiniteScrolling images={images} speed={50000}  /> */}
  //    <OptimizedScroller images={images} speed={50000} direction="left" />
  //     </div>
  //   );
  // };

  // export  InfiniteScrollImages;



  