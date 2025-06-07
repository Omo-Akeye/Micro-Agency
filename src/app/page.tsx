import CardGrid from "./components/FeaturedCards";
import ProjectSlider from "./components/ProjectSlider";


  

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

      <section className="mt-12 flex flex-col gap-8 mb-10 max-sm:overflow-hidden  max-sm:px-7">
      
          < CardGrid/>
        {/* <ProjectSlider /> */}

       
      </section>
    </div>
  );
}