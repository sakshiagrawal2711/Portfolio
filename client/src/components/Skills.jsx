import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Languages",
        skills: ["Java", "Python", "JavaScript (ES6+)", "TypeScript", "SQL"]
    },
    {
        title: "Web Development",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"]
    },
    {
        title: "Android Development",
        skills: ["Java", "Android SDK", "XML UI", "SQLite", "Firebase Auth"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Docker", "Postman", "Firebase", "HuggingFace", "Figma"]
    },
    {
        title: "Cloud & Databases",
        skills: ["AWS (EC2, S3)", "Google Cloud", "MongoDB", "MySQL", "PostgreSQL"]
    },
    {
        title: "Concepts",
        skills: ["OOP", "DSA", "System Design", "Microservices", "CI/CD basics"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 md:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 gradient-text inline-block"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-sm bg-white/10 px-3 py-1 rounded-full text-gray-300 border border-white/5 hover:border-purple-500/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
