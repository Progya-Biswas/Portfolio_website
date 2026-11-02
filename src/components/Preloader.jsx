import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the intro screen visible for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 1.1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100000] w-full h-screen bg-blue-900 flex items-center justify-center"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="text-white font-black tracking-[-0.05em] text-5xl sm:text-6xl md:text-8xl"
          >
            Progya Paromita Biswas
            <span className="text-black">.</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;