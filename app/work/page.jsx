import { Navbar, Transition } from '@/layout';
import {
  Container,
  Row,
} from '../_layout/contact/components/user-details/index.styled';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dipankar',
};

export default function Work() {
  return (
    <Transition>
      <Navbar className='bg-black text-white' />
      <main className=' my-40  h-screen bg-black text-white'>
        <Container>
          <Row>
            <span>In Progress...</span>
          </Row>
        </Container>
      </main>
    </Transition>
  );
}
