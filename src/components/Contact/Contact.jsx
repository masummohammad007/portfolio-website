import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const notify = () => toast("Done !");

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('Gmail', 'Masum mohammad', form.current, '-mDS9Gp-ssTx9Dpx4')
      .then((result) => {
           console.log(result.text)
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__optiens">
          <artical className="contact__optien">
            <MdOutlineEmail className="contact__optien-icon" />
            <h4>Email</h4>
            <h5  className="email-custom">masummohammadinfo@gmail.com</h5>
            <a href="masummohammadinfo@gmail.com" target="_blank">
              Sent a Massage
            </a>
          </artical>

          <artical className="contact__optien">
            <RiMessengerLine className="contact__optien-icon" />
            <h4>Facebook</h4>
            <h5>Masum mohammad</h5>
            <a
              href="https://www.facebook.com/Mmohammadfb"
              target="_blank"
            >
              Sent a Massage
            </a>
          </artical>

          <artical className="contact__optien">
            <BsWhatsapp className="contact__optien-icon" />
            <h4>WhatApp</h4>
            <h5>01773335779</h5>
            <a
              href="https://api.whatsapp.com/sens?phone01773335779"
              target="_blank"
            >
              Sent a Massage
            </a>
          </artical>
        </div>
        {/* END OF CONTACT OPTIENS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Massage"
            required
          ></textarea>
          <button onClick={notify} type="submit" className="btn btn-primary">
            Sent Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
