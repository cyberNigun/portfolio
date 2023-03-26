import React from "react";
import "./Intro.css";
// import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Twitter from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";
import Work from "../Work/Work";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";
// import { motion } from "framer-motion";

const Intro = () => {
  // const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hello!</span>
          <span>I'm Al ameen</span>
          <span>
            A Frontend Developer with high level of experience in web designing
            and development, also producing quality work
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/cyberNigun">
            <img src={Github} alt="" />
          </a>
          <a href="https://twitter.com/anonymousNigun">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://instagram.com/akinlolua3">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <Work />
      </div>
    </div>
  );
};
export default Intro;
