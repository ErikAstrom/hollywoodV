"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      width: 0,
      x: 15,
    },
    closed: {
      width: 32,
    },
  };

  const variants_before = {
    open: {
      rotate: 45,
      y: 8,
    },
    closed: {
      rotate: 0,
      y: 0,
    },
  };

  const variants_after = {
    open: {
      rotate: -45,
      y: -8,
    },
    closed: {
      rotate: 0,
      y: 0,
    },
  };
  return (
    <motion.div
      className="relative w-[32px] h-[16px] hover:cursor-pointer"
      onClick={() => setOpen((prevOpen) => !prevOpen)}
    >
             <motion.div
        className="absolute left-0 top-0 h-[3px] w-full bg-white"
        animate={open ? variants_before.open : variants_before.closed}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute left-0 top-[8px] h-[3px] w-full bg-white"
        animate={open ? variants.open : variants.closed}
        transition={{ duration: 0.2 }}
      />
 

      <motion.div
        className="absolute left-0 top-[16px] h-[3px] w-full bg-white"
        animate={open ? variants_after.open : variants_after.closed}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
