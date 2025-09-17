import React, { useState, useEffect, useRef } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import Transition from "../components/Transition.jsx";
import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PROJECT ONE",
    description: "DESCRIPTION OF PROJECT ONE.",
    links: {
      live: "https://example1.com",
      github: "https://github.com/example1",
    },
    image: project1,
  },
  {
    id: 2,
    title: "PROJECT TWO",
    description: "DESCRIPTION OF PROJECT TWO.",
    links: {
      live: "https://example2.com",
      github: "https://github.com/example2",
    },
    image: project2,
  },
  {
    id: 3,
    title: "PROJECT THREE",
    description: "DESCRIPTION OF PROJECT THREE.",
    links: {
      live: "https://example3.com",
      github: "https://github.com/example3",
    },
    image: project3,
  },
];

function ProjectTab({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 snap-center px-4 overflow-hidden w-[95%]"
    >
      <motion.div
        whileHover={{
          scale: 0.9,
          y: 3,
        }}
        className="bg-white rounded-2xl overflow-hidden"
      >
        <div className="relative aspect-[16/9] bg-gray-50 overflow-hidden cursor-pointer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-medium text-gray-900 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-300"
            >
              <FaGithub />
              <span className="text-sm font-medium">CODE</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-300"
            >
              <FaEye />
              <span className="text-sm font-medium">DEMO</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const scrollContainerRef = useRef(null);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if projects section is in view to show progress bar
      if (projectsSectionRef.current) {
        const rect = projectsSectionRef.current.getBoundingClientRect();
        setShowProgressBar(rect.top <= 100);
      }

      // Calculate scroll progress for horizontal container
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll);

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const circumference = 2 * Math.PI * 16;

  return (
    <div className="min-h-screen">
      {/* Hero Section - Sticky */}
      <section className="sticky top-0 min-h-screen flex items-center justify-center px-4 bg-white pt-21">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-row gap-10 items-end justify-center relative mb-48">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex text-4xl md:text-6xl lg:text-7xl font-light text-gray-800 tracking-relaxed"
              >
                PROJECTS
              </motion.h1>
              <motion.h3
                whileHover={{ color: "#98c1d9" }}
                className="text-sm text-gray-600 text-right mt-0"
              >
                BY DAVID PARK
              </motion.h3>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
              className="absolute left-0 h-[1px] w-screen bg-gray-100"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 max-w-2xl mx-auto pt-8"
            >
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                <motion.div
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center space-y-3"
                >
                  <motion.h3
                    whileHover={{ color: "#98c1d9" }}
                    className="font-medium text-gray-800 inline-block leading-none"
                  >
                    INNOVATION
                  </motion.h3>
                  <p className="text-sm text-gray-500">
                    EXPLORING{" "}
                    <motion.span whileHover={{ color: "#98c1d9" }}>
                      NEW
                    </motion.span>{" "}
                    TECHNOLOGIES AND METHODOLOGIES
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center space-y-3"
                >
                  <motion.h3
                    whileHover={{ color: "#98c1d9" }}
                    className="font-medium text-gray-800 inline-block leading-none"
                  >
                    IMPACT
                  </motion.h3>
                  <p className="text-sm text-gray-500">
                    CREATING{" "}
                    <motion.span whileHover={{ color: "#98c1d9" }}>
                      SOLUTIONS
                    </motion.span>{" "}
                    THAT MATTER TO{" "}
                    <motion.span whileHover={{ color: "#98c1d9" }}>
                      USERS
                    </motion.span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center space-y-3"
                >
                  <motion.h3
                    whileHover={{ color: "#98c1d9" }}
                    className="font-medium text-gray-800 inline-block leading-none"
                  >
                    GROWTH
                  </motion.h3>
                  <p className="text-sm text-gray-500">
                    <motion.span whileHover={{ color: "#98c1d9" }}>
                      CONTINUOUS
                    </motion.span>{" "}
                    LEARNING AND{" "}
                    <motion.span whileHover={{ color: "#98c1d9" }}>
                      FURTHER
                    </motion.span>{" "}
                    UNDERSTANDING OF SKILLS
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
              className="absolute left-0 h-[1px] w-full bg-gray-100"
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsSectionRef}
        className="py-20 px-4 bg-white relative z-10"
      >
        {/* Added bg-white */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">
              FEATURED WORK
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
              className="absolute left-0 h-[1px] w-full bg-gray-100"
            />
          </div>

          {/* Circular Progress Bar - Only visible when projects section is in view */}
          {showProgressBar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed top-8 right-8 z-20 PT-5"
            >
              <div className="relative w-12 h-12">
                <svg
                  className="w-12 h-12 transform -rotate-90"
                  viewBox="0 0 40 40"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#424242"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#98c1d9"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={
                      (circumference * (100 - scrollProgress)) / 100
                    }
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-out"
                  />
                </svg>
              </div>
            </motion.div>
          )}

          {/* Horizontal Projects Container */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory pb-8"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {projectsData.map((project, index) => (
                <ProjectTab key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Transition(Projects);
