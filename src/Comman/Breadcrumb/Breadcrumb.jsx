import React from "react";

const Breadcrumb = (props) => {
  return (
    <>
    <div className="breadcrumb1">
    <div className="container py-5">
      <div className="row py-5">
        <h1 className="text-center display-1">{props.title}</h1>
        <p className="text-center pt-3">{props.detail} contact@flipcodesolutions.com</p>
        <a  className="btn btn-primary pt-3 py-3  ">{props.button}</a>
      </div>
    </div>
    </div>

    </>
  );
};

export default Breadcrumb;
