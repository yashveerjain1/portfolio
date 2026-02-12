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
              className="sm:text-3xl md:text-5xl text-2xl font-bold text-[#00BFFF]"
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
                  "Frontend Engineer",
                  "Working as ASE",
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
                 href="https://drive.google.com/file/d/1cekeD9zPc0zD4SGF_HDsBrPriLIdygGE/view?usp=drivesdk"
                download
                target="_blank"
                className="bg-[#00BFFF] text-white px-6 py-2 rounded hover:bg-sky-300 transition"
              >
                Download Resume
              </a>
              <Link
                to="/contact"
                className="border border-[#00BFFF] text-white px-6 py-2 rounded hover:bg-[#00BFFF] transition"
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
          <p className="text-lg text-[#00BFFF] mb-2">
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
          transition={{ duration: 0, delay: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {[
            "React Js",
            "Javascript",
            "Shadcn ui",
            "Tailwind css",
            "Tech Mentor",
            "React",
          ].map((badge, idx) => (
            <span
              key={idx}
              className=" bg-[#00BFFF] text-white px-4 py-2 rounded-full text-sm shadow-md"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
      <section className="px-6 py-20 bg-zinc-950 text-zinc-200" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-center tracking-wide">
            Skills
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Technical Skills Card */}
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/10 transition duration-300">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Technical Skills
              </h3>

              <ul className="space-y-3">
                {[
                  "C",
                  "C++",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Git & GitHub",
                  "VS Code",
                  "MS Word",
                  "PowerPoint",
                  "Canva",
                  "REST API",
                  "Fetch & Axios",
                  "Redux",
                  "Postman & Swagger",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-zinc-300 hover:text-white transition duration-200"
                  >
                    <span className="h-2 w-2 bg-blue-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills Card */}
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-emerald-500/10 transition duration-300">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">
                Soft Skills
              </h3>

              <ul className="space-y-3">
                {[
                  "Time Management",
                  "Cross-Functional Collaboration",
                  "Reporting & Documentation",
                  "Communication & Presentation Skills",
                  "Leadership",
                  "Team Management",
                  "Teamwork",
                  "Clear Communication",
                  "Attention to Detail",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-zinc-300 hover:text-white transition duration-200"
                  >
                    <span className="h-2 w-2 bg-emerald-400 rounded-full"></span>
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
