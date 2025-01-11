import { Rubik } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import Form from './components/Form';

const rubik = Rubik ({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <div className='flex h-64 md:h-[21rem] md:items-center justify-center'>
        <h1 className={`self-center text-center text-white ${rubik.className} text-6xl font-bold tracking-wide md:text-8xl md:mt-14 animate-fadeinup`}>neinstok</h1>
      </div>
      <About />
      <Services />
      <Portfolio />
      <Tools />
      <Form />
    </>
  );
}
