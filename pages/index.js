
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber';
import Background from "../components/Background";
import Box from "../components/Box";
import Orbit from "../components/Orbit";
import Floor from "../components/Floor";
import Bulb from "../components/Bulb";
import ColorPicker from "../components/ColorPicker";
import Draggable from "../components/Draggable";
import {Suspense} from "react";

export default function Home() {
  return (
    <div className={styles.scene}>
          <ColorPicker/>
      <Canvas className={styles.canvas}
        shadows={true}
        camera={{
          position: [7, 7, 7]
        }}
      >
        <ambientLight intensity={0.2} />
          <Draggable>
              <Bulb position={[-3, 2, 0]} />
              <Bulb position={[0, 3, 0]} />
              <Suspense fallback={null}>
                  <Box position={[-4, 1, 0]} />
              </Suspense>
              <Suspense fallback={null}>
                  <Box position={[4, 1, 0]} />
              </Suspense>
              <Suspense fallback={null}>
                  <Background />
              </Suspense>
          </Draggable>
        <Floor />
        <Orbit  />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  )
}
