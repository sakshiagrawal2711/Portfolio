import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-20 relative z-10">
            <div className="max-w-6xl mx-auto glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/3"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src="/profile.jpeg"
                            alt="Profile"
                            className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl border-2 border-white/10"
                        />
                    </div>
                </motion.div>

                <div className="w-full md:w-2/3">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-8 gradient-text inline-block"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg text-gray-300 mb-8 leading-relaxed font-light"
                    >
                        I am a passionate developer with expertise in building modern web applications.
                        I love creating immersive user experiences using technologies like React, Three.js, and Node.js.
                        My goal is to build software that not only solves problems but also inspires users.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
