import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState("");

  function displayTab() {
    switch (currentTab) {
      case "About Me":
        return <AboutMe />;
      case "Work":
        return <Work />;
      case "Contact Me":
        return <ContactMe />;
      case "Resume":
        return <Resume />;
      default:
        return <Splash />;
    }
  }

  return (
    <div className="App">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {displayTab()}
    </div>
  );
}

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="ms-4">Brandon Gunzel</h1>
      <ul className="nav justify-content-end">
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
          name="Resume"
          link="#resume"
          isCurrent={props.currentTab === "Resume"}
          setCurrentTab={props.setCurrentTab}
        />
      </ul>
    </div>
  );
};

const Navtab = (props) => {
  const { name, link, setCurrentTab } = props;

  const handleClick = () => setCurrentTab(name);

  return (
    <li className={`${props.isCurrent ? "active" : ""} nav-item`}>
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

const Splash = () => {
  return (
    <div className="topImage">
      <div className="filter">
        <div>
          <h2 className="ms-4">A Web Portfolio</h2>
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="title">
      <h2 id="aboutMe">About Me</h2>
      <div className="section">
        <p className="fs-5">
          My name is Brandon Gunzel. I am a web developer from Southern
          California. I love designing interactive web applications.
        </p>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div>
      <div class="title">
        <h2 id="work">Work</h2>
      </div>
      <div class="section row">
        <div class="card col-sm-3 mx-1" style={{ width: "18rem" }}>
          <img
            alt="screenshot of project homepage"
            src="./assets/demo.gif"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Pokémon Search</h5>
            <p class="card-text">
              A web application that allows the user to search for a Pokémon and
              have the TCG card displayed along with some basic information.
            </p>
            <a
              href="https://github.com/s-cabrera/Pokemon_Search"
              class="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://s-cabrera.github.io/Pokemon_Search/"
              class="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
          </div>
        </div>
        <div class="card col-sm-3 mx-1" style={{ width: "18rem" }}>
          <img
            alt="screenshot of project homepage"
            src="./assets/coffee-tin-screencap.png"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Coffee Tin</h5>
            <p class="card-text">
              A simple planner for saving your schedule during your work day.
            </p>
            <a
              href="https://github.com/Gunzelb/coffee-tin"
              class="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://coffee-tin.herokuapp.com/"
              class="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
          </div>
        </div>
        <div class="card col-sm-3 mx-1" style={{ width: "18rem" }}>
          <img
            alt="screenshot of project homepage"
            src="./assets/day planner.png"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Business Hours Planner</h5>
            <p class="card-text">
              A simple planner for saving your schedule during your work day.
            </p>
            <a
              href="https://github.com/Gunzelb/business-hours-planner"
              class="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://gunzelb.github.io/business-hours-planner/"
              class="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
          </div>
        </div>
        <div class="card col-sm-3 mx-1" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/250x200"
            class="card-img-top"
            alt="screenshot of project homepage"
          />
          <div class="card-body">
            <h5 class="card-title">Project 4</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="..." class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactMe = () => {
  return (
    <div>
      <div class="title">
        <h2 id="contactMe">Contact Me</h2>
      </div>
      <div class="section">
        <pre class="fs-5 text-center mt-3">
          Phone number: 951-616-7303 Email: brandongunzel@gmail.com
        </pre>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div>
      <div class="title">
        <h2 id="resume">Resume</h2>
      </div>
      <div class="section fs-5 mx-4">
        <span>
          Click
          <a
            href="./assets/Gunzel_Brandon_August2021.pdf"
            download="Gunzel_Brandon_August2021.pdf"
          >
            here
          </a>
          to download resume.
        </span>
        <a href="www.linkedin.com/in/brandon-gunzel" target="_blank">
          LinkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
