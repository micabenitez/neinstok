import { Raleway, Rubik, Poppins, Rubik_Mono_One } from 'next/font/google';

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-raleway', 
});

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-rubik',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-poppins',
});

export const rubikOne = Rubik_Mono_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rubikOne', 
});
