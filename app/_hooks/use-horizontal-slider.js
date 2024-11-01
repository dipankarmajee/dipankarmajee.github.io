'use client';

import { useScroll, useTransform } from 'framer-motion';

/** @param {import('react').MutableRefObject<HTMLElement>} element */
export function useHorizontalSlider(element) {
  const { scrollXProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
  });

  const transformX1 = useTransform(scrollXProgress, [0, 1], [0, -450]);
  const transformX2 = useTransform(scrollXProgress, [0, 1], [-450, 0]);
  const transformX = useTransform(scrollXProgress, [0, 0.9], [250, 0]);
  const transformXResponsive = useTransform(scrollXProgress, [0, 0.9], [50, 0]);

  return { transformX, transformX1, transformX2, transformXResponsive };
}
