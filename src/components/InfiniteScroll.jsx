import React from "react";
import Marquee from "react-fast-marquee";
import { FaPython, FaPhp, FaReact, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

export default function InfiniteScroll() {
  return (
    <div className="w-full py-8">
      <Marquee gradient={false} speed={100} loop={0} pauseOnHover={true}>
        <div className="flex items-center ">
          <FaPython className="h-16 w-auto mx-8 text-black" />
          <RiTailwindCssFill className="h-16 w-auto mx-8 text-black" />
          <IoLogoJavascript className="h-16 w-auto mx-8 text-black" />
          <FaPhp className="h-16 w-auto mx-8 text-black" />
          <FaJava className="h-16 w-auto mx-8 text-black" />
          <FaReact className="h-16 w-auto mx-8 text-black" />
        </div>
      </Marquee>
    </div>
  );
}
