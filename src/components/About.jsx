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
            Robotics Engineer | AI Enthusiast | Problem Solver
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
                  I have worked on a variety of projects in robotics and AI,
                  including sensor-driven navigation systems and automation
                  solutions. My expertise spans machine learning, hardware
                  design, and control systems.
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
                  I value innovation, creativity, and perseverance in solving
                  complex problems. I believe in continuous learning and keeping
                  up with the latest trends.
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
