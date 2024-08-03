import { useEffect } from "react";
import "./CustomCursor.css";

const symbols = ["+", "-", "=", "*", "/"];

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      cursor.style.display = "none";
      return;
    }

    const addSymbol = (x, y) => {
      const symbol = document.createElement("div");
      symbol.className = "cursor-trail";
      symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      symbol.style.left = `${x}px`;
      symbol.style.top = `${y}px`;
      document.body.appendChild(symbol);

      setTimeout(() => {
        symbol.remove();
      }, 1000); // Remove symbol after 1 second
    };

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      addSymbol(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor;
