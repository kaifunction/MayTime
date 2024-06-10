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
        <div className="contact-us-form" style={{ color: "white", margin: "40px" }}>
          <h3 style={{marginBottom:'10px'}}>Name</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="contact-us-input-name"
            style={{ color: "#ff6a00", width: "340px", height: "40px", marginBottom:'30px', borderRadius:'5px', borderColor:'#ff6a00', borderWidth:'1px', paddingLeft:'10px'  }}
          />
          <h3 style={{marginBottom:'10px'}}>Email</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="contact-us-input-email"
            style={{ color: "#ff6a00",  width: "340px", height: "40px", marginBottom:'30px', borderRadius:'5px', borderColor:'#ff6a00', borderWidth:'1px', paddingLeft:'10px' }}
          />
          <h3 style={{marginBottom:'10px'}}>Message</h3>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message..."
            className="contact-us-input-message"
            style={{ color: "#ff6a00", width: "340px", height: "140px", marginBottom:'30px', borderRadius:'5px', borderColor:'#ff6a00', borderWidth:'1px', padding:'10px 10px'  }}
          />
        </div>
        <button type="submit" style={{ color: "#ff6a00", marginLeft: "40px", borderWidth: '1px', borderColor:'#ff6a00', borderRadius:'10px', padding:'5px 10px', cursor:'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
