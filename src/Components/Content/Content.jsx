/** @format */

import React from "react";

const Content = ({
  ifExists,
  endpoint: { title, heading, text, img, btn, url },
}) => {
  return (
    <div className='flex flex-col items-center justify-between lg:justify-center lg:flex-row nike-container'>
      <div className='grid items-center w-full max-w-lg lg:max-w-none md:text-center lg:justify-items-center'>
        <h1 className='text-3xl font-bold lg:text-4xl text-gradient'>
          {heading}
        </h1>
        <h1 className='text-2xl font-bold lg:text-5xl md:text-4xl text-slate-900 filter drop-shadow-lg'>
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
          className={`w-auto object-fill transitions-theme ${
            ifExists
              ? "h-44 lg:h-56 md:h-52 xsm:h-36 rotate-6 hover:-rotate-12"
              : "h-48 lg:h-64 md:h-60  xsm:h-40 rotate-[20deg] hover:rotate-12"
          }`}
        />
      </div>
    </div>
  );
};

export default Content;
