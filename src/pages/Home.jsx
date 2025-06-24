// Home.jsx — Hero + Scroll-In/Out with useInView

import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImg from "../assets/hero.png";

function Home() {
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: false, threshold: 0.3 });

  const testimonialRef = useRef(null);
  const testimonialInView = useInView(testimonialRef, {
    once: false,
    threshold: 0.3,
  });

  const funFactRef = useRef(null);
  const funFactInView = useInView(funFactRef, { once: false, threshold: 0.3 });

  const badgeRef = useRef(null);
  const badgeInView = useInView(badgeRef, { once: false, threshold: 0.3 });

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-red-600"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm Yash Jain
            </motion.h1>

            <motion.h2
              className="text-lg md:text-2xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Typewriter
                words={[
                  "React Developer",
                  "MERN Stack Enthusiast",
                  "Frontend Engineer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h2>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href="https://drive.google.com/file/d/1NKzdaq7ysGCU-6DfopC3YhqWI7GS2kq-/view?usp=sharing"
                download
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                Download Resume
              </a>
              <Link
                to="/contact"
                className="border border-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={heroImg}
              alt="Hero"
              className="w-72 md:w-96 object-contain rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Reveal Section */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        {/* Quote */}
        <motion.blockquote
          ref={quoteRef}
          initial={{ opacity: 0, y: 50 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-center italic text-gray-300"
        >
          “I don’t just write code. I solve problems and design experiences.”
        </motion.blockquote>

        {/* Testimonial */}
        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-white mb-2">
            "Yash Veer Jain is a talented and dependable software developer with
            strong technical skills, a positive attitude, and a collaborative
            spirit—an asset to any team."
          </p>
          <p className="text-gray-400 text-sm">— Kunal / Easyncbooks pvt ltd</p>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          ref={funFactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={funFactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-xl shadow-md text-white text-center"
        >
          I enjoy teaching tech and have even mentored diploma-level students in
          Cloud Computing — seeing someone "get it" is the best feeling!
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {[
            "💼 Open to Work",
            "🤝 Freelance Available",
            "🌱 Currently Learning: Data Analytics",
            "🧑‍🏫 Tech Mentor",
            "💡 React + MERN Focused",
          ].map((badge, idx) => (
            <span
              key={idx}
              className="animate-bounce bg-red-600 text-white px-4 py-2 rounded-full text-sm shadow-md"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <section className="px-6 py-12 bg-zinc-900 text-white" id="skills">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">🧠 Skills</h2>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-center text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
     {/* Tech Skills */}
<div className="flex flex-col items-center text-left">
  <h3 className="text-xl font-semibold text-blue-400 mb-4">🛠️ Tech Skills</h3>
  <ul className="space-y-2 pl-4 border-l-2 border-blue-500">
    {[
      "C", "C++", "HTML", "CSS", "JavaScript", "React",
      "Node.js", "Express.js", "MongoDB", "Git & GitHub",
      "VS Code", "MS Word", "PowerPoint", "Canva"
    ].map((skill) => (
      <li
        key={skill}
        className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-blue-400 before:rounded-full"
      >
        {skill}
      </li>
    ))}
  </ul>
</div>


      {/* Soft Skills */}
      <div className="flex flex-col items-center text-left">
        <h3 className="text-xl font-semibold text-green-400 mb-4">🤝 Soft Skills</h3>
        <ul className="space-y-2 pl-4 border-l-2 border-green-500">
          {[
            "Problem-Solving", "Leadership", "Team Management",
            "Teamwork", "Presentation Skills", "Work Ethic"
          ].map((skill) => (
            <li
              key={skill}
              className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-green-400 before:rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </div>
</section>

    </div>
  );
}

export default Home;
