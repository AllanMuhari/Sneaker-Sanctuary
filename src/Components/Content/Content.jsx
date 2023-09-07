/** @format */

import React from "react";

const Content = ({ endpoint: { title, heading, text, img, btn, url } }) => {
  return (
    <div
      className={`flex items-center justify-between flex-col lg:justify-center nike-container`}
    >
      <div className='grid items-center w-full max-w-lg lg:max-w-none md:text-center lg:justify-items-center'>
        <h1 className='text-4xl font-bold sm:text-3xl text-gradient'>
          {heading}
        </h1>
        <h1 className='text-5xl font-bold lg:text-4xl md:text-3xl sm:text-2xl text-slate-900 filter drop-shadow-lg'>
          {title}
        </h1>
        <p className='my-4 xl:text-sm text-slate-900'>{text}</p>
        <a
          href={url}
          className='flex items-center'
          target={"_blank"}
          role='button'
        >
          <button
            type='button'
            className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'
          >
            {btn}
          </button>
        </a>
      </div>
      <div className='relative flex items-center justify-center w-full max-w-xl lg:max-w-none'>
        <img
          src={img}
          alt={`img/${heading}`}
          className={`w-auto object-fill transitions-theme `}
        />
      </div>
    </div>
  );
};

export default Content;
