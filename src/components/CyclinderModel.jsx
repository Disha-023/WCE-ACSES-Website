import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Cylinder = () => {
  const tex = useTexture('./Group.png');
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.needsUpdate = true;

  const meshRef = useRef();

  // Rotate continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh enableZoom={false} ref={meshRef} scale={[1, 1, 1]}>
      <cylinderGeometry args={[2, 1.5, 1, 30, 30, true]} />
      <meshStandardMaterial
        map={tex}
        side={THREE.DoubleSide}
        metalness={0.6}
        roughness={0.4}
      />
    </mesh>
  );
};

const CylinderModel = () => {
  return (
    <Canvas
      camera={{ fov: 25, position: [3, 3, 3] }}
      shadows
      className="w-full h-56 md:h-80"

    >
      <OrbitControls enableZoom={false} />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      {/* Optional environment for reflections */}
      <Environment preset="sunset" />
      
      <Cylinder />
    </Canvas>
  );
};

export default CylinderModel;
