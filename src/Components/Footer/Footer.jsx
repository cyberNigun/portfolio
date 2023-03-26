import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Akinlolua3@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/akinlolua3">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://twitter.com/anonymousNigun">
            <Twitter color="white" size="3rem" />
          </a>
          <a href="https://github.com/cyberNigun">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
