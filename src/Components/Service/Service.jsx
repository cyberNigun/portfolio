import React from "react";
import "./Service.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Service = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="service" id="Service">
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span>
          Here are a few technologies I’ve been working with recently, <br />{" "}
          i'm looking forward to building great things for you:
        </span>
      </div>

      <div className="s-right">
        <span className="html">
          HTML 90%
          <div id="html-progress"></div>
        </span>
        <span className="css">
          CSS 70%
          <div id="css-progress"></div>
        </span>
        <span className="js">
          Javascript 80%
          <div id="js-progress"></div>
        </span>
        <span className="react">
          ReactJs 85%
          <div id="react-progress"></div>
        </span>
        <span className="node">
          NodeJs 56%
          <div id="node-progress"></div>
        </span>
      </div>
    </div>
  );
};
export default Service;
