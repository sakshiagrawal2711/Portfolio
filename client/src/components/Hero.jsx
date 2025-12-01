import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center relative z-10 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 relative"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 animate-pulse"></div>
                <span className="relative px-4 py-1 bg-black rounded-full text-sm text-gray-300 border border-gray-800">Available for work</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold mb-6 gradient-text tracking-tight"
            >
                Creative<br />Developer
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-light"
            >
                Crafting immersive digital experiences with code and creativity.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
            >
                <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                    View Work
                </a>
                <a href="#contact" className="px-8 py-3 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105">
                    Contact Me
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
