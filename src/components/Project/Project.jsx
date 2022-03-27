import React from "react";
import "./Project.css";

import IMG_1 from "../../assets/project-1.jpg";
import IMG_2 from "../../assets/project-2.jpg";
import IMG_3 from "../../assets/project-3.png";
import IMG_4 from "../../assets/project-4.jpg";
import IMG_5 from "../../assets/project-5.jpg";
import IMG_6 from "../../assets/project-6.png";

const Project = () => {
  const data = [
    {
      id: 1,
      image: IMG_1,
      title: "This is a porfolio item title",
      github: "https://github.com/masummohammad007",
      demo: "https://dribbble.com/",
    },
    {
      id: 2,
      image: IMG_2,
      title: "This is a portfolio item title",
      github: "hhttps://github.com/masummohammad007",
      demo: "https://dribbble.com/",
    },
    {
      id: 3,
      image: IMG_3,
      title: "This is a portfolio item title",
      github: "https://github.com/masummohammad007",
      demo: "https://dribbble.com/",
    },
    {
      id: 4,
      image: IMG_4,
      title: "This is a portfolio item title",
      github: "https://github.com/masummohammad007",
      demo: "https://dribbble.com/",
    },
    {
      id: 5,
      image: IMG_5,
      title: "This is a portfolio item title",
      github: "https://github.com/masummohammad007",
      demo: "https://dribbble.com/",
    },
    {
      id: 6,
      image: IMG_6,
      title: "This is a portfolio item title",
      github: "https://github.com/masummohammad007",
      demo: "https://dribbble.com/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item__cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
