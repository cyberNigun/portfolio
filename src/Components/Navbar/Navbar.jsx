import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Al ameen</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to={Navbar}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="About" smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to="Service" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to="Projects" smooth={true}>
              <li>Projects</li>
            </Link>
            <Link spy={true} to="Contact" smooth={true}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
