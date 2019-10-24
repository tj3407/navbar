import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

var navbarLinks = require("./metadata/navigation.json");

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar items={navbarLinks} />
    </div>
  );
}

export default App;
