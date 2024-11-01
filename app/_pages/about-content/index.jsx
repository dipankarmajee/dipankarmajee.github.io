'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { TextAnimation } from '@/app/_components/common/text-animation';
import { Globe } from '@/app/_components/globe';

import { useHorizontalSlider } from '@/app/_hooks/use-horizontal-slider';
import { useVerticalSlider } from '@/app/_hooks/use-vertical-slider';
import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';
import { projectOptions } from '@/data';
import { useContactSlider } from '@/hooks';
import { randomId } from '@/utils';

// import { AboutContentOld } from './index_old';

import {
  Container,
  ImageWrapper,
  Row,
} from '../../_layout/contact/components/user-details/index.styled';
import { Title, Wrapper } from '../../_layout/description/index.styled';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

// const phrase =
//   "Hi, I’m a passionate MERN Stack Developer with a strong foundation in web development. My journey began in 2020, and since then, I’ve honed my skills in Python, Node.js, React.js, Next.js, MongoDB, and SQL, developing a wide range of applications for the web. Over the years, I’ve had the opportunity to work on diverse projects, from dynamic single-page applications to robust server-side solutions. I love creating efficient, scalable, and interactive digital experiences, always focusing on accessible and high-performing code. I'm excited about building meaningful solutions that make an impact, and I’m constantly exploring new tools and technologies to take my skills further.";
const phrase1 =
  "Hi, I'm a passionate Full-Stack Developer with a flair for crafting exceptional web experiences. My journey began in 2020, and since then, I've immersed myself in the world of development, mastering the MERN stack alongside Python, Node.js, React.js, Next.js, MongoDB, and SQL. I’ve tackled a diverse range of projects, from dynamic single-page applications to robust server-side solutions, always with an eye on creating scalable and interactive experiences.";
const phrase2 =
  'My passion lies in designing user-centric interfaces that not only look stunning but also deliver seamless functionality. I thrive on writing clean, efficient code that prioritizes accessibility and performance, ensuring that every user interaction is smooth and engaging.';
const phrase3 =
  'With a solid foundation in DevOps, I also focus on optimizing deployment processes and integrating data analytics, ensuring that my applications run smoothly in any environment. I believe in the power of technology to create meaningful solutions that have a real impact, and I’m always eager to embrace new tools and trends to enhance my skill set further.';
const phrase4 =
  "Whether I'm collaborating with a team or working independently, my goal is to transform ideas into reality, pushing the boundaries of what's possible on the web. I'm excited to continue this journey and create digital solutions that resonate and inspire.";
const subPhrase =
  'My blend of creativity, technical expertise, and a keen eye for user interaction sets me apart as a dynamic force in the web development landscape.';

export function AboutContent() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformY, transformY1, transformY2 } =
    useVerticalSlider(containerRef);

  const { transformX, transformXResponsive } =
    useHorizontalSlider(containerRef);

  return (
    <section ref={containerRef} className='relative z-10 mt-32'>
      <div className='grid items-center'>
        <div className='bg-background'>
          <Container className=''>
            <Row className='my-16 border-0 border-yellow-300'>
              <div style={{ transform: 'translate(0px, 0vh)' }}>
                <h1 className='flex justify-center text-[3rem] font-[550] md:text-[5rem]'>
                  Helping Businesses Thrive in an
                  <br />
                  Ever-Evolving Digital World
                </h1>
              </div>
            </Row>

            <Row className='h-[15vh] border-0 border-yellow-300'>
              <motion.div style={{ x: transformX }}>
                <div className='relative w-full'>
                  <div className='h-px bg-muted-foreground' />
                  <div className='absolute right-0 top-0 z-20  -translate-x-12  -translate-y-1/2 md:-translate-x-1/2'>
                    <MagneticButton
                      className='size-32 md:size-40'
                      variant='ghost'
                      size='lg'
                    >
                      <div className='flex  items-center justify-center rounded-full '>
                        <Globe className='size-8 md:size-20' />
                      </div>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            </Row>

            <Row className='my-32'>
              <motion.div
                // className='mb-10 flex flex-col gap-10'
                style={{
                  //   height: '100vh',
                  y: transformY1,
                }}
              >
                <div className='basis-full lg:basis-9/12'>
                  <Title className='my-10'>
                    <ParallaxReveal paragraph={phrase1} />
                  </Title>
                  {/*<Title className='my-8'>
                    <ParallaxReveal paragraph={phrase2} />
                  </Title>

                  <Title className='my-8'>
                    <ParallaxReveal paragraph={phrase3} />
                  </Title>

                  <Title className='my-8'>
                    <ParallaxReveal paragraph={phrase4} />
                  </Title>*/}
                </div>

                <div className='basis-7/12 lg:basis-3/12'>
                  <ParallaxFade>
                    <Balancer as='p' className='mt-2 text-base lg:text-lg'>
                      {subPhrase}
                    </Balancer>
                  </ParallaxFade>
                </div>
              </motion.div>
            </Row>

            <Row className='my-32'>
              <motion.div
                style={{
                  y: transformY2,
                }}
              >
                <div className='basis-full lg:basis-9/12'>
                  <Title>
                    <ParallaxReveal paragraph='I can help you with ...' />
                  </Title>
                </div>

                <div className='my-10  flex flex-col items-center gap-x-20 gap-y-16 border-0   border-yellow-400 md:flex-row md:items-start '>
                  <div className='w-3/3  flex  flex-col gap-6 border-0 border-purple-500 md:w-1/3'>
                    <div className='hidden flex-col gap-y-4 md:flex'>
                      <h5 className=' text-gray-600 '>01</h5>
                      <div className=' border'></div>
                    </div>

                    <h4 className='text-4xl font-[550] text-[#1c1d20] md:text-5xl'>
                      Frontend Wizardry
                    </h4>
                    <p className='text-lg font-[550] text-[#1c1d20] md:text-xl'>
                      Bringing designs to life with stunning visuals and smooth,
                      intuitive interactions that captivate and engage users.
                    </p>
                  </div>

                  <div className='w-3/3  flex  flex-col gap-6 border-0 border-purple-500 md:w-1/3'>
                    <div className='hidden flex-col gap-y-4 md:flex'>
                      <h5 className=' text-gray-600 '>02</h5>
                      <div className=' border'></div>
                    </div>
                    <h4 className='text-4xl font-[550] text-[#1c1d20] md:text-5xl'>
                      Backend & DevOps Precision
                    </h4>
                    <p className='text-lg font-[550] text-[#1c1d20] md:text-xl'>
                      Building reliable, scalable systems with seamless
                      deployments and real-time data insights to keep everything
                      running smoothly.
                    </p>
                  </div>
                  <div className='w-3/3  flex  flex-col gap-6 border-0 border-purple-500 md:w-1/3'>
                    <div className='hidden flex-col gap-y-4 md:flex'>
                      <h5 className=' text-gray-600 '>03</h5>
                      <div className=' border'></div>
                    </div>
                    <h4 className='flex items-center text-4xl font-[550] text-[#1c1d20] md:text-5xl'>
                      <span className='border-0 border-purple-300'>
                        <svg
                          className='size-12 md:size-20'
                          // width='100px'
                          // height='100px'
                          viewBox='0 0 100 100'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                          href='http://www.w3.org/1999/xlink'
                        >
                          <title>Oval + Oval + Oval + Oval Mask</title>
                          <g
                            id='Page-1'
                            stroke='none'
                            strokeWidth='1'
                            fill='none'
                            fillRule='evenodd'
                          >
                            <g
                              id='Artboard'
                              transform='translate(-468.000000, -671.000000)'
                              fill='#000000'
                            >
                              <g
                                id='Oval-+-Oval-+-Oval-+-Oval-Mask'
                                transform='translate(468.000000, 671.000000)'
                              >
                                <path
                                  d='M99.1731586,50.0066986 C71.9402858,50.4482381 50,72.6619049 50,100 L50,100 L49.9933014,99.1731586 C49.5517619,71.9402858 27.3380951,50 0,50 L0,50 L0.826841425,49.9933014 C28.0597142,49.5517619 50,27.3380951 50,0 L50,0 L50.0066986,0.826841425 C50.4482381,28.0597142 72.6619049,50 100,50 L100,50 Z'
                                  id='Combined-Shape'
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span>The full package</span>
                    </h4>
                    <p className='text-lg font-[550] text-[#1c1d20] md:text-xl'>
                      From concept to launch, I deliver complete digital
                      solutions that combine creativity, technical expertise,
                      and powerful results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Row>
          </Container>
        </div>
      </div>
      <motion.div
        className='w-screen bg-background'
        style={{
          height: transformY,
          borderRadius: '0 0 50% 50%',
        }}
      />
    </section>
  );
}
