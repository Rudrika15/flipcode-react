import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import Technology from "../../Comman/technology/technology";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Career = () => {
  const [toggle, setToggle] = useState(true);
  const [secondtoggle,setsecondToggle] = useState(true);
  

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Helmet>
        <title>Carrer</title>
      </Helmet>
      <Breadcrumb
        title="Do What inspires you everyday"
        detail="Want to join the Flipcode team? If you have a passion & want to work for a rapidly growing IT company, check out the listings below or send your resume to"
        button="VIEW JOB OPENING"
      />
      <div data-aos="fade-up" data-aos-duration="3000">
        <div className="row py-4 text-md-center m-sm-3">
          <div className="col-md-12">
            <h2 className="cartitlefirst careffect">Perks Of Joining</h2>
          </div>
        </div>
        <div className="row carcard ">
          <div class="col-md-3" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title cartitle text-center">
                <i class="bi bi-cup-hot"></i>
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary text-center py-2 carsubtitle">
                Coffee & Tea
              </h6>
              <p class="card-text text-center w-30">
                Get the juices flowing every morning with complimentary coffee
                and tea.
              </p>
            </div>
          </div>
          <div class="col-md-3" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title cartitle text-center">
                <i class="bi bi-calendar-heart"></i>
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary text-center py-2 carsubtitle">
                Paid Time Off
              </h6>
              <p class="card-text text-center w-30">
                We believe that if you work hard, you get to play hard too.
                Enjoy paid time off in addition to all main holidays.
              </p>
            </div>
          </div>
          <div class="col-md-3" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title cartitle text-center ">
                <i class="bi bi-clipboard2"></i>
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary text-center py-2 carsubtitle">
                Casual Attire
              </h6>
              <p class="card-text text-center w-30">
                We keep it classy yet casual, so feel free to wear what you feel
                comfortable in!
              </p>
            </div>
          </div>
          <div class="col-md-3" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title cartitle text-center">
                <i class="bi bi-people"></i>
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary text-center py-2 carsubtitle">
                COMMUNITY
              </h6>
              <p class="card-text text-center w-30">
                We host happy hours, employee appreciation events, and some
                awesome team building events.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* open position  */}
      <div className="container">
        <div className="row">
          <div className="row py-5 text-md-center m-sm-3">
            <div className="col-md-12 ">
              <h2 className="carposition">Open Positions</h2>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-8 p-3 pt-4 px-5">
                    <h4>React.js</h4>
                  </div>
                  <div className="col-md-4 text-end pt-4 px-5 ">
                    <button
                      className="btncar"
                      onClick={() => setToggle(!toggle)}
                    >
                      View More
                    </button>
                    <button className="btncarapply">Apply More</button>
                    </div>
                    <div
                      className="job-discription mt-3"
                      style={{ display: "block" }}
                      >
                      <div className="row">
                        <div className="col-md-10">
                          {toggle && (
                            <ul class="">
                              <li>
                                <p>
                                  <strong>Experience: </strong>0-1 years
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Skills:</strong> Basic understanding
                                  of JavaScript, HTML, and CSS. Experience with
                                  React.js is a plus but not required. Eagerness
                                  to learn and grow in a fast-paced environment.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Qualification: </strong>Pursuing or
                                  recently completed a degree in Computer
                                  Science, Software Engineering, or a related
                                  field. Strong analytical and problem-solving
                                  skills. Excellent communication and teamwork
                                  abilities.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Responsibility: </strong>Develop and
                                  maintain user-facing features using React.js,
                                  Collaborate with back-end developers and
                                  designers to implement user interfaces, Write
                                  reusable and efficient code, Troubleshoot and
                                  debug issues, Stay updated with the latest
                                  trends in front-end development.
                                </p>
                              </li>
                              <li>
                                <p><strong>Mode:</strong> Full Time</p></li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-8 p-3 pt-4 px-5">
                    <h4>Laravel</h4>
                  </div>
                  <div className="col-md-4 text-end pt-4 px-5 ">
                    <button className="btncar">View More</button>
                    <button className="btncarapply">Apply More</button>
                  </div> 
                  <div
                      className="job-discription mt-3"
                      style={{ display: "block" }}
                      >
                      <div className="row">
                        <div className="col-md-10">
                          {secondtoggle && (
                            <ul class="">
                              <li>
                                <p>
                                  <strong>Experience: </strong>0-1 years
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Skills:</strong> Basic understanding
                                  of JavaScript, HTML, and CSS. Experience with
                                  React.js is a plus but not required. Eagerness
                                  to learn and grow in a fast-paced environment.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Qualification: </strong>Pursuing or
                                  recently completed a degree in Computer
                                  Science, Software Engineering, or a related
                                  field. Strong analytical and problem-solving
                                  skills. Excellent communication and teamwork
                                  abilities.
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>Responsibility: </strong>Develop and
                                  maintain user-facing features using React.js,
                                  Collaborate with back-end developers and
                                  designers to implement user interfaces, Write
                                  reusable and efficient code, Troubleshoot and
                                  debug issues, Stay updated with the latest
                                  trends in front-end development.
                                </p>
                              </li>
                              <li>
                                <p><strong>Mode:</strong> Full Time</p></li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-8 p-3 pt-4 px-5">
                    <h4>Flutter</h4>
                  </div>
                  <div className="col-md-4 text-end pt-4 px-5 ">
                    <button className="btncar">View More</button>
                    <button className="btncarapply">Apply More</button>
                  </div>                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-8 p-3 pt-4 px-5">
                    <h4>Node.js Backend</h4>
                  </div>
                  <div className="col-md-4 text-end pt-4 px-5 ">
                    <button className="btncar">View More</button>
                    <button className="btncarapply">Apply More</button>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-8 p-3 pt-4 px-5">
                    <h4>React Native</h4>
                  </div>
                  <div className="col-md-4 text-end pt-4 px-5 ">
                    <button className="btncar">View More</button>
                    <button className="btncarapply">Apply More</button>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
