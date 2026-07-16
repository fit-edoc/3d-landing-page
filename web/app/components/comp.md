"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Bottle from "./components/Bottle";
import Nav from "./components/Nav";
import { BiArrowFromRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <div className="min-h-screen w-screen relative bg-white flex justify-center items-center">
      <div className="h-screen w-[50vw]  flex  flex-col justify-end px-1 py-2.5 sm:px-10 sm:pb-5">
        <div className="h-50 w-36   flex  bg-green-400 flex-col md:h-100">
          <div className="h-[30%] w-full  bg-amber-300 pr-1 font-blacko text-[10px] flex items-end md:text-md text-nowrap ">
            <h4 className="text-black">
              FROM ROOT{" "}
              <span className="bg-purple-600 text-white  px-1 rounded-full">
                TO SHINE
              </span>
            </h4>
          </div>
          <div className="h-[70%] w-full   flex items-center">
            <h1 className="font-blacko text-black text-4xl max-w-30 leading-[28px] sm:text-5xl  md:text-6xl md:leading-[45px] sm:leading-[40px]">
              KNOCK OUT FLAKES
            </h1>
          </div>
        </div>
      </div>
      <div className="h-screen w-[50vw]  overflow-hidden flex  flex-col justify-end items-end  px-1 py-2.5">
        <div className="h-50 w-35  flex  flex-col justify-end items-center">
          <div className="h-[30%] w-full  pr-1 font-blacko text-[10px] flex items-end">
  
      
          </div>
          <div className="h-[70%] w-full    flex flex-col justify-center items-center ">
            <h1 className="font-blacko text-black text-[10px]  max-w-30 leading-[15px]  sm:text-xl sm:max-w-[200px] sm:leading-[20px]">
              Journey in to the{" "}
              <span className="italic font-blacko">Wonderfull</span> world of{" "}
              <span>shampoo</span>
            </h1>

            <div className="flex gap-0.5 justify-start w-full  max-w-30">
              <button className="rounded-full h-5 w-15 px-0.5 bg-black text-white text-[7px] text-center  font-blacko text-nowrap ">Explore more</button>
              <button className="text-white h-5 w-5  bg-purple-600 rounded-full text-center"><BsArrowRight/></button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[800px] w-[800px] rounded-full bg-purple-300/20  fixed top-[-90%] sm:top-[-120%] md:h-250  md:w-250 md:top-[-110%]"></div>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-75 w-75 bg-purple-500/20 rounded-full blur-[40px]"></div>
      <div className="absolute h-[70vh]   w-[50vw] sm:h-[70vh] sm:top-[30%]">
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} intensity={2} />

          <Environment preset="studio" />

          <Bottle />

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
}     can make it better according context of achieving the layout