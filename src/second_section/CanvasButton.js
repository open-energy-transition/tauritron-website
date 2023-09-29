import "./CanvasButton.css";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { GrGithub, GrDeploy } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { BsFiletypeDoc } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Timeline } from "gsap/gsap-core";

export default function CanvasButton({ text, buttonData }) {
  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  const once = useRef(true);

  const tl = gsap.timeline({ paused: true, duration: 0.4 });

  useLayoutEffect(() => {
    console.log("button data", buttonData);
    if (once.current) {
      once.current = false;
      setTimeout(() => {
        tl.to(beforeRef.current, {
          opacity: 0,
        });
        tl.to(afterRef.current, {
          opacity: 1,
        });
      }, 1000);
    }
  }, []);

  const enterHandler = () => {
    tl.play();
  };

  const leaveHandler = () => {
    tl.reverse();
  };

  return (
    <>
      <div
        className="main_btn"
        onMouseEnter={enterHandler}
        onMouseLeave={leaveHandler}
      >
        <div className="before_container" ref={beforeRef}>
          <h1 className="main_text_card">{buttonData.heading}</h1>
          <ul className="subtext_card">
            {buttonData.features_array.map((feature) => {
              return <li key={feature[2]}>{feature}</li>;
            })}
          </ul>
        </div>
        <div className="after_container" ref={afterRef}>
          <a
            href={buttonData.deploy_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="list_element">
              <CgWebsite />
              <p>platform link</p>
            </div>
          </a>
          <a
            href={buttonData.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="list_element">
              <GrGithub />
              <p>github link</p>
            </div>
          </a>
          <a
            href={buttonData.documentation_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="list_element">
              <BsFiletypeDoc />
              <p>documentation link</p>
            </div>
          </a>
        </div>
      </div>

      {/* <div className="main_btn">{text}</div> */}
    </>
  );
}
