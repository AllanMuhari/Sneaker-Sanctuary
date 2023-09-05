/** @format */

import React from "react";

const Clips = ({ clip, imgsrc }) => {
  return (
    <div className='relative h-14 lg:h-24 md:h-20 w-16 cursor-pointer transition-all duration-300 lg:w-28 md:w-24'>
      <img
        src={imgsrc}
        alt=''
        className='inset-0 flex h-full w-full object-cover top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
      ></img>
      <div className="grid  items-center gap-5 md:gap-3 to">

      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className='absolute top-0 left-0 right-0 h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl lg:flex-row'
      >
        <source type='video/mp4' src={clip} />
      </video>
    </div>
  );
};

export default Clips;
