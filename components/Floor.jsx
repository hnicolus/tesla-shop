const Floor = (props) => {
    return (
        <mesh {...props} receiveShadow>
            <boxBufferGeometry args={[20, 1, 10]} />
            <meshPhysicalMaterial
                roughness={0.5}
                reflectivity={0.5}
            />
        </mesh>
    )
}
export  default  Floor;
