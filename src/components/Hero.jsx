// import { useEffect } from "react";
// import Header from "./Header";
// import backgroundImageDesktop from "../assets/robot_human_hand.jpg"; // Desktop background
// import backgroundImageMobile from "../assets/circuit_hand.png"; // Mobile background
// import { motion } from "framer-motion"; // For animations
// import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// const Hero = ({ title, location }) => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     const path = document.querySelector(".animate-signature path");
//     if (path) {
//       console.log("Path length:", path.getTotalLength());
//     }
//   }, []);

//   const quote = `
//     "The Three Laws of Robotics:
//     1: A robot may not injure a human being or, through inaction, allow a human being to come to harm;
//     2: A robot must obey the orders given it by human beings except where such orders would conflict with the First Law;
//     3: A robot must protect its own existence as long as such protection does not conflict with the First or Second Law;
//     The Zeroth Law: A robot may not harm humanity, or, by inaction, allow humanity to come to harm."
//     — Isaac Asimov
//   `;

//   return (
//     <section
//       id="home"
//       className="relative h-screen bg-cover bg-center text-veryLightGray flex flex-col justify-center items-center"
//     >
//       {/* Desktop Background */}
//       <div
//         className="hidden md:block absolute inset-0 bg-cover bg-center z-0"
//         style={{
//           backgroundImage: `url(${backgroundImageDesktop})`,
//         }}
//       ></div>

//       {/* Mobile Background */}
//       <div className="md:hidden absolute inset-0 z-0">
//         <img
//           src={backgroundImageMobile}
//           alt="Mobile Background"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <Header />
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 2, ease: "easeInOut" }}
//         className="z-10 text-center"
//       >
//         <div className="bg-black bg-opacity-50 p-4 rounded-lg max-w-2xl mx-auto">
//           <p className="text-xl md:text-3xl text-veryLightGray font-serif mb-1">
//             {quote}
//           </p>
//         </div>
//         <motion.button
//           onClick={() => navigate("/projects")}
//           className="mt-2 inline-block bg-yellow-500 text-darkBlue px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
//           whileHover={{ scale: 1.1 }}
//         >
//           Explore My Work
//         </motion.button>
//       </motion.div>

//       {/* Location */}
//       <div className="absolute left-4 bottom-4 bg-darkBlue p-2 rounded-full flex items-center space-x-2 z-10">
//         <svg
//           className="w-6 h-6 text-veryLightGray"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 20l-5.447-2.724A2 2 0 013 15.382V6a2 2 0 011.105-1.791l7-3.5a2 2 0 011.79 0l7 3.5A2 2 0 0121 6v9.382a2 2 0 01-1.553 1.894L15 20v1a2 2 0 01-2 2H11a2 2 0 01-2-2v-1z"
//           />
//         </svg>
//         <span>{location}</span>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Scene from "./Scene";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });

  const scale = isMobile ? 3.2 : isTablet ? 4.5 : 6;
  const position = isMobile
    ? [2.5, -10, -7]
    : isTablet
    ? [6.5, -9, -8]
    : [9.5, -8, -8];

  // Color classes per skill type
  const skillStyles = {
    robotics: "bg-[#778da9] text-white",
    ml: "bg-[#e0e1dd] text-[#0d1b2a]",
    software: "bg-[#415a77] text-white",
  };

  const skills = [
    { label: "Python", type: "software" },
    { label: "C++", type: "software" },
    { label: "ROS & ROS2", type: "robotics" },
    { label: "Gazebo & RViz", type: "robotics" },
    { label: "Javascript & React JS", type: "software" },
    { label: "OpenCV", type: "ml" },
    { label: "TensorFlow & PyTorch", type: "ml" },
    { label: "Scikit-learn", type: "ml" },
    { label: "MATLAB & Simulink", type: "robotics" },
    { label: "Git & GitHub", type: "software" },
    { label: "PostgreSQL & SQL", type: "software" },
  ];

  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#415a77] overflow-hidden">
      {/* 3D Canvas in background */}
      <Suspense fallback={<div className="text-white">Loading 3D...</div>}>
        <Canvas
          camera={{ position: [0, 5, 20], fov: 50 }}
          className="absolute top-0 left-0 w-full h-full z-0"
        >
          <ambientLight intensity={2.5} />
          <directionalLight position={[5, 10, 5]} intensity={6} castShadow />
          <spotLight
            position={[0, 15, 10]}
            angle={0.3}
            intensity={1.2}
            penumbra={1}
            castShadow
          />
          <Scene scale={scale} position={position} rotation={[0, 5, 0]} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>

      {/* Overlay content on top */}
      <div className="absolute z-10 text-white px-4 sm:px-8 top-20 sm:top-1/4 left-4 sm:left-10 max-w-full sm:max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Tulasi
        </h1>
        <p className="text-base sm:text-lg mb-4">
          Robotics | AI/ML | Embedded Systems | Software Engineering
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`${
                skillStyles[skill.type]
              } text-xs sm:text-sm font-semibold px-3 py-1 rounded-full`}
            >
              {skill.label}
            </span>
          ))}
        </div>

        {/* View Projects Button */}
        <div className="mb-6">
          <a href="projects">
            <button className="inline-block bg-[#e0e1dd] text-darkBlue px-4 py-2 text-sm sm:text-lg font-semibold rounded shadow-lg hover:bg-[#778da9] hover:text-white transition-transform transform hover:scale-105">
              View Projects
            </button>
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm">
          <span>📍 Sheffield, UK</span>
          <a
            href="https://github.com/ranga04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a href="mailto:srstulasi@gmail.com" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
