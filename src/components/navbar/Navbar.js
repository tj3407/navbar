import React from "react";
import "./stylesheet/navbar.css";

export default function Navbar(props) {
  const [target, setTarget] = React.useState({});
  const [links, setLinks] = React.useState({});

  React.useEffect(() => {
    setTarget(document.querySelector(".bottom-border"));
    let items = document.querySelectorAll(".nav-items ul");
    setLinks(items[0].childNodes);
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    const parentNode = e.target.parentNode;
    let nodes = Array.from(links);

    if (!parentNode.classList.contains("active")) {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].classList.contains("active")) {
          nodes[i].classList.remove("active");
        }
      }
      
      parentNode.classList.add("active");
      
      const width = e.target.getBoundingClientRect().width;
      const height = e.target.getBoundingClientRect().height + .5;
      const left = e.target.getBoundingClientRect().left;
      const top = e.target.getBoundingClientRect().top;
      const color = "black";
    
      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.borderColor = color;
      target.style.transform = "none";
      target.style.paddingTop = "10px";
    }
  }

  return (
    <div className="navbar">
      <nav className="nav-items">
        <ul>
          {props.items.map(item => {
            return (
              <li key={item.section}>
                <a href="/" onClick={handleClick} tabIndex={0}>
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
