import React, { useState } from "react";
import "./../../src/index.css"; // Import the CSS file for styles

const ProjectCard = ({ title, description, image, link }) => {
  const [rippleStyle, setRippleStyle] = useState({});

  const createRipple = (event) => {
    const card = event.currentTarget;
    const cardRect = card.getBoundingClientRect();

    const rippleSize = Math.max(cardRect.width, cardRect.height);
    const rippleX = event.clientX - cardRect.left - rippleSize / 2;
    const rippleY = event.clientY - cardRect.top - rippleSize / 2;

    setRippleStyle({
      width: rippleSize,
      height: rippleSize,
      left: rippleX,
      top: rippleY,
    });

    setTimeout(() => {
      setRippleStyle({});
    }, 600); // Animation time in ms
  };

  return (
    <div
      className="project-card relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
      onClick={createRipple}
    >
      {/* Ripple effect */}
      <span className="ripple" style={rippleStyle}></span>

      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-moderateBlue hover:underline mt-4 block"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
