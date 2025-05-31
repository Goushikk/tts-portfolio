// src/components/Header.tsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight hover:text-blue-200 transition-colors">
          Techno Tec Systems
        </Link>

        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-lg hover:text-blue-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg hover:text-blue-200 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-lg hover:text-blue-200 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-lg hover:text-blue-200 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}