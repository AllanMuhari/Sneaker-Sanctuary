/** @format */

import React from "react";

const Clips = ({ clip, imgsrc }) => {
  return (
    <div className='relative h-28 w-32 cursor-pointer'>
      <img
        src={imgsrc}
        alt=''
        className='inset-0 flex h-full w-full object-cover top-0 left-0 right-0 rounded-xl opacity-100 z-10'
      ></img>
      <video autoPlay={true}
        loop={true}
        muted={true}
        className='absolute inset-0 h-full w-full object-cover top-0 left-0 right-0 rounded-xl opacity-0 z-20'
      
      >
        <source src={clip} type='video/mp4' />
      </video>
    </div>
  );
};

export default Clips;
