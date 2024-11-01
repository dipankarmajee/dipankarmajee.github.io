'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id}>
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton className='size-24' variant='ghost'>
            {title}
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='mt-20 flex flex-col gap-3'>
      <h5 className='text-xs uppercase text-secondary-foreground'>Socials</h5>

      <ul className='flex w-full justify-around gap-10'>{medias}</ul>
    </div>
  );
}
