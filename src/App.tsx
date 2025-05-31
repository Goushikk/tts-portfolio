// src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom'; // Removed BrowserRouter import
import Navbar from './components/Navbar';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Icons for top bar

// Page imports
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import Framer Motion components
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation(); // This hook now correctly accesses the context from main.tsx

  // Define how pages will animate (slide-in/slide-out)
  const pageVariants = {
    initial: { opacity: 0, x: "100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "-100vw" }
  };

  // Define the transition properties (speed, easing)
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.7
  };

  return (
    <div className="flex flex-col min-h-screen font-opensans">
      {/* Top Bar */}
      <div className="bg-accent-dark text-text-light text-sm py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center z-50">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-1 sm:mb-0">
          <a href="tel:+919840050850" className="hover:text-accent-light transition-colors flex items-center">
            <FaPhone className="mr-1 text-xs" /> +91 98400 50850
          </a>
          <a href="mailto:info@technotecsystems.com" className="hover:text-accent-light transition-colors flex items-center">
            <FaEnvelope className="mr-1 text-xs" /> info@technotecsystems.com
          </a>
        </div>
        <div className="text-center sm:text-right">
          <span className="opacity-90">ISO 9001:2015 Certified | Securing Your World Since 1999</span>
        </div>
      </div>

      {/* Use the Navbar component */}
      <Navbar />

      {/* Main content area for page transitions */}
      <main className="flex-grow relative">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                key="home"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="absolute inset-0 overflow-y-auto"
              >
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                key="about"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="absolute inset-0 overflow-y-auto"
              >
                <AboutUs />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div
                key="services"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="absolute inset-0 overflow-y-auto"
              >
                <Services />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                key="projects"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="absolute inset-0 overflow-y-auto"
              >
                <Projects />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                key="contact"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="absolute inset-0 overflow-y-auto"
              >
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-accent-dark text-text-light p-4 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} Techno Tec Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;