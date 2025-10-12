import { useRef, useEffect } from 'react';
import planeScene from '../assets/3d/plane.glb'
import { useGLTF, useAnimations  } from '@react-three/drei'

const Plane = ({ isRotating, ...props}) => {
  const ref = useRef()
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations (animations, ref);

    useEffect(() => {
  const take = actions?.['Take 001'];
  if (!take) return;
  if (isRotating) {
    take.reset().play();
  } else {
    take.stop();
  }
}, [isRotating, actions]);

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane