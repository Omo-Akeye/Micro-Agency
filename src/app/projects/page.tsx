import CardGrid from '../components/FeaturedCards';
import { IoIosArrowForward } from 'react-icons/io';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

const page = () => {
  return (
    <div className="orbit-regular mt-10">
      <section className="sm:mt-12 mt-8 flex flex-col gap-8 mb-10 max-sm:overflow-hidden max-sm:px-7">
        <CardGrid />
      </section>
            <Link href={ROUTES.START_PROJECT} className="flex justify-between items-center max-sm:px-7 max-sm:mt-4 group py-4"> 
        <h2 className='text-[#000000A3] text-4xl max-sm:text-2xl leading-[91.21px] font-medium tracking-[4%] transition-colors duration-300 group-hover:text-black'>
          Start a 
        </h2> 
      
        <div className="flex items-center gap-2"> 
          <h2 className="text-[#000000A3] text-4xl max-sm:text-2xl leading-[91.21px] font-medium tracking-[4%] transition-colors duration-300 group-hover:text-black">
            project
          </h2>
         
          <IoIosArrowForward 
            className='text-black mt-[2px] transition-all duration-300 transform group-hover:translate-x-4 group-hover:scale-110' 
            size={36} 
          /> 
        </div>
      </Link>
    </div>
  );
};

export default page;
