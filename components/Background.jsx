import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useMemo } from "react";

const Background = () => {
    const texture = useLoader(THREE.TextureLoader,
        "sky.jpg");
    const { gl } = useThree();

    const formatted = useMemo(() => {
        return new THREE.WebGLCubeRenderTarget(texture.image.height)
            .fromEquirectangularTexture(gl, texture);
    }, [])

    return (
        <Suspense fallback={null}>
            <primitive
                attach="background"
                object={texture} />
        </Suspense>
    )
}
export default Background;
