import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    {
        name: "Cloud Security on AWS",
        issuer: "Edureka",
        date: "2025", // Assuming recent based on context, or leave date out if unsure. Resume had 2025 for some.
        link: "#"
    },
    {
        name: "Databases and SQL for Data Science with Python",
        issuer: "IBM",
        date: "2025",
        link: "#"
    },
    {
        name: "Introduction to HTML, CSS, & JavaScript",
        issuer: "IBM",
        date: "2025",
        link: "#"
    },
    {
        name: "Introduction to Data Engineering",
        issuer: "IBM",
        date: "2025",
        link: "#"
    },
    {
        name: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "2025",
        link: "#"
    },
    {
        name: "NPTEL AIML",
        issuer: "NPTEL",
        date: "2024",
        link: "#"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 px-6 md:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 gradient-text inline-block"
                >
                    Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-panel p-6 rounded-xl hover:border-purple-500/50 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                    {cert.issuer[0]}
                                </div>
                                <span className="text-xs text-gray-500 font-mono border border-white/10 px-2 py-1 rounded">{cert.date}</span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{cert.name}</h3>
                            <p className="text-sm text-gray-400 mb-6">{cert.issuer}</p>

                            <a
                                href={cert.link}
                                className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-2"
                            >
                                View Certificate <span>→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
