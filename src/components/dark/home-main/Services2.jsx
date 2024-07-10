import React from 'react';
import data from '../../../data/services.json';

function Services2() {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title mb-25">Why choose SDC</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text sub-color">
                SDC <span className="fw-200">Key Features</span>
              </span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="serv-swiper"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <div
            id="content-carousel-container-unq-serv"
            className="swiper-container"
            data-swiper="container"
          >
            <div className="swiper-wrapper">
              {data.slice(0, 4).map((item, i) => (
                <div key={i} style={{ height: "450px"}} className="swiper-slide">
                  <div  className="item-box radius-15">
                      <div style={{ width: '100%', height: '150px'}} className="sdc-item-bgx mb-40 opacity-6">
                        <img style={{ width: '100%', height: '150px'}} src={item.img} alt="" />
                      </div>
                      <div className=''>
                        <img style={{ width: '30px', height: '30px', display: 'inline'}} src={item.icon} alt="" />
                        <h5 style={{display: 'inline'}} className="mb-15 sdc-index ">{item.title}</h5>
                      </div>
                      <p>{item.desc}</p>
                      <a href={item.link} className="rmore mt-30">
{/* 
                        <img
                          src="/dark/assets/imgs/arrow-right.png"
                          alt=""
                          className="icon-img-20 ml-5"
                        /> */}
                      </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services2;
