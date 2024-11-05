import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import Technology from "../../Comman/technology/technology";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Career = () => {
  const [toggle, setToggle] = useState(true);
  const [secondtoggle, setsecondToggle] = useState(true);
  const [threetoggle, setThreeToggle] = useState(true);
  const [fourtoggle, setFourToggle] = useState(true);
  const [fivetoggle, setFiveToggle] = useState(true);
  const [setShowModal]=useState(true);
  const handalOpen=()=>{
    setShowModal(true);
  }


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
                    <button className="btncarapply"
                    onClick={() => handalOpen}>Apply More</button>
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
                                <strong>Skills:</strong> Basic understanding of
                                JavaScript, HTML, and CSS. Experience with
                                React.js is a plus but not required. Eagerness
                                to learn and grow in a fast-paced environment.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Qualification: </strong>Pursuing or
                                recently completed a degree in Computer Science,
                                Software Engineering, or a related field. Strong
                                analytical and problem-solving skills. Excellent
                                communication and teamwork abilities.
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
                              <p>
                                <strong>Mode:</strong> Full Time
                              </p>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>  
                  {/* return(
                  <div className="row">
                    {(
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <label htmlFor="">Name</label>
                    <input type="text" />
                  
                  </div> 
                  )}
                  </div>
                  )           */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
      {/* 2 button */}
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
                    <button
                      className="btncar "
                      onClick={() => setsecondToggle(!secondtoggle)}
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
                        {secondtoggle && (
                          <ul class="">
                            <li>
                              <p>
                                <strong>Experience: </strong>0-1 years
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Skills:</strong> Basic understanding of
                                PHP, MySQL, and RESTful APIs. Experience with
                                Laravel is a plus but not required. Willingness
                                to learn and take on challenges in a dynamic
                                work environment.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Qualification: </strong> Currently
                                pursuing or recently completed a degree in
                                Computer Science, Software Engineering, or a
                                related field. Strong logical thinking and
                                problem-solving skills. Good communication and
                                collaboration abilities
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Responsibility: </strong>Assist in
                                developing and maintaining back-end components
                                of web applications using Laravel, Collaborate
                                with front-end developers to integrate
                                user-facing elements, Write clean, secure, and
                                well-documented code, Debug and resolve
                                technical issues, Participate in code reviews
                                and team meetings.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Mode:</strong> Full Time
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Status:</strong> Open
                              </p>
                            </li>
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
      {/* 3 button */}
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
                    <button
                      className="btncar"
                      onClick={() => setThreeToggle(!threetoggle)}
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
                        {threetoggle && (
                          <ul class="">
                            <li>
                              <p>
                                <strong>Experience: </strong>0-1 years
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Skills:</strong> Basic understanding of
                                Dart programming language and Flutter framework.
                                Experience with mobile development (iOS/Android)
                                is a plus but not required. Eagerness to learn
                                and adapt in a fast-paced environment.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Qualification: </strong>Currently
                                pursuing or recently completed a degree in
                                Computer Science, Software Engineering, or a
                                related field. Strong analytical and
                                problem-solving skills. Excellent communication
                                and teamwork abilities.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Responsibility: </strong>Assist in the
                                development and maintenance of mobile
                                applications using Flutter, Collaborate with
                                designers and backend developers to create
                                seamless user experiences, Write clean and
                                efficient code, Troubleshoot and debug issues
                                across different devices and platforms, Stay
                                updated with the latest trends in mobile app
                                development.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Mode:</strong> Full Time
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Status:</strong> Open
                              </p>
                            </li>
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
      {/* 4 button */}
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
                    <button
                      className="btncar"
                      onClick={() => setFourToggle(!fourtoggle)}
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
                        {fourtoggle && (
                          <ul class="">
                            <li>
                              <p>
                                <strong>Experience: </strong>0-1 years
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Skills:</strong> Basic understanding of
                                JavaScript, Node.js, and RESTful APIs.
                                Experience with databases such as MongoDB or
                                MySQL is a plus but not required. Willingness to
                                learn and grow in a fast-paced environment.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Qualification: </strong>Currently
                                pursuing or recently completed a degree in
                                Computer Science, Software Engineering, or a
                                related field. Strong problem-solving and
                                analytical skills. Good communication and
                                collaboration abilities.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Responsibility: </strong> Assist in the
                                development and maintenance of server-side logic
                                using Node.js, Collaborate with front-end
                                developers to integrate user-facing elements
                                with server-side logic, Write clean, efficient,
                                and reusable code, Implement security and data
                                protection measures, Troubleshoot and debug
                                server-side issues, Stay updated with the latest
                                trends in backend development.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Mode:</strong> Full Time
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Staus:</strong> Open
                              </p>
                            </li>
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
      {/* 5 button */}
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
                    <button
                      className="btncar"
                      onClick={() => setFiveToggle(!fivetoggle)}
                    >
                      View More
                    </button>
                    <button className="btncarapply">Apply More</button>
                  </div>
                  <div
                    className="job-discription mt-3 "
                    style={{ display: "block" }}
                  >
                    <div className="row">
                      <div className="col-md-10">
                        {fivetoggle && (
                          <ul class="">
                            <li>
                              <p>
                                <strong>Experience: </strong>0-1 years
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Skills:</strong> Basic understanding of
                                JavaScript, React, and React Native. Familiarity
                                with mobile development is a plus but not
                                required. Eagerness to learn and adapt in a
                                fast-paced environment.
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Qualification: </strong>Currently
                                pursuing or recently completed a degree in
                                Computer Science, Software Engineering, or a
                                related field. Strong problem-solving and
                                analytical skills. Good communication and
                                teamwork abilities
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Responsibility: </strong> Assist in the
                                development and maintenance of mobile
                                applications using React Native, Collaborate
                                with designers and backend developers to create
                                seamless user experiences, Write clean,
                                efficient, and reusable code, Debug and
                                troubleshoot issues on different mobile
                                platforms (iOS/Android), Stay updated with the
                                latest trends in mobile developmen
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Mode:</strong> Full Time
                              </p>
                            </li>
                            <li>
                              <p>
                                <strong>Status:</strong> Open
                              </p>
                            </li>
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
      <br />
      <br />
      <br />
    </>
  );
};

export default Career;
