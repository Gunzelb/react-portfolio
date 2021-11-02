import React from "react";
import selfie from "../images/profile_selfie.jpg";

const AboutMe = () => {
  return (
    <div className="row title">
      <h2 className="col-12" id="aboutMe">
        About Me
      </h2>
      <img className="col-4" id="selfie" src={selfie} alt="the web developer" />
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

export default AboutMe;
