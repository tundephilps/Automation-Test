import React from "react";
import { motion } from "framer-motion";

const AIModels = () => {
  return (
    <motion.div
      className="text-center pt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="mt-4 text-4xl text-[#22263f] md:text-[50px] font-bold font-figtree max-w-3xl mx-auto"
        style={{ fontFamily: "Figtree, sans-serif", lineHeight: "60px" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 1.15 }}
      >
        AI Models tailored for your business needs
      </motion.h2>

      <motion.p
        className="text-[#828282] font-medium lg:text-[22px] text-base mt-2 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.12, duration: 1.15 }}
        style={{ lineHeight: "30px" }}
      >
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our specialized models are designed to fit different business
        needs.
      </motion.p>
    </motion.div>
  );
};

export default AIModels;
