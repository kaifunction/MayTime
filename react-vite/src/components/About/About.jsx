import "./About.css";

const About = () => {
  const handlePDFButtonClick = () => {
    window.open("/public/Quotation.jpg", "_blank");
  };
  return (
    <div className="contact-us-page-container">
      <h1
        style={{
          fontWeight: "bold",
          backgroundColor: "#ffffff00",
          color: "#ff6a00",
          width: "fit-content",
        }}
      >
        <span style={{ fontWeight: "bold" }}>ABOUT</span>{" "}
        <span style={{ fontWeight: "lighter" }}>US</span>
      </h1>

      <div className="contact-us-page-button">
        <button
          type="button"
          onClick={handlePDFButtonClick}
          style={{
            color: "#ff6a00",
            borderWidth: "1px",
            borderColor: "#ff6a00",
            borderRadius: "10px",
            padding: "5px 10px",
            cursor: "pointer",
            backgroundColor: "transparent",
            borderStyle: "solid",
            letterSpacing: "1px",
          }}
        >
          PRICE LIST
        </button>
        <p style={{color:'white', letterSpacing:'2px', fontWeight:'450', lineHeight:'25px', width:'700px', marginTop:'60px'}}>
          <strong style={{color:'#ff6a00', fontSize:'18px'}}>W</strong>elcome to our photography studio, established in May 2024.
          We are dedicated to capturing life's most precious moments with a keen eye
          for detail and a passion for storytelling. Our team of professional
          photographers specializes in a diverse range of photography services
          to cater to your unique needs.<br/><br/>
          <strong style={{color:'#ff6a00', fontSize:'18px'}}>O</strong>ur pet photography sessions celebrate the joy and companionship that pets bring into our lives. We create a comfortable and playful environment to capture their true personalities and the bond they share with their owners. <br/><br/>
          For couples embarking on the beautiful journey of marriage, we offer exquisite
          wedding photography, both indoor and outdoor. We understand the
          significance of this special day and are committed to capturing every
          heartfelt moment, from the intimate glances to the joyous
          celebrations. <br/><br/>
          <strong style={{color:'#ff6a00', fontSize:'18px'}}>O</strong>ur baby photography services are designed to document the milestones of your little one. Whether it's a one-year, six-month, daytime, full-month, or newborn session, we provide personalized setups to create timeless keepsakes of your baby's early years. <br/><br/>
          <strong style={{color:'#ff6a00', fontSize:'18px'}}>F</strong>amily photos are a testament to the love and connection shared among family members. We create warm and inviting settings to capture the genuine
          interactions and smiles that make your family unique. <br/><br/>
          <strong style={{color:'#ff6a00', fontSize:'18px'}}>E</strong>xpecting mothers can cherish their journey with our maternity photography. We celebrate the beauty of pregnancy and create elegant, artistic
          portraits that highlight this special time in your life. <br/><br/>
          <strong style={{color:'#ff6a00', fontSize:'18px'}}>A</strong>t our studio, we believe in creating not just photographs but cherished
          memories that you can treasure for a lifetime. Let us be a part of
          your story and help you capture the moments that matter most.
        </p>
      </div>
    </div>
  );
};

export default About;
