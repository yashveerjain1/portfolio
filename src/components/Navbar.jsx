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
    <div className=" bg-black w-full sticky top-0 z-50 border-b border-[#00BFFF]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center flex-wrap md:flex-nowrap">
        {/* Left: Animated Name */}
        <motion.h1
          className="text-2xl font-bold text-[#00BFFF] whitespace-nowrap"
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
              className={`text-white hover:text-[#00BFFF] hover:underline hover:decoration-4 hover:decoration-[#00BFFF] hover:underline-offset-20
 transition font-medium ${
   location.pathname === link.path ? "text-[#00BFFF]" : ""
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
            className="text-[#00BFFF] border border-[#00BFFF] px-4 py-1 rounded hover:bg-[#00BFFF] hover:text-white  transition"
          >
            Mail Me
          </a>

          <a
            href="https://drive.google.com/file/d/1cekeD9zPc0zD4SGF_HDsBrPriLIdygGE/view?usp=drivesdk"
            download
            target="_blank"
            className="text-white bg-[#00BFFF] px-4 py-1 rounded hover:bg-sky-300 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile: Hamburger Icon */}
        <div className="block md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-[#00BFFF]" />
            ) : (
              <Menu className="text-[#00BFFF]" />
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
                className={`block text-white hover:text-white font-medium ${
                  location.pathname === link.path ? "text-[#00BFFF]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="mailto:yashjain0112233@gmail.com"
                className="text-white border border-[#00BFFF] px-4 py-1 rounded hover:bg-[#00BFFF]transition"
              >
                Mail Me
              </a>
              <a
                href="https://drive.google.com/file/d/1NKzdaq7ysGCU-6DfopC3YhqWI7GS2kq-/view?usp=sharing"
                download
                className="text-white bg-[#00BFFF] px-4 py-1 rounded hover:bg-[#00BFFF] transition"
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
