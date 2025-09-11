import { AnimatePresence, motion } from "framer-motion";

const Transition = (OgComp) => {
  return (props) => (
    <>
      <OgComp {...props} />
      {/* Curtain drops down */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Curtain slides back up */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
