import { useEffect } from "react";
import Header from "./Header";
import backgroundImageDesktop from "../assets/robot_human_hand.jpg"; // Desktop background
import backgroundImageMobile from "../assets/circuit_hand.png"; // Mobile background
import { motion } from "framer-motion"; // For animations
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Hero = ({ title, location }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const path = document.querySelector(".animate-signature path");
    if (path) {
      console.log("Path length:", path.getTotalLength());
    }
  }, []);

  const quote = `
    "The Three Laws of Robotics:
    1: A robot may not injure a human being or, through inaction, allow a human being to come to harm; 
    2: A robot must obey the orders given it by human beings except where such orders would conflict with the First Law;
    3: A robot must protect its own existence as long as such protection does not conflict with the First or Second Law;
    The Zeroth Law: A robot may not harm humanity, or, by inaction, allow humanity to come to harm."
    — Isaac Asimov
  `;

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center text-veryLightGray flex flex-col justify-center items-center"
    >
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImageDesktop})`,
        }}
      ></div>

      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 z-0">
        <img
          src={backgroundImageMobile}
          alt="Mobile Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="z-10 text-center"
      >
        <div className="bg-black bg-opacity-50 p-4 rounded-lg max-w-2xl mx-auto">
          <p className="text-xl md:text-3xl text-veryLightGray font-serif mb-1">
            {quote}
          </p>
        </div>
        <motion.button
          onClick={() => navigate("/projects")}
          className="mt-2 inline-block bg-yellow-500 text-darkBlue px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Explore My Work
        </motion.button>
      </motion.div>

      {/* Location */}
      <div className="absolute left-4 bottom-4 bg-darkBlue p-2 rounded-full flex items-center space-x-2 z-10">
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
