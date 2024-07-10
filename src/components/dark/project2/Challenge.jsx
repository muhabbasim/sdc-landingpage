import React from 'react';
import Translatable from '../../translatable_text/Translatable';

function Challenge(item) {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">
              <Translatable>
                Sport
              </Translatable>
              <br />
              <Translatable>
                Importance
              </Translatable>
            </h2>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="line-height-40">
                <Translatable>{item.importance}</Translatable>
              </h5>
            </div>

            <div className="accordion bord mt-100">
              <h2 className="mb-50">
                <Translatable>
                  The Challenges
                </Translatable>
              </h2>
              {/* { item.challenge.map((el, i) => (
                <div
                  key={el.title}
                  className="item active mb-15 wow fadeInUp"
                  data-wow-delay={`.${i+2}s`}
                >
                  <div className="title">
                    <h6><Translatable>{el.title}</Translatable></h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      <Translatable>{el.desc}</Translatable>
                    </p>
                  </div>
                </div>
              ))} */}

              <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div className="title">
                  <h6>{item.challenge[0].title}</h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                    {item.challenge[0].desc}
                  </p>
                </div>
              </div>
              <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div className="title">
                  <h6>{item.challenge[1].title}</h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                    {item.challenge[1].desc}
                  </p>
                </div>
              </div>
              <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div className="title">
                  <h6>{item.challenge[2].title}</h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                    {item.challenge[2].desc}
                  </p>
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
