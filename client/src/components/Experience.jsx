import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Research Analyst Intern",
        company: "Concentrix",
        period: "2025 - 2025",
        description: "Leading the frontend team in building scalable web applications using React and TypeScript."
    },
    {
        role: "Full Stack Developer",
        company: "Creative Agency",
        period: "2021 - 2023",
        description: "Developed interactive websites and managed backend services using Node.js and MongoDB."
    },
    {
        role: "Junior Developer",
        company: "StartUp Inc",
        period: "2020 - 2021",
        description: "Collaborated with designers to implement responsive UI components and fix bugs."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 md:px-20 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-16 gradient-text inline-block"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l border-white/20 ml-4 md:ml-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>

                            <div className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="text-sm text-purple-400 font-mono mb-2 block">{exp.period}</span>
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-gray-400 mb-4 text-sm">{exp.company}</h4>
                                <p className="text-gray-300 font-light leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
