import { ContactContent } from '@/app/_pages/contact-content';

import { Description, Header, Navbar, Project, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dipankar',
};

export default function Contact() {
  return (
    <Transition>
      <Navbar className='bg-foreground text-background' />
      <main className='h-fit bg-foreground pt-32 text-background'>
        <ContactContent />
      </main>
    </Transition>
  );
}
