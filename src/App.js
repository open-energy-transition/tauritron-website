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
import CanvasButton from "./second_section/CanvasButton";
import ButtonsContainer from "./second_section/ButtonsContainer";

export default function App() {
  return (
    <>
      <div className="canvas_container">
        <Canvas
          style={{
            height: "100vh",
            width: "100vw",
          }}
        >
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
      <Home />
      <ButtonsContainer />
    </>
  );
}

// {/* <h1
//                 style={{
//                   position: "absolute",
//                   top: "20vh",
//                   left: "-5vw",
//                 }}
//               >
//                 home
//               </h1> */}
//               {/* <div
//                 style={{
//                   position: "absolute",
//                   // top: "20vh",
//                   left: "-5vw",
//                 }}
//               >
//                 <Home />
//               </div> */}
//               {/* <Home /> */}
//               <h1 style={{ position: "absolute", top: "0vh", left: "25vw" }}>
//                 to
//               </h1>
//               <h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}>
//                 be
//               </h1>
//               <h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}>
//                 home
//               </h1>
//               <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}>
//                 to
//               </h1>
//               <h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}>
//                 be
//               </h1>
