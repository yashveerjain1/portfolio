import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "LMS – Corporate & Client Web Projects",
    desc: "Developed and maintained the company website and multiple client websites using React.js, ShadCN UI, and Tailwind CSS. Converted design mockups into pixel-perfect responsive layouts while ensuring cross-browser compatibility and performance optimization.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Responsive Design",
      "Performance Optimization",
      "UI/UX",
    ],
    link: "https://lms.net/",
  },
  {
    title: "LMS Presales Onboarding System",
    desc: "Developed a role-based agreement onboarding system with secure JWT authentication and controlled access. Built multi-department dashboards (Presales, Legal, Accounts, Provisioning, Admin) with approval lifecycle, issue-handling workflows, and live activation logic using dynamic REST API data.",
    tags: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux",
      "REST APIs",
      "JWT Authentication",
    ],
    // link: "#",
  },
  {
    title: "LMS Internal Meeting Tool",
    desc: "Developed a meeting management tool that allows employees to schedule and manage daily workflow meetings. Enabled seamless access across mobile and desktop devices, with features to add meeting notes and maintain structured Minutes of Meeting (MoM) for better accessibility by attendees and organizers.",
    tags: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux",
      "REST APIs",
      "JWT Authentication",
    ],
    // link: "#",
  },

  {
    title: "EasyncBooks – Web-Based Accounting Software",
    desc: "Contributed to a web-based accounting system including dashboards and GST modules (GSTR-2). Integrated REST APIs for dynamic financial data, developed responsive UI components, and optimized performance through debugging and testing.",
    tags: [
      "React.js",
      "JavaScript (ES6+)",
      "REST APIs",
      "GST Modules",
      "Accounting Software",
      "UI Optimization",
    ],
    link: "https://www.easyncbooks.com/",
  },
  {
    title: "Personal Portfolio ",
    desc: "Multi-page personal site built with React, Tailwind, and Framer Motion. Emphasized clean component design and animations. Responsive & clean ui design.",
    tags: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Javascript",
      "CSS",
      "UI/UX",
      "Email.js",
    ],
    link: "https://yashportfolio-nine.vercel.app/",
  },
  {
    title: "Backend Project",
    desc: "Build this Project to learn the amazing concepts of Backend",
    tags: ["Node.js", "Express.js", "Javascript", "Typescript", "MongoDb"],
    link: "https://github.com/yashveerjain1",
  },
  {
    title: "Animated Website Using javascript",
    desc: "Cool ui Website using js",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/yashveerjain1",
  },
  {
    title: "Razorpay Clone",
    desc: "Clone of Old Razorpay website",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/yashveerjain1",
  },
];

// const work = [
//   {
//     role: "Associate Software Engineer",
//     company: "LMS",
//     duration: "July 2025 – Present",
//     tech: ["React js", "Javascript", "Tailwind", "Html", "CSS", "Api Integration", "Shadcn ui", "Redux & State Mangement", "Axios & Fetch", "Git & Github", "AI Tools like GPT, Gemini"],
//     highlights: [
//       "Developed and maintained responsive websites and admin panels using React.js and modern CSS frameworks.",
//       "Built reusable UI components and design systems to ensure consistency and scalability across projects",
//       "Collaborated with designers, backend developers, and QA teams to deliver end-to-end features while optimizing performance, accessibility, and cross-browser compatibility.",
//     ],
//   },
//   {
//     role: "Software Development Intern",
//     company: "EasyncBooks Pvt. Ltd.",
//     duration: "feb 2025 – May 2025",
//     tech: ["React", "Javascript", "Tailwind", "Html", "CSS", "Api Integration"],
//     highlights: [
//       "Built and optimized accounting modules with reusable components.",
//       "Implemented Invoice Generation in Excel And Pdf Format.",
//       "Enhanced UI consistency using Tailwind CSS and layout grids.",
//     ],
//   },
//   {
//     role: "MERN Stack Intern",
//     company: "Softpro India",
//     duration: "Aug 2024 – Oct 2024",
//     tech: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
//     highlights: [
//       "Developed APIs and dynamic dashboards for internal tools.",
//       "Worked on routing, state handling and CRUD logic in React.",
//       "Integrated backend routes with MongoDB for full-stack features.",
//     ],
//   },
//   {
//     role: "Cloud Computing Mentor",
//     company: "Lloyd Polytechnic College",
//     duration: "feb 2024 – July 2024",
//     tech: [
//       "Cloud Computing",
//       "SAAS",
//       "PAAS",
//       "IAAS",
//       "Benefits",
//       "Cloud Storage",
//     ],
//     highlights: [
//       " I helped students to understand cloud computing by explaining basic concepts and how to use tools like AWS, Azure, and Google Cloud. I supported them with their projects, exam prep, and career questions",
//     ],
//   },
// ];

const work = [
  {
    role: "Associate Software Engineer",
    company: "LMS",
    duration: "July 2025 – Present",
    tech: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "REST API Integration",
      "ShadCN UI",
      "Redux (State Management)",
      "Axios & Fetch",
      "Git & GitHub",
      "AI Tools (ChatGPT, Gemini)",
    ],
    highlights: [
      "Developed and maintained responsive websites and admin panels using React.js and modern CSS frameworks.",
      "Built reusable UI components and design systems to ensure consistency and scalability across projects",
      "Collaborated with designers, backend developers, and QA teams to deliver end-to-end features while optimizing performance, accessibility, and cross-browser compatibility.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "EasyncBooks Pvt. Ltd.",
    duration: "February 2025 – May 2025",
    tech: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "REST API Integration",
    ],
    highlights: [
      "Built and optimized accounting modules using reusable and scalable UI components.",
      "Implemented invoice generation in Excel and PDF formats.",
      "Enhanced UI consistency and responsiveness using Tailwind CSS and structured layout systems.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Softpro India Computer Technologies Pvt. Ltd.",
    duration: "August 2024 – October 2024",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    highlights: [
      "Learn basics of backend & frontend fundamentals.",
      "Implemented routing, state management, and CRUD operations in React.",
      "Integrated backend services with MongoDB to develop full-stack features.",
    ],
  },
  {
    role: "Cloud Computing Mentor",
    company: "Lloyd Polytechnic College",
    duration: "February 2024 – July 2024",
    tech: [
      "Cloud Computing",
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "SaaS",
      "PaaS",
      "IaaS",
      "Cloud Storage",
    ],
    highlights: [
      "Mentored students in cloud computing fundamentals, covering SaaS, PaaS, IaaS, and major cloud platforms.",
      "Guided students in project development, exam preparation, and career planning in cloud technologies.",
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
          <h2 className="sm:text-3xl text-xl font-bold text-[#00BFFF] border-b border-[#00BFFF] pb-2">
            Work Experience
          </h2>

          {work.map((job, i) => (
            <div
              key={i}
              className=" p-6 rounded-md border hover:border-[#00BFFF] hover:bg-black transition border-gray-800"
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
                    className="text-xs border border-[#00BFFF] px-2 py-1 rounded-lg"
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
          <h2 className="sm:text-3xl text-xl font-bold text-[#00BFFF] border-b border-[#00BFFF] pb-2">
            My Work & Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="bg-gray-900 p-5 border border-gray-800 rounded-md hover:border-[#00BFFF] hover:bg-black transition"
              >
                <h3 className="text-lg font-semibold text-white">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{proj.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs  text-white border border-gray-600 px-2 py-1 rounded-lg"
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
                    className="inline-block mt-4 text-sm text-[#00BFFF] hover:underline-offset-8 hover:underline"
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
