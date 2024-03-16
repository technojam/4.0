import React,{useRef} from 'react'
import { Canvas } from "@react-three/fiber";
import Text_3D from "./Text_3D";
import { OrbitControls } from "@react-three/drei";

const Torus = () => {
    return (
      <mesh>
        <torusGeometry rotateX={100} args={[1.5, 0.1, 2, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>
    );
  };
const Logo3D = () => {
  return (
    <div className="w-[80%] h-[65%]">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
          <OrbitControls enableZoom={false} />
          <directionalLight position={[0, 0, 3]} />
          <ambientLight />
          <Text_3D />
          <group position={[-0.085, 0, 0]}>
            {/* <Torus/> */}
            <mesh>
              <sphereGeometry args={[1, 32, 40]} />
              <meshStandardMaterial color="cyan" />
            </mesh>
          </group>
        </Canvas>
      </div>
  )
}

export default Logo3D