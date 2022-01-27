import { useRef, Suspense } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";

const Box = (props) => {
    //const ref = useRef();
    const [ref, api] = useBox(() => ({ mass: 1, ...props }))
    const texture = useLoader(THREE.TextureLoader, 'wood.jpg')

    const handlePointerdown = (e) => {
        if (window.activeMesh) {
            scaleDown(window.activeMesh);
            window.activeMesh.active = false;
        }
        e.object.active = true;
        window.activeMesh = e.object;

    }
    const handlePointerEnter = e => {
        e.object.scale.x = 1.5
        e.object.scale.y = 1.5
        e.object.scale.x = 1.5
    }
    const handlePointerLeave = e => {
        if (!e.object.active) {
            scaleDown(e.object);
        }
    }
    const scaleDown = (object) => {
        object.scale.x = 1
        object.scale.y = 1
        object.scale.x = 1
    }
    return (
        <mesh ref={ref} {...props}
            castShadow
            api={api}
            receiveShadow
            onPointerDown={handlePointerdown}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <boxBufferGeometry />
            <meshPhysicalMaterial
                color='white'
                map={texture}
                metalness={0.1}
                roughness={0}
                clearcoat={1}
                reflectivity={1}
                // side={THREE.DoubleSide}
                transparent
                opacity={1}
            //transmission={0.9}
            />
        </mesh>
    )
}
export default Box;
