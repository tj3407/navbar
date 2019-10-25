import React from "react";
import "./stylesheet/navbar.css";

export default function Navbar(props) {
  const [target, setTarget] = React.useState({});
  const [links, setLinks] = React.useState({});

  // Retrieve the node element for the bottom border and nodes of the navbar links
  React.useEffect(() => {
    setTarget(document.querySelector(".bottom-border"));
    let items = document.querySelectorAll(".nav-items ul");
    setLinks(items[0].childNodes);
  }, []);

  const handleClick = (e, val) => {
    e.preventDefault();
    const parentNode = e.target.parentNode;
    let nodes = Array.from(links);

    if (!parentNode.classList.contains("active")) {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].classList.contains("active")) {
          nodes[i].classList.remove("active");
        }
      }
      // add active class to clicked element
      parentNode.classList.add("active");

      // calculate position of clicked element
      const width = e.target.getBoundingClientRect().width;
      const height = e.target.getBoundingClientRect().height + 0.5;
      const left = e.target.getBoundingClientRect().left;
      const top = e.target.getBoundingClientRect().top;
      const color = "black";

      // add style to the bottom border for the sliding effect
      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.borderColor = color;
      target.style.transform = "none";
      target.style.paddingTop = "10px";
    }

    if (props.onClick) {
      props.onClick(val);
    }
  };

  return (
    <div className="navbar">
      <nav className="nav-items">
        <ul>
          {props.items.map(item => {
            return (
              <li key={item.section}>
                <a href="/" onClick={(e) => handleClick(e, item.section)} tabIndex={0}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <span className="bottom-border" />
      <div className="bottom-border-second" />
    </div>
  );
}
