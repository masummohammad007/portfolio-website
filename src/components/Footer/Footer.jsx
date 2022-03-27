import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {GrTwitter} from 'react-icons/gr';

const Footer = () => {
    return (
        <footer>
          <a href="#" className="footer__logo">TrCode</a>

          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Trstimonial</a></li>
            <li><a href="#trstimonial">Home</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer__socials">
            <a href="https://www.facebook.com/Mmohammadfb" target='_blank'><FaFacebookF/></a>
            <a href="https://www.instagram.com/azoobmasum/?hl=en" target='_blank'><FaInstagram/></a>
            <a href="https://twitter.com/Masum48529061" target='_blank'><GrTwitter/></a>
          </div>
          <div className="coppyright">
             <small>&copy;Masum mohammad . All rights reserved</small>  
          </div>
        </footer>
    );
};

export default Footer;