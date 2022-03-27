import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/masum-mohammad-35b2b41b8/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/masummohammad007" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/azoobmasum/?hl=en" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
