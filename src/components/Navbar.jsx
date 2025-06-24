import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Work & Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Auto close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className=" bg-black w-full sticky top-0 z-50 border-b border-red-600">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center flex-wrap md:flex-nowrap">
        {/* Left: Animated Name */}
        <motion.h1
          className="text-2xl font-bold text-red-600 whitespace-nowrap"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Yash Veer Jain
        </motion.h1>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white hover:text-red-500 transition font-medium ${
                location.pathname === link.path ? "text-red-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="mailto:yashjain0112233@gmail.com?subject=Hire%20Me%20via%20Portfolio&body=Hi%20Yash%2C%0A%0AI%20checked%20your%20portfolio%20and%20would%20love%20to%20connect."
            className="text-white border border-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Mail Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile: Hamburger Icon */}
        <div className="block md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile: Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-6 pb-6 pt-2 space-y-4 bg-black"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-white hover:text-red-500 font-medium ${
                  location.pathname === link.path ? "text-red-600" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="mailto:yashjain0112233@gmail.com"
                className="text-white border border-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
              >
                Mail Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
