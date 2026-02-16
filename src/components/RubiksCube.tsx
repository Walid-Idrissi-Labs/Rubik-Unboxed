import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";



    function Model() {
    const meshRef = useRef<THREE.Group>(null!);
    const [hovered, setHover] = useState(false);
    
    // Load  GLB file
    const { scene } = useGLTF('/RubiksCube2.glb') ;  

    useFrame((state, delta) => {
        if (meshRef.current && !hovered) {
            meshRef.current.rotation.y += delta * 0.4;
            meshRef.current.rotation.x += delta * 0.15;
            meshRef.current.rotation.z += delta * 0.01;
        } else if (meshRef.current && hovered) {
            meshRef.current.rotation.y += delta * 0.07;
            meshRef.current.rotation.x += delta * 0.03;
            meshRef.current.rotation.z += delta * 0.015;
        }
        console.log(state.camera.position); 
    });

    const handlePointerOver = () => {
        setHover(true);
    }

    const handlePointerOut = () => {
        setHover(false);
    }


    
    return (
        <group
            ref={meshRef}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            scale={hovered ? 1.0077 : 1}
        >
            <primitive object={scene} />
        </group>
    )
}







    function Scene(){
        // const [paused , setPaused] = useState(false);      
        return(
            <>
                <ambientLight intensity={0.95} />
                <pointLight position={[1,1,1]} intensity={1.2} />
                <pointLight position={[-1,-1,-1]} intensity={1.2} />
                <Suspense fallback={null}>
                <Model />
                </Suspense>
                <OrbitControls 
                    enableDamping
                    dampingFactor={0.05}
                    enableZoom={false}
                    enablePan={false}
                    minDistance={3}
                    maxDistance={20}
                />
                {/* <gridHelper args={[10,10]}/>  */}
            
            </>
        )
    }



useGLTF.preload('/RubiksCube2.glb')
export default function RubiksCube() {
    return(
        <div className="  outline-green-800 w-[35vw] h-[30vw]" >
            <Canvas 
                camera = {{
                    position : [2.37,2.37,2.37],
                    fov:50,
                    near:0.1,
                    far:1000,
                }}
                shadows
            >
                <Scene />
            </Canvas>
        </div>
    )
}






