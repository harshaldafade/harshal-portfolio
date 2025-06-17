"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

const Stat = ({ value, label, suffix = "" }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2"
      >
        {value}{suffix}
      </motion.div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
};

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <Stat value={5} suffix="+" label="Full-Stack Projects" />
      <Stat value={50} suffix="K+" label="Lines of Code" />
      <Stat value={3} suffix="+" label="Years Experience" />
      <Stat value={100} suffix="%" label="Passion for Tech" />
    </div>
  );
} 