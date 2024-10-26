import React, { useState } from "react";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import data from "../../Json/Portfolio/data.json";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  const [items, setItems] = useState(data);
  const [activeTab, setActiveTab] = useState("all");

  const filterItem = (categItem) => {
    const updatedItem = data.filter(
      (curElem) => curElem.category === categItem
    );
    setItems(updatedItem);
    setActiveTab(categItem);
  };

  const resetItems = () => {
    setItems(data);
    setActiveTab("all");
  };

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Breadcrumb
        title="Distinguished Clientele"
        detail="We take pride in delivering a full spectrum of bespoke IT services..."
        button="PORTFOLIO"
      />
      <nav>
        <div className="container py-5">
          <div
            className="nav nav-tabs"
            id="nav-tab"
            role="tablist"
            style={{ fontSize: "1.2rem" }}
          >
            <button
              className={`nav-link ${activeTab === "all" ? "active" : ""}`}
              id="nav-home-tab"
              onClick={resetItems}
            >
              All App
            </button>
            <button
              className={`nav-link ${activeTab === "web-app" ? "active" : ""}`}
              onClick={() => filterItem("web-app")}
            >
              Web App
            </button>
            <button
              className={`nav-link ${
                activeTab === "mobile-app" ? "active" : ""
              }`}
              onClick={() => filterItem("mobile-app")}
            >
              Mobile App
            </button>
          </div>
        </div>
      </nav>
      {/* my main items section */}
      <div className="tab-content">
        <div id="nav-home" className="container tab-pane active">
          <div className="row">
            {items.map((item) => {
              const { id, photo } = item;

              return (
                <div className="col-md-4 p-md-5 mb-md-0" key={id}>
                  <img src={photo} className="card-img-top" alt="..." />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
