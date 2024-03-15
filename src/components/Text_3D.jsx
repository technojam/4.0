import { Text } from "@react-three/drei";
import React from "react";
import { DoubleSide } from "three";

const Text_3D = () => {
  return (
    <>
      <Text>
        Dexte------rix-4.0
        <meshBasicMaterial side={DoubleSide} color="white" />
      </Text>
    </>
  );
};

export default Text_3D;
