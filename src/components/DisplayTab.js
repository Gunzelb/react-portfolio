import React from "react";
import { AboutMe, Work, ContactMe, Resume, Splash } from ".";

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
