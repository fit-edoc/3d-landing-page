"use client"

import React, { useState,useCallback } from "react";

import { AiOutlineShopping } from "react-icons/ai";
import Menu from "../icons/Menu";
import { FaCross } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";

const menuVariants = {
  hidden: {
    height: 0,
    opacity:0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    height: "60vh",
    opacity:1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
} as const;

const Nav = () => {
    const [toggle,setToggle] = useState(false)
  const navitem = [
    { name: "shop +", href: "#" },
    { name: "about", href: "#" },
    { name: "blog", href: "#" },
    { name: "contact", href: "#" },
  ];

  const handlechange = useCallback(
    () => {
      setToggle((prev)=>!prev)
    },
    [],
  )
  
  return (
    <nav className="h-25  w-screen   flex fixed z-50">
      <div className="h-full w-[30%]  flex items-center px-3 sm:px-7">
        <h1 className="font-blacko italic text-3xl text-black">bolly</h1>
      </div>
      <div className="h-full w-[40%]  hidden justify-center items-center sm:flex">
        <div className="h-[50px] w-[300px] bg-[#8b72e8] rounded-full text-white flex  justify-evenly capitalize items-center gap-1">
          {navitem.map((item, index) => (
            <a key={item.name} href="">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="h-full w-[70%]   flex items-center justify-end gap-3 px-3 sm:px-7 sm:w-[30%]">
        {" "}
        <p className="font-blacko text-black text-lg ">Cart</p>{" "}
        <button className="h-[40px] w-[40px] flex justify-center items-center rounded-full text-black bg-[#dae642]">
          <AiOutlineShopping />
        </button>
        <Menu handlechange={handlechange} toggle={toggle}/>
      </div>
     <AnimatePresence mode="wait">
  {toggle && (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute top-[80%] w-full bg-[#8c72e82c] backdrop-blur-lg text-black flex flex-col justify-evenly items-start px-4 py-8 gap-5 sm:hidden overflow-hidden"
    >
      {navitem.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          variants={itemVariants}
          className="text-lg capitalize font-blacko"
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Nav;
