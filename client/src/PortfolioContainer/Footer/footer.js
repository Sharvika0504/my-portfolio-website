import React from "react";
import scrollService from "../../utilities/scrollService";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
        <p>© Copyright 2024, Sharvika Nitin Kulkarni.All Rights Reserved.</p>
        <div className="scroll-container">
      <button
        className="btn-scroll" onClick={() => scrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
    </div> 
  );
}
