import React from 'react'
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping, BrightnessContrast } from "@react-three/postprocessing";


const App = () => {
  
  return (
    <>
    <Canvas flat camera={{ fov: 45 }}>
     <OrbitControls />
     <ambientLight />
      
      <Cyl />

      <EffectComposer>
         
         <Bloom
           mipmapBlur
           intensity={3.0} // The bloom intensity.
           luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
           luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
         />
         <ToneMapping 
          adaptive={true} // toggle adaptive luminance map usage
          />
         <BrightnessContrast
           contrast={0.15} // contrast: min -1, max: 1
         />
        
      </EffectComposer>

    </Canvas>


    </>
  )
}

export default App 