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
      title: "Project 1",
      description: "A modern web application built with React and TypeScript",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project 2",
      description: "Full-stack application with real-time features",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Socket.io", "MongoDB"],
    },
    {
      title: "Project 3",
      description: "Mobile-first e-commerce platform",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Redux", "Firebase"],
    },
  ];

  const skills = [
    {
      icon: <Code size={24} />,
      name: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Database size={24} />,
      name: "Backend",
      items: ["Node.js", "Python", "PostgreSQL"],
    },
    {
      icon: <Monitor size={24} />,
      name: "DevOps",
      items: ["Docker", "AWS", "CI/CD"],
    },
    {
      icon: <Briefcase size={24} />,
      name: "Tools",
      items: ["Git", "VS Code", "Figma"],
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
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={iconClass}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
                className={`${
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
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
