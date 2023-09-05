/** @format */

import React from "react";

const Social = ({ icon }) => {
  return (
    <div>
      <img
        src={icon}
        alt='icon/social'
        className='w-8 h-8 lg:h-12 lg:w-12 flex items-center cursor-pointer md:w-6 md:h-6  transition-all duration-200 hover:scale-110'
      />
    </div>
  );
};

export default Social;
