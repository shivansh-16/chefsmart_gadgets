import React from 'react';
import Hero_section from '@/components/sections/Hero_section';
import BestSellers from '@/components/sections/BestSellers';
import Features from '@/components/sections/Features';
import Newsletter from '@/components/sections/Newsletter';

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero_section />

      {/* Main Content Container */}
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-16">
        <div className="flex flex-col max-w-[1200px] flex-1 w-full gap-20">
          <BestSellers />
          <Features />
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

export default page