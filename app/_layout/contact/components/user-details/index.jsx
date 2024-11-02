'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          {/* <ImageWrapper>
            <CldImage
              src='Dipankar-Portfolio/images/mqtwxh5znybowgaljrbp'
              className='rounded-full object-cover'
              fill={true}
              alt='Dipankar Majee Profile Picture'
            />
          </ImageWrapper> */}
          {/* <div className='border-4 border-white rounded-full w-[6rem] h-[6rem] flex justify-center items-center text-[3.5rem]'>
            <span>D</span>
          </div> */}

          <MagneticButton variant='primary' size='sm'>
            <span className='flex size-28 items-center justify-center rounded-full text-[3.5rem]'>
              D
            </span>
          </MagneticButton>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-10 lg:flex-row'>
          <div>
            <a href='mailto:deep2dipankar@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground py-6'
              >
                deep2dipankar@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href='tel:+918001860028'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground py-6'
              >
                +91 8001860028
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
