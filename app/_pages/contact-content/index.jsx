'use client';
import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useHorizontalSlider } from '@/app/_hooks/use-horizontal-slider';
import { useVerticalSlider } from '@/app/_hooks/use-vertical-slider';
import { MagneticButton } from '@/components';
import {
  Container,
  MainTitle,
  Row,
} from '@/app/_layout/contact/components/form/index.styled';

import { ContactForm } from './contact-form';
import { ArrowDownRight } from 'lucide-react';
import { SocialInfo } from '@/app/_layout/contact/components';
import { ContactDetails } from './contact-details';

export function ContactContent() {
  const containerRef = useRef(null);
  const { transformY, transformY3 } = useVerticalSlider(containerRef);

  const { transformX, transformXResponsive } =
    useHorizontalSlider(containerRef);

  return (
    <section ref={containerRef} className='relative z-10 '>
      <Container className=''>
        <Row>
          <div className='grid grid-cols-12 xl:gap-x-32'>
            <div className='col-span-12 xl:col-span-8 '>
              <MainTitle>{`Let's start a`}</MainTitle>
              <MainTitle>project together</MainTitle>
            </div>

            <div className='col-span-4 hidden items-end justify-start xl:flex'>
              <MagneticButton variant='primary' size='sm'>
                <span className='flex size-48 items-center justify-center rounded-full text-8xl'>
                  D
                </span>
              </MagneticButton>
            </div>
          </div>
        </Row>

        <Row className='hidden xl:block'>
          <div className='grid grid-cols-12  gap-x-32'>
            <div className='col-span-8'></div>
            <div className='col-span-4'>
              {' '}
              <div>
                <ArrowDownRight size={32} strokeWidth={2.5} lengthAdjust={32} />
              </div>
            </div>
          </div>
        </Row>

        <Row>
          <ContactForm>
            <ContactDetails />
          </ContactForm>
        </Row>
      </Container>

      <motion.footer
        ref={containerRef}
        className='relative py-20'
        style={{ y: transformY }}
      >
        <div className='mt-32'>
          <SocialInfo />
        </div>
      </motion.footer>
    </section>
  );
}
