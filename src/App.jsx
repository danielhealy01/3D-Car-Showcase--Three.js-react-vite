import { Canvas } from "@react-three/fiber"
import { Stage, PresentationControls } from "@react-three/drei"
import '../src/App.css'
import { useState } from 'react'
import Model from "./components/Model"

function App() {
  const [car, setCar] = useState("/lambo2.glb"); 

  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{
      position: "absolute",
      width: "100vw",
      height: "100vh",
      touchAction: "none",
     }} >
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={null}>
          <Model scale={0.01} car={car} />
        </Stage>
      </PresentationControls>
    </Canvas>
  )
}

export default App


/* 

Three buttons to set car state

Loading splash based on ternery if page loaded.

Additional Stylind

*/