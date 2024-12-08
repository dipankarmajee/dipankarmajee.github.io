'use client';

import { motion } from 'framer-motion';

import { FixedOverlay } from '@/components';

import { OffcanvasBackdrop } from './back-drop';
import { OffcanvasFooter } from './footer';
import { OffcanvasLinks } from './links';
import { slideLeft } from './variants';
import { useEffect, useRef, useState } from 'react';

const MotionComponent = motion(FixedOverlay);

// export function OffcanvasBody() {
//   return (
//     <MotionComponent
//       className='z-40'
//       variants={slideLeft}
//       initial='initial'
//       animate='enter'
//       exit='exit'
//     >
//       <OffcanvasBackdrop />

//       <div className='absolute right-0 top-0 h-screen bg-foreground text-background  border-2 border-yellow-400'>
//         <div className='flex h-full flex-col justify-between p-24'>
//           <OffcanvasLinks />

//           <OffcanvasFooter />
//         </div>
//       </div>
//     </MotionComponent>
//   );
// }

export function OffcanvasBody() {
  const [dynamicOffset, setDynamicOffset] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Get the width of the content
      const { offsetWidth } = contentRef.current;
      setDynamicOffset(offsetWidth); // Update the offset based on content width
    }
  }, [contentRef.current]);

  return (
    <MotionComponent
      className='z-[400]'
      variants={slideLeft} // Pass dynamic offset
      initial='initial'
      animate='enter'
      exit='exit'
    >
      {/* <OffcanvasBackdrop dynamicOffset={dynamicOffset} /> */}
      {dynamicOffset > 0 && <OffcanvasBackdrop dynamicOffset={dynamicOffset} />}

      <div
        ref={contentRef}
        className={`absolute right-0 top-0 h-screen w-auto min-w-[401px] bg-foreground text-background md:min-w-[600px]`}
      >
        <div className='flex h-full flex-col justify-between p-24'>
          <OffcanvasLinks />
          <OffcanvasFooter />
        </div>
      </div>
    </MotionComponent>
  );
}
