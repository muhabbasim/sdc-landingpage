'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Translatable from '../../translatable_text/Translatable';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div data-scroll-index="0" className=" header land-header sub-bg2">
      <div className="container ontop">
        <div className="caption text-center">
          <h1>
            Sports <span className="spc-font"> Enthusiasts and </span>
            <span className="spc-font"> & Fitness Experts</span> <span className='sdc-color-text'>in one place</span>
          </h1>
          <h6 className="sub-title mt-20">
            <Translatable>
              Download App & Sign Up for Free!
            </Translatable>
          </h6>
        </div>
      </div>
      <div className="imgs">
        <div className="curvtop sub-bg2"></div>
        <div className="curvbotm sub-bg2"></div>
        <div className="main-marq o-hidden mt-100">
          <div className="slide-har st1">
            <div className="box">
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1545151414-8a948e1ea54f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1608138278561-4b1ade407411?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1545151414-8a948e1ea54f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1608138278561-4b1ade407411?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
            </div>
            {/* <div className="box">
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s1.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s10.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s3.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s4.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s5.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s6.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s7.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s8.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s9.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/landing-preview/img/header/s2.jpg" alt="" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
