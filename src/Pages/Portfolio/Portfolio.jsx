import React from "react";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import data from "../../Json/Portfolio/data.json";

const Portfolio = () => {
  // const data = Portfolio;
  return (
    <>
      <Breadcrumb
        title="Distinguished Clientele"
        detail="We take pride in delivering a full spectrum of bespoke IT services..."
        button="PORTFOLIO"
      />
      <nav>
        <div class="container py-5">
          <div
            class="nav nav-tabs"
            id="nav-tab"
            role="tablist"
            style={{ fontsize: "10px" }}
          >
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              All App
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Web App
            </button>

            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Mobile App
            </button>
          </div>
        </div>
      </nav>
      <div className="tab-content">
        <div id="nav-home" className="container tab-pane active">
          <div className="row">
            {data.map((item) => (
              <div className="col-py-5 col-md-4 p-md-5 mb-md-0">
                <img src={item.photo} className="card-img-top" alt="..." />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tab-content ">
        <div id="nav-profile" className="container tab-pane active ">
          <div className="row">
            {data.map((item) => (
              <div className="col-py-5 col-md-4 p-md-5 mb-md-0 ">
                <img src={item.photo} className="card-img-top" alt="..." />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div id="nav-contact" className="container tab-pane active">
          <div className="row">
            {data.map((item) => (
              <div className="col-py-5 col-md-4 p-md-5 mb-md-0">
                <img src={item.photo} className="card-img-top" alt="..." />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
