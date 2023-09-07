/** @format */

import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
const Items = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        ifExists ? "justify-items-start" : "justify-items-center"
      } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
    >
      <div className='grid items-start '>
        <h1 className='text-base font-medium text-slate-200 lg:text-xlg md:text-lg filter drop-shadow'>
          {title}
        </h1>
        <p className='text-base font-medium text-slate-200 drop-shadow md:text-lg'>
          {text}
        </p>
        <div className='flex items-center justify-between my-2 w-28'>
          <div className='flex items-center px-1 rounded bg-white/80 blur-effect-theme'>
            <h1 className='text-sm font-medium text-black'>${price}</h1>
          </div>
          <div className='flex items-center gap-1'>
            <StarIcon className='w-5 h-5 icon-style md:w-4 md:h-4' />
            <h1 className='font-normal md:text-sm text-slate-100'>{rating}</h1>
          </div>
        </div>

        <div className='flex items-center gap-3 '>
          <button
            type='button'
            className='bg-white/90 blur-effect-theme button-theme p-0.5 shadow-sky-200'
          >
            <ShoppingBagIcon className='icon-style text-slate-900' />
          </button>
          <button
            type='button'
            className='px-2 py-1 text-sm text-black shadow bg-white/90 blur-effect-theme button-theme shadow-sky-200'
            onClick={() => {
              onAddToCart();
              onCartToggle();
            }}
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          ifExists ? "absolute top-5 right-1  " : " justify-center"
        }`}
      >
        <img
          src={img}
          alt={`img/item-img/ ${id}`}
          className={`h-26 w-60 transitions-theme hover:rotate-12 ${
            ifExists
              ? " h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg] "
              : "h-36 w-64 "
          }`}
        />
      </div>
    </div>
  );
};

export default Items;
