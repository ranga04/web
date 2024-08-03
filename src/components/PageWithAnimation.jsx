import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TypingAnimation from "./TypingAnimation";

const PageWithAnimation = ({ text, Component }) => {
  const location = useLocation();
  const [showComponent, setShowComponent] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setShowComponent(false);
    setShowAnimation(true);
  }, [location]);

  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setShowComponent(true);
        setShowAnimation(false);
      }, text.length * 100 + 500); // Adjust timing as needed
      return () => clearTimeout(timer);
    }
  }, [showAnimation, text]);

  return showAnimation ? (
    <TypingAnimation text={text} onComplete={() => setShowAnimation(false)} />
  ) : (
    <Component />
  );
};

export default PageWithAnimation;
