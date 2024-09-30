import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        I'm a passionate full-stack web developer with a knack for crafting
        robust and user-friendly digital experiences. Equipped with expertise in
        both <b>frontend</b> and <b>backend</b> technologies, I thrive on
        turning ideas into efficient and elegant solutions. With a keen eye for
        design and a commitment to staying updated with the latest industry
        trends, I am dedicated to creating seamless web applications that leave
        a lasting impression. My goal is to leverage my skills to contribute to
        innovative projects and drive impactful results in the ever-evolving
        landscape of web development.
      </p>
      <div>
        <Link to={"/contact"} className="about-button">
          Contact Me
        </Link>
        <Link to={"/projects"} className="about-button">
          My Projects
        </Link>
      </div>
    </div>
  );
}

export default About;
