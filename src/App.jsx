/** @format */
import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import { heroapi } from "./data/data";

function App() {

  return (
    <Hero heroapi={heroapi}/>
  )
  
}

export default App;
