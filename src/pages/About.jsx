import React from "react";
import Timeline from "../components/Timeline.jsx";
import Transition from "../components/Transition.jsx";
import InfiniteScroll from "../components/InfiniteScroll.jsx";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col py-12 px-4 pt-32">
      <h1 className="text-sm font-light">ABOUT ME</h1>
      <h2 className="text-5xl font-thin">POSITIVE, MOTIVATED, DRIVEN.</h2>
      <p className="mt-1 max-w-5xl text-gray-700">
        I AM A PASSIONATE AND DEDICATED SOFTWARE DEVELOPER WITH A STRONG
        BACKGROUND IN COMPUTER SCIENCE. I LOVE TO LEARN NEW THINGS AND TAKE ON
        CHALLENGING PROJECTS.
      </p>
      <div className="mt-12 w-full text-gray-700">
        <h1>LANGUAGES WORKED CLOSELY WITH:</h1>
        <InfiniteScroll />
      </div>
      <div className="mt-12 w-full">
        <Timeline />
      </div>
    </div>
  );
};

export default Transition(About);
