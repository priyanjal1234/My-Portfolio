import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navigation = () => {
  let { isDark, setisDark } = useContext(ThemeDataContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setisDark(!isDark);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Base classes depending on theme
  const navBgClass = isDark ? "bg-dark/80" : "bg-white/80";
  const textClass = isDark ? "text-gray-300" : "text-gray-700";

  return (
    <nav className={`fixed w-full ${navBgClass} backdrop-blur-sm z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#home"
              className="text-2xl font-bold text-primary text-[#26AEEB]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              Priyanjal's Portfolio
            </a>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${textClass} hover:text-primary`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md ${textClass} hover:text-primary`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${textClass}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${textClass} hover:text-primary`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
