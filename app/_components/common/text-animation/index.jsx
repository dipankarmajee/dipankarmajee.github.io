import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { preloaderWords } from '@/data';

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const TextAnimation = props => {
  const texts = preloaderWords;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [texts]);

  return (
    <span className={`flex items-center justify-center ${props?.className}`}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
          className='text-5xl font-bold text-gray-800'
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </span>
  );
};
