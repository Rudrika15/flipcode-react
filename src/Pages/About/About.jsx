import React, { useEffect } from "react";
import Navbar from "../../Comman/Navbar/Navbar";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import Footer from "../../Comman/footer/footer";
import Technology from "../../Comman/technology/technology";
import about from "../../Json/About Us/about.json";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Breadcrumb
        title="Who We Are"
        detail="We are a forward-thinking IT firm committed to leveraging advanced technology and expertise to create impactful solutions and foster meaningful client relationships. For more information or to discuss how we can assist you, contact"
        button="About us"
      />
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
      {/* <!---website advantage--> */}
      <div className="adva">
        <div className="container py-5 d-flex ">
          <div className="row col-md-12 ">
            <div class="card-body col-md-4 text-center">
              <h4 class="card-subtitle mb-2  text-white">
                50<i class="bi bi-plus-lg "></i>
              </h4>
              <p class="card-text fs-4 fw-bolder">
                Projects delivered successfully
              </p>
            </div>

            <div class="card-body col-md-4 text-center">
              <h4 class="card-subtitle mb-2 text-white">
                20<i class="bi bi-plus-lg"></i>
              </h4>
              <p class="card-text fs-4 fw-bolder">Expert under same roof</p>
            </div>

            <div class="card-body col-md-4 text-center">
              <h4 class="card-subtitle mb-2 text-white">
                50<i class="bi bi-plus-lg"></i>
              </h4>
              <p class="card-text fs-4 fw-bolder">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fuild bg-light ">
        <div className="container">
          <div className="row py-4 text-center">
            <h1 className="fw-bold ">Vision</h1>
            <p className="fw-light">
              Our vision is to be a catalyst for a connected and technologically
              advanced future. We aspire to be a driving force behind the
              digital transformation of businesses, fostering a world where
              technology empowers organizations to achieve unparalleled success.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center py-4">
          <h1 className="fw-bold">Why Choose Us?</h1>
          <p className="fw-light py-2">
            Welcome to our new IT company, FLIPCODE SOLUTIONS ! We understand
            that choosing the right IT partner is a crucial decision for your
            business. Here's why <br /> you should choose us:
          </p>
        </div>
      </div>

      {/* why choose us */}
      <div className="container">
        <div className="row">
          <div class="row  g-4">
            <div class="col-md-3">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-globe-americas"></i>
                  </h5>
                  <p class="card-text py-4">Expertise and Experience</p>
                  <p>
                    Our team comprises highly skilled and experienced IT
                    professionals who have worked on a diverse range of
                    projects. We have a proven track record of delivering
                    successful solutions to clients from various industries.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-android"></i>
                  </h5>
                  <p class="card-text py-4">Cutting-edge Technology</p>
                  <p>
                    We stay up-to-date with the latest technological
                    advancements in the IT industry. Our company's culture
                    revolves around innovation and continuous learning, ensuring
                    that we offer the most modern and efficient solutions to our
                    clients.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-cloud-fog2"></i>
                  </h5>
                  <p class="card-text py-4">Customized Solutions</p>
                  <p>
                    We believe that every business is unique, and so are its IT
                    needs. We take the time to understand your specific
                    requirements and tailor our solutions accordingly. Our goal
                    is to provide personalized and scalable IT services that
                    align perfectly with your business goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-dropbox"></i>
                  </h5>
                  <p class="card-text py-4">Reliable Support</p>
                  <p>
                    Our commitment to customer satisfaction is unwavering. We
                    offer reliable and responsive support to address any issues
                    or concerns that may arise during or after the
                    implementation of our solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div class="row  g-4">
            <div class="col-md-3">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-shield-fill-check"></i>
                  </h5>
                  <p class="card-text py-4">Security and Privacy</p>
                  <p>
                    We prioritize the security and confidentiality of your data.
                    Our team implements robust security measures to safeguard
                    your sensitive information from potential threats.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-shield-fill-check"></i>
                  </h5>
                  <p class="card-text py-4">Cost-Effective Solutions</p>
                  <p>
                    We understand the importance of cost-effectiveness in
                    today's competitive market. Our company strives to deliver
                    high-quality solutions at reasonable prices, maximizing the
                    value you receive from our services.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-hourglass-split"></i>
                  </h5>
                  <p class="card-text py-4">Timely Delivery</p>
                  <p>
                    We value your time and understand the significance of timely
                    project delivery. Our team adheres to strict timelines,
                    ensuring that your IT projects are completed on schedule.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-calendar2-check"></i>
                  </h5>
                  <p class="card-text py-4">Client-Centric Approach</p>
                  <p>
                    Your success is our success. We work collaboratively with
                    our clients, keeping them involved throughout the project
                    life cycle. We believe in transparent communication and
                    actively seek feedback to improve our services continually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div class="row  g-4">
            <div class="col-md-6">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-shuffle"></i>
                  </h5>
                  <p class="card-text py-4">Scalability and Flexibility</p>
                  <p>
                    As your business grows, your IT requirements may change. We
                    offer scalable solutions that can adapt to your evolving
                    needs, providing you with the flexibility to upgrade or
                    modify services as necessary.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-200 text-center">
                <div class="card-body">
                  <h5 class="card-title py-4 text-center fs-1">
                    <i class="bi bi-journal-bookmark-fill"></i>
                  </h5>
                  <p class="card-text py-4">Long-Term Partnership</p>
                  <p>
                    We aim to build long-term partnerships with our clients,
                    assisting them not only with their immediate IT needs but
                    also as a strategic technology partner for their future
                    growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container py-5">
        <div className="row">
          {/* <!-- Carousel wrapper --> */}
          <div
            id="carouselExampleControls"
            data-mdb-carousel-init
            class="carousel slide text-center carousel-dark"
            data-mdb-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Working with Flipcode Solutions has been a game-changer
                      for our business. Their expertise in custom software
                      development is unparalleled. The team's ability to
                      translate our complex requirements into a user-friendly
                      and scalable solution exceeded our expectations. We highly
                      recommend Flipcode Solutions for anyone looking for
                      innovative and reliable IT solutions.
                    </p>
                    <h5 class="mb-3">Narayanbhai Patel, Nima pump</h5>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      We engaged Flipcode Solutions for a critical mobile app
                      development project, and they delivered beyond our
                      expectations. Their attention to detail, adherence to
                      timelines, and commitment to quality impressed us
                      throughout the process. Thanks to Flipcode Solutions, our
                      app is now a cornerstone of our customer engagement
                      strategy.
                    </p>
                    <h5 class="mb-3">Jimit shah, Autotec Tech</h5>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      The level of professionalism and commitment exhibited by
                      Flipcode Solutions is exceptional. Their responsive web
                      development services transformed our online presence. The
                      team's creativity and technical proficiency are evident in
                      the sleek and user-friendly website they delivered.
                      Flipcode Solutions is our go-to partner for all our
                      digital initiatives.
                    </p>
                    <h5 class="mb-3">Mitesh Jaiswal, Bhoomi Enterprises</h5>
                  </div>
                </div>
               
              </div>
            </div>
            <button
              data-mdb-button-init
              class="carousel-control-prev"
              type="button"
              data-mdb-target="#carouselExampleControls"
              data-mdb-slide="prev"
            >
              <span
                class="carousel-control-prev-icon text-body"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              data-mdb-button-init
              class="carousel-control-next"
              type="button"
              data-mdb-target="#carouselExampleControls"
              data-mdb-slide="next"
            >
              <span
                class="carousel-control-next-icon text-body"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- Carousel wrapper --> */}
        </div>
      </div>

      <Technology />
         </>
  );
};

export default About;
