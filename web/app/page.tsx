"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Bottle from "./components/Bottle";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Home() {
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Suppress THREE.Clock deprecation warnings to keep the console clean
      const originalWarn = console.warn;
      console.warn = (...args) => {
        if (
          args[0] &&
          typeof args[0] === "string" &&
          args[0].includes("THREE.Clock: This module has been deprecated")
        ) {
          return;
        }
        originalWarn(...args);
      };

      try {
        const canvas = document.createElement("canvas");
        const hasWebGL = !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl") ||
            canvas.getContext("webgl2"))
        );
        setWebglAvailable(hasWebGL);
      } catch (e) {
        setWebglAvailable(false);
      }
    }
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-hidden relative bg-white flex  justify-center items-center">
      {/*  left div */}
      <div className="h-screen w-[50vw]   flex  flex-col justify-end items-center">

        <div className="h-[50%] w-full  flex flex-col">
          <div className="h-[40%] w-full  flex items-end  px-1 sm:pl-10  md:pl-25  md:h-[30%]">
            <h4 className="text-black text-[9px] font-blacko text-black  md:text-[12px]">
              FROM ROOT{" "}
              <span className="bg-purple-600 text-white  px-2 py-0.5 rounded-full">
                TO SHINE
              </span>
            </h4>
          </div>
          <div className="h-[60%] w-full leading-[24px] py-3.5   text-black text-3xl font-blacko  flex  flex-col justify-start   px-1 sm:text-6xl  sm:leading-[45px] md:leading-[53px] lg:h-[80%] lg:text-7xl lg:pt-4 lg:leading-[60px] sm:pl-10  md:pl-25   md:justify-center  md:h-[70%]">
            <h1>KNOCK</h1>
            <h1>OUT</h1>
            <h1>FLAKES</h1>
          </div>
        </div>
      </div>

        {/*  right div */}
      <div className="h-screen w-[50vw]   flex  flex-col justify-end items-center">
        <div className="h-[50%] w-full   flex flex-col">

          <div className="h-[70%]  w-full  text-sm  font-blacko text-black flex flex-col items-end justify-end-safe  px-1  sm:rl-10  md:pr-25   md:text-xl  md:h-[90%]">
         <div className="flex flex-col gap-0.5 ">
          <h1>Journey in to the</h1>
         <h1><span className="italic">Wonderfull</span> world of</h1>
         <h1>shampoo</h1>
          <div className="flex w-full h-full  gap-1">
              <button className="h-7 w-20 bg-black rounded-full text-center text-white text-[8px] text-nowrap">
                EXPLORE MORE
              </button>
              <button className="group h-7 w-7  rounded-full text-center bg-purple-500 text-white flex justify-center items-center">
                <BsArrowRight className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </button>
            </div>
         </div>
          </div>

          <div className="h-[30%]  w-full  py-1.5  text-black  font-blacko    px-1     md:pr-25  md:h-[10%]">
           
            
          </div>
        </div>
      </div>

      <div className="h-220 w-220 rounded-full bg-purple-500/5  fixed top-[-120%] sm:top-[-120%] md:h-250  md:w-250 md:top-[-110%]"></div>
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-75 w-75 bg-purple-500/20 rounded-full blur-2xl md:top-[45%]"></div>
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[70vh] sm:h-[70vh] sm:top-[25%] md:h-[80vh] md:top-[10%] flex items-center justify-center z-10">
        {webglAvailable === null ? (
          <div className="w-full h-full" />
        ) : webglAvailable ? (
          <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} intensity={2} />

            <Environment preset="studio" />

            <Bottle />

            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
            <Image
              src="/shampoo_fallback.png"
              alt="Premium Shampoo Bottle"
              fill
              className="object-contain p-4 drop-shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-700 hover:scale-105 animate-fade-in"
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/85 text-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-sans tracking-wider uppercase text-center shadow-lg border border-white/10 max-w-[90%] pointer-events-none whitespace-nowrap">
              3D Interactive View requires WebGL
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
