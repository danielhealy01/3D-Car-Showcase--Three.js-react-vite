import { Canvas } from "@react-three/fiber"
import { Stage, PresentationControls } from "@react-three/drei"
import '../src/App.css'
import { useState, useEffect} from 'react'
import Model from "./components/Model"

function App() {
  const [car, setCar] = useState("lambo.glb")
  const [loading, setLoading] = useState(true)
  console.log(car)

  const handleClick = (e) => {
    setCar(e.target.id)
  }

  const handleLoading = () => {
    setLoading(false)
     setTimeout(() => {
       document.querySelector(".spinner").style.opacity = 0;
     }, "1300");
     setTimeout(() => {
       document.querySelector(".loadingSplash").style.opacity = 0;
     }, "2000");
     setTimeout(() => {
       document.querySelector(".loadingSplash").style.display = "none";
     }, "3800");
  }

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <>
      <div className="loadingSplash">
        <div className="spinner"></div>
      </div>
      <nav className="nav-container">
        <div
          id="lambo.glb"
          className={
            car === "lambo.glb" ? "nav-btn--active" : "nav-btn--inactive"
          }
          onClick={handleClick}
        >
          Lamborghini
        </div>
        <div
          id="lambo2.glb"
          className={
            car === "lambo2.glb" ? "nav-btn--active" : "nav-btn--inactive"
          }
          onClick={handleClick}
        >
          Ferrari
        </div>
        <div
          id="bmw.glb"
          className={
            car === "bmw.glb" ? "nav-btn--active" : "nav-btn--inactive"
          }
          onClick={handleClick}
        >
          BMW
        </div>
      </nav>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          touchAction: "none",
        }}
      >
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 2]}
        >
          <Stage environment={null}>
            <Model scale={0.01} car={car} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default App


/* 

Three buttons to set car state
  onClick={handleClick}


Loading splash based on ternery if page loaded.

Additional Stylind

*/