import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  });

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} scale={0.1} position={[0, -1, 0]} />  
    </mesh>
  )
}

export default Sky