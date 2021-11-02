import React from "react";

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

export default Resume;
