'use client';
import { Helmet } from 'react-helmet';
import Lines from '../components/dark/common/Lines';
import ProgressScroll from '../components/dark/common/ProgressScroll';
import Cursor from '../components/dark/common/cusor';
import LoadingScreen from '../components/dark/common/loader';
import Amazing from '../components/dark/landing-preview/Amazing';

import Header from '../components/dark/landing-preview/Header';
import Porfolios from '../components/dark/landing-preview/Porfolios';
import StartSection from '../components/dark/landing-preview/StartSection';
import Updates from '../components/dark/landing-preview/Updates';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDir } from '../store/customizer/custoizerSlide.js';
import Portfolio from '../components/dark/home-main/Portfolio.jsx';
import Footer from '../components/dark/blog-list/Footer.jsx';
import Services from '../components/dark/services-details/Services.jsx';
import Numbers from '../components/dark/about2/Numbers.jsx';
import Navbar from '../components/dark/home-freelancer/Navbar.jsx';

export default function Home() {

 
  const customizer = useSelector((state) => state.customizer)
  const dispatch = useDispatch();

  useEffect(() => {
    const languageAdjustment = () => {
      if (customizer.isLanguage === 'en') {
        dispatch(setDir('ltr'))
      } else if (customizer.isLanguage === 'ar'){
        dispatch(setDir('rtl'))
      }
    } 
  
    languageAdjustment()
  }, []);

  return (
    <>
      <Helmet>
        <title>SDC Home</title>
        <link rel="icon" href="/images/SDCLogo.svg" />
        <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/landing-preview/css/preview-style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body dir={customizer.activeDir} className="sub-bg">
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        {/* <NavTop /> */}

        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header />
              <Updates />
              <Services />
              <Portfolio/>
              <StartSection />
              <Porfolios />
              <Amazing />
              <Numbers />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
