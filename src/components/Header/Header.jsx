import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/Untitled design.png";
// import ME_2 from "../../assets/me-4.jpg"
// import ME2 from "../../assets/me2.png"
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Masum mohammad</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
        <img className="img1" src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
