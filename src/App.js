import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  Image as ImageImpl,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import "./App.css";
import Home from "./Home";
import ButtonsContainer from "./second_section/ButtonsContainer";
import { BiSolidChevronsDown } from "react-icons/bi";

export default function App() {
  const secondSectionRef = useRef();

  return (
    <>
      <div className="canvas_container">
        <Canvas className="canvas_particles">
          <Suspense fallback={null} />
          <Preload all />
          <Sparkles
            count={1000}
            scale={[5, 5, 6]}
            position={[0, 0, 2.5]}
            color={"#ffba00"}
            size={2}
            speed={1}
          />
        </Canvas>
      </div>
      <Home secondSectionRef={secondSectionRef} />
      <ButtonsContainer ref={secondSectionRef} />
    </>
  );
}
