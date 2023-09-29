import React, { useLayoutEffect, useRef } from "react";
import "./CanvasButton.css";
import CanvasButton from "./CanvasButton";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ButtonsData = {
  viz: {
    heading: "Viz Platform",
    features_array: [
      "Seamless Integration with PyPSA Earth",
      "Python-Powered Visualization with Streamlit",
      "Dynamic Visualization of PyPSA Earth Models",
    ],
    github_link: "https://github.com/pypsa-meets-earth/pypsa-earth-lit",
    deploy_link: "https://tauritron.com/",
    documentation_link: "https://main--comforting-madeleine-30be5f.netlify.app",
  },
  compute: {
    heading: "compute Platform",
    features_array: [
      "Solve pypsa-earth models with any solver seamlessly",
      "Securely pay for compute and store solved models for free",
      "with viz-platform, streamline analysis and decision-making",
    ],
    github_link: "https://github.com/pypsa-meets-earth/pypsa-earth-lit",
    deploy_link: "https://tauritron.com/",
    documentation_link: "https://main--comforting-madeleine-30be5f.netlify.app",
  },
};

const ButtonsContainer = () => {
  const main_container_ref = useRef();
  const once = useRef(true);

  useLayoutEffect(() => {
    if (once.current) {
      once.current = false;
      ScrollTrigger.create({
        animation: gsap.to("body", {
          backgroundColor: "#f6c17c",
          color: "white",
          overwrite: "auto",
        }),
        trigger: main_container_ref.current,
        start: "0 90%",
        end: "0 0",
        scrub: 2,
      });
    }
  }, []);

  return (
    <div className="button_Container" ref={main_container_ref}>
      <CanvasButton text={"Viz Platform"} buttonData={ButtonsData.viz} />
      <CanvasButton
        text={"Compute Platform"}
        buttonData={ButtonsData.compute}
      />
    </div>
  );
};

export default ButtonsContainer;
