'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';
import FlyingLaptop from '@/app/_components/threejs/flying-laptop';

export function Header() {
  const [open, setOpen] = useState(true);
  return (
    <motion.header
      // className={`relative h-screen overflow-hidden text-background ${open ? 'bg-orange-300' : 'bg-secondary-foreground'}`}
      className={`relative h-screen overflow-hidden text-background 
        transition-colors duration-500 transform 
        ${open ? 'scale-105 bg-[#D5CECB]' : 'scale-100 bg-secondary-foreground'}`}
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* <CldImage
        src='Dipankar-Portfolio/images/lapetmmek4fymz68m4u8'
        className='object-cover md:scale-125 md:object-contain'
        fill={true}
        sizes='100vw'
        alt='Dipankar Majee Personal Picture'
      /> */}

      <div
        style={{
          position: 'absolute', // Use 'absolute' or 'fixed' for centering relative to the viewport.
          top: '45%', // Center vertically.
          left: '50%', // Center horizontally.
          transform: 'translate(-50%, -50%)', // Adjust to the center point.
          zIndex: 100, // Ensure it's behind other elements.
        }}
      >
        <FlyingLaptop open={open} setOpen={setOpen} />
      </div>

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Dipankar Majee
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-6'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Developer &amp; DevOps</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
