"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className=" absolute top-0 w-full z-20  flex items-center justify-between  py-3"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 114, 11, 0.9), rgba(0, 114, 11, 0.7)), #FFFFFF;",
      }}
    >
      <motion.div
        initial={{ x: -100, scale: 0.8, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [1],
          repeat: Infinity,
          repeatDelay: 15,
        }}
        className="w-fit"
      >
        <Image
          className=" rounded-lg -ml-1.5"
          src="/img/srigiri.png"
          width={250}
          height={80}
          alt="logo"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Header;

// bg-[#143E05]
