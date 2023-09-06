/** @format */

import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import {ShoppingBagIcon} from "@heroicons/react/24/solid"
const Items = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <div className= {`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center`}>
      <div className="grid items-center justify-items-center">
        <h1 className="text-slate-200 text-base lg:text-xlg md:text-lg font-medium filter drop-shadow">{title}</h1>
        <p className="text-slate-200 drop-shadow text-base md:text-lg font-medium">{text}</p>
        <div className="flex items-center">
          <h1 className="flex items-center">{price}</h1>
        </div>
        <div className="flex items-center">
          <StarIcon className="icon-style text-slate-800"/>
          {rating}
        </div>
      </div>
      <div className="flex items-center">
        <button type="button" className="">
         <ShoppingBagIcon className="icon-style text-slate-900"/>
        </button>
        <buton type="button" className={btn}>

        </buton>
      </div>
      <div className=" flex items-center">
        <img src={img} alt="" className="" />
      </div>
    </div>
  );
};

export default Items;
