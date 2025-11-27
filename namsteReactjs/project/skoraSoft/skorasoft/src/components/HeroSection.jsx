import React from "react";
import Hyperspeed from "./Hyperspeed";
import ModelViewer from "./ModelViewer";

const Herosection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hyperspeed Background */}
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
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

      {/* CONTENT + MODEL */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-8">
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            We reinvented it <span className="text-indigo-500">for you</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl drop-shadow-xl">
            We specialize in custom solutions tailored to your business needs —
            delivering fast, secure, and scalable digital experiences. From
            startups to enterprises, we turn your ideas into powerful digital
            realities.
          </p>

          <button className="cursor-pointer mt-8 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all">
            Explore →
          </button>
        </div>

        {/* RIGHT SIDE MODEL */}
        <div className="hidden md:block ">
          <ModelViewer
            url="/models/phoenix_bird.glb"
            width={600}
            height={600}
            modelXOffset={0}
            modelYOffset={0}
            defaultZoom={3} // Bigger model
            minZoomDistance={0.5}
            maxZoomDistance={10}
            showScreenshotButton={false} // remove screenshot button
            enableManualRotation={true}
            enableHoverRotation={true}
            enableMouseParallax={true}
            environmentPreset="city"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
