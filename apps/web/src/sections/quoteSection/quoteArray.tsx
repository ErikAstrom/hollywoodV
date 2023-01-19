"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export const QuoteArray = ({ array = [] }) => {
  return (
    <motion.div 
    variants={list}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[41px]">

      {array.map((quote, i) => {
        return <Quote quote={quote} key={i} />;
      })}

    </motion.div>
  );
};

const Quote = ({ quote }) => {

    const { quotetext, quoteauthor} = quote;
  return (
    <motion.div
    variants={item}
    className="p-[10px] flex h-[160px] max-w-[312px] items-center justify-center border-2 border-black flex-col text-center mx-auto md:mx-0"
    >
    <p className="text-body">"{quotetext}"</p>
    <span className="mt-[10px] text-midGrey">- {quoteauthor}</span>
    </motion.div>
  );
};

const list = {
    visible: { 
        opacity: 1 ,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
    },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }