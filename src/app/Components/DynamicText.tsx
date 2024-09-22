"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DynamicTextWithParagraph = () => {
    const [textIndex, setTextIndex] = useState(0);

    const titles = [
        "AI Powered Connected Data",
        "Next-Gen Project Management",
        "AI Powered Connected Data",
    ];

    const subtitles = [
        "Platform For Construction Projects",
        "Streamline Your Workflows",
        "Platform For Construction Projects",
    ];

    const paragraphs = [
        "Generate, Optimize & Control “Budget & Schedules” with greater Speed & efficiency right from 2D CAD.",
        "Track projects in real-time and make data-driven decisions with ease.",
        "Generate, Optimize & Control “Budget & Schedules” with greater Speed & efficiency right from 2D CAD.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => {
                if (prevIndex + 1 === 3) {
                    return 0; // Reset index with a delay for smoother transition back to the first item
                }
                return prevIndex + 1;
            });
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            {/* Animated title and subtitle */}
            <div className="text-center flex flex-col capitalize font-bold relative bg-clip-text text-transparent text-[3.5rem] max-lg:text-[45px] max-sm:text-[30px] bg-gradient-to-b from-custom-blue to-custom-purple">
                <motion.span
                    key={titles[textIndex]} // Key triggers Framer Motion to detect a change
                    initial={{ opacity: 0, y: 50 }} // Initial position and opacity
                    animate={{ opacity: 1, y: 0 }}  // Animation to visible
                    exit={{ opacity: 0, y: -50 }}   // Exit animation when the element changes
                    transition={{ duration: 1 }}  // Animation duration
                    className="p-0 m-0"
                >
                    {titles[textIndex]}
                </motion.span>

                <motion.span
                    key={subtitles[textIndex]} // Key for subtitle to animate separately
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                    className="p-0 -mt-10 mb-1 max-lg:-mt-5 max-md:mb-2 max-sm:-mt-1"
                >
                    {subtitles[textIndex]}
                </motion.span>
            </div>

            {/* Animated paragraph */}
            <motion.p
                key={paragraphs[textIndex]} // Key for paragraph to animate separately
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="text-dark-text font-bold text-[16px] max-sm:text-[15px] golos-text text-center my-3"
            >
                {paragraphs[textIndex]}
            </motion.p>
        </div>
    );
};

export default DynamicTextWithParagraph;
