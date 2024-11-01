'use client';

import { useScroll, useTransform } from 'framer-motion';

/** @param {import('react').MutableRefObject<HTMLElement>} element */
export function useVerticalSlider(element) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
  });

  const transformY1 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const transformY2 = useTransform(scrollYProgress, [0, 1], [-450, 0]);
  const transformY3 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const transformY = useTransform(scrollYProgress, [0, 0.9], [250, 0]);

  return { transformY, transformY1, transformY2, transformY3 };
}
