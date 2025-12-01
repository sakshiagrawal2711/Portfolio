import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[900px] px-8 py-4 flex justify-between items-center z-50 rounded-full glass-panel"
        >
            <div className="text-xl font-bold font-['Space_Grotesk'] gradient-text">Portfolio</div>
            <ul className="flex gap-6 text-sm font-medium text-gray-300 hidden md:flex">
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#about">About</a></li>
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#experience">Experience</a></li>
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#projects">Projects</a></li>
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#certifications">Certifications</a></li>
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#contact">Contact</a></li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
