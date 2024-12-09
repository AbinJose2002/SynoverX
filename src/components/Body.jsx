import React, { useEffect, useState } from 'react';
import { useSpring, motion } from 'framer-motion';
import useMediaQuery from 'react-responsive';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Services from './Services/Services';

export default function Body() {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  // Initialize spring values for the cursor position
  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <div>
      {isLargeScreen && (
        <motion.div
          style={{
            position: 'fixed',
            top: -10,
            left: -10,
            x: cursorX,
            y: cursorY,
            width: '40px',
            height: '40px',
            backgroundColor: 'rgb(36, 169, 36)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        />
      )}

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