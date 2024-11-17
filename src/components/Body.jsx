import React, { useEffect } from "react";
import { useSpring, motion } from "framer-motion";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

export default function Body() {
  // Initialize spring values for the cursor position
  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorX.set(event.clientX); // Set cursor X position
      cursorY.set(event.clientY); // Set cursor Y position
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <div>
      {/* Animated cursor */}
      <motion.div
        style={{
          position: "fixed",
          top: -10,
          left: -10,
          x: cursorX, // Bind spring value for X
          y: cursorY, // Bind spring value for Y
          width: "40px",
          height: "40px",
          backgroundColor: "rgb(36, 169, 36)",
          borderRadius: "50%",
          pointerEvents: "none", // Prevent interference with UI elements
          zIndex: 1000,
        }}
      />
      
      {/* Page content */}
      <Navbar />
      <div className="px-5">
        <Hero />
      </div>
      <div className="px-5">
        <Services />
      </div>
    </div>
  );
}
