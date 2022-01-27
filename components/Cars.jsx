import React from 'react';
import { Suspense } from 'react';
import Draggable from './Draggable';
import BoundingBox from './BoundingBox';
import Model from './Model';
function Cars(props) {
    return (
        <Suspense fallback={null}>
            <Draggable transformGroup>
                <BoundingBox
                    dims={[3, 2, 7]}
                    position={[-4, 4, 0]}
                    offset={[0, -0.8, 0.4]}
                    visible>
                    <Model
                        scale={new Array(3).fill(0.013)}
                        path='/tesla_model_s/scene.gltf' />
                </BoundingBox>
            </Draggable>
            <Draggable transformGroup>
                <BoundingBox
                    dims={[3, 2, 6]} visible
                    offset={[0, -.4, 0.7]}
                    position={[4, 4, 0]}>
                    <Model
                        scale={new Array(3).fill(0.01)}
                        path='/tesla_model_3/scene.gltf' />
                </BoundingBox>
            </Draggable>
        </Suspense>
    );
}

export default Cars;