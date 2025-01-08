import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle dark mode preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const renderMenuLinks = () => (
    <>
      <Link
        to="/"
        className="block text-gray-800 dark:text-gray-200 py-2 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block text-gray-800 dark:text-gray-200 py-2 hover:text-blue-500 dark:hover:text-blue-400"
      >
        About
      </Link>
      <Link
        to="/services"
        className="block text-gray-800 dark:text-gray-200 py-2 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Services
      </Link>
      <Link
        to="/contact"
        className="block text-gray-800 dark:text-gray-200 py-2 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Contact
      </Link>
    </>
  );

  return (
    <div>
      <nav
        className={`${
          isScrolled
            ? "fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-lg transition duration-300"
            : "bg-white dark:bg-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 text-2xl font-bold text-gray-800 dark:text-gray-200">
              Shreem
            </div>

            {/* Menu Links */}
            <div
              className={`hidden md:flex space-x-4 transition-all duration-300`}
            >
              {renderMenuLinks()}
            </div>

            {/* Search Box */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="text-2xl text-gray-800 dark:text-gray-200"
              >
                <GiHamburgerMenu />
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <div className="ml-4">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden transition-all duration-300 ease-in-out">
              {renderMenuLinks()}
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
