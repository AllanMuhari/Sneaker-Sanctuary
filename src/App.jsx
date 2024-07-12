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
  footerAPI,
} from "./data/data";
import Sales from "./Components/Sales/Sales";
import Content from "./Components/Content/Content";
import Stories from "./Components/Stories/Stories";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Content endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <Content endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  );
}

export default App;
