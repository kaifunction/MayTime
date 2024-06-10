import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
      <h1
        style={{ marginTop: "60px", color: "#ff6a00", width: "fit-content" }}
      >
        Contact Us
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ color: "white", margin: "40px" }}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ color: "#ff6a00", width: "340px", height: "40px"}}
          />
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ color: "#ff6a00",  width: "340px", height: "40px" }}
          />
          <h2>Message</h2>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            style={{ color: "#ff6a00", width: "340px", height: "140px" }}
          />
        </div>
        <button type="submit" style={{ color: "#ff6a00", marginLeft: "40px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
