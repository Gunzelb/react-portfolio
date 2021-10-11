import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";

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
      case "Resumé":
        return <Resume />;
      case "Home":
        return <Splash />;
      default:
        return <Splash />;
    }
  }

  return (
    <div className="App">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {displayTab()}
      <Footer />
    </div>
  );
}

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
    <div className="row title">
      <h2 className="col-12" id="aboutMe">
        About Me
      </h2>
      <img
        className="col-4"
        id="selfie"
        src="/images/profile_selfie.jpg"
        alt="the web developer"
      />
      <div className="col-7 section">
        <p className="fs-5">
          My name is Brandon Gunzel. I am a web developer from Southern
          California. I love designing interactive web applications.{" "}
        </p>
        <p className="fs-5">
          {" "}
          I am adept with front-end technologies HTML, CSS, Bootstrap,
          Handlebars, and React. I am also versed in back-end technologies such
          as Node.js, Express, MySQL, MongoDB, and GraphQL.
        </p>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="title">
      <div>
        <h2>Work</h2>
      </div>
      <div className="section row">
        <div className="card col-sm-3 m-1" style={{ width: "18rem" }}>
          <img
            alt="screenshot of project homepage"
            src="./images/demo.gif"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Pokémon Search</h5>
            <p className="card-text">
              A web application that allows the user to search for a Pokémon and
              have the TCG card displayed along with some basic information.
            </p>
            <div className="row gy-1">
              <a
                href="https://github.com/s-cabrera/Pokemon_Search"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                href="https://s-cabrera.github.io/Pokemon_Search/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Project
              </a>
            </div>
          </div>
        </div>
        <div className="card col-sm-3 m-1" style={{ width: "18rem" }}>
          <img
            alt="screenshot of project homepage"
            src="./images/coffee-tin-screencap.png"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Coffee Tin</h5>
            <p className="card-text">
              A crowdfunding project that allows users to create profiles, start
              new crowdfunding projects and fund existing projects through
              Stripe payment processing.
            </p>
            <div className="row gy-1">
              <a
                href="https://github.com/Gunzelb/coffee-tin"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                href="https://coffee-tin.herokuapp.com/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Project
              </a>
            </div>
          </div>
        </div>
        <div className="card col-sm-3 m-1" style={{ width: "18rem" }}>
          <img
            alt="screenshot of project homepage"
            src="./images/day planner.png"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Business Hours Planner</h5>
            <p className="card-text">
              A simple planner for saving your schedule during your work day.
            </p>
            <div className="row gy-1">
              <a
                href="https://github.com/Gunzelb/business-hours-planner"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                href="https://gunzelb.github.io/business-hours-planner/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Project
              </a>
            </div>
          </div>
        </div>
        <div className="card col-sm-3 m-1" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/250x200"
            className="card-img-top"
            alt="screenshot of project homepage"
          />
          <div className="card-body">
            <h5 className="card-title">Project 4</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="row gy-1">
              <a href="..." className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactMe = () => {
  return (
    <div className="title">
      <div>
        <h2 id="contactMe">Contact Me</h2>
      </div>
      <div className="section">
        <ContactForm />
        <pre className="fs-5 text-center mt-3">
          Phone number: 951-616-7303 Email: brandongunzel@gmail.com
        </pre>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="title">
      <div>
        <h2 id="resume">Resumé</h2>
      </div>
      <div className="section fs-5 mx-4">
        <h4>Technical Proficiencies:</h4>
        <p className="ms-5">
          Front-end: HTML, CSS, JavaScript, jQuery, Bootstrap, Bulma,
          Handlebars, and React
        </p>
        <p className="ms-5">
          Back-end: Node.js, Express, MySQL, MongoDB, GraphQL
        </p>
        <span>
          Click{" "}
          <a
            href="/assets/Gunzel_Brandon_August2021.pdf"
            download="Gunzel_Brandon_August2021.pdf"
          >
            here
          </a>{" "}
          to download resumé.
        </span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer row align-content-center">
      <a
        className="col-4 text-center"
        href="https://github.com/Gunzelb"
        target="_blank"
        rel="noreferrer"
      >
        Github{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a
        className="col-4 text-center"
        href="www.linkedin.com/in/brandon-gunzel"
        target="_blank"
      >
        LinkedIn{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </a>
      <a
        className="col-4 text-center"
        href="https://twitter.com/mysticbow091"
        target="_blank"
        rel="noreferrer"
      >
        Twitter{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-twitter"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
