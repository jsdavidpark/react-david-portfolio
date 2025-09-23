import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  // Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const MotionLink = motion(Link);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="w-full flex justify-between items-center h-16 md:h-20 px-6">
        {/* Left: Logo or Brand Name */}
        <motion.button
          initial={{ opacity: 1, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.3,
            duration: 0.8,
          }}
          className="flex-1 flex items-center h-16 md:h-20 pl-3 "
        >
          <img
            src={Logo}
            alt=""
            className="h-25 w-auto object-contain cursor-pointer transition duration-500 ease-in-out hover:opacity-80 hover:scale-70"
          />
        </motion.button>

        {/* Navbar */}
        <nav className="hidden font-black md:flex flex-1 justify-center space-x-8">
          {["home", "about", "projects", "contact"].map((item, index) => (
            <MotionLink
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              initial={{ opacity: 1, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
                duration: 0.8,
              }}
              className="relative text-gray-800 hover:text-[#98c1d9] font-medium transition-colors duration-300 group"
            >
              {item.toUpperCase()}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 text-[#98c1d9] group-hover:w-full transition-all duration-300"></span>
            </MotionLink>
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
            className="text-gray-800 hover:text-[#98c1d9] transition-colors duration-300"
            href="https://github.com/jsdavidpark"
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
            className="text-gray-800 hover:text-[#98c1d9] transition-colors duration-300"
            href="https://www.linkedin.com/in/david-park-177718269/"
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
            className="text-gray-800 hover:text-[#98c1d9] transition-colors duration-300"
            href="https://www.instagram.com/davidjspark_/"
          >
            <FiInstagram className="w-5 h-5" />
          </motion.a>

          {/* Hire Me Button */}
          <motion.button
            whileTap={{ scale: 0.7 }}
            initial={{ opacity: 1, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-[#98c1d9] hover:text-white transition-all duration-300"
            >
              HIRE ME
            </Link>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="h-6 w-6 cursor-pointer text-gray-800" />
            ) : (
              <FiMenu className="h-6 w-6 cursor-pointer text-gray-800" />
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
          {["home", "about", "projects", "contact"].map((item, index) => (
            <MotionLink
              key={item}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium py-2 hover:text-[#98c1d9]"
              to={item === "home" ? "/" : `/${item}`}
              initial={{ opacity: 1, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
                duration: 0.8,
              }}
            >
              {item.toUpperCase()}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" />
            </MotionLink>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex space-x-5">
            <motion.a
              href="https://github.com/jsdavidpark"
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-[#98c1d9] transition-colors duration-300"
            >
              <FiGithub className="w-5 h-5 txt-gray-800" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/david-park-177718269/"
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-[#98c1d9] dark:hover:text-green-400 transition-colors duration-300"
            >
              <FiLinkedin className="w-5 h-5 txt-gray-800" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/davidjspark_/"
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-[#98c1d9] dark:hover:text-green-400 transition-colors duration-300"
            >
              <FiInstagram className="w-5 h-5 txt-gray-800" />
            </motion.a>
          </div>

          <Link
            to="/contact"
            onClick={toggleMenu}
            className="mt-4 py-0.5 rounded-xl block w-full bg-gray-800 text-white hover:bg-[#98c1d9] hover:text-white cursor-pointer text-center"
          >
            HIRE ME
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
