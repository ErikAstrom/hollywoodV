"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
export const LogoArray = ({ array = [] }) => {
  return (
    <motion.div 
    variants={list}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid w-full grid-cols-4 gap-[41px]">

      {array.map((logo, i) => {
        return <LogoBox logo={logo} key={i} />;
      })}

    </motion.div>
  );
};

const LogoBox = ({ logo }) => {
  const { alt = "", asset = {} } = logo;
  return (
    <motion.div
    variants={item}
    className="flex h-[96px] w-[312px] items-center justify-center border-2 border-black"
    >
      <Image alt={alt} height={60} width={60} src={asset?.url}></Image>
    </motion.div>
  );
};

const list = {
    visible: { 
        opacity: 1 ,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
    },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }