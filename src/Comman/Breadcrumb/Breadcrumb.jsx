import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb1" >
        <ol class="breadcrumb " >
          <li class="breadcrumb-item text-center">
            <a href="#" className="">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
