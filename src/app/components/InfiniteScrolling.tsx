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
  
import Image from 'next/image';
import React from 'react';

interface ImageItem {
  id: any;
  image: string;
}

interface InfiniteScrollingProps {
  images: ImageItem[];
  speed?: number;
}

export const InfiniteScrolling = ({ images, speed = 5000 }: InfiniteScrollingProps) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div className="image flex-shrink-0 rounded-4xl " key={id}>
              <Image
                src={image}
                alt={`Image ${id}`}
                width={468}
                height={311}
                className="object-cover  h-full"
                quality={80}
                priority={false}
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div className="image flex-shrink-0 rounded-4xl " key={id}>
              <Image
                src={image}
                alt={`Image ${id}`}
                width={468}
                height={311}
                className="object-cover  h-full "
                quality={80}
                priority={false}
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div className="image flex-shrink-0 rounded-4xl " key={id}>
              <Image
                src={image}
                alt={`Image ${id}`}
                width={468}
                height={311}
                className=" object-cover  h-full "
                quality={80}
                priority={false}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};


// import React from 'react';
// import Image from 'next/image';

interface ImageItem {
  id: any;
  image: string;
}

interface InfiniteScrollingRightProps {
  images: ImageItem[];
  speed?: number;
}

export const InfiniteScrollingRight = ({ 
  images, 
  speed = 5000 
}: InfiniteScrollingRightProps) => {
  return (
    <div className="inner">
      <div className="wrapper-right">
        {/* First set */}
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div className="image " key={`right-first-${id}`}>
              <Image
                src={image}
                alt={`Image ${id}`}
                width={468}
                height={311}
                className=" object-cover  h-full "
                quality={80}
                priority={false}
              />
            </div>
          ))}
        </section>
        
        {/* Second set (duplicate for seamless looping) */}
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map(({ id, image }) => (
            <div className="image " key={`right-second-${id}`}>
              <Image
                src={image}
                alt={`Image ${id}`}
                width={468}
                height={311}
                className="rounded-2xl object-cover  h-full"
                quality={80}
                priority={false}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};




  const InfiniteScrollImages = () => {
    const images = [
        "/scroll-image1.svg","/scroll-image2.svg","/scroll-image4.svg","/scroll-image5.svg","/scroll-image6.svg","/scroll-image7.svg","/scroll-image8.svg","/scroll-image10.svg"
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));
    return (
      <div className=" w-full">
     <InfiniteScrolling images={images} speed={50000} />
      </div>
    );
  };

  export default InfiniteScrollImages;



  