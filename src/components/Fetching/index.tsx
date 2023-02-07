import { motion } from "framer-motion";
import React from "react";

export default function Fetching() {
  return (
    <motion.div
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 2 }}
      className="fixed top-0 right-0 left-0 z-20 h-2 bg-fetching "
    />
  );
}
