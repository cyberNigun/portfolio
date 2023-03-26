import React from "react";
import "./Work.css";
import html from "../../img/html.png";
import react from "../../img/react.png";
import coding from "../../img/coding.png";
import css from "../../img/css.png";
import javascript from "../../img/javascript.png";

const Work = () => {
  return (
    <div className="w-right">
      {/* <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
      /> */}
      <div className="w-mainCircle">
        <div className="w-secCircle">
          <img src={html} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={react} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={coding} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={css} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={javascript} alt="" />
        </div>
      </div>
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    </div>
  );
};

export default Work;
