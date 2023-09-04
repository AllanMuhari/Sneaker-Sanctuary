/** @format */

import React from "react";
import { heroapi } from "../../data/data";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <div className='flex h-auto w-auto flex-col '>
      <div className='bg-theme clip-path h-[85vh] lg:-[75vh] md:-[65vh] sm:-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
      <div className=' opacity-100 z-20 grid items-center justify-items-center nike-container'>
        <div className='grid items-center  justify-between mt-28 md:mt-24 '>
          <h1 className='text-6xl lg:text-8xl md:text-7xl xsm:2xl font-extrabold'>
            {title}
          </h1>
          <h1 className='text-6xl lg:text-8xl md:text-7xl xsm:2xl '>
            {subtitle}
          </h1>
          <button>{btntext}</button>
          <img src={img} alt='' className=''></img>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
