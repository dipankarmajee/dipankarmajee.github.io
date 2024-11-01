'use client';
import { useRef } from 'react';

import { useHorizontalSlider } from '@/app/_hooks/use-horizontal-slider';
import { useVerticalSlider } from '@/app/_hooks/use-vertical-slider';
import { Row } from '@/app/_layout/contact/components/user-details/index.styled';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagneticButton } from '@/components';
import { ContactInputField } from '@/app/_components/contact-input-field';

export function ContactForm(props) {
  const containerRef = useRef(null);
  const { transformY, transformY1, transformY2 } =
    useVerticalSlider(containerRef);

  const { transformX, transformXResponsive } =
    useHorizontalSlider(containerRef);

  const onSubmitForm = event => {
    event.preventDefault();
  };

  return (
    <div className='grid grid-cols-12 xl:gap-x-32'>
      <div className='order-2 col-span-12 xl:order-1 xl:col-span-8'>
        <div
          className='row once-in'
          style={{ transform: 'translate(0px, 0vh)' }}
        >
          <div className='flex-col'>
            <form
              onSubmit={onSubmitForm}
              className='form'
              method='post'
              // action='https://dennissnellenberg.com/contact'
              encType='multipart/form-data'
              noValidate
            >
              <ContactInputField
                containerStyle='border-y-2 border-gray-700'
                number='01'
                id='form-name'
                title="What's your name?"
                name='name'
                type='text'
                required={true}
                placeholder='John Doe *'
              />

              <ContactInputField
                containerStyle='border-b-2 border-gray-700'
                number='02'
                id='form-email'
                title="What's your email?"
                name='email'
                type='email'
                required={true}
                placeholder='john@doe.com *'
              />

              <ContactInputField
                containerStyle='border-b-2 border-gray-700'
                number='03'
                id='form-company'
                title="What's the name of your organization?"
                name='company'
                type='text'
                required={true}
                placeholder='John & Doe ®'
              />

              <ContactInputField
                containerStyle='border-b-2 border-gray-700'
                number='04'
                id='form-service'
                title='What services are you looking for?'
                name='service'
                type='text'
                required={true}
                placeholder='Web Design, Web Development ...'
              />

              <div className='flex flex-col gap-y-6 py-16'>
                <div className='grid grid-cols-12'>
                  <h5 className='col-span-1 flex items-center text-[1rem] font-[600] text-gray-500'>
                    05
                  </h5>
                  <label
                    className='col-span-11 text-[1.8rem] font-[450] text-white'
                    htmlFor='name'
                  >{`Your message`}</label>
                </div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-1'></div>
                  <div className='col-span-11'>
                    {' '}
                    <textarea
                      className='max-h-64 w-full resize-none bg-transparent text-[1.8rem] font-[550] outline-none'
                      id='form-message'
                      name='message'
                      rows='8'
                      required
                      placeholder='Hello Dennis, can you help me with ... *'
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className='relative w-full'>
                <div className='h-px bg-muted-foreground' />
                <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
                  <motion.div style={{ x: transformX }}>
                    <MagneticButton
                      type='submit'
                      className='size-32 xl:size-48'
                      variant='primary'
                      size='xl'
                    >
                      <div className='flex  items-center justify-center rounded-full '>
                        Send it!
                      </div>
                    </MagneticButton>
                  </motion.div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='order-1 col-span-12 mb-32 xl:order-2 xl:col-span-4 xl:mb-0'>
        {props.children}
      </div>
    </div>
  );
}
