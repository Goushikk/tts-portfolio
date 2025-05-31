// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; // Ensure this file exists and exports default
import Services from './pages/Services'; // Ensure this file exists and exports default
import Projects from './pages/Projects'; // Ensure this file exists and exports default
import Contact from './pages/Contact';   // Ensure this file exists and exports default

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navbar */}
      <nav className="bg-blue-800 p-4 text-white flex justify-between items-center shadow-lg">
        <div className="flex items-center"> {/* Use flex to align logo and text */}
          {/* Company Logo */}
          <img
            src="/images/tts-logo.png" // <--- IMPORTANT: Make sure this path matches your logo file in public/images/
            alt="Techno Tec Systems Logo"
            className="h-12 w-auto mr-4" // Increased height to h-12 (48px) and margin to mr-4 (16px)
          />
          {/* Company Name as a Link to Home */}
          <Link
            to="/"
            className="text-3xl font-bold hover:text-blue-200 relative top-[-4px]" // Added relative top-[-4px] to move text slightly upwards
          >
            Techno Tec Systems
          </Link>
        </div>
        {/* Navigation Links */}
        <div>
          <Link to="/" className="mx-2 hover:text-blue-200">Home</Link>
          <Link to="/about" className="mx-2 hover:text-blue-200">About Us</Link>
          <Link to="/services" className="mx-2 hover:text-blue-200">Services</Link>
          <Link to="/projects" className="mx-2 hover:text-blue-200">Projects</Link>
          <Link to="/contact" className="mx-2 hover:text-blue-200">Contact</Link>
        </div>
      </nav>

      {/* Main content area, grows to fill available space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} Techno Tec Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; // Ensure App is exported as default