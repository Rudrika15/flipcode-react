import React, { useEffect } from "react";
import Navbar from "../../Comman/Navbar/Navbar";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import Footer from "../../Comman/footer/footer";
import Technology from "../../Comman/technology/technology";
import about from "../../Json/About Us/about.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Advantage from "../../Comman/Advantage/Advantage.jsx";
import Codeoption from "../../Comman/why-choose-us/Codeoption.jsx";
import Testimonal from "../../Comman/testimonal/Testimonal.jsx";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Breadcrumb
        title="Who We Are"
        detail="We are a forward-thinking IT firm committed to leveraging advanced technology and expertise to create impactful solutions and foster meaningful client relationships. For more information or to discuss how we can assist you, contact"
        button="About us"
      />
      <div data-aos="fade-right">
      <div className="container">
        {about.map((item, index) => (
          <div className="row" py-4>
            <div className="col-md-6 mb-md-0 p-md-4" key={item.id}>
              <p style={{ fontSize: "15px", lineHeight: "35px" }}>
                {item.detail}
              </p>
            </div>
            <div className="col-md-6 mb-md-0 p-md-4">
              <img
                src={item.photo}
                className="card-img-top "
                style={{ width: "500px", height: "440px" }}
              />
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className=" container">
        <div data-aos="zoom-in">
          <div className="row" style={{ lineHeight: "35px", fontSize: "15px" }}>
            <p>
              In the ever-evolving landscape of technology, Perfetto Solutions
              emerges as a trailblazer, marking a significant milestone in its
              journey by transitioning into a private limited company in 2023.
              With a rich history rooted in innovation and a commitment to
              excellence, FLIPCODE SOLUTIONS PVT. LTD. has consistently pushed
              the boundaries of what is possible in the realm of Information
              Technology (IT).
            </p>
            <p>
              As a private limited company, FLIPCODE SOLUTIONS now stands poised
              to reach new heights, fortified by a strengthened foundation and
              an unwavering dedication to delivering cutting-edge solutions.
              This transformation reflects not only the company's growth but
              also its strategic vision for the future.
            </p>
            <p>
              We choose to execute what is best for our clients. Our primary
              goal is to offer end-to-end digital solutions to help businesses
              achieve their goals. Our technical enthusiasts include analysts,
              developers, designers, and testers who believe in offering optimal
              custom software development services to all businesses.
            </p>
            <p>
              The transformation signals a new chapter in Flipcode Solutions's
              story. As a private limited company, the company is
              well-positioned to embrace the future, navigate challenges, and
              seize opportunities with agility and resilience.
            </p>
            <p>
              At Flipcode Solutions, the future is not just a destination; it's
              a shared adventure.
            </p>
          </div>
        </div>
      </div>
      <Advantage />
      <div className="container-fuild bg-light ">
        <div className="container">
          <div className="row py-4 text-center">
            <h1 className="fw-bold vision ">Vision</h1>
            <p className="fw-light">
              Our vision is to be a catalyst for a connected and technologically
              advanced future. We aspire to be a driving force behind the
              digital transformation of businesses, fostering a world where
              technology empowers organizations to achieve unparalleled success.
            </p>
          </div>
        </div>
      </div>
      {/* <!---website advantage--> */}
      <Codeoption />

      {/* Testimonials */}
      <Testimonal />
      <br />
      <br />
      <Technology />
    </>
  );
};

export default About;
