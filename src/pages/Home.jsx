import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Transition from "../components/Transition.jsx";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["DEVELOPER.", "ENGINEER.", "STUDENT.", "INTERN.", "INNOVATOR."],
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 200,
  });

  {
    /* Page Scroll Indicator */
  }
  const controls = useAnimation();

  useEffect(() => {
    let idleTimer;

    const startNudge = () => {
      controls.start({
        y: [0, 20, 0],
        transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" },
      });
    };

    const stopNudge = () => {
      controls.stop();
      controls.set({ y: 0 });
    };

    const handleScroll = () => {
      stopNudge();
      clearTimeout(idleTimer);
      idleTimer = setTimeout(startNudge, 5000);
    };

    window.addEventListener("scroll", handleScroll);
    startNudge();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimer);
    };
  }, [controls]);

  return (
    <motion.div animate={controls}>
      <div className="snap-y snap-mandatory hide-scrollbar pt-10">
        <div className="h-screen relative">
          <section className="sticky top-0 snap-start flex flex-col items-center justify-center h-screen text-center">
            <motion.h1
              className="text-gray-800 font-black inline-block leading-none text-[25vw] text-left"
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              whileHover={{ color: "#98c1d9" }}
              transition={{ x: { duration: 0.8, delay: 0.2 } }}
              viewport={{ once: false, amount: 0.5 }}
            >
              HELLO
            </motion.h1>
            <motion.h1
              className="text-gray-800 font-black inline-block leading-none text-[25vw] text-left"
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              whileHover={{ color: "#98c1d9" }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              THERE!
            </motion.h1>
          </section>
        </div>

        <div className="h-screen relative">
          <section className="sticky top-0 snap-start flex flex-col items-center justify-center h-screen text-center">
            <motion.h1
              className="text-gray-800 font-black leading-none text-[15vw]"
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              MY{" "}
              <motion.span whileHover={{ color: "#98c1d9" }}>NAME</motion.span>{" "}
              IS
            </motion.h1>
            <motion.h1
              className="text-gray-800 font-black leading-none text-[15vw]"
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.0, delay: 1.0 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.div whileHover={{ color: "#98c1d9" }}>
                DAVID PARK.
              </motion.div>
            </motion.h1>
          </section>
        </div>

        <div className="h-screen relative">
          <section className="sticky top-0 snap-start flex flex-col items-center justify-center h-screen text-center">
            <motion.h1
              className="text-gray-800 font-black leading-none text-[15vw]"
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              I AM A
            </motion.h1>
            <div className="text-[#98c1d9] font-black leading-none text-[15vw]">
              {text}
              <Cursor />
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
export default Transition(Home);
