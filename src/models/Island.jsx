import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

import islandScene from '../assets/3d/island.glb';

const Island = ({ isRotating, setIsRotating, setCurrentStage = () => {}, ...props }) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsRotating?.(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    setIsRotating?.(false);
  };

  const handlePointerMove = (e) => {
    if (!isRotating || !islandRef.current) return;
    e.stopPropagation();

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - lastX.current;

    // Scale drag distance to radians
    const deltaRad = (deltaX / window.innerWidth) * Math.PI;
    islandRef.current.rotation.y += deltaRad;
    rotationSpeed.current = deltaRad; // inertia
    lastX.current = clientX;
  };

  const handleKeyDown = (e) => {
    if (!islandRef.current) return;
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating?.(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.01 * Math.PI;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating?.(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating?.(false);
    }
  };

  useFrame(() => {
    const group = islandRef.current;
    if (!group) return;

    if (!isRotating) {
      // apply damping/inertia
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) rotationSpeed.current = 0;
      group.rotation.y += rotationSpeed.current;
    }

    // Calculate normalized yaw [0, 2π)
    const r = group.rotation.y;
    const TAU = Math.PI * 2;
    const normalizedRotation = ((r % TAU) + TAU) % TAU;

    // Stage detection (same windows as your intent)
    if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85) {
      setCurrentStage(4);
    } else if (normalizedRotation >= 0.85 && normalizedRotation <= 1.3) {
      setCurrentStage(3);
    } else if (normalizedRotation >= 2.4 && normalizedRotation <= 2.6) {
      setCurrentStage(2);
    } else if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75) {
      setCurrentStage(1);
    } else {
      setCurrentStage(null);
    }
  });

  useEffect(() => {
    // keyboard listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isRotating]);

  return (
    <a.group
      ref={islandRef}
      {...props}
      dispose={null}
      // Prefer R3F pointer events over manual canvas listeners
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <mesh
        receiveShadow
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        receiveShadow
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        receiveShadow
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        receiveShadow
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        receiveShadow
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        receiveShadow
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        receiveShadow
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
