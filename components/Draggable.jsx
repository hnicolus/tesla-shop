import {extend,useThree} from "@react-three/fiber";
import {DragControls} from "three/examples/jsm/controls/DragControls";

extend({DragControls});

import React, {useEffect, useRef, useState} from 'react';

function Draggable(props) {
    const groupRef = useRef();
    const controlsRef = useRef();
    const [objects,setObjects] = useState([]);
    const {gl,camera,scene} = useThree();
    useEffect(()=>{
        console.log(groupRef.current);
        setObjects(groupRef.current.children);
    },[]);

    useEffect(()=>{

        controlsRef.current.addEventListener('hoveron',(e)=>{
            scene.orbitControls.enabled =false;
        });
        controlsRef.current.addEventListener('hoveroff',(e)=>{
            scene.orbitControls.enabled =true;
        });

    },[objects]);

    return (
        <group ref={groupRef}>
            <dragControls
                ref={controlsRef}
                args={[objects,camera,gl.domElement]}>
            </dragControls>
            {props.children}
        </group>
    );
}

export default Draggable;
