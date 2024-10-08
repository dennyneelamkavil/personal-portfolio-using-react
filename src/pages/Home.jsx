import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeImage from "./Photos/Home Icon.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={homeImage} alt="Denny" className="home-image" />
      <h1 className="home-title">Welcome to My Portfolio!</h1>
      <p className="home-subtitle">
        I'm a full stack web developer with a passion for building beautiful and
        functional websites.
      </p>
      <Link to={"/about"} className="home-button">
        Learn More About Me
      </Link>
    </div>
  );
};

export default Home;
