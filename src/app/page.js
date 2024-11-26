import { Raleway, Rubik } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

const raleway = Raleway ({
  weight: '700',
  subsets: ['latin'],
})

const rubik = Rubik ({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center p-5 m-9 h-96 mb-5'>
        <h1 className={`text-center text-white ${rubik.className} text-8xl font-bold tracking-wide`}>neinstok</h1>
      </div>
      <About />
      
      <Footer />
    </>
  );
}
