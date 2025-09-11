import React from "react";
import Timeline from "../components/Timeline.jsx";
import Transition from "../components/Transition.jsx";
import InfiniteScroll from "../components/InfiniteScroll.jsx";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col py-12 px-4 pt-32">
      <h1 className="text-sm font-light">ABOUT ME</h1>
      <InfiniteScroll />
      <Timeline />
    </div>
  );
};

export default Transition(About);
