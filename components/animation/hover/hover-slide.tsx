"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

export function HoverSlide({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 기존 콘텐츠 - 위로 올라감 */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isHovered ? "-110%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      {/* 새 콘텐츠 - 아래에서 올라옴 */}
      <motion.div
        className="absolute left-0 top-0"
        initial={{ y: "110%" }}
        animate={{ y: isHovered ? "0%" : "110%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
