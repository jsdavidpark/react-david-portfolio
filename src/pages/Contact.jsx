import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Transition from "../components/Transition.jsx";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("PLEASE FILL IN ALL FIELDS");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      form_name: formData.name,
      form_email: formData.email,
      form_message: formData.message,
    };

    emailjs
      .send(
        "service_t37hfxl",
        "template_p6xp81a",
        templateParams,
        "7TIiBYI_wcmDsrFs9"
      )
      .then(
        () => {
          setSubmitStatus("MESSAGE SENT!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(""), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setSubmitStatus("FAILED TO SEND. TRY AGAIN.");
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(""), 3000);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!showForm ? (
          // Landing Section
          <motion.section
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start justify-center min-h-screen px-8"
          >
            <motion.h1
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
              className="text-[8vw] md:text-[6vw] font-black text-gray-800 leading-none"
            >
              I'M OPEN TO NEW IDEAS!
            </motion.h1>

            <motion.h2
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 120,
              }}
              className="text-[8vw] md:text-[6vw] font-black text-gray-800 leading-none mt-4"
            >
              HAVE A PROJECT IN MIND? I'D LOVE TO{" "}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#98c1d9",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-black transition-all duration-300"
              >
                TALK
              </motion.button>{" "}
              ABOUT IT.
            </motion.h2>
          </motion.section>
        ) : (
          // Form Section
          <motion.section
            key="form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center min-h-screen px-8 max-w-4xl mx-auto "
          >
            <div className="flex flex-col gap-4 relative">
              {/* Back Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: -5 }}
                onClick={() => setShowForm(false)}
                className="text-gray-600 bg-trasparent hover:text-gray-800 text-sm font-medium flex items-center gap-2"
              >
                <span>←</span> BACK
              </motion.button>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-black text-gray-800 mb-8"
              >
                LET'S CONNECT
              </motion.h1>
            </div>

            <div className="space-y-4">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-600 tracking-wide mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="BEN DOVER"
                  className="w-full px-0 py-4 text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-600 tracking-wide mb-2">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="BEN@EXAMPLE.COM"
                  className="w-full px-0 py-4 text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-600 tracking-wide mb-2">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  className="w-full px-0 py-4 text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors duration-200 placeholder-gray-400 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="px-12 py-4 text-lg font-black text-white bg-gray-800 hover:bg-[#98c1d9] disabled:opacity-50 transition-all duration-300"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </motion.button>
              </motion.div>

              {/* Status Message */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center pt-4"
                  >
                    <p
                      className={`font-medium ${
                        submitStatus === "MESSAGE SENT!"
                          ? "text-[#98c1d9]"
                          : "text-[#f77979]"
                      }`}
                    >
                      {submitStatus}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Transition(Contact);
