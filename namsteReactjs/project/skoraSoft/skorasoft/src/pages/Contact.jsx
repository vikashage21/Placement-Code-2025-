// ContactPage.jsx
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useGLTF } from '@react-three/drei';
import Hyperspeed from '../components/HyperSpeed';

export default function ContactPage() {
  return (
    <div className="w-full h-screen relative bg-black">
      {/* Hyperspeed Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      {/* 3D Astronaut Canvas */}
      <Canvas camera={{ position: [0, 1, 10], fov: 30 }} className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Physics gravity={[0, -0.2, 0]}>
            <Astronaut />
          </Physics>
        </Suspense>
      </Canvas>

      {/* Contact Form Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <form className="bg-black/70 p-8 rounded-lg flex flex-col gap-4 w-96 text-white z-10">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded bg-gray-800 text-white outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded bg-gray-800 text-white outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-2 rounded bg-gray-800 text-white outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

// Floating Astronaut Model
function Astronaut() {
  const modelRef = useRef();
  const gltf = useGLTF('https://modelviewer.dev/shared-assets/models/Astronaut.glb'); // place your GLB in public/models

  useFrame(() => {
    if (modelRef.current) {
      const time = Date.now() * 0.001;
      modelRef.current.rotation.y += 0.003;
      modelRef.current.rotation.x += 0.001;
      modelRef.current.position.y = Math.sin(time) * 1;
      modelRef.current.position.x = Math.sin(time * 0.5) * 0.5;
      modelRef.current.position.z = Math.cos(time * 0.3) * 0.5;
    }
  });

  return (
    <RigidBody type="dynamic" ref={modelRef}>
      <primitive object={gltf.scene} scale={1.5} />
    </RigidBody>
  );
}
