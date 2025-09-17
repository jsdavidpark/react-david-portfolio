import React from "react";
import Timeline from "../components/Timeline.jsx";
import Transition from "../components/Transition.jsx";
import aboutMe from "../assets/aboutMe.jpg";
import InfiniteScroll from "../components/InfiniteScroll.jsx";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-sm font-light tracking-widest text-gray-500 mb-4">
            ABOUT ME
          </h1>
          <div className="my-12 h-[1px] w-full bg-gray-100 origin-left" />
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl ">
              <img
                src={aboutMe}
                alt="About me"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Animated Keywords */}
            <div className="space-y-4 ">
              {["POSITIVE,", "MOTIVATED,", "DETERMINED."].map((word, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    color: "#98c1d9",
                    transition: { duration: 0.2 },
                  }}
                  className="text-6xl lg:text-[88px] font-bold text-gray-800 cursor-pointer select-none"
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="my-12 h-[1px] w-full bg-gray-100 origin-left" />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {/* WHO I AM Section */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg lg:text-[22px] font-semibold text-gray-800 mb-6 tracking-wide text-center">
              WHO I AM
            </h3>
            <div className="space-y-4 text-left lg:text-center">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-800">
                  BACKGROUND
                </span>
                <span className="text-sm text-gray-500">
                  SOFTWARE DEVELOPER WITH COMPUTER ENGINEERING FOUNDATION
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-800">
                  PASSION
                </span>
                <span className="text-sm text-gray-500">
                  PROBLEM SOLVER WHO LOVES LEARNING NEW TECHNOLOGIES
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-800">
                  APPROACH
                </span>
                <span className="text-sm text-gray-500">
                  DEDICATED TO CREATING MEANINGFUL SOLUTIONS
                </span>
              </div>
            </div>
          </div>

          {/* WHO I WANT TO BE Section */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg lg:text-[22px] font-semibold text-gray-800 mb-6 tracking-wide text-center">
              WHO I WANT TO BE
            </h3>
            <div className="space-y-4 text-gray-500 text-left lg:text-center">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-800 tracking-wide">
                  VISION
                </span>
                <span className="text-sm">
                  TECH LEADER DRIVING INNOVATIVE SOLUTIONS
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-800 tracking-wide">
                  IMPACT
                </span>
                <span className="text-sm ">
                  CREATOR OF PRODUCTS THAT IMPROVE LIVES
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-800 tracking-wide">
                  GROWTH
                </span>
                <span className="text-sm">
                  LIFELONG LEARNER EMBRACING NEW CHALLENGES
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="my-12 h-[1px] w-full bg-gray-100 origin-left" />

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r px-8 py-6">
              <h2 className="text-xl font-semibold text-gray-800 tracking-wide lg:text-center">
                MY JOURNEY
              </h2>
            </div>
            <div className="p-8">
              <Timeline />
              <div className="my-12 h-[1px] w-full bg-gray-100 origin-left" />
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2x overflow-hidden">
            <div className="bg-gradient-to-r px-8 py-6">
              <h2 className="text-xl font-semibold text-gray-800 tracking-wide lg:text-center">
                LANGUAGES & TECHNOLOGIES
              </h2>
            </div>
            <div className="p-8">
              <InfiniteScroll />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transition(About);
