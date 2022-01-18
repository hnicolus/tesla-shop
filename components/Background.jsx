import {useLoader, useThree} from "@react-three/fiber";
import * as THREE from "three";
import {Suspense} from "react";

const Background = () => {
    const texture = useLoader(THREE.TextureLoader,
        "autoshop.jpg");
    const {gl} = useThree();
    ///const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl,texture);

    return (
        <Suspense fallback={null}>
        <primitive
            attach="background"
            object={texture} />
        </Suspense>
    )
}
export default Background;
