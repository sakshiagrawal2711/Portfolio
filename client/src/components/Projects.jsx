import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "SLAT – Sign Language Assistant Tool",
        description: "Real-time communication tool using WebRTC & gesture-detection. Won Best Gen AI Project Award 2025.",
        tags: ["MERN", "WebRTC", "Python", "Node.js"],
        link: "#" // Add actual link if available or keep placeholder
    },
    {
        title: "Health Coach",
        description: "Full Stack Fitness Platform with authentication, user dashboards, and analytics.",
        tags: ["React", "Node.js", "MongoDB", "REST APIs"],
        link: "#"
    },
    {
        title: "TaskTrack",
        description: "Mobile task-management app with offline support and notification-based reminders.",
        tags: ["Android (Java)", "SQLite", "XML"],
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 gradient-text inline-block"
                >
                    Selected Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 font-light leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300 border border-white/5">{tag}</span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-bold text-white hover:text-purple-400 transition-colors"
                            >
                                View Project <span className="ml-2">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
