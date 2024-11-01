'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/data';

import { scale, slideOut } from './variants';
import { MagneticButton } from '@/components';

export function OffcanvasLinks() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const items = navItems.map(({ href, title }, index) => {
    const id = index;
    return (
      <motion.li
        key={id}
        className='relative my-4 flex items-center'
        variants={slideOut}
        custom={id}
        initial='initial'
        animate='enter'
        exit='exit'
        onPointerEnter={() => setActiveLink(href)}
      >
        <Link className='flex items-center' href={href}>
          <motion.div
            className='absolute -left-11'
            variants={scale}
            animate={activeLink === href ? 'open' : 'closed'}
          >
            <Dot size={36} />
          </motion.div>

          <MagneticButton className='text-3xl capitalize text-white md:text-6xl'>
            {title}
          </MagneticButton>
        </Link>
      </motion.li>
    );
  });

  return (
    <div className='mt-8 flex flex-col gap-3 md:mt-20'>
      <div className='mt-4 border-b border-solid md:mb-10'>
        <h5 className='text-xs uppercase text-secondary-foreground'>
          Navigation
        </h5>
      </div>
      <ul onPointerLeave={() => setActiveLink(pathname)}>{items}</ul>
    </div>
  );
}
