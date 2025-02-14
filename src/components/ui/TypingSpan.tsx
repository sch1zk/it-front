"use client"

import { motion } from "framer-motion";

interface TypingSpanProps {
  text: string;
}

const TypingSpan: React.FC<TypingSpanProps> = ({ text }) => {
  const splittedText = text.split("");

  return (
    <>
      {splittedText.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.0 }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

export default TypingSpan;
