import React from 'react';
import Translatable from '../../translatable_text/Translatable';

function Portfolio() {
  return (
    <section data-scroll-index="2" className="inter-fixed-text section-padding white-bgx">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Why choose SDC</h6>
          <div className="bord pt-25 bord-thin-top d-flex justify-content-endx">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text sub-colorx">
                SDC <span className="fw-200 sub-color">Key Features</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container position-re">
        <div className="links-img">
          <div className="row">
            <div className="col-lg-4 items">
              <div className="item">
                <div className="img" data-tab="tab-1">
                  <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  {/* <img src="/images/sports/sport1.png" alt="" /> */}
                  {/* <a href="#" className="link-overlay"></a> */}
                </div>
                <div className="cont">
                  <span className="tag">Networking</span>
                  <h2>Our platform allows you to network with people who share your passion for sports, exchange tips, join groups, and build lasting relationships</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 items">
              <div className="item">
                <div className="img" data-tab="tab-2">
                  <img src=" https://goat-fitness.com/wp-content/uploads/2022/01/shutterstock_1822207589.jpg.webp" alt="" />
                  {/* <img src="/images/sports/sport5.png" alt="" /> */}
                  {/* <a href="#" className="link-overlay"></a> */}
                </div>
                <div className="cont">
                  <span className="tag">Coaching</span>
                  <h2>Earn by sharing your sports expertise</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 items">
              <div className="item">
                <div className="img" data-tab="tab-3">
                  <img src="https://foxandfleur.com.au/wp-content/uploads/2023/02/5-Instagram-features-to-keep-an-eye-on-in-2023-1-500x383.jpg" alt="" />
                  {/* <img src="/images/sports/sport3.png" alt="" /> */}
                  {/* <a href="#" className="link-overlay"></a> */}
                </div>
                <div className="cont">
                  <span className="tag">Club</span>
                  <h2>Share your sports journey through photos and videos</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links-text">
          <ul className="rest">
            <li id="tab-1">
              <h2>
                <Translatable>
                  Networking
                </Translatable>
              </h2>
              <span className="tag sdc-tag">
                <Translatable>
                  Our platform allows you to network with people who share your passion for sports, exchange tips, join groups, and build lasting relationships
                </Translatable>
              </span>
            </li>
            <li id="tab-2">
              <h2>
                <Translatable>
                  Coaching
                </Translatable>
              </h2>
              <span className="tag sdc-tag">
                <Translatable>
                  SDC making it easy for those with real-life sports experience to monetize their skills and for learners to find affordable, quality coaching
                </Translatable>
              </span>
            </li>
            <li id="tab-3">
              <h2>
                <Translatable>
                  Club
                </Translatable>
              </h2>
              <span className='tag sdc-tag'>
                <Translatable>
                  Share photos and videos of your sports journey, celebrate milestones, and get inspired by others. SDC is more than a platform; it’s a supportive network where every achievement is celebrated
                </Translatable>  
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-40">
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <p>Read more about SDC features</p>
            <a
              href="#"
              className="butn main-color ml-40 underline"
            >
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
