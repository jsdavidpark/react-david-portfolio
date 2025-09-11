import React, { useState, useEffect, useRef } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import Transition from "../components/Transition.jsx";
import { FiGithub } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "PROJECT ONE",
    description: "DESCRIPTION OF PROJECT ONE.",
    links: {
      live: "https://example1.com",
      github: "https://github.com/example1",
    },
    image: project1,
  },
  {
    title: "PROJECT TWO",
    description: "DESCRIPTION OF PROJECT TWO.",
    links: {
      live: "https://example2.com",
      github: "https://github.com/example2",
    },
    image: project2,
  },
  {
    title: "PROJECT THREE",
    description: "DESCRIPTION OF PROJECT THREE.",
    links: {
      live: "https://example3.com",
      github: "https://github.com/example3",
    },
    image: project3,
  },
];

function ProjectTab({ project }) {
  return (
    <div className="flex-shrink-0 w-full snap-center px-4">
      <div
        className="w-full mx-auto bg-white rounded-2xl overflow-hidden hover
"
      >
        <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 sm:mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <motion.a
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
            href={project.links.github}
          >
            <FiGithub className="w-5 h-5" />
            <span>CODE</span>
          </motion.a>
          <motion.a
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
            href={project.links.live}
          >
            <FaEye className="w-5 h-5" />
            <span>DEMO</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const circumference = 2 * Math.PI * 16;

  return (
    <div className="min-h-screen bg-white py-20 px-4 mt-">
      <h2 className="mt-20 ml-5">FEATURED PROJECTS</h2>

      {/* Circular Progress Bar */}
      <div className="fixed top-8 right-8  z-20 mt-20 ">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="16"
              stroke="#f3f4f6"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="20"
              cy="20"
              r="16"
              stroke="#4ade80"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={(circumference * (100 - scrollProgress)) / 100}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Horizontal Projects Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
        >
          {projectsData.map((project) => (
            <ProjectTab key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500"></p>
        </div>
      </div>

      <style jsx>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
}

export default Transition(Projects);
