import { extend, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

import React, { useEffect, useRef, useState } from 'react';

function Draggable(props) {
    const groupRef = useRef();
    const controlsRef = useRef();
    const [objects, setObjects] = useState([]);
    const { gl, camera, scene } = useThree();

    useEffect(() => {
        setObjects(groupRef.current.children);
    }, []);

    useEffect(() => {

        controlsRef.current.addEventListener('hoveron', (e) => {
            scene.orbitControls.enabled = false;
        });
        controlsRef.current.addEventListener('hoveroff', (e) => {
            scene.orbitControls.enabled = true;
        });
        controlsRef.current.addEventListener('drag', e => {

            e.object.api?.position.copy(e.object.position)
            e.object.api?.velocity.set(0, 0, 0)
        });

        controlsRef.current.addEventListener('dragstart', e => {
            e.object.api?.mass.set(0)
        })
        controlsRef.current.addEventListener('dragend', e => {
            e.object.api?.mass.set(1)
        })
    }, [objects]);

    return (
        <group ref={groupRef}>
            <dragControls
                ref={controlsRef}
                transformGroup={props.transformGroup}
                args={[objects, camera, gl.domElement]}>
            </dragControls>
            {props.children}
        </group>
    );
}

export default Draggable;
