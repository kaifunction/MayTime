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
      {/* <div className="background-image">
        <img src="/public/sunnyvale-map.jpg" alt="sunnyvale map"/>
      </div> */}
      <div className="contact-us-container-left">
        <h1
          style={{ marginTop: "0px", color: "#ff6a00", width: "fit-content", backgroundColor:'#ffffff00' }}
        >
          <span style={{fontWeight:'bold', backgroundColor:'#ffffff00' }}>CONTACT</span> <span style={{fontWeight:'lighter', backgroundColor:'#ffffff00' }}>US</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            className="contact-us-form"
            style={{ color: "white", margin: "20px 40px", backgroundColor:'#ffffff00'  }}
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
          <h3 style={{ color: "#ff6a00", backgroundColor:'#ffffff00' }}>Contact Information</h3>
          <p style={{ color: "white", fontSize: "16px", backgroundColor:'#ffffff00' }}>
            Email:
            <br />
        </p>
        <p style={{ color: "white", fontSize: "16px", backgroundColor:'#ffffff00' }}>
            Phone:
            <br />
        </p>
        <p style={{ color: "white", fontSize: "16px", backgroundColor:'#ffffff00' }}>
            Address:
            <br />
        </p>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ContactUs;
