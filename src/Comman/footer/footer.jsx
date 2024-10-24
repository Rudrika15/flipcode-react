import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <div className="p-3 mb-2 bg-dark text-white">     
        

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  {/* <i className="fas fa-gem me-3"></i> */}
                  <img
                    src="img/favicon.jpg"
                    alt=""
                    style={{ width: "70px", height: "70px", marginLeft: "18%" }}
                  />
                  <h5 style={{ paddingTop: "20px", }}>Flipcode Solutions</h5>
                </h6>
                <p style={{width:"70%"}}>
                    Innovating the future,
                   one <br />brushstroke at a time.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4  " style={{fontSize:"28px"}}>Quick Links</h6>
                <p >
                  <a href="/" className="text-reset" style={{textDecoration:"none"}}>
                    Home
                  </a>
                </p>
                <p>
                  <a href="About us" className="text-reset" style={{textDecoration:"none"}}>
                    About us
                  </a>
                </p>
                <p>
                  <a href="Service" className="text-reset" style={{textDecoration:"none"}}>
                    Service
                  </a>
                </p>
                <p>
                  <a href="Portfolio" className="text-reset" style={{textDecoration:"none"}}>
                    Portfolio
                  </a>
                </p>
                <p>
                  <a href="Contact" className="text-reset" style={{textDecoration:"none"}}>
                    Contact
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4" style={{fontSize:"28px"}}>Contact Us</h6>
                <p>
                  <a href="#!" className="text-reset" style={{textDecoration:"none"}}>
                    contact@flipcodesolutions.com
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{textDecoration:"none"}}>
                    +91 997 940 4044
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{textDecoration:"none"}}>
                    Flipcode Solutions Private Limited Nr. Panama Sales, Dalmill
                    Road Surendranagar, Gujarat 363001 India
                  </a>
                </p>
                
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4" style={{fontSize:"28px"}}>Stay Connected</h6>
                <p >
                <i className="fa-brands fa-facebook icon1 " style={{paddingRight:"10%",fontSize:"40px"}}></i>
                <i className="fa-brands fa-instagram icon1" style={{paddingRight:"10%",fontSize:"40px"}}></i>
                <i className="fa-brands fa-linkedin icon1" style={{paddingRight:"10%",fontSize:"40px"}}></i>
                </p>
                
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4"
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.05)" }}
        >
          ©2024 Copyright Flipcodesolution Private Limited
        
        </div>
        {/* <!-- Copyright --> */}
        </div>
      </footer>
      {/* <!-- Footer --> */}
      
    </>
  );
};

export default Footer;
