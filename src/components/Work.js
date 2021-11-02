import React from "react";
import demo from "../images/demo.gif";
import coffeeTinImg from "../images/coffee-tin-screencap.png";
import dayPlanner from "../images/day planner.png";
import PublicSquare from "../images/public_square_image.png";
import teamProfile from "../images/windows-prompt-git-branch.gif";

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
            src={demo}
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
            src={coffeeTinImg}
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
            src={dayPlanner}
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
            src={PublicSquare}
            className="card-img-top"
            alt="screenshot of project homepage"
          />
          <div className="card-body">
            <h5 className="card-title">Public Square</h5>
            <p className="card-text">
              A social network with public and private feeds for sharing your
              thoughts and ideas with the world and your closest friends.
            </p>
            <div className="row gy-1">
              <a
                href="https://github.com/Gunzelb/public-square"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                href="https://tranquil-peak-11683.herokuapp.com/"
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
            src={teamProfile}
            className="card-img-top"
            alt="screenshot of project homepage"
          />
          <div className="card-body">
            <h5 className="card-title">Development Team Profiler</h5>
            <p className="card-text">
              Generates a team page for a Development Team based on user input.
            </p>
            <div className="row gy-1">
              <a
                href="https://github.com/Gunzelb/Development_Team_Profiler"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                href="https://tranquil-peak-11683.herokuapp.com/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
