/** @format */
import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import {
  heroapi,
  popularsales,
  toprateslaes,
  sneaker,
  highlight,
  story,
} from "./data/data";
import Sales from "./Components/Sales/Sales";
import Content from "./Components/Content/Content";
import Stories from "./Components/Stories/Stories";
import Cart from "./Components/Cart/"
function App() {
  return (
    <div className='flex flex-col gap-16'>
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExists />
      <Content endpoint={highlight} ifExists />
      <Sales endpoint={toprateslaes} />
      <Content endpoint={sneaker} />
      <Stories story={story} />
    </div>
  );
}

export default App;
