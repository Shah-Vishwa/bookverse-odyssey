import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const BookModel: React.FC<{ position: [number, number, number]; rotation: [number, number, number]; color: string; speed?: number }> = ({ position, rotation, color, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.1;
      meshRef.current.rotation.x = rotation[0] + Math.cos(state.clock.elapsedTime * 0.3 * speed) * 0.05;
    }
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} rotation={rotation} castShadow>
        {/* Book body */}
        <boxGeometry args={[1.2, 1.6, 0.2]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.1}
          envMapIntensity={0.8}
        />
      </mesh>
      {/* Book spine */}
      <mesh position={[position[0] - 0.6, position[1], position[2]]} rotation={rotation}>
        <boxGeometry args={[0.05, 1.6, 0.22]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
      </mesh>
      {/* Pages */}
      <mesh position={[position[0] + 0.02, position[1], position[2]]} rotation={rotation}>
        <boxGeometry args={[1.1, 1.5, 0.16]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.8} />
      </mesh>
    </Float>
  );
};

const HeroScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.6} color="#F5F3EE" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#D94035" />
      <pointLight position={[-5, 3, 3]} intensity={0.5} color="#E8E4DA" />
      <spotLight
        position={[0, 8, 4]}
        angle={0.4}
        penumbra={0.8}
        intensity={1}
        color="#FFF8F0"
        castShadow
      />

      <BookModel position={[-2.5, 0.5, 0]} rotation={[0.2, 0.5, 0.1]} color="#D94035" speed={0.8} />
      <BookModel position={[0, -0.3, 1]} rotation={[-0.1, -0.3, 0.05]} color="#8B4513" speed={1} />
      <BookModel position={[2.5, 0.8, -0.5]} rotation={[0.15, 0.8, -0.1]} color="#C93C32" speed={1.2} />
      <BookModel position={[-1, 1.5, -1]} rotation={[0.3, -0.6, 0.2]} color="#6A6A62" speed={0.6} />
      <BookModel position={[1.5, -1, 0.5]} rotation={[-0.2, 0.4, -0.15]} color="#272720" speed={0.9} />

      <Environment preset="apartment" />
    </>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
