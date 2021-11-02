import React from "react";
import AboutMe from "./AboutMe";
import Work from "./Work";
import ContactMe from "./ContactMe";
import Resume from "./Resume";
import Splash from "./Splash";

function DisplayTab(props) {
  switch (props.currentTab) {
    case "About Me":
      return <AboutMe />;
    case "Work":
      return <Work />;
    case "Contact Me":
      return <ContactMe />;
    case "Resumé":
      return <Resume />;
    case "Home":
      return <Splash />;
    default:
      return <Splash />;
  }
}

export default DisplayTab;
