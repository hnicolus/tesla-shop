
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber';
import Background from "../components/Background";
import Box from "../components/Box";
import Orbit from "../components/Orbit";
import Floor from "../components/Floor";
import Bulb from "../components/Bulb";
import ColorPicker from "../components/ColorPicker";
import Draggable from "../components/Draggable";
import { Suspense } from "react";
import { Physics } from '@react-three/cannon';
import Model from '../components/Model';
import BoundingBox from '../components/BoundingBox';
import Cars from '../components/Cars';

export default function Home() {
  return (
    <div className={styles.scene}>
      <ColorPicker />
      <Canvas className={styles.canvas}
        shadows={true}
        camera={{
          position: [7, 7, 7]
        }}
      >
        <fog args={['white', 1, 10]} />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Physics>
          <Cars />
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor />
        </Physics>
        <Orbit />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  )
}
