import React from 'react';
import CardGrid from '../components/FeaturedCards';

const page = () => {
  return (
    <div className="orbit-regular mt-10">
      <section className="sm:mt-12 mt-8 flex flex-col gap-8 mb-10 max-sm:overflow-hidden max-sm:px-7">
        <CardGrid />
      </section>
    </div>
  );
};

export default page;
