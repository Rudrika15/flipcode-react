import React from "react";
import Navbar from "../../Comman/Navbar/Navbar";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import Footer from"../../Comman/footer/footer";
import Technology from "../../Comman/technology/technology";


const About = () => {
  return (
    <>
      <Breadcrumb  title ="Who We Are"  
      detail="We are a forward-thinking IT firm committed to leveraging advanced technology and expertise to create impactful solutions and foster meaningful client relationships. For more information or to discuss how we can assist you, contact" 
      button="About us"/>
      <div className="container">
        <div className="row">

      <Technology/>
        </div>
      </div>
      
    </>
  );
};

export default About;
