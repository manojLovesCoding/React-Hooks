import { useState, createContext, useContext } from "react";

// Create a Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 ${
        theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-xl font-bold">My App</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <p className="text-lg">This is the main content of the app.</p>
    </div>
  );
}

function ThemeProviderr() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
}

export default ThemeProviderr;
