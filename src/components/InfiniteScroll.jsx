import React from "react";
import Marquee from "react-fast-marquee";
import { FaPython, FaPhp, FaJava, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

export default function InfiniteScroll() {
  const techIcons = [
    { Component: IoLogoJavascript, name: "JavaScript" },
    { Component: FaPhp, name: "PHP" },
    { Component: FaJava, name: "Java" },
    { Component: FaReact, name: "React" },
    { Component: FaPython, name: "Python" },
    { Component: RiTailwindCssFill, name: "Tailwind" },
  ];

  return (
    <div className="w-full py-8">
      <Marquee gradient={false} speed={150} pauseOnHover={true}>
        <div className="flex items-center">
          {techIcons.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center justify-center w-32 h-20 mx-12"
            >
              <tech.Component className="h-16 w-16 text-gray-800" />
            </div>
          ))}
          {/* Add spacing at the end for seamless loop */}
          <div className="w-16"></div>
        </div>
      </Marquee>
    </div>
  );
}
