import React,{useEffect, useState} from "react";
import Breadcrumb from "../../Comman/Breadcrumb/Breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";


const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [message, setmessage] = useState();
  const [nameError,setNameError] =useState(false);
  const [emailError,setemailError] =useState(false);
  const [contactError,setContactError] = useState(false);
  const [messageError,setMessageError] = useState(false);
  const emailregulare = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  

  const handleName = (e) => {
      var name = e. target.value;
      if(name.length < 0)
      {
          setNameError(true);
      }
      else
      {
        setNameError(false);
      }
  }
  const handleEmail = (e) =>{
    var email = e.target.value;
    if(!email.match(emailregulare))
      {
        setemailError(true);
    }
    else
    {
      setemailError(false);
    }

  }
  const handleContact = (e) =>{
    var contact = e.target.value;
    if(contact.length < 10)
      {
        setContactError(true);
    }
    else
    {
      setContactError(false);
    }

  }
  const handleMessage = (e) =>{
    var message = e.target.value;
    if(message.length < 0)
      {
        setMessageError(true);
    }
    else
    {
      setMessageError(false);
    }

  }
  useEffect(() => {
    AOS.init({
      });
  }, []);
  return (
    <>
      <Helmet>
         <title>Contact Us</title>
      </Helmet>
      <Breadcrumb
        title="Let's discuss your next project"
        detail="Are you ready to turn your idea into reality? At Flipcode Solutions,
                we specialize in delivering high-quality IT solutions tailored to your needs. Whether you have a project in mind or need guidance on how to start, we’re here to help. reach out to us at"
        button="CONTACT US"
      />
    <div data-aos="zoom-in">

      <div className="text-center w-55 py-5" style={{ fontWeight: "Roboto" }}>
        <h3>
          Ready to bring your project ? Contact us today for on-time, bug-free
          solutions. <br />
          Let’s create something remarkable together!
        </h3>
      </div>
      </div>  
      <div className="container ">
        <div className="row">
          <div className="col-md-5">
            <img src="img/contactus.jpg" alt="" style={{ width: "90%" }} />
          </div>
          <div className="col-md-7 py-5 ">
            <div class="form-floating mb-3" > 
            {/* //onSubmit={handlesubmit}// */}
              <input
                type="name"
                name="name"
                class="form-control"
                id="floatingName"
                placeholder="name@example.com"
                value={name} required
                onChange={handleName}
              />
              <br />
              {nameError ? <span style={{color:"red"}}> The Name fiid is required</span> : ""}
              <label for="floatingName">Name</label>
            </div>

            <div class="form-floating">
              <input
                type="Email"
                name="email"
                class="form-control"
                id="floatingEmail"
                placeholder="Email"
                value={email} required
                onChange={handleEmail}
              />
              <br />
              {emailError ? <span style={{color:"red"}}> The Email fiid is required</span> : ""}
              <label for="floatingEmail">Email address</label>
            </div>
            <br />
            <div class="form-floating mb-3">
              <input
                type="Contact"
                name="contact"
                class="form-control"
                id="floatingContact"
                placeholder="name@example.com"
                value={contact} required
                onChange={handleContact}
              />
              {contactError ? <span style={{color:"red"}}> The contact fild is required</span> : ""}

              <label for="floatingContact">Contact Number</label>
            </div>
            <br />
            <div class="form-floating">
              <input
                type="Message"
                name="message"
                class="form-control"
                id="floatingMessage"
                placeholder="Message"
                value={message} required 
                onChange={handleMessage}
              />
              {messageError ? <span style={{color:"red"}}> The message fiid is required</span> : ""}
              <label for="floatingMessage">Message</label>
            </div>
            <br />
          
            <div className="row py-4 ">
              <button type="button" class="btn conbtn">
                Get Started
              </button>
              <br />
              <br />
              <p className="coninfo">
                ✓ 100% Guaranteed Security of Your Information
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
         data-aos-anchor-placement="center-bottom">

        <div className="row py-2 text-center">
          <h1 className="contit careffect ">Contact Us</h1>

        </div>
        <div class="row py-3"style={{paddingLeft:"5%",justifyContent:"space-between"}}>
          <div class="col-sm-4 mb-3 mb-sm-0 " >
            <div class="card-body">              
              <h5 class="card-title conicon">
                <i class="fa-solid fa-location-dot"></i>
              </h5>
              <h5 class="card-title contitle ">
                 Our Location
              </h5>
              <p class="card-text conadd py-3">
                Flipcode Solutions Private Limited <br /> Nr.  Panama Sales, Dalmill
                road <br /> Surendranagr,<br /> Gujarat 363001 India
              </p>
            </div>
          </div>
          
          <div class="col-sm-4">
            <div class="card-body ">
            <h5 class="card-title conicon"><i class="fa-solid fa-phone"></i></h5>
              <h5 class="card-title contitle py-2">Phone Number</h5>
              <p class="card-text conadd py-2">
              +91 9979404044
              </p>
            </div>
          </div>
          <br />
          <div class="col-sm-4">
            <div class="card-body">
              <h5 class="card-title conicon"><i class="fa-solid fa-envelope"></i></h5>
              <h5 class="card-title contitle py-2">Email Address</h5>
              <p class="card-text conadd py-2">
              contact@flipcodesolutions.com
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="col-md-12 mb-5 col-lg-12 col-sm-6 py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.941597342851!2d71.62444027476162!3d22.730412027168843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959418fd76eccc1%3A0xd48553a8e44d7d92!2sflipcode%20solutions!5e0!3m2!1sen!2sin!4v1729491877553!5m2!1sen!2sin"
          style={{
            width: "100%",
            height: "450px",
            border: "0",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
