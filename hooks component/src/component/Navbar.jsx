import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Shreem
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-800 dark:text-gray-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 dark:text-gray-200">
              About
            </Link>
            <Link to="/services" className="text-gray-800 dark:text-gray-200">
              Services
            </Link>
            <Link to="/contact" className="text-gray-800 dark:text-gray-200">
              Contact
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <Link
              to="/"
              className="block text-gray-800 dark:text-gray-200 py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-800 dark:text-gray-200 py-2"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-gray-800 dark:text-gray-200 py-2"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-gray-800 dark:text-gray-200 py-2"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
