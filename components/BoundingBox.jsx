import { useBox } from '@react-three/cannon';
import React from 'react';

function BoundingBox({
    position = [0, 0, 0],
    offset = [0, 0, 0],
    dims = [0, 0, 0],
    visible = false,
    children
}) {
    const [ref, api] = useBox(() => ({
        position, mass: 1,
        args: dims
    }
    ))
    return (
        <group ref={ref} api={api}>
            <mesh scale={dims} visible={visible}>
                <boxBufferGeometry />
                <meshPhysicalMaterial wireframe />
            </mesh>
            <group position={offset}>
                {children}
            </group>
        </group>
    );
}

export default BoundingBox;