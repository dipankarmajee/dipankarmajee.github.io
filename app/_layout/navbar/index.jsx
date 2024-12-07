'use client';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';

export function Navbar(props) {
  return (
    <nav className='absolute inset-x-0 top-0' style={{ zIndex: 200 }}>
      <div
        className={`flex items-center justify-between px-8 py-4 ${props?.className ? props?.className : 'text-background'}`}
      >
        <NavbarBrand />
        <NavbarList />
      </div>
      <div>{props?.children}</div>
    </nav>
  );
}
