import { motion } from 'framer-motion';

import { AboutContent } from '@/app/_pages/about-content';
import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */

export const metadata = {
  title: 'About',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dipankar',
};

export default function About() {
  return (
    <Transition>
      <Navbar className='text-black' />

      {/* <InProgress>About Page</InProgress> */}
      <main className=''>
        {/* <Description /> */}

        <AboutContent />
      </main>
      <Contact />
    </Transition>
  );
}
