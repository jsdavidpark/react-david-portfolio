import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";

const Header = () => {
  //Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="w-full flex justify-between items-center h-16 md:h-20 px-6">
        {/*Left: Logo or Brand Name */}
        <motion.div
          initial={{ opacity: 1, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.3,
            duration: 0.8,
          }}
          className="flex-1 flex items-center h-16 md:h-20 pl-3"
        >
          <img src={Logo} alt="" className="h-25 w-auto object-contain" />
        </motion.div>

        {/* Navbar */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 1, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
                duration: 0.8,
              }}
              className="relative text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-300 group"
              href="#"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/*Right: Social Links */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
          <motion.a
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
            href="#"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
            href="#"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
            href="#"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>

          {/* Hire Me Button */}
          <motion.button
            whileTap={{ scale: 0.7 }}
            initial={{ opacity: 1, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            className="ml-4 px-4 py-2 rounded-xl bg-black text-white hover:bg-green-600 hover:text-white transition-all duration-300"
          >
            HIRE ME
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.1 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item, index) => (
            <a
              key={item}
              onClick={toggleMenu}
              className="text-gray-800 font-medium py-2"
              href="#"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="w-5 h-5 txt-gray-800" />
            </a>

            <a href="#">
              <FiLinkedin className="w-5 h-5 txt-gray-800" />
            </a>

            <a href="#">
              <FiTwitter className="w-5 h-5 txt-gray-800" />
            </a>
          </div>

          <button
            onClick={() => {
              toggleMenu();
            }}
            className="mt-4 py-0.5 rounded-xl block w-full bg-black text-white hover:bg-green-600 hover:text-white"
          >
            CONTACT ME
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
