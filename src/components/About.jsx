import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faRocket,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="about" className="px-6 py-8 bg-darkGrayishBlue text-white">
      <div className="max-w-4xl mx-auto">
        {/* Typing Animation for Role/Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Tulasi</h2>
          <motion.p
            className="text-2xl text-moderateBlue font-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Robotics Engineer | ML/AI Enthusiast | Problem Solver
          </motion.p>
        </motion.div>

        {/* Accordion for sections */}
        <div className="space-y-4">
          <div
            className="cursor-pointer"
            onClick={() => toggleSection("experience")}
          >
            <motion.div
              className="p-4 bg-lightGrayishBlue rounded flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold">
                <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                Experience
              </h3>
              <FontAwesomeIcon
                icon={activeSection === "experience" ? faLightbulb : faRocket}
              />
            </motion.div>
            {activeSection === "experience" && (
              <motion.div
                className="text-lg p-4"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                style={{ transformOrigin: "top" }} // Scale from top to bottom
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p className="text-xl">
               I’ve had the incredible opportunity to work on a variety of exciting projects in the world of robotics and AI. From developing sensor-driven navigation systems that allow robots to move through complex environments to creating automation solutions that simplify repetitive tasks, I’ve been able to dive deep into problem-solving in real-world applications.<br />

One of my favorite projects involved creating a self-folding origami robot as part of my MSc thesis, where I explored how we could achieve dynamic movements without sensors. It was both a challenge and an exhilarating learning experience, pushing me to find creative solutions.<br />

Beyond robotics, I’ve also spent time developing my skills in machine learning, hardware design, and control systems. My journey through these different technologies has allowed me to bring a unique blend of knowledge to the table, whether I’m writing code, building hardware, or planning system architectures
                </p>
              </motion.div>
            )}
          </div>

          {/* More sections with collapsible content */}
          <div
            className="cursor-pointer"
            onClick={() => toggleSection("values")}
          >
            <motion.div
              className="p-4 bg-lightGrayishBlue rounded flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold">
                <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                My Values
              </h3>
              <FontAwesomeIcon
                icon={activeSection === "values" ? faLightbulb : faRocket}
              />
            </motion.div>
            {activeSection === "values" && (
              <motion.div
                className="text-lg p-4"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                style={{ transformOrigin: "top" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p className="text-xl">
                At the heart of everything I do is a passion for innovation. I believe that the future is shaped by those who are unafraid to challenge the status quo and push boundaries. Whether it's robotics, AI, or any new technology, I’m driven by a desire to create solutions that not only solve problems but improve the world around us.<br />

I also value continuous learning. The tech world moves fast, and I’m always striving to stay ahead by exploring new trends, reading research papers, and experimenting with emerging technologies. I believe that being curious is one of the best ways to grow and improve in this field.<br />

Lastly, I believe in perseverance. Some of the best ideas come from the hardest challenges, and I’ve learned that sticking with a problem, even when the solution seems impossible, is the key to success.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
