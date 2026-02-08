'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import { Mesh, TorusKnotGeometry } from 'three'
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei'

function TorusKnot() {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function Sphere({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color="#4F46E5"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
        
        <TorusKnot />
        <Sphere position={[-3, 2, -2]} />
        <Sphere position={[3, -2, -1]} />
        <Sphere position={[2, 2, -3]} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  )
}