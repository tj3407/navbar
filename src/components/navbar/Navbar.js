import React from "react";
import "./stylesheet/navbar.css";

export default function Navbar(props) {
  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="navbar">
      <nav className="nav-items">
        {props.items.map(item => {
          return (
            <a key={item.section} href="/" onClick={handleClick} tabIndex={0}>
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className="bottom-border" />
    </div>
  );
}
