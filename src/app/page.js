import { Rubik } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';

const rubik = Rubik ({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center p-5 m-9 h-[20rem] mb-5'>
        <h1 className={`text-center text-white ${rubik.className} text-8xl font-bold tracking-wide animate-fadeinup`}>neinstok</h1>
      </div>
      <About />
      <Services />
      <Portfolio />
      <Tools />
      <Footer />
    </>
  );
}
