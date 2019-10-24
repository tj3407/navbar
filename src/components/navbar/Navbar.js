import React from "react";
import "./stylesheet/navbar.css";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <nav className="nav-items">
        {props.items.map(item => {
          return (
            <a key={item.section} href="/">
              {item.label}
            </a>
          );
        })}
      </nav>
      <hr />
    </div>
  );
}
