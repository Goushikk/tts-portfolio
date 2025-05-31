// src/components/Navbar.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to close menu on link click (important for mobile UX)
  const closeMenu = () => setIsOpen(false);

  // Variants for the mobile menu overlay animation
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" }, // Starts off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }, // Slides in
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } } // Slides out
  };

  return (
    <nav className="bg-primary-blue p-4 text-text-light flex justify-between items-center shadow-lg relative z-50">
      <div className="flex items-center">
        {/* Adjusted logo size for mobile (h-10) and desktop (md:h-12) */}
        <img
          src="/images/tts-logo.png"
          alt="Techno Tec Systems Logo"
          className="h-10 md:h-12 w-auto mr-2 md:mr-4"
        />
        {/* Adjusted company name text size for mobile (text-2xl) and desktop (md:text-3xl) */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-poppins font-bold hover:text-accent-light relative top-[-4px]"
        >
          Techno Tec Systems
        </Link>
      </div>

      {/* Desktop Navigation Links - Hidden on mobile, flex on md screens and up */}
      <div className="hidden md:flex items-center">
        <Link to="/" className={`mx-2 hover:text-accent-light ${location.pathname === '/' ? 'text-accent-light font-semibold' : ''}`}>Home</Link>
        <Link to="/about" className={`mx-2 hover:text-accent-light ${location.pathname === '/about' ? 'text-accent-light font-semibold' : ''}`}>About Us</Link>
        <Link to="/services" className={`mx-2 hover:text-accent-light ${location.pathname === '/services' ? 'text-accent-light font-semibold' : ''}`}>Services</Link>
        <Link to="/projects" className={`mx-2 hover:text-accent-light ${location.pathname === '/projects' ? 'text-accent-light font-semibold' : ''}`}>Projects</Link>
        <Link to="/contact" className={`mx-2 hover:text-accent-light ${location.pathname === '/contact' ? 'text-accent-light font-semibold' : ''}`}>Contact</Link>
      </div>

      {/* Hamburger Icon for Mobile - Visible only on md screens and down */}
      <div className="md:hidden">
        {/* This button now always shows the hamburger icon and always opens the menu */}
        <button onClick={() => setIsOpen(true)} className="text-text-light focus:outline-none">
          <FaBars className="text-3xl" />
        </button>
      </div>

      {/* Mobile Menu Overlay - Hidden on md screens and up, visible on smaller screens when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-primary-blue/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 md:hidden z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button inside the overlay */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-text-light focus:outline-none"
            >
              <FaTimes className="text-3xl" />
            </button>

            {/* Mobile menu links */}
            <Link to="/" className="text-text-light text-3xl font-poppins hover:text-accent-light transition-colors" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="text-text-light text-3xl font-poppins hover:text-accent-light transition-colors" onClick={closeMenu}>About Us</Link>
            <Link to="/services" className="text-text-light text-3xl font-poppins hover:text-accent-light transition-colors" onClick={closeMenu}>Services</Link>
            <Link to="/projects" className="text-text-light text-3xl font-poppins hover:text-accent-light transition-colors" onClick={closeMenu}>Projects</Link>
            <Link to="/contact" className="text-text-light text-3xl font-poppins hover:text-accent-light transition-colors" onClick={closeMenu}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}