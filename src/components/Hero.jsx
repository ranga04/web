import { useEffect } from "react";
import Header from "./Header";
import backgroundImageDesktop from "../assets/robot_human_hand.jpg"; // Desktop background
import backgroundImageMobile from "../assets/circuit_hand.png"; // Mobile background
import { motion } from "framer-motion"; // For animations
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Hero = ({ name, title, location }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const path = document.querySelector(".animate-signature path");
    if (path) {
      console.log("Path length:", path.getTotalLength());
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center text-veryLightGray flex flex-col justify-center items-center"
    >
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImageDesktop})`,
        }}
      ></div>

      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0">
        <img
          src={backgroundImageMobile}
          alt="Mobile Background"
          className="w-full h-full object-cover fixed"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="z-10 text-center"
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-500">{name}</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-light mb-8">{title}</h2>

        {/* Call-to-Action Button */}
        <motion.button
          onClick={() => navigate("/projects")} // Use navigate to route to Projects
          className="inline-block bg-yellow-500 text-darkBlue px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Explore My Work
        </motion.button>
      </motion.div>

      {/* Location */}
      <div className="absolute left-4 bottom-4 bg-darkBlue p-2 rounded-full flex items-center space-x-2">
        <svg
          className="w-6 h-6 text-veryLightGray"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 20l-5.447-2.724A2 2 0 013 15.382V6a2 2 0 011.105-1.791l7-3.5a2 2 0 011.79 0l7 3.5A2 2 0 0121 6v9.382a2 2 0 01-1.553 1.894L15 20v1a2 2 0 01-2 2H11a2 2 0 01-2-2v-1z"
          />
        </svg>
        <span>{location}</span>
      </div>
    </section>
  );
};

export default Hero;
