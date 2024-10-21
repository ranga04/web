import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInterval } from "react-use";

const BOT_SIZE = 50; // Define the size of the bot

const getRandomPosition = () => {
  const x = Math.random() * (window.innerWidth - BOT_SIZE);
  const y = Math.random() * (window.innerHeight - BOT_SIZE);
  return { x, y };
};

// Jokes and facts for the bot
const jokesAndFacts = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Did you know? The first computer virus was created in 1986.",
  "Why do Java developers wear glasses? Because they don't see sharp!",
  "The first mechanical computer was invented by Charles Babbage in 1822!",
  "Why do robots never get lost? They always follow the 'current path'.",
  "AI Fact: The term 'Artificial Intelligence' was first coined in 1956!",
];

// Suggest projects
const projectSuggestions = [
  "Explore my DDPG for Continuous Control project, implementing advanced reinforcement learning in robotics.",
  "Check out my Machine Learning & AI Projects, featuring various algorithms and dataset explorations.",
  "Take a look at my Anomaly Detection in Time Series Data project, using LSTM for accurate forecasting.",
  "Discover my University MSc Robotics Tasks, showcasing projects from my MSc course in Robotics.",
];

const RoamingBot = () => {
  const [position, setPosition] = useState(getRandomPosition());
  const [showMessage, setShowMessage] = useState(false);
  const [botMessage, setBotMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // Track if it's a 'fact' or 'suggestion'
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Determine the greeting based on the current time
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning! Ready to build something amazing?");
    } else if (hour < 18) {
      setGreeting("Good Afternoon! Don’t forget to take a break.");
    } else {
      setGreeting("Good Evening! Coding night, huh?");
    }
  }, []);

  useInterval(() => {
    setPosition(getRandomPosition());
  }, 3000);

  const handleMouseEnter = () => setShowMessage(true);
  const handleMouseLeave = () => setShowMessage(false);

  const handleClick = () => {
    // Randomly select either a joke/fact or a project suggestion
    const isFact = Math.random() > 0.5;

    if (isFact) {
      const randomFact =
        jokesAndFacts[Math.floor(Math.random() * jokesAndFacts.length)];
      setBotMessage(randomFact);
      setMessageType("fact");
    } else {
      const randomProject =
        projectSuggestions[
          Math.floor(Math.random() * projectSuggestions.length)
        ];
      setBotMessage(randomProject);
      setMessageType("suggestion");
    }

    // Auto-hide the message after 4 seconds
    setTimeout(() => {
      setBotMessage("");
    }, 4000); // 4 seconds
  };

  return (
    <motion.div
      initial={false}
      animate={position}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: BOT_SIZE,
        height: BOT_SIZE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        borderRadius: "50%",
        cursor: "pointer",
        color: "white",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span role="img" aria-label="robot">
        🤖
      </span>
      {showMessage && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "50px",
            padding: "10px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "14px", // Manually adjusted text size
            width: "220px",
            zIndex: 1,
            border: "2px solid green", // Green border for greeting
          }}
        >
          {greeting}
        </div>
      )}
      {botMessage && (
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50px",
            padding: "10px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "14px", // Manually adjusted text size
            width: "220px", // Same width as greeting
            zIndex: 1,
            border: messageType === "fact" ? "2px solid blue" : "2px solid red", // Blue border for fact, red for suggestion
          }}
        >
          {botMessage}
        </div>
      )}
    </motion.div>
  );
};

export default RoamingBot;
