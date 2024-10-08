import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Text } from "@react-three/drei";
import Grid from '../../Components/Grid';
import Cube from '../../Components/Cube';
import Sphere from "../../Components/Sphere";
import Controls from '../../Components/Controls';

import '../../Styles/Test.css';


export default function Test() {
  const [data, setData] = useState(null); // State to hold the fetched data
  const [currData, setCurrData] = useState(new Map());
  const [controls, setControls] = useState({
    position: [0, 0, 0],
    rotation: [0, 0, 0], // Set default rotations for x and z
    scale: [1, 1, 1]
  });

  // Use effect to fetch data from Flask server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/Location');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);

        console.log(result);

        // Update controls with fetched data
        if (result) {
          const position = [
            parseFloat(result[result.length - 1]["(x,"].slice(1)), // x position
            parseFloat(result[result.length - 1]["y)"].slice(0, -1)), // y position
            0 // default z position
          ];

          const currData = new Map();

          for (let i = result.length - 1; i > result.length - 700; i--) {
            if (result[i]["Person_ID"] in currData) {
              continue;
            }



            currData.set(result[i]["Person_ID"], {
              x: parseFloat(result[i]["(x,"].slice(1))
              , y: parseFloat(result[i]["y)"].slice(0, -1)),
              rotation: parseFloat(result[i]["rotation"])
            });
          }

          console.log(currData);

          setCurrData(currData);

          const yRotation = parseFloat(result[1].rotation); // Only update y rotation

          console.log(position);

          setControls(prev => ({
            ...prev,
            position,
            rotation: [0, yRotation, 0] // Set x and z rotation to 0
          }));
        }
      } catch (error) {
        console.error('Fetch error ', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    console.log("clicked on the cube");
  };
  
  const personSpheres = Array.from(currData.entries()).map(([person, data]) => {
    console.log(person, data);
    return <Sphere label={person} position={[data.x * 50, 0, data.y * 50]} radius={0.5} colour={"red"} rotation={data.rotation} />
  });


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 2, 10] }}>
        <Suspense fallback={<Text color="white">Loading</Text>}>
          <OrbitControls />
          <directionalLight intensity={8} position={[6, 2, 1]} />
          <Grid size={50} />
          {/* <Light position={[3, 0, 2]} color="red" intensity={2} /> */}
          {/* <Light position={[2, 2, -2]} color="blue" intensity={2} /> */}
          {/* <Light position={[-3, 0, 2]} color="green" intensity={2} /> */}


          <directionalLight position={[0, 0, 2]} />
          <Cube
            handleClick={handleClick}
            position={[0, 0, 0]}
            color={"green"}
          />


          {personSpheres}

          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        </Suspense>
      </Canvas>

    </div>
  );
}
