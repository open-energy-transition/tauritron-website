import gitLogo from "./github.png";
import deployLogo from "./platform.png";
import React, { forwardRef, useLayoutEffect, useRef } from "react";
import "./CanvasButton.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ButtonsData = {
  viz: {
    heading: "Viz Platform",
    features_array: [
      // "Seamless Integration with PyPSA Earth",
      // "Python-Powered Visualization with Streamlit",
      "Dynamic Visualization of PyPSA Earth Models",
    ],
    github_link: "https://github.com/open-energy-transition/tauritron-website",
    deploy_link: "https://viz.tauritron.com/",
    documentation_link: "https://main--comforting-madeleine-30be5f.netlify.app",
  },
  compute: {
    heading: "compute Platform",
    features_array: [
      "Solve pypsa-earth models with any solver seamlessly",
      // "Securely pay for compute and store solved models for free",
      // "with viz-platform, streamline analysis and decision-making",
    ],
    github_link: "https://github.com/open-energy-transition/tauritron-website",
    deploy_link: "https://pypsa-earth-dashboard.com/",
    documentation_link: "https://main--comforting-madeleine-30be5f.netlify.app",
  },
};

const ButtonsContainer = forwardRef(function ButtonsContainer(props, ref) {
  const once = useRef(true);
  const computePlatformRef = useRef();
  const computeGitRef = useRef();
  const vizGitRef = useRef();
  const vizPlatformRef = useRef();

  useLayoutEffect(() => {
    if (once.current) {
      once.current = false;
      ScrollTrigger.create({
        animation: gsap.to("body", {
          backgroundColor: "#f6c17c",
          color: "white",
          overwrite: "auto",
        }),
        trigger: ref.current,
        start: "0 90%",
        end: "0 0",
        scrub: 2,
      });
    }
  }, []);

  return (
    <div className="button_Container" ref={ref}>
      <div className="main_btn">
        <div className="before_container">
          <h1 className="main_text_card">{ButtonsData.viz.heading}</h1>
          {ButtonsData.viz.features_array.map((feature) => {
            return <p className="subtext_card"> {feature} </p>;
          })}
          <div className="compute_button">
            {/* github button */}
            <button
              className="my-btn"
              role="button"
              onClick={() => {
                vizGitRef.current.click();
              }}
            >
              {/* <img src={gitLogo} className="btn-img" /> */}
              Github
            </button>
            <div className="my_pointer">
              <a
                href={ButtonsData.viz.github_link}
                target="_blank"
                rel="noopener noreferrer"
                ref={vizGitRef}
              >
                <p>placeholder</p>
              </a>
            </div>
            {/* platform button */}
            <button
              className="my-btn"
              role="button"
              onClick={() => {
                vizPlatformRef.current.click();
              }}
            >
              {/* <img src={gitLogo} className="btn-img" /> */}
              Platform
            </button>
            <div className="my_pointer">
              <a
                href={ButtonsData.viz.deploy_link}
                target="_blank"
                rel="noopener noreferrer"
                ref={vizPlatformRef}
              >
                <p>placeholder</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main_btn">
        <div className="before_container">
          <h1 className="main_text_card">{ButtonsData.compute.heading}</h1>
          {ButtonsData.compute.features_array.map((feature) => {
            return <p className="subtext_card"> {feature} </p>;
          })}
          <div className="compute_button">
            {/* github button */}
            <button
              class="my-btn"
              role="button"
              onClick={() => {
                computeGitRef.current.click();
              }}
            >
              {/* <img src={deployLogo} className="btn-img" /> */}
              Github
            </button>
            <div className="my_pointer">
              <a
                href={ButtonsData.compute.github_link}
                target="_blank"
                rel="noopener noreferrer"
                ref={computeGitRef}
              >
                <p>placeholder</p>
              </a>
            </div>
            {/* platform button */}
            <button
              class="my-btn"
              role="button"
              onClick={() => {
                computePlatformRef.current.click();
              }}
            >
              {/* <img src={deployLogo} className="btn-img" /> */}
              Platform
            </button>
            <div className="my_pointer">
              <a
                href={ButtonsData.compute.deploy_link}
                target="_blank"
                rel="noopener noreferrer"
                ref={computePlatformRef}
              >
                <p>placeholder</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ButtonsContainer;
