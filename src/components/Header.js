import React from "react";
import { Navtab } from "./Navtab";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="ms-4">Brandon Gunzel</h1>
      <ul className="nav justify-content-end">
        <Navtab
          name="Home"
          link="/"
          isCurrent={props.currentTab === "Home"}
          setCurrentTab={props.setCurrentTab}
        />
        <Navtab
          name="About Me"
          link="#aboutMe"
          isCurrent={props.currentTab === "About Me"}
          setCurrentTab={props.setCurrentTab}
        />
        <Navtab
          name="Work"
          link="#work"
          isCurrent={props.currentTab === "Work"}
          setCurrentTab={props.setCurrentTab}
        />
        <Navtab
          name="Contact Me"
          link="#contactMe"
          isCurrent={props.currentTab === "Contact Me"}
          setCurrentTab={props.setCurrentTab}
        />
        <Navtab
          name="Resumé"
          link="#resume"
          isCurrent={props.currentTab === "Resumé"}
          setCurrentTab={props.setCurrentTab}
        />
      </ul>
    </div>
  );
};

export default Header;
