import React from "react";
import "./Testimonial.css";
import AVATAR_1 from "../../assets/avatar-1.jpg";
import AVATAR_2 from "../../assets/avater-2.jpg";
import AVATAR_3 from "../../assets/avatar-3.jpg"
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const data = [
    {
      avatar: AVATAR_1,
      id : 1,
      name: "Ernest Achiever",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
    },
    {
      avatar: AVATAR_2,
      id : 2,
      name: "Ernest Achiever",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
    },
    {
      avatar: AVATAR_3,
      id : 3,
      name: "Ernest Achiever",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
    },
  ];

  return (
    <section id="testimonial">
      <h5>Review for clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container trstimonial__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {data.map(({ avatar, name, review,id }) => {
          return (
            <SwiperSlide key={id} className="trstimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
