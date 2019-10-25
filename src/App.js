import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Main from "./pages/Main";

var navbarLinks = require("./metadata/navigation.json");

function App() {
  const [items, setItems] = React.useState([]);
  const [location, setLocation] = React.useState("");

  React.useEffect(() => {
    setItems(navbarLinks.cities);
  }, [])

  const handleClick = value => {
    setLocation(value);
  }

  return (
    <div className="App">
      <Header />
      <Navbar items={items} onClick={handleClick} />
      <Main location={location} />
    </div>
  );
}

export default App;
