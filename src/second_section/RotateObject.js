import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";

const RotateObject = () => {
  const mainstate = useThree();
  useEffect(() => {
    console.log("mainstate", mainstate);
    mainstate.camera.position.x = 100;
    mainstate.camera.position.y = 100;
    mainstate.camera.position.z = 100;
  }, []);

  return <></>;
};

export default RotateObject;
