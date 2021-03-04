import React, { useEffect } from 'react';
import './styles/main.css';
import Header from './Header';
import MainBanner from './MainBanner';
import OurServices from './OurServices';
import AboutLaptoptory from './AboutLaptoptory';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home">
      <Header />
      <main id="main">
        <MainBanner data-aos="fade-up" data-aos-delay="200" />
        <AboutLaptoptory />
        <OurServices />
        <WhyUs />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}