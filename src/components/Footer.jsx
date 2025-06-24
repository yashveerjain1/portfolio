import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-red-600 px-6 py-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6 text-xl"
        >
          <a href="https://github.com/yashveerjain1" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yash-veer-jain-778953226/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/yashjain.940?igsh=N3RieXd6a3R2dzQz" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaInstagram />
          </a>
          <a href="mailto:yashjain0112233@gmail.com" className="hover:text-red-500">
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Right: Copyright */}
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-center md:text-right"
        >
          © 2025 <span className="text-white font-medium">Yash Jain</span>. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
