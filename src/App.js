import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

var navbarLinks = require("./metadata/navigation.json");

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(navbarLinks.cities);
  }, [])

  return (
    <div className="App">
      <Header />
      <Navbar items={items} />
    </div>
  );
}

export default App;
