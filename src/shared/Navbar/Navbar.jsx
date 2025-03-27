"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../app/assets/logo.jpeg';
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href='/'><Image src={logo} alt="logo" width={256} height={60} /></Link>
          </div>

          {/* Right side - Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link href="/" className="text-[#000000] open-sans text-[16px] hover:text-gray-700 transition">About Us</Link>
              <Link href="/" className="text-[#000000] open-sans  text-[16px] hover:text-gray-700 transition">Browse Profiles</Link>
              <Link href="/" className="text-[#000000] open-sans  text-[16px] hover:text-gray-700 transition">Contact Us</Link>
            </nav>
            <Link
              href="/login"
              className="px-4 py-2 text-xl lato-bold bg-[#ED2B73] text-white rounded-md hover:bg-[#c2205a] transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#000000] focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu (dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block open-sans text-[#000000] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/"
              className="block text-[#000000] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Profiles
            </Link>
            <Link
              href="/"
              className="block text-[#000000] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 bg-[#ED2B73] text-white rounded-md text-center hover:bg-[#c2205a] mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
