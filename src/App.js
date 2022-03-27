import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Experience from "./components/Experience/Experience.jsx";
import Project from "./components/Project/Project";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services/>
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
