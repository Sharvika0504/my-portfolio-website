import React from "react";
import Typical from "react-typical";
import scrollService from "../../../utilities/scrollService";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/sharvika-nitin-kulkarni-91a5b2138/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/sharvika_kulkarni/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/Sharks0504">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Sharvika Nitin Kulkarni</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Developer 💻",
                    1000,
                    "Full Stack Developer 💯",
                    1000,
                    "Backend Developer ⚒️",
                    1000,
                    "AI/ML Engineer 🧠",
                    1000,
                    "Automation Engineer 🤖",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Unleashing Innovation with Code!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => scrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{""}
            </button>
            <a href="SharvikaKulkarni_SWE_3.pdf" download="Sharvika Kulkarni_3.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>   
      </div>
    </div>
  );
}
