import React, { useEffect, useState } from "react";

const TypingAnimation = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 150); // Increase delay slightly for smoother typing
      return () => clearTimeout(timeout);
    } else {
      const timer = setTimeout(onComplete, 1000); // Delay before calling onComplete
      return () => clearTimeout(timer);
    }
  }, [index, displayedText, text, onComplete]);

  return (
    <div className="fixed inset-0 bg-darkGrayishBlue flex items-center justify-center">
      <div className="text-4xl font-mono text-center text-veryLightGray">
        {displayedText}
      </div>
    </div>
  );
};

export default TypingAnimation;
