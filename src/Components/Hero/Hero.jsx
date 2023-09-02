/** @format */

import React from "react";
import { heroapi } from "../../data/data";

const Hero = ({
  heroapi: { title, subtitle, bntext, img, sociallinks, videos },
}) => {
  return (
    <div>
      <div></div>
      <div>
        <div>
          <h1>{title}</h1>
          <h1>{subtitle}</h1>

          <button>{bntext}</button>
          <div></div>
          <div></div>
        </div>
      </div>
      <img src={img} alt='' className=''></img>
    </div>
  );
};

export default Hero;
