'use client'
import Footer from "./components/Footer";
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
      if (window.scrollY > 100) {
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
        {navVisible ? <Header navVisible={navVisible} handleScrollToSection={handleScrollToSection}/> : null}
        <Hero />       
        <About ref={sections.about}/>
        
        <div className="bg-white  w-96 h-96">
          <clipPath>
            <svg width={600} height={600}>
              <path d="M282.37629736905626,208.8344483968139L282.37629736905626,226.0991745817041C282.37629736905626,234.83016856951485 289.45416645341544,241.908037653874 298.1851604412262,241.908037653874L403.8990780333092,241.908037653874C412.63007202112,241.908037653874 419.7079411054791,248.98590673823318 419.7079411054791,257.71690072604395L419.7079411054791,399.1911369278301C419.7079411054791,407.9221309156409 412.63007202112,415 403.8990780333092,415L275.3466376316679,415C266.6156436438571,415 259.53777455949796,407.9221309156409 259.53777455949796,399.1911369278301L259.53777455949796,353.5785951503741C259.53777455949796,344.84760116256336 252.45990547513878,337.7697320782042 243.72891148732802,337.7697320782042L15.808863072169926,337.7697320782042C7.07786908435916,337.7697320782042 0,330.691862993845 0,321.96086900603433L0,161.85520630171374C0,153.12421231390297 7.07786908435916,146.04634322954382 15.808863072169926,146.04634322954382L77.34826944050205,146.04634322954382C86.07926342831281,146.04634322954382 93.15713251267198,138.96847414518464 93.15713251267198,130.23748015737388L93.15713251267198,15.808863072169926C93.15713251267198,7.07786908435916 100.23500159703113,0 108.96599558484189,0L437.75618640888246,0C446.48718039669325,0 453.56504948105237,7.07786908435916 453.56504948105237,15.808863072169926L453.56504948105237,177.21672225247406C453.56504948105237,185.94771624028482 446.48718039669325,193.025585324644 437.75618640888246,193.025585324644L298.1851604412262,193.025585324644C289.45416645341544,193.025585324644 282.37629736905626,200.10345440900315 282.37629736905626,208.8344483968139Z"></path>
            </svg>
          </clipPath>
        </div>

        {/* div style={clip-path:polygon(-2.13163e-14px 1974.14px, 735px 1974.14px, 735px 3820.03px, -2.13163e-14px 3820.03px)}></div>*/}
        <Portfolio ref={sections.portfolio} />
        <Services ref={sections.services}/>
        <Footer />
      </div>
    </>
  );

}
