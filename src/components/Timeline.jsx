import Prof from "../assets/bbag.png";
import Acad from "../assets/gradcap.png";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const academicData = [
  {
    year: "2022",
    title: "QUEEN'S UNIVERSITY",
    description:
      "ENROLLED IN GENERAL ENGINEERING ( BASC ) PROGRAM AT QUEEN'S UNIVERSITY.",
  },
  {
    year: "2023",
    title: "APPLIED MATHEMATICS SPECIALIZATION",
    description:
      "SPECIALIZATION IN ENGINEERING DISCIPLINE APPLIED MATHEMATICS : COMPUTING AND COMMUNICATIONS.",
  },
  {
    year: "2025",
    title: "RELECTRIC",
    description:
      "JOINED RELECTRIC, QUEEN'S EV ENGINEERING CLUB, AND LED TO DESIGN THE BATTERY BOX JEEP EV VEHICLE.",
  },
];

const professionalData = [
  {
    year: "2025",
    title: "ONGOING SEARCH FOR INTERNSHIP/CO-OP",
    description:
      "LOOKING FOR AN INTERNSHIP/CO-OP FOR THIS YEAR, GENERALLY LOOKING IN THE FIELD OF SOFTWARE, ANALYST, DATA SCIENTIST, ENGINEERING PROJECT INTERN, AND MORE.",
  },
];

function Timeline() {
  const [mode, setMode] = useState("academic");
  const items = mode === "academic" ? academicData : professionalData;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      {/* Minimal Toggle */}
      <div className="flex gap-1 mb-16 p-1 bg-gray-100 rounded-full">
        <button
          onClick={() => setMode("academic")}
          className={`py-2 px-6 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
            mode === "academic"
              ? "bg-black text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <img src={Acad} alt="Academic" className="w-4 h-4" />
          ACADEMIC
        </button>
        <button
          onClick={() => setMode("professional")}
          className={`py-2 px-6 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
            mode === "professional"
              ? "bg-black text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <img src={Prof} alt="Professional" className="w-4 h-4" />
          PROFESSIONAL
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-2xl"
        >
          <div className="relative">
            {/* Vertical gradient timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>

            <div className="space-y-8">
              {items.map((item, idx) => (
                <TimelineItem
                  key={`${mode}-${idx}`}
                  isLast={idx === items.length - 1}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TimelineItem({ isLast, year, title, description }) {
  return (
    <div className="relative flex items-start">
      {/* Gradient dot */}
      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-800 to-black border border-gray-200 mt-1 z-10"></div>

      {/* Content */}
      <div className="ml-8 pb-8">
        <div className="text-xs font-medium text-gray-500 mb-1">{year}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Timeline;
