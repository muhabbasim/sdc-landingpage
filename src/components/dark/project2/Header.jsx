'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Translatable from '../../translatable_text/Translatable';

function Header(item) {
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
    <div className="header header-project2 section-padding pb-0">
      <div className="container mt-80 mb-80">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="full-width mb-30">
              <h1 className="mb-10">
                <Translatable>
                  {item?.title}
                </Translatable>
              </h1>
              <p>
                <Translatable>
                  {item.desc}
                </Translatable>
              </p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Category :</span>
                    <h6>
                      <Translatable>
                        {item.category}
                      </Translatable>
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Type :</span>
                    <h6>
                      <Translatable>
                        {item.type}
                      </Translatable>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div
          className="project2"
          data-carousel="swiper"
          data-items="2"
          data-loop="true"
          data-space="30"
          data-center="true"
        >
          <div
            id="content-carousel-container-unq-project2"
            className="swiper-container"
            data-swiper="container"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="img">
                  <img src={item?.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
