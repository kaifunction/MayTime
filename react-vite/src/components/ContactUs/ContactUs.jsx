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
      {/* <div className="background-image">
        <img src="/public/sunnyvale-map.jpg" alt="sunnyvale map"/>
      </div> */}
      <div className="contact-us-container-left">
        <h1
          style={{
            marginTop: "0px",
            color: "#ff6a00",
            width: "fit-content",
            backgroundColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          <span style={{ fontWeight: "bold", backgroundColor: "transparent" }}>
            CONTACT
          </span>{" "}
          <span
            style={{ fontWeight: "lighter", backgroundColor: "transparent" }}
          >
            US
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            className="contact-us-form"
            style={{
              color: "white",
              margin: "20px 40px",
              backgroundColor: "transparent",
            }}
          >
            <h4
              style={{
                marginBottom: "10px",
                fontWeight: "normal",
                color: "#ff6a00",
              }}
            >
              NAME
            </h4>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="contact-us-input-name"
              style={{
                color: "#ff6a00",
                fontWeight: "550",
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
            <h4
              style={{
                marginBottom: "10px",
                fontWeight: "normal",
                color: "#ff6a00",
              }}
            >
              EMAIL
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
                fontWeight: "550",
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
            <h4
              style={{
                marginBottom: "10px",
                fontWeight: "normal",
                color: "#ff6a00",
              }}
            >
              MESSAGE
            </h4>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className="contact-us-input-message"
              style={{
                color: "#ff6a00",
                fontWeight: "550",
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
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="contact-us-container-right">
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
            letterSpacing: "1px",
          }}
        >
          <span style={{ fontWeight:'bold' }}>EMAIL / </span><span style={{ color: "white", letterSpacing:'2px' }}>/ maytimestudio@gmail.com</span>
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
          <span style={{ fontWeight:'bold' }}>PHONE /</span> <span style={{ color: "white", letterSpacing:'2px'  }}>/ 1231231234</span>
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
          <span style={{ fontWeight:'bold' }}>ADDRESS /</span> <span style={{ color: "white", letterSpacing:'2px' }}>/ Sunnyvale CA</span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
