/** @format */
import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import { heroapi } from "./data/data";
function App() {
  return (
    <div>
      <Hero heroapi={heroapi} />
    </div>
  );
}

export default App;
