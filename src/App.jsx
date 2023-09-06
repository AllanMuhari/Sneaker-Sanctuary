/** @format */
import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import { heroapi ,popularsales,toprateslaes } from "./data/data";
import Sales from "./Components/Sales/Sales";
function App() {
  return (
    <div className="flex flex-col gap-16  bg-slate-300">
      <Hero heroapi={heroapi} />
      <Sales endpoint ={popularsales}/>
      <Sales endpoint= {toprateslaes}/>
    </div>
  );
}

export default App;
