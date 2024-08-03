import { useState } from "react";
import { motion } from "framer-motion";
import { useInterval } from "react-use";

const BOT_SIZE = 50; // Define the size of the bot

const getRandomPosition = () => {
  const x = Math.random() * (window.innerWidth - BOT_SIZE);
  const y = Math.random() * (window.innerHeight - BOT_SIZE);
  return { x, y };
};

const RoamingBot = () => {
  const [position, setPosition] = useState(getRandomPosition());
  const [showMessage, setShowMessage] = useState(false);

  useInterval(() => {
    setPosition(getRandomPosition());
  }, 3000);

  const handleMouseEnter = () => setShowMessage(true);
  const handleMouseLeave = () => setShowMessage(false);
  const handleClick = () => alert("Hello! I'm your friendly roaming bot!");

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
          className="absolute top-0 left-0 mt-8 ml-8 p-2 bg-white text-black rounded shadow-lg"
          style={{ zIndex: 1 }}
        >
          Hovering over the bot!
        </div>
      )}
    </motion.div>
  );
};

export default RoamingBot;
