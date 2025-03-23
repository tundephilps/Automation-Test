import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center text-white h-[85vh] bg-[#04142B] overflow-hidden ">
      {/* Animated Gradient Effect */}
      <motion.div
        className="absolute inset-0 bottom-[-30%] flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[60%] h-[40%] bg-[#0037FF] blur-[120px] opacity-60 rounded-full"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          className="text-[#7191FF] px-4 py-1 rounded-full text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Leverage on Automation
        </motion.span>

        <motion.h1
          className="mt-4 text-4xl md:text-6xl font-bold font-figtree"
          style={{ fontFamily: "Figtree, sans-serif" }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          AI Models for <br /> Business Solutions
        </motion.h1>

        <motion.p
          className="mt-4 text-[22px] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs.
        </motion.p>

        <motion.button
          className="mt-6 px-6 py-3 bg-white text-[#05152c] font-semibold rounded-lg hover:bg-[#04142b] hover:text-white hover:shadow-2xl hover:shadow-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </section>
  );
}
