import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

import gmail from "../../../src/assets/ContactMe/gmail-svgrepo-com.svg";
import location from "../../../src/assets/ContactMe/location-pin-svgrepo-com.svg";
import phone from "../../../src/assets/ContactMe/phone-plus-alt-svgrepo-com.svg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeader from "../../utilities/ScreenHeader/ScreenHeader";
import Animations from "../../utilities/animations";
import ScrollService from "../../utilities/scrollService";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeader subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
          <div className="back-form">
            <h4>Send Your Email Here!</h4>
            <form onSubmit={submitForm}>
              <p>{banner}</p>
              <label htmlFor="name">Name</label>
              <input type="text" onChange={handleName} value={name} />

              <label htmlFor="email">Email</label>
              <input type="email" onChange={handleEmail} value={email} />

              <label htmlFor="message">Message</label>
              <textarea type="text" onChange={handleMessage} value={message} />

              <div className="send-btn">
                <button type="submit">
                  send
                  <i className="fa fa-paper-plane" />
                  {bool ? (
                    <b className="load">
                      <img src={load1} alt="image not responding" />
                    </b>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="footer-container-contactMe">
            <div className="contact-details-container">
              <h2>Contact Info</h2>
              <div className="info-container">
                <img src= {gmail} alt="gmail logo"></img>
                <h3>sharvika.kulkarni05@gmail.com</h3>
              </div>
              <div className="info-container">
                <img src= {phone} alt="phone logo"></img>
                <h3>+1 562-713-9855</h3>
              </div>
              <div className="info-container">
                <img src= {location} alt="gmail logo"></img>
                <h3>Long Beach, California</h3>
              </div>    
            </div>
            <div className="social-media-container">
                <h2>Social Media</h2>
              <div className="social-media-footer">
              <a href="#">
              <p>Facebook</p>
              </a>
              <a href="https://www.linkedin.com/in/sharvika-nitin-kulkarni-91a5b2138/">
                <p>LinkedIn</p>
              </a>
              <a href="https://www.instagram.com/sharvika_kulkarni/">
              <p>Instagram</p>
              </a>
              <a href="https://twitter.com/Sharks0504">
              <p>Twitter</p>
              </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  );
}
