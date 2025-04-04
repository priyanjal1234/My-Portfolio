import React, { useContext } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Briefcase,
  Monitor,
  Database,
} from "lucide-react";
import Navigation from "../components/Navigation";
import { ThemeDataContext } from "../context/ThemeContext";
import socialMedia from "../assets/Social_Media.png";
import ecommerce from "../assets/Ecommerce.png"
import booking from '../assets/Booking.png'
import skillify from '../assets/Skillify.png'
import bolt from '../assets/bolt.png'
import resume from '../assets/resume.png'
import video from '../assets/Video.png'

const Home = () => {
  let { isDark } = useContext(ThemeDataContext);
  const headingClass = `text-4xl sm:text-6xl font-bold ${
    isDark ? "text-white" : "text-gray-900"
  } mb-6`;

  const paragraphClass = `mt-6 text-xl ${
    isDark ? "text-gray-300" : "text-gray-600"
  } max-w-3xl mx-auto`;

  const buttonPrimaryClass = `px-8 py-3 rounded-full font-medium transition-colors ${
    isDark
      ? "bg-primary text-white hover:bg-primary/90"
      : "bg-primary text-white hover:bg-primary/80"
  }`;

  const buttonSecondaryClass = `px-8 py-3 border-2 rounded-full font-medium transition-colors ${
    isDark
      ? "border-white text-white hover:bg-white/10"
      : "border-primary text-primary hover:bg-primary/10"
  }`;

  const iconClass = `transition-colors ${
    isDark
      ? "text-gray-400 hover:text-primary"
      : "text-gray-600 hover:text-primary"
  }`;

  const projects = [
    {
      title: "Full Stack Social Media Application",
      description: "Built a full-stack social media application using the MERN stack with key features: Authentication, Post Management, Profile Customization, Social Sharing.",
      image: socialMedia,
      link: "https://social-media-clone-using-mern-stack-7wqf.onrender.com"
    },
    {
      title: "Ecommerce Web Application with Payment Gateway Integration",
      description: "Built a full-stack e-commerce platform with authentication, product listing, search, admin-controlled product creation, cart management, order placement, and Stripe payment integration.",
      image: ecommerce,
      link: "https://ecommerce-with-mern-frontend.onrender.com"
    },
    {
      title: "Easy Stay Booking Management System",
      description: "Developed a full-stack room booking system with authentication, room listing, admin-controlled room management, availability checking, online booking, and payment integration.",
      image: booking,
      link: "https://easy-stay-with-mern-frontend.onrender.com"
    },
    
    {
      title: "Skillify-Full Stack Learning Management System",
      description: "Built a full-stack LMS with RBAC-based authentication, email verification, and Google OAuth. Features include:\n\nStudents: Explore, enroll, rate courses, and pay via Razorpay.\n\nInstructors: Full course management, revenue tracking, live sessions, real-time messaging, quizzes, and coupon creation.\n\nAdmin: Dashboard with user analytics and reports.\n\nTech Stack: AWS S3 (videos), Cloudinary (images), Socket.IO (real-time chat), AI bot (Gemini), and real-time progress tracking.",
      image: skillify,
      link: "https://skillify-frontend-sooty.vercel.app"
    },
    {
      title: "AI Powered Website Generator (Bolt.new Clone) with MERN stack",
      description: "Developed an AI-driven website generator where users enter a prompt, which is refined via the Gemini API. The backend structures the response into a file tree with code, and projects run in StackBlitz WebContainers, displaying a live preview in an iframe.",
      image: bolt,
      link: "https://bolt-frontend-three.vercel.app"
    },
    {
      title: "AI Powered Resume Analyzer with MERN stack",
      description: "Built an AI-driven resume analyzer with Firebase authentication. Users upload a Word document, which is processed using Mammoth.js. The extracted text is analyzed by Gemini API, generating a structured JSON response displayed on the screen.",
      image: resume,
      link: "https://ai-resume-analyzer-frontend.vercel.app"
    },
    {
      title: "Video Calling Application with Node.js and WebRTC",
      description: "Built a Video Calling App Using WebRTC, Node.js, and EJS. Key Features:\n\nOne-to-one video calls\nPeer-to-peer connection with WebRTC\nSimple UI with EJS\nSignaling with Node.js & WebSockets",
      image: video,
      link: "https://video-calling-application-with-node-js.onrender.com"
    },
  ];

  const skills = [
    {
      icon: <Code size={24} />,
      name: "Frontend",
      items: ["HTML", "CSS", "Javascript","Tailwind CSS","React js"],
    },
    {
      icon: <Database size={24} />,
      name: "Backend",
      items: ["Node.js", "Mongodb", "Expressjs","WebRTC","Socket Io"],
    },
    {
      icon: <Monitor size={24} />,
      name: "DevOps",
      items: ["Linux", "Docker", "Kubernetes","Github Actions","AWS"],
    },
    {
      icon: <Briefcase size={24} />,
      name: "Tools",
      items: ["Git", "VS Code"],
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-[#1F2937]" : "bg-white"
      } text-gray-900 dark:text-gray-100`}
    >
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl animate-float delay-1000" />
        </div>

        <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className={headingClass}>
                <TypeAnimation
                  sequence={[
                    "Hello, I'm Priyanjal",
                    2000,
                    "I'm a Full Stack Developer",
                    2000,
                    "I Create Web Experiences",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={paragraphClass}
              >
                Crafting beautiful and functional web experiences with modern
                technologies. Specialized in React, TypeScript, and responsive
                design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex justify-center gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3  bg-[#26AEEB] font-medium text-white rounded-full ${
                    isDark ? "text-white" : "text-black"
                  } flex items-center justify-center`}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 font-medium text-[#26AEEB] border-2 border-[#26AEEB] rounded-full`}
                >
                  View Projects
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 flex justify-center space-x-6"
              >
                <motion.a
                  href="https://github.com/priyanjal1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={iconClass}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/priyanjal-saxena-327ab6330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={iconClass}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={iconClass}
                >
                  <Mail size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                isDark ? "text-gray-300" : "text-black"
              }`}
            >
              About Me
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                isDark ? "text-gray-300" : "text-black"
              }`}
            >
              I’m a Full-Stack Web Developer skilled in the MERN stack, building
              scalable and user-friendly applications. Passionate about DevOps,
              I explore CI/CD, containerization, and cloud infrastructure to
              streamline deployments. Always eager to learn, I enjoy bridging
              development and operations to create efficient, high-performing
              solutions. 🚀
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg p-6 shadow-lg ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div
                  className={`text-primary mb-4 ${
                    isDark ? "text-gray-300" : "text-black"
                  }`}
                >
                  {skill.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-gray-300" : "text-black"
                  }`}
                >
                  {skill.name}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className={`${isDark ? "text-gray-300" : "text-black"}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDark ? "text-gray-300" : "text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-center mb-12 ${
              isDark ? "text-gray-300" : "text-black"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg  max-w-3xl mx-auto">
              Here are some of my projects that showcase my skills and
              experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={` ${
                  isDark ? "text-gray-300" : "text-black"
                } rounded-lg overflow-hidden shadow-lg`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className=" mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` px-4 py-2 rounded-full font-medium transition-colors text-purple-600 text-center block
                      `}
                  >
                    Visit
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDark ? "text-gray-300" : "text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Have a project in mind? Let's work together to create something
              amazing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className={`mt-1 block w-full px-4 py-3 rounded-md shadow-lg focus:ring focus:ring-primary focus:ring-opacity-50 ${
                    isDark ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className={`mt-1 block w-full px-4 py-3 rounded-md shadow-lg focus:ring focus:ring-primary focus:ring-opacity-50 ${
                    isDark ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter Message"
                  rows={4}
                  className={`mt-1 resize-none block w-full px-4 py-3 rounded-md shadow-lg focus:ring focus:ring-primary focus:ring-opacity-50 ${
                    isDark ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`}
                ></textarea>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`w-full px-8 py-3 bg-primary ${
                    isDark ? "text-white" : "text-black"
                  } rounded-full font-medium hover:bg-primary/90 transition-colors`}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
