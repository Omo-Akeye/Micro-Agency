import OptimizedScroller from "./components/InfiniteScrolling";
import ProjectSlider from "./components/ProjectSlider";
// import InfiniteScrollImages from "./components/InfiniteScrolling";

  const InfiniteScrollImages = () => {
    const optimizeImageUrl = (url: string) => url.replace(/\?.*$/, '');
    const images = [
        "https://ik.imagekit.io/9t24q4vku9/scroll-image1.svg?updatedAt=1747830834689","https://ik.imagekit.io/9t24q4vku9/scroll-image2.svg?updatedAt=1747830767470","https://ik.imagekit.io/9t24q4vku9/scroll-image4.svg?updatedAt=1747830527959","https://ik.imagekit.io/9t24q4vku9/scroll-image5.svg?updatedAt=1747829072341",
        "https://ik.imagekit.io/9t24q4vku9/scroll-image6.svg?updatedAt=1747830718758","https://ik.imagekit.io/9t24q4vku9/scroll-image7.svg?updatedAt=1747830775004","https://ik.imagekit.io/9t24q4vku9/scroll-image8.svg?updatedAt=1747830632054","https://ik.imagekit.io/9t24q4vku9/scroll-image10.svg?updatedAt=1747830498402"
      ].map((image) => ({
        id: crypto.randomUUID(),
         image: optimizeImageUrl(image)
      }));
    return (
      <div className=" w-full">
     {/* <InfiniteScrolling images={images} speed={50000}  /> */}
     <OptimizedScroller images={images} speed={50000} direction="left" />
      </div>
    );
  };

  

export default function Home() {
  return (
    <div className="orbit-regular mt-10">
      <h1 className="font-semibold sm:text-[70.25px] sm:leading-[70px] sm:tracking-[-6%] text-[#000000] merriweather text-[40px] leading-[50.36px] tracking-[-8%]  max-sm:px-7">
        <span className="text-[#000000]/[0.4]">
          From Sketch <br className="sm:hidden"/> to <br className="max-sm:hidden"/>
          Scale: <br className="sm:hidden"/>
        </span>{" "}
        We Design <br className="max-sm:hidden" /> and  <br className="sm:hidden"/>Develop <br className="max-sm:hidden" /> really <br className="sm:hidden"/> good websites
      </h1>

      <section className="mt-12 flex flex-col gap-8 mb-10 max-sm:overflow-hidden">
        <InfiniteScrollImages />
      
        <ProjectSlider />

       
      </section>
    </div>
  );
}