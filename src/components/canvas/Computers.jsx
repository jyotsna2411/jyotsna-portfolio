// import React, { Suspense, useEffect, useRef, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";
// import { Vector3 } from "three";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./retro_computer/scene.gltf");
//   const myMesh = React.useRef();
//   useFrame(({ mouse, viewport }) => {
//     const x = (mouse.x * viewport.width) / 2.5;
//     const y = (mouse.y * viewport.height) / 2.5;
//     myMesh.current.lookAt(x, y, 1);
//   });

//   return (
//     <mesh onPointerMove={(e) => console.log("move")} ref={myMesh}>
//       <hemisphereLight intensity={1} groundColor="blue" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 2}
//         position={isMobile ? [0, -3, -2.2] : [0, -2, 0]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Dodecahedron />
//         {/* <Computers isMobile={isMobile} /> */}
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, useHelper } from "@react-three/drei";
import { PointLightHelper, SpotLightHelper } from "three";

function Dodecahedron() {
  const { viewport } = useThree();
  const computer = useGLTF("./retro_computer/scene.gltf");

  // viewport = canvas in 3d units (meters)

  const ref = useRef();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 4;
    const y = (mouse.y * viewport.height) / 6;
    ref.current.position.set(x, y, 0);
    ref.current.rotation.set(-y, x, 0);
  });
  const spotLight = useRef();
  // useHelper(spotLight, SpotLightHelper, "teal");
  const pointLight = useRef();
  // useHelper(pointLight, PointLightHelper, "teal");

  return (
    <mesh ref={ref} castShadow>
      <hemisphereLight
        intensity={1}
        groundColor="blue"
        position={[-100, -5, -10]}
      />
      <spotLight
        position={[-100, -5, -10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        ref={spotLight}
      />

      <pointLight intensity={1} position={[-40, -20, -40]} />
      <pointLight
        intensity={1}
        position={[100, 50, -40]}
        groundColor="red"
        ref={pointLight}
      />

      <primitive
        object={computer.scene}
        scale={1}
        position={[1, -2, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      {/* <dodecahedronBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" /> */}
    </mesh>
  );
}

const Model = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //     // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //     // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas shadowMap camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.6}
        position={[20, 10, 10]}
        angle={0.2}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      {!isMobile && <Dodecahedron />}
    </Canvas>
  );
};

export default Model;
