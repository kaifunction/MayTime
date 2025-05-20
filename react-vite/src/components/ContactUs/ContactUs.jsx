import { useState } from "react";
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
      tempError.name = "Name is required.";
      isValid = false;
    } else if (formData.name.length < 2 || formData.name.length > 50) {
      tempError.name = "Name must be between 2 and 50 characters.";
      isValid = false;
    } else if (!/^[a-zA-Z\s'`-]+$/.test(formData.name)) {
      tempError.name =
        "Name can only contain letters and certain special characters.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempError.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempError.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.message) {
      tempError.message = "Message is required.";
      isValid = false;
    } else if (formData.message.length < 10 || formData.message.length > 500) {
      tempError.message = "Message must be between 10 and 500 characters.";
      isValid = false;
    } else if (!/^[a-zA-Z0-9\s.,!?']+$/.test(formData.message)) {
      tempError.message = "Message can only contain letters and numbers.";
      isValid = false;
    }

    setError(tempError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-h1">
        <span style={{ fontWeight: "bold", backgroundColor: "transparent" }}>
          CONTACT
        </span>{" "}
        <span style={{ fontWeight: "lighter", backgroundColor: "transparent" }}>
          US
        </span>
      </h1>
      <div className="contact-us-container-left">
        <form onSubmit={handleSubmit}>
          <div className="contact-us-form">
            <div className="contact-us-form-group">
              <label className="contact-us-label" htmlFor="res-name">
                Name<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                name="name"
                id="res-name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="contact-us-input"
              />
              {error.name && <p className="error">{error.name}</p>}
            </div>

            <div className="contact-us-form-group">
              <label className="contact-us-label" htmlFor="res-email">
                Email<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="email"
                name="email"
                id="res-email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="contact-us-input"
              />
              {error.email && <p className="error">{error.email}</p>}
            </div>

            <div className="contact-us-form-group contact-us-full-width">
            <label htmlFor="res-message" className="contact-us-label"
            >
              Message<span style={{ color: "red" }}> *</span>
            </label>
            <textarea
              name="message"
              id="res-message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className="contact-us-input-message"
            />
            {error.message && <p className="error">{error.message}</p>}
            </div>
          </div>
          <button type="submit" className="contact-us-button">SUBMIT</button>
        </form>
      </div>
      <div className="contact-us-contact-info">
        {/* <div className="contact-us-container-right-content"> */}
        <h3 style={{ color: "#ff6a00", backgroundColor: "transparent" }}>
          Contact Information:
        </h3>
        <p
          style={{
            // color: "white",
            fontSize: "16px",
            backgroundColor: "transparent",
            color: "#ff6a00",
            letterSpacing: ".7px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>EMAIL / </span>
          <a
            href="mailto:maytimestudio@gmail.com"
            style={{
              color: "white",
              textDecoration: "none",
              letterSpacing: "2px",
            }}
          >
            / maytimestudio@gmail.com
          </a>
          <br />
        </p>
        <p
          style={{
            // color: "white",
            fontSize: "16px",
            backgroundColor: "transparent",
            color: "#ff6a00",
          }}
        >
          <span style={{ fontWeight: "bold" }}>PHONE /</span>{" "}
          <span style={{ color: "white", letterSpacing: "2px" }}>
            / 1231231234
          </span>
          <br />
        </p>
        <p
          style={{
            // color: "white",
            fontSize: "16px",
            backgroundColor: "transparent",
            color: "#ff6a00",
          }}
        >
          <span style={{ fontWeight: "bold" }}>ADDRESS /</span>{" "}
          <span style={{ color: "white", letterSpacing: "2px" }}>
            / Sunnyvale CA
          </span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
