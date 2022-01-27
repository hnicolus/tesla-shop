import { useBox } from "@react-three/cannon";

const Floor = (props) => {

    const boxDimensions = [20, 1, 10];
    const [ref, api] = useBox(() => ({
        ...props,
        args: boxDimensions,
    }))
    return (
        <mesh ref={ref}

            {...props} receiveShadow>
            <boxBufferGeometry args={boxDimensions} />
            <meshPhysicalMaterial
                roughness={0.5}
                reflectivity={0.5}
            />
        </mesh>
    )
}
export default Floor;
