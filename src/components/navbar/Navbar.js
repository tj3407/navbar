import React from "react";

export default function Navbar(props) {
  return (
    <div>
      {props.items.map(item => {
        return (
          <a key={item.section} href="/">
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
