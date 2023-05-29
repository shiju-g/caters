"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const ContactCard = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: 180 }}
      animate={{ rotate: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className=" md:w-fit  sm:w-10/12 w-11/12 md:px-20 px-5 rounded-2xl shadow tracking-wider mx-auto md:mt-10 mt-5 text-center  py-8"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 199, 0, 0.17), rgba(255, 199, 0, 0.17)), #FFFFFF;",
      }}
    >
      <Link href="tel:+919388596889" target="_blank" legacyBehavior>
        <a
          className="xl:text-3xl md:text-2xl text-xl font-extrabold hover:scale-105 duration-300"
          href="tel:+919388596889"
        >
          9388596889
        </a>
      </Link>
      <p className="md:text-base text-sm text-gray-600 font-semibold my-1  duration-300">
        srigiricatering@gmail.com
      </p>
      <p className="md:text-lg text-sm mt-2.5 leading-tight   md:mt-auto  text-[#FFA500] font-semibold duration-200">
        Allinivas House, VP Thara , Kollengode, Palakkad
      </p>
    </motion.div>
  );
};

export default ContactCard;
