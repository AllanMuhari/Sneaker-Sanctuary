import React from "react";
import Title from "../Utils/Title/Title";
import Item from "../Utils/Items/Items";
const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <div className=' nike-container bg-slate-300 max-w-[1640px]'>
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-[10rem] lg:mt-7  ${
          ifExists
            ? "grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 "
            : "grid-cols-1 xl:grid-cols-4  md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {items?.map((items, i) => (
          <Item {...items} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  );
};

export default Sales;

