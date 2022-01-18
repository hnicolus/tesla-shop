import {useThree} from "@react-three/fiber";
import {  extend } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const Orbit = () => {
    const { camera, gl } = useThree();
    return (
        <orbitControls
            attach={"orbitControls"}
            args={[camera, gl.domElement]} />
    )
}
export  default  Orbit;
