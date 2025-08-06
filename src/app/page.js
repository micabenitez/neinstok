'use client'
import About from "./components/About";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const handleNavScroll = () => {
      if (window.scrollY > 500) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
    }
    window.addEventListener('scroll', handleNavScroll);
    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    }
  }, []);

  const sections = {
      home: useRef(null),
      portfolio: useRef(null),
      services: useRef(null),
      about: useRef(null),
      contact: useRef(null),
  };

  const handleScrollToSection = (section) => {
      sections[section]?.current?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header navVisible={navVisible} handleScrollToSection={handleScrollToSection}/>
        <Hero />       
        <About ref={sections.about}/>
        <Portfolio ref={sections.portfolio} />
        <Services ref={sections.services}/>
      </div>
    </>
  );

}
