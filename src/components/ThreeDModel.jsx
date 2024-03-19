import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("src/components/space_boi/scene.gltf"); // Replace with the path to your glTF model file

  return (
    <group position={[0, -2, 0]} rotation={[0, 50, 0]} scale={[0.7, 0.7, 0.7]}>
      <primitive object={gltf.scene} dispose={null} />
    </group>
  );
};

const ThreeDModel = () => {
  return (
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  );
};

export default ThreeDModel;
