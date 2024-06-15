import "./About.css";

const About = () => {

     const handlePDFButtonClick = () => {
          window.open("/path/to/the/file.pdf", "_blank");
        };
     return (
          <div className="contact-us-page-container">
               <h1 style={{fontWeight:'bold', backgroundColor:'#ffffff00', color:'#ff6a00', width:'fit-content'}}>
                    <span style={{fontWeight:'bold'}}>ABOUT</span> <span style={{fontWeight:'lighter'}}>US</span>
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
                         }}
                    > PRICE</button>
               </div>
          </div>
     )
     }

export default About;
