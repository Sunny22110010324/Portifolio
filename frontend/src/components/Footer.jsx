import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold inline-block">
              <span className="text-emerald-500">TSR</span>
              <span className="text-gray-800 dark:text-white">.dev</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 dark:text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-gray-800 dark:text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-200 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-200 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} {portfolioData.personal.name}. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;