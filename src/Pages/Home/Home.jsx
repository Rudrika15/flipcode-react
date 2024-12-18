import React from "react";
import Navbar from "../../Comman/Navbar/Navbar";
import about from "../../Json/About Us/about.json";
import Advantage from "../../Comman/Advantage/Advantage";
import Codeoption from "../../Comman/why-choose-us/Codeoption";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonal from "../../Comman/testimonal/Testimonal";
import Technology from "../../Comman/technology/technology";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import {useNavigate } from "react-router-dom";




const Home = () => {
  
  return (
    <>
      <Helmet>
         <title>Home</title>
      </Helmet>
      <div className="video container"style={{ position: "relative", width: "800%", height: "100vh", overflow: "hidden" }}>
      <video id="video-background" autoplay="" muted="" loop=""  style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit:"contain"}}>
        <source src="img/1.mp4" type="video/mp4"/>
       
    </video>
      </div>
      <div data-aos="fade-right">
        <div className="container">
          {about.map((item, index) => (      
          <div className="row" py-4>            
            <div className="col-md-6 mb-md-0 p-md-4 " key={item.id}>
              <h2 className="fw-light">Out Story</h2>
              <p style={{ fontSize: "15px", lineHeight: "35px" }}>
                {item.detail}
              </p>              
              
               {/* <button className="homebtn">
                           Read more
               </button> */}
               <Link className="homebtn"  to="/about">Read More</Link>
              
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
      <Advantage />
        <br />
      {/* <!---website advantage--> */}
      <Codeoption/>
      <br />
      
      <div className="container-fuild bg-light  ">  
        <div className="container">
          <div className="row py-4 text-center">
            <h1 className="fw-bold vision ">Service</h1>
            <p className="fw-light">
              Welcome to Flipcode Solutions, where innovation meets expertise.
              Our IT services and solutions are designed to empower your
              business, enhance efficiency, and drive digital transformation.
              With a commitment to excellence, we deliver cutting-edge solutions
              tailored to meet the unique needs of your organization.
            </p>
            <div className="container  ">
              <div data-aos="flip-right">
              <div className="row m-5 col-md-12 "style={{gap:"11px"}} >
                <div className="card" style={{ width: "30.33%"}}>
                  <div className="card-body" >
                    <p>
                      <i className="bi bi-lightbulb"></i>
                    </p>
                    <h6 className="card-title">Custom Software Development</h6>

                    <p className="card-text">
                      Leverage our expertise in developing bespoke software
                      solutions. From concept to deployment, our skilled team
                      ensures that your software aligns seamlessly with your
                      business objectives.
                    </p>
                  </div>
                </div>
                <div className="card" style={{ width: "30.33%" }}>
                  <div className="card-body ">
                    <p>
                      <i className="bi bi-code-slash"></i>
                    </p>
                    <h6 className="card-title">Web Application Development</h6>
                    <p className="card-text">
                      Transform your online presence with dynamic and
                      user-friendly web applications. We specialize in creating
                      scalable and responsive solutions that captivate your
                      audience.
                    </p>
                  </div>
                </div>
                <div className="card " style={{ width: "30.33%" }}>
                  <div className="card-body m-1  ">
                    <p>
                      <i className="bi bi-phone-flip"></i>
                    </p>
                    <h5 className="card-title">Mobile App Development</h5>
                    <p className="card-text">
                      Stay ahead in the mobile-first world with our innovative
                      mobile app development services. Whether it's iOS,
                      Android, or cross-platform, we bring your app ideas to
                      life.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
            <div className="container text-center ">
              <div className="row m-5 col-md-12" style={{gap:"11px"}}>
                <div className="card" style={{ width: "30.33%" }}>
                  <div className="card-body ">
                    <p>
                    <i className="bi bi-tv-fill"></i>
                    </p>
                    <h6 className="card-title">IT Consulting</h6>

                    <p className="card-text">
                      Rely on our experienced consultants to provide strategic
                      insights and recommendations. We collaborate with you to
                      optimize your IT infrastructure, aligning technology with
                      your business goals.
                    </p>
                  </div>
                </div>
                <div className="card" style={{ width: "30.33%" }}>
                  <div className="card-body ">
                    <p>
                    <i className="bi bi-graph-up-arrow"></i>
                    </p>
                    <h6 className="card-title">
                      Data Analytics and Business Intelligence
                    </h6>
                    <p className="card-text">
                      Unlock the potential of your data with our advanced
                      analytics and business intelligence solutions. Make
                      informed decisions and gain a competitive edge in today's
                      data-driven landscape.
                    </p>
                  </div>
                </div>
                <div className="card" style={{ width: "30.33%" }}>
                  <div className="card-body ">
                    <p>
                    <i className="bi bi-gear-wide-connected"></i>
                    </p>
                    <h5 className="card-title">E-commerce Solutions</h5>
                    <p className="card-text">
                      Boost your online presence and revenue with our tailored
                      e-commerce solutions. We create secure, user-friendly
                      platforms that enhance the shopping experience for your
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <br />

      {/* Testimonials */}
      <Testimonal />
      <br />
      <br />
      <Technology />
    </>
  );
};

export default Home;
