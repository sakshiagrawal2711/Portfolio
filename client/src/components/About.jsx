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
                        Final-year Computer Science Engineering student specializing in full-stack web development (MERN) and Android application development (Java).
                        Experienced in building scalable web apps, APIs, and mobile applications with strong skills in Java, React.js, Node.js, MongoDB, and Android SDK.
                        Proven ability to design modular systems, optimize performance, and deploy cloud-based applications. 3× Hackathon winner with hands-on experience in agile engineering environments.
                    </motion.p>
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>
                        <div className="glass-panel p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-white">Bachelor of Technology in Computer Science Engineering</h4>
                            <p className="text-gray-300">Presidency University Bengaluru, India</p>
                            <div className="flex justify-between mt-2 text-sm text-gray-400">
                                <span>Expected Jul 2026</span>
                                <span className="text-purple-400 font-bold">CGPA: 8.50</span>
                            </div>
                            <p className="mt-4 text-sm text-gray-400">
                                Relevant Coursework: Data Structures, Algorithms, OOP, DBMS, Computer Networks, Operating Systems, Web Technologies, Mobile App Development
                            </p>
                        </div>
                    </div>

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
