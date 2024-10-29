import React from 'react'

const Testimonal = () => {
  return (
    <>
    <div className="container py-5">
      <div className="row text-center fw-bolder">
        <h1 className='testi'>Testimonials</h1>
      </div>
    </div>
    <div className="container-fluid abouttest  py-5 ">
      <div className="container ">
        <div className="row">
          {/* <!-- Carousel wrapper --> */}
          <div
            id="carouselExampleControls"
            data-mdb-carousel-init
            class="carousel slide text-center "
            data-mdb-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8 box ">
                    <p className="text box1">
                      <i className="fas fa-quote-left pe-2 "></i>
                      Working with Flipcode Solutions has been a game-changer
                      for our business. Their expertise in custom software
                      development is unparalleled. The team's ability to
                      translate our complex requirements into a user-friendly
                      and scalable solution exceeded our expectations. We highly
                      recommend Flipcode Solutions for anyone looking for
                      innovative and reliable IT solutions.
                      <h5 className="mb-3">Narayanbhai Patel, Nima pump</h5>
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row d-flex justify-content-center ">
                  <div className="col-lg-8">
                    <p className="text box2">
                      <i className="fas fa-quote-left pe-2"></i>
                      We engaged Flipcode Solutions for a critical mobile app
                      development project, and they delivered beyond our
                      expectations. Their attention to detail, adherence to
                      timelines, and commitment to quality impressed us
                      throughout the process. Thanks to Flipcode Solutions, our
                      app is now a cornerstone of our customer engagement
                      strategy.
                      <h5 className="mb-3">Jimit shah, Autotec Tech</h5>
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row d-flex justify-content-center ">
                  <div className="col-lg-8">
                    <p className="text box3">
                      <i className="fas fa-quote-left pe-2"></i>
                      The level of professionalism and commitment exhibited by
                      Flipcode Solutions is exceptional. Their responsive web
                      development services transformed our online presence. The
                      team's creativity and technical proficiency are evident in
                      the sleek and user-friendly website they delivered.
                      Flipcode Solutions is our go-to partner for all our
                      digital initiatives.
                      <h5 className="mb-3">Mitesh Jaiswal, Bhoomi Enterprises</h5>
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
            <button
              data-mdb-button-init
              className="carousel-control-prev"
              type="button"
              data-mdb-target="#carouselExampleControls"
              data-mdb-slide="prev"
            >
              <span
                className="carousel-control-prev-icon text-body"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              data-mdb-button-init
              className="carousel-control-next"
              type="button"
              data-mdb-target="#carouselExampleControls"
              data-mdb-slide="next"
            >
              <span
                className="carousel-control-next-icon text-body"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- Carousel wrapper --> */}
        </div>
      </div>
      </div>
    </>
  )
}

export default Testimonal;
