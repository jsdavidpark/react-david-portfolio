import React from "react";
import { Link } from "react-router-dom";
import Transition from "../components/Transition.jsx";
// import homeImage from "../assets/home-image.png";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and skills.</p>
    </div>
  );
};

export default Transition(Home);
