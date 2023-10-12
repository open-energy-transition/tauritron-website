import React from "react";
import "./Home.css";
import img_bull from "./bull.png";
import { BiSolidChevronsDown } from "react-icons/bi";

const Home = ({ secondSectionRef }) => {
  return (
    <div className="container_home">
      <div>
        <img src={img_bull} className="icon_image" />
      </div>
      <h1 className="main_heading">Tauritron</h1>
      <p className="subHeading">
        An open source web interface for running worldwide energy system
        planning.
      </p>
      <div className="features_container">
        <ul>
          <li>Easy-to-use interface</li>
          <li>Intuitive report-ready visualization and stats</li>
          <li>Flexible model customization</li>
          <li>Developed for large scale optimization</li>
          <li>Multi-cloud and solver integrations</li>
          <li>Powerful simulation and optimization capabilities</li>
          <li>Real-time collaboration tools</li>
          <li>Steadily evolving</li>
        </ul>
      </div>
      <BiSolidChevronsDown
        className="scroll_down"
        onClick={() => {
          if (secondSectionRef.current) {
            secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </div>
  );
};

export default Home;
