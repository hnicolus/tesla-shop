import { useLoader } from "@react-three/fiber";
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model(props) {
    const model = useLoader(GLTFLoader, props.path)
    return (
        <primitive object={model.scene}
            scale={props.scale}
        />
    );
}

export default Model;