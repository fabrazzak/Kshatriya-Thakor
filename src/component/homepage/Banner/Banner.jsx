'use client'
import Link from 'next/link';
import { motion } from "framer-motion";
import React from 'react';
import '../../../styles/style.css'

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" banner-bg  py-20 md:py-40  text-white">


      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className=" flex flex-col justify-center text-center content-center items-center mx-auto ">
          <h1 className="text-4xl md:text-5xl text-center font-bold mb-3 playfair-display ">
            Kshatriya Thakor Sagpan - Where
            <span className="block mt-2">Traditions Meet True Matches</span>
          </h1>

          <p className="text-xl font-light md:text-2xl lg:mb-10 lg:mt-8 my-6 open-sans">
            Find Your Perfect Life Partner Within Our Community
          </p>

          <Link
            href="/profiles"
            className="inline-block -z-10 lato-bold text-[20px] text-white px-8 py-3 bg-[#ED2B73]   rounded-full transition-colors duration-300"
          >
            Browse Profile
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;