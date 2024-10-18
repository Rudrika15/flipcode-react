import React from "react";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb
        title="Let's discuss your next project"
        detail="Are you ready to turn your idea into reality? At Flipcode Solutions,
                we specialize in delivering high-quality IT solutions tailored to your needs. Whether you have a project in mind or need guidance on how to start, we’re here to help. reach out to us at"
        button="CONTACT US"
      />
      <div className="text-center w-55 py-5" style={{ fontWeight: "Roboto" }}>
        <h3>
          Ready to bring your project ? Contact us today for on-time, bug-free
          solutions. <br />
          Let’s create something remarkable together!
        </h3>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-5">
            <img src="img/contactus.jpg" alt="" style={{ width: "90%" }} />
          </div>
          <div className="col-md-7 py-5 ">
            <div class="form-floating mb-3">
              <input
                type="name"
                class="form-control"
                id="floatingName"
                placeholder="name@example.com"
              />
              <label for="floatingName">Name</label>
            </div>

            <div class="form-floating">
              <input
                type="Email"
                class="form-control"
                id="floatingEmail"
                placeholder="Email"
              />
              <label for="floatingEmail">Email address</label>
            </div>  
              <br />
              <div class="form-floating mb-3">
              <input
                type="Contact"
                class="form-control"
                id="floatingContact"
                placeholder="name@example.com"
              />
              <label for="floatingContact">Contact Number</label>
            </div>

            <div class="form-floating">
              <input
                type="Message"
                class="form-control"
                id="floatingMessage"
                placeholder="Message"
              />
              <label for="floatingMessage">Message</label>
            </div>       
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
