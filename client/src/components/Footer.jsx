import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm relative z-10 glass-panel border-t border-white/5 mt-20">
            <div className="flex justify-center gap-8 mb-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Twitter</a>
            </div>
            <p>&copy; {new Date().getFullYear()} My Portfolio. Built with React & Three.js.</p>
        </footer>
    );
};

export default Footer;
