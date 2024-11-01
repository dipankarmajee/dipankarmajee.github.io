'use client';

import { Copyright } from 'lucide-react';
import Link from 'next/link';

import { MagneticButton } from '@/components';

export function NavbarBrand() {
  return (
    <Link href='/' passHref>
      <MagneticButton>
        <div className='group flex cursor-pointer pb-5'>
          <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
            <Copyright />
          </div>

          <div className='relative ms-1 flex overflow-hidden whitespace-nowrap text-[1.2rem] font-[550] transition-all duration-500 ease-in-expo group-hover:pe-10'>
            <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
              Code by
            </h5>
            <h5 className='ps-1 transition-transform duration-500 ease-in-expo hover:ps-0 group-hover:-translate-x-16'>
              Dipankar
            </h5>
            <h5 className='absolute left-[145px] ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-16'>
              Majee
            </h5>
          </div>
        </div>
      </MagneticButton>
    </Link>
  );
}
