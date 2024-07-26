import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
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

  const validateForm = () => {
    let isValid = true;
    let tempError = { name: "", email: "", message: "" };

    if (!formData.name) {
      tempError.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempError.email = "Email is invalid";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempError.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message) {
      tempError.message = "Message is required";
      isValid = false;
    } else if (formData.message.length > 500) {
      tempError.message = "Message is too long";
      isValid = false;
    }

    setError(tempError);
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <div className="contact-us-container">
      {/* <div className="background-image">
        <img src="/public/sunnyvale-map.jpg" alt="sunnyvale map"/>
      </div> */}
      <div className="contact-us-container-left">
        <h1
          style={{ marginTop: "0px", color: "#ff6a00", width: "fit-content", backgroundColor:'transparent' }}
        >
          <span style={{fontWeight:'bold', backgroundColor:'transparent' }}>CONTACT</span> <span style={{fontWeight:'lighter', backgroundColor:'transparent' }}>US</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            className="contact-us-form"
            style={{ color: "white", margin: "20px 40px", backgroundColor:'transparent'  }}
          >
            <h4 style={{ marginBottom: "10px", fontWeight: "normal" }}>Name</h4>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="contact-us-input-name"
              style={{
                color: "#ff6a00",
                width: "345px",
                height: "40px",
                marginBottom: "30px",
                borderRadius: "5px",
                borderColor: "#ff6a00",
                borderWidth: "1px",
                paddingLeft: "10px",
              }}
            />
            {error.name && <p className="error">{error.name}</p>}
            <h4 style={{ marginBottom: "10px", fontWeight: "normal" }}>
              Email
            </h4>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="contact-us-input-email"
              style={{
                color: "#ff6a00",
                width: "345px",
                height: "40px",
                marginBottom: "30px",
                borderRadius: "5px",
                borderColor: "#ff6a00",
                borderWidth: "1px",
                paddingLeft: "10px",
              }}
            />
            {error.email && <p className="error">{error.email}</p>}
            <h4 style={{ marginBottom: "10px", fontWeight: "normal" }}>
              Message
            </h4>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className="contact-us-input-message"
              style={{
                color: "#ff6a00",
                width: "340px",
                height: "140px",
                marginBottom: "30px",
                borderRadius: "5px",
                borderColor: "#ff6a00",
                borderWidth: "1px",
                padding: "10px 10px",
              }}
            />
            {error.message && <p className="error">{error.message}</p>}
          </div>
          <button
            type="submit"
            style={{
              color: "#ff6a00",
              borderWidth: "1px",
              borderColor: "#ff6a00",
              borderRadius: "10px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="contact-us-container-right">
        {/* <div className="contact-us-container-right-content"> */}
          <h3 style={{ color: "#ff6a00", backgroundColor:'transparent' }}>Contact Information</h3>
          <p style={{ color: "white", fontSize: "16px", backgroundColor:'transparent' }}>
            Email:
            <br />
        </p>
        <p style={{ color: "white", fontSize: "16px", backgroundColor:'transparent' }}>
            Phone:
            <br />
        </p>
        <p style={{ color: "white", fontSize: "16px", backgroundColor:'transparent' }}>
            Address:
            <br />
        </p>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ContactUs;
