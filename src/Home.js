import React, { useRef } from "react";
import "./Home.css";
import img_bull from "./bull.png";
import { BiSolidChevronsDown } from "react-icons/bi";

const Home = ({ secondSectionRef }) => {
  const computeRef = useRef();

  return (
    <div className="container_home">
      <div>
        <img src={img_bull} className="icon_image" />
      </div>
      <h1 className="main_heading">Tauritron</h1>
      <p className="subHeading">
        An open source web interface for running worldwide energy system
        planning demo.
      </p>
      <button
        class="my-btn"
        role="button"
        onClick={() => {
          computeRef.current.click();
        }}
      >
        read more
      </button>
      <div className="my_pointer">
        <a
          href={"https://github.com/open-energy-transition/tauritron-website"}
          target="_blank"
          rel="noopener noreferrer"
          ref={computeRef}
        >
          <p>placeholder</p>
        </a>
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
