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
          <motion.h2
            variants={fadeInUp}
            className="sm:text-4xl text-xl text-left sm:text-center font-bold text-[#00BFFF] mb-4"
          >
            About Me — Software Engineer
          </motion.h2>
          <motion.p variants={fadeInUp} className="sm:text-lg text-lg sm:text-center text-left  text-gray-300">
            Hey! I'm{" "}
            <span className="text-white font-semibold">Yash Veer Jain</span>, a
            software engineer with a passion for building smooth, responsive,
            and accessible web experiences.
          </motion.p>
        </motion.div>

        {/* Focus Section */}
        <motion.div
          ref={focusRef}
          initial="hidden"
          animate={focusInView ? "show" : "hidden"}
          variants={containerVariants}
          className="space-y-4 sm:text-lg text-md sm:text-center text-left  text-gray-300"
        >
          {[
            `I develop and maintain responsive websites and admin panels using React.js and modern CSS frameworks, blending clean code with modern UI practices. I love turning ideas into reality using pixel-perfect layouts, reusable components, and delightful interactions powered by React js and Tailwind CSS.`,
            `From static websites to dynamic full-stack apps, my focus is always on crafting user-first experiences that load fast, feel intuitive, and scale well. I believe frontend is not just about visuals — it’s where users connect with your product, and I take that seriously.`,
          ].map((para, i) => (
            <motion.p key={i} variants={fadeInUp}>
              {para}
            </motion.p>
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
          <motion.h3
            variants={fadeInUp}
            className="sm:text-4xl text-xl text-left sm:text-center  font-bold text-[#00BFFF]"
          >
            My Key Focus Areas
          </motion.h3>
          <motion.ul
            variants={fadeInUp}
            className="list-disc list-inside space-y-2 text-gray-300"
          >
            <li>Responsive UI development with React & Tailwind</li>
            <li>Modular, maintainable component architecture</li>
            <li>Shadcn component for modern ui design</li>
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
            <motion.h3
              variants={fadeInUp}
              className="sm:text-4xl text-xl text-left sm:text-center font-bold text-[#00BFFF] "
            >
              A Little More About Me
            </motion.h3>

            {[
              `I am a Computer Science and Engineering graduate with a strong foundation in web development, cloud computing, and software engineering principles & life cycle.`,
              ` I am a Frontend Developer and Associate Software Engineer with hands-on experience building scalable, responsive web applications using React.js and modern JavaScript (ES6+). Currently working at LMS, I develop and maintain admin panels, dashboards, and role-based systems with seamless REST API integration.`,
              `During my time as a Software Development Engineer Intern at EasyncBooks Pvt. Ltd., I contributed to building scalable and user-friendly web-based accounting software — actively engaging in coding, debugging, and collaborating with cross-functional teams.`,
              `Previously, I completed a MERN Stack Internship at Softpro India, where I developed a static website.`,
              `I also served as a Cloud Computing Mentor at Lloyd Polytechnic College, helping diploma students understand core cloud concepts and tools like AWS, Azure, and Google Cloud.`,
            ].map((para, idx) => (
              <motion.p
                key={idx}
                variants={fadeInUp}
                className="text-gray-300 leading-relaxed text-base"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* 🎓 Education Timeline */}
          <div className="space-y-6">
            <motion.h3
              variants={fadeInUp}
              className="sm:text-4xl text-xl text-left sm:text-center  font-bold text-[#00BFFF] "
            >
              Education
            </motion.h3>

            <div className="relative border-l border-[#00BFFF] ml-4">
              {/* 10th */}
              <motion.div variants={fadeInUp} className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-[#00BFFF] rounded-full -left-1.5 top-0"></div>
                <div className="bg-gradient-to-r from-gray-500 to-[#00BFFF] p-4 rounded shadow-md">
                  <p className="text-sm text-[#00BFFF] font-semibold">2019</p>
                  <p className="font-medium text-white">10th Standard</p>
                  <p className="text-sm text-gray-300">
                    Central Board of Secondary Education
                  </p>
                  <p className="text-sm text-white">
                    Little Star Public School
                  </p>
                </div>
              </motion.div>

              {/* 12th */}
              <motion.div variants={fadeInUp} className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-[#00BFFF] rounded-full -left-1.5 top-70%"></div>
                <div className="bg-gradient-to-r from-gray-500 to-[#00BFFF] p-4 rounded shadow-md">
                  <p className="text-sm text-[#00BFFF] font-semibold">2021</p>
                  <p className="font-medium text-white">12th Standard</p>
                  <p className="text-sm text-gray-300">
                    Central Board of Secondary Education
                  </p>
                  <p className="text-sm text-white">
                    Ramjas Senior Secondary School No.1
                  </p>
                </div>
              </motion.div>

              {/* Graduation */}
              <motion.div variants={fadeInUp} className="ml-6">
                <div className="absolute w-3 h-3 bg-[#00BFFF] rounded-full -left-1.5 top-90%"></div>
                <div className="bg-gradient-to-r from-gray-500 to-[#00BFFF] p-4 rounded shadow-md">
                  <p className="text-sm text-[#00BFFF] font-semibold">2025</p>
                  <p className="font-medium text-white">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <p className="text-sm text-gray-300">
                    Dr.APJ Abdul Kalam Technical University
                  </p>
                  <p className="text-sm text-white">
                    Lloyd Institute of Engineering and Technology
                  </p>
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
