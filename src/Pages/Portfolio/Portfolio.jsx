import React,{useState} from "react";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import data from "../../Json/Portfolio/data.json";

const Portfolio = () => {
  const [item , setItems] = useState(data);
 const filterItem = (categItem) =>{
  const updatedItem = data.filter((curElem) =>{
    return curElem.category === categItem;
  });
  setItems(updatedItem);
 }
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
              onClick={()=> setItems(data) }
              
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
              onClick={()=> filterItem('web-app') }
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
              onClick={()=> filterItem('mobile-app') }
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
            {data.map((items) =>{
              const {id,photo}= items;

              return(
                <div className="col-py-5 col-md-4 p-md-5 mb-md-0" key={id}>
                <img src={item.photo} className="card-img-top" alt="..." />
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
