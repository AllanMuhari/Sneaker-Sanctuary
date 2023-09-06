/** @format */

import React from "react";

const Title = ({ title }) => {
  return (
    <div className='grid m-auto items-center '>
      <h1 className='text-3xl lg:text-5xl md:text-4xl font-bold text-slate-900 drop-shadow-lg mt-[4rem]'>
        {title}
      </h1>
    </div>
  );
};

export default Title;
