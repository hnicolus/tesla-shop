import React from 'react';
import * as THREE from "three";

function ColorPicker(props) {
    const colorPalette = [
        'green',
        'blue',
        'yellow',
        'white',
    ];
    const handleColorSelect = color=>{
    if(!window.activeMesh) return;
    window.activeMesh.material.color.set(new THREE.Color(color))
    }
    return (
        <div
        style={{
            position:"absolute",
            zIndex:"1",
            y:0,x:"50%",
            width:'100%',
            display:"flex",
        }}
        >
            {colorPalette.map((color, index)=>(
            <div  key={index}
                  onClick={() =>handleColorSelect(color)}
                  style={{
                background:color,
                height:50,
                width:50
            }}/>
            ))}
        </div>
    );
}

export default ColorPicker;
