import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSpring, motion } from 'framer-motion';
import useMediaQuery from 'react-responsive';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import About from './About/About';
import HowWeWork from './HowWeWork/HowWeWork';
import Testimonials from './Testimonials/Testimonials';

// Custom hook for debouncing
const useDebounce = (callback, delay) => {
  const timerRef = useRef();

  const debouncedCallback = useCallback((...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};

export default function Body() {

  // Initialize spring values for the cursor position
  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });

  // Update cursor position on mouse move with debouncing
  const handleMouseMove = useDebounce((event) => {
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
  }, 10);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  //large screen logic
  const [largeScreen, setLargeScreen] = useState(window.innerWidth > 1000)

  return (
    <div>
      {largeScreen &&
        <motion.div
          role="presentation"
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
            transform: 'translate(-50%, -50%)', // Center the cursor on the mouse position
          }}
        />}


      <Navbar />
      <div className="px-5">
        <Hero />
      </div>
      <div className="px-5">
        <Services />
        <About />
        <HowWeWork />
        <Testimonials />  
      </div>
    </div>
  );
}