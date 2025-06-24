// About.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function About() {
  // Refs and InView Hooks
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false, threshold: 0.3 });

  const focusRef = useRef(null);
  const focusInView = useInView(focusRef, { once: false, threshold: 0.3 });

  const moreRef = useRef(null);
  const moreInView = useInView(moreRef, { once: false, threshold: 0.3 });

  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: false, threshold: 0.3 });

  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Intro Section */}
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "show" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-red-600 mb-4">
            About Me — Software Engineer
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-300">
            Hey! I'm <span className="text-white font-semibold">Yash Veer Jain</span>, a software engineer with a passion for building smooth, responsive, and accessible web experiences.
          </motion.p>
        </motion.div>

        {/* Focus Section */}
        <motion.div
          ref={focusRef}
          initial="hidden"
          animate={focusInView ? "show" : "hidden"}
          variants={containerVariants}
          className="space-y-4 text-gray-300"
        >
          {[
            `I specialize in React, JavaScript, and the MERN stack, blending clean code with modern UI practices. I love turning ideas into reality using pixel-perfect layouts, reusable components, and delightful interactions powered by Framer Motion and Tailwind CSS.`,
            `From static websites to dynamic full-stack apps, my focus is always on crafting user-first experiences that load fast, feel intuitive, and scale well. I believe frontend is not just about visuals — it’s where users connect with your product, and I take that seriously.`,
          ].map((para, i) => (
            <motion.p key={i} variants={fadeInUp}>{para}</motion.p>
          ))}
        </motion.div>

        {/* Key Focus Areas */}
        <motion.div
          ref={moreRef}
          initial="hidden"
          animate={moreInView ? "show" : "hidden"}
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-red-500">
          My Key Focus Areas
          </motion.h3>
          <motion.ul variants={fadeInUp} className="list-disc list-inside space-y-2 text-gray-300">
            <li>Responsive UI development with React & Tailwind</li>
            <li>Modular, maintainable component architecture</li>
            <li>Framer Motion animations for smooth UX</li>
            <li>Performance-focused, accessible interfaces</li>
            <li>Fast learning & debugging mindset</li>
          </motion.ul>
        </motion.div>

        {/* Extra Info + Education */}
        <motion.div
          ref={eduRef}
          initial="hidden"
          animate={eduInView ? "show" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* A Little More About Me */}
          <div className="space-y-6">
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-red-500 text-center">
              🧠 A Little More About Me
            </motion.h3>

            {[
              `I am a Computer Science and Engineering graduate with a strong foundation in full-stack web development, cloud computing, and software engineering principles.`,
              `During my time as a Software Development Engineer Intern at EasyncBooks Pvt. Ltd., I contributed to building scalable and user-friendly web-based accounting software — actively engaging in coding, debugging, and collaborating with cross-functional teams.`,
              `Previously, I completed a MERN Stack Internship at Softpro India, where I developed dynamic web applications using MongoDB, Express.js, React, and Node.js.`,
              `I also served as a Cloud Computing Mentor at Lloyd Polytechnic College, helping diploma students understand core cloud concepts and tools like AWS, Azure, and Google Cloud.`,
              `I am a fast learner, team player, and problem solver who enjoys working on impactful projects. I'm now looking forward to joining a growth-oriented organization where I can contribute my skills, continue learning, and build innovative tech solutions.`,
            ].map((para, idx) => (
              <motion.p key={idx} variants={fadeInUp} className="text-gray-300 leading-relaxed text-base">
                {para}
              </motion.p>
            ))}
          </div>

          {/* 🎓 Education Timeline */}
          <div className="space-y-6">
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-red-500 text-center">
              🎓 Education
            </motion.h3>

            <div className="relative border-l border-red-500 ml-4">
              {/* 10th */}
              <motion.div variants={fadeInUp} className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-1.5 top-1"></div>
                <div className="bg-gradient-to-r from-gray-500 to-red-400 p-4 rounded shadow-md">
                  <p className="text-sm text-red-400 font-semibold">2019</p>
                  <p className="font-medium text-white">10th Standard</p>
                  <p className="text-sm text-gray-400">Central Board of Secondary Education</p>
                  <p className="text-sm text-white">Little Star Public School</p>
                </div>
              </motion.div>

              {/* 12th */}
              <motion.div variants={fadeInUp} className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-1.5 top-1/2"></div>
                <div className="bg-gradient-to-r from-gray-500 to-red-400 p-4 rounded shadow-md">
                  <p className="text-sm text-red-400 font-semibold">2021</p>
                  <p className="font-medium text-white">12th Standard</p>
                  <p className="text-sm text-gray-400">Central Board of Secondary Education</p>
                  <p className="text-sm text-white">Ramjas Senior Secondary School No.1</p>
                </div>
              </motion.div>

              {/* Graduation */}
              <motion.div variants={fadeInUp} className="ml-6">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-1.5 top-full"></div>
                <div className="bg-gradient-to-r from-gray-500 to-red-400 p-4 rounded shadow-md">
                  <p className="text-sm text-red-400 font-semibold">2025</p>
                  <p className="font-medium text-white">B.Tech in Computer Science & Engineering</p>
                  <p className="text-sm text-gray-400">Dr.APJ Abdul Kalam Technical University</p>
                  <p className="text-sm text-white">Lloyd Institute of Engineering and Technology</p>
                </div>
              </motion.div>
              
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}

export default About;
