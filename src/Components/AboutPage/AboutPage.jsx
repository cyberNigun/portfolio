import React from "react";
import "./AboutPage.css";
import Nigun from "../../img/Nigun.jpeg";
import { themeContext } from "../../Context";
import { useContext } from "react";

const AboutPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="About">
      <div className="a-left">
        <div className="a-about">
          <span className="heading" style={{ color: darkMode ? "white" : "" }}>
            About <span>Me</span>
          </span>
          <span>
            Hello! My name is Al ameen and I enjoy creating things that is live
            on the internet. My interest in web development started back in 2020
            when I decided to try editing some stuffs on the web — turns out to
            be fun afterall also visited a blog that taught me a lot about HTML
            & CSS! Fast-forward to today, and I’ve had the privilege of working
            on some big projects myself, My main focus these days is building
            accessible, inclusive Landing pages and web Apps for a variety of
            clients.
          </span>
        </div>
      </div>
      <div className="a-right">
        <img src={Nigun} alt="" />

        <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default AboutPage;
