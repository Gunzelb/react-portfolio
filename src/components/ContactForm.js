import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className="container-lg" onSubmit={handleSubmit}>
      <div className="row my-2">
        <label className="col-2" htmlFor="name">
          Name:
        </label>
        <input className="col-10" type="text" id="name" required />
      </div>
      <div className="row my-2">
        <label className="col-2" htmlFor="email">
          Email:
        </label>
        <input className="col-10" type="email" id="email" required />
      </div>
      <div className="row my-2">
        <label className="col-2" htmlFor="message">
          Message:
        </label>
        <textarea className="col-10" id="message" required />
      </div>
      <div className="d-flex justify-content-center my-2">
        <button className="col-4" type="submit">
          {status}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
