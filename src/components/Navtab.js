import React, { useState } from "react";

const Navtab = (props) => {
  const [hover, setHover] = useState(false);
  const { name, link, setCurrentTab } = props;

  const handleClick = () => setCurrentTab(name);
  const handleOnHover = () => setHover(true);
  const handleStopHover = () => setHover(false);

  return (
    <li
      className={`${props.isCurrent ? "bg-info" : ""}
      ${hover ? "border border-dark" : ""} 
      nav-item`}
      onMouseEnter={handleOnHover}
      onMouseLeave={handleStopHover}
    >
      <a
        onClick={handleClick}
        className={`nav-link fs-3 text-dark`}
        href={link}
      >
        {name}
      </a>
    </li>
  );
};

export default Navtab;
