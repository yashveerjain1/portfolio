import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Multi-page personal site built with React, Tailwind, and Framer Motion. Emphasized clean component design and animations.",
    tags: ["React", "Tailwind", "Framer Motion","Javascript","CSS","UI/UX","Email.js"],
    link: "https://github.com/yashveerjain1",
  },
   {
    title: "Backend Project",
    desc: "Build this Project to learn the amzing concepts of Backend",
    tags: ["Node.js","Express.js","Javascript","Typescript","MongoDb"],
    link: "https://github.com/yashveerjain1",
  },
  {
    title: "Animated Website Using javascript",
    desc: "Cool Looking Website using js",
    tags: ["HTML","CSS","Javascript"],
    link: "https://github.com/yashveerjain1",
  },
  {
    title: "Razorpay Clone",
    desc: "Clone of Old Razorpay website",
    tags: ["HTML","CSS","Javascript"],
    link: "https://github.com/yashveerjain1",
  },

];

const work = [
  {
    role: "Software Development Intern",
    company: "EasyncBooks Pvt. Ltd.",
    duration: "feb 2025 – May 2025",
    tech: ["React", "Javascript", "Tailwind", "Html", "CSS", "Api", "Node.Js"],
    highlights: [
      "Built and optimized accounting modules with reusable components.",
      "Implemented Invoice Generation in Excel And Pdf Format.",
      "Enhanced UI consistency using Tailwind CSS and layout grids.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Softpro India",
    duration: "Jul 2023 – Oct 2023",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    highlights: [
      "Developed APIs and dynamic dashboards for internal tools.",
      "Worked on routing, state handling and CRUD logic in React.",
      "Integrated backend routes with MongoDB for full-stack features.",
    ],
  },
  {
    role: "Cloud Computing Mentor",
    company: "Lloyd Polytechnic College",
    duration: "feb 2024 – July 2024",
    tech: [
      "Cloud Computing",
      "SAAS",
      "PAAS",
      "IAAS",
      "Benefits",
      "Cloud Storage",
    ],
    highlights: [
      " I helped students to understand cloud computing by explaining basic concepts and how to use tools like AWS, Azure, and Google Cloud. I supported them with their projects, exam prep, and career questions",
    ],
  },
];

function Projects() {
  const workRef = useRef(null);
  const workInView = useInView(workRef, { threshold: 0.3 });

  const projRef = useRef(null);
  const projInView = useInView(projRef, { threshold: 0.3 });

  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* 🧠 Work Experience */}
        <motion.div
          ref={workRef}
          initial={{ opacity: 0, y: 40 }}
          animate={workInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold text-red-500 border-b border-red-800 pb-2">
            Work Experience
          </h2>

          {work.map((job, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-md border hover:border-red-600 hover:bg-black transition border-gray-800"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <span className="text-sm text-gray-400">{job.duration}</span>
              </div>
              <p className="text-gray-400">{job.company}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {job.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-800 border border-red-600 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc ml-5 mt-4 text-gray-300 space-y-1 text-sm">
                {job.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* 🔧 Projects */}
        <motion.div
          ref={projRef}
          initial={{ opacity: 0, y: 40 }}
          animate={projInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold text-red-500 border-b border-red-800 pb-2">
            Technical Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="bg-gray-900 p-5 border border-gray-800 rounded-md hover:border-red-600 hover:bg-black transition"
              >
                <h3 className="text-lg font-semibold text-white">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{proj.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800 text-white border border-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-red-400 hover:underline"
                  >
                    🔗 View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
