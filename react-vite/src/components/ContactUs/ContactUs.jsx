import React, { useState } from "react";

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
    <div>
      <h1
        style={{ margin: "100px 40px", color: "#ff6a00", width: "fit-content" }}
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
            style={{ color: "#ff6a00" }}
          />
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ color: "#ff6a00" }}
          />
          <h2>Message</h2>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            style={{ color: "#ff6a00" }}
          />
        </div>
        <button type="submit" style={{ color: "#ff6a00", margin: "40px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
