"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface PolicyProps {
  title: string;
  description: string;
  query: string;
  contentList?: Array<{
    title: string;
    content: string;
  }>;
}

const PolicySection = ({
  title,
  description,
  query,
  contentList,
}: PolicyProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // type: "spring",
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const accordionVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: {
        // type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.section
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-2xl rounded-3xl border border-gray-100"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.header
          className="w-full text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {title}
          </h1>
        </motion.header>

        <motion.section
          className="space-y-8 text-gray-600 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <motion.p variants={itemVariants}>{description}</motion.p>

          <AnimatePresence mode="wait">
            {contentList && contentList.length > 0 && (
              <motion.div variants={itemVariants} className="space-y-4">
                {contentList.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 transition-colors duration-200 cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h2 className="text-xl font-bold text-gray-800 text-left">
                        {item.title}
                      </h2>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          variants={accordionVariants}
                          className="p-6 bg-white"
                        >
                          <p className="text-gray-600">{item.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p variants={itemVariants}>{query}</motion.p>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/" passHref>
              <motion.button
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05, rotate: "1deg" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Go to Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>
      </motion.section>
    </div>
  );
};

export default PolicySection;
