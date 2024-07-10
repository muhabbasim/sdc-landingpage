import React from 'react';

function Numbers() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', color: 'black', paddingTop: 80, paddingBottom: 80 }} className="numbers section-paddingx ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <h2 className="fz-80 line-height-1">52</h2>
              <span className="sub-title opacity-7 ml-30">
                Gym <br /> Registered
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <h2 className="fz-80 line-height-1">34</h2>
              <span className="sub-title opacity-7 ml-30">
                Coatch <br /> Members
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center">
              <h2 className="fz-80 line-height-1">
                6k<span className="fz-50">+</span>
              </h2>
              <span className="sub-title opacity-7 ml-30">
                club <br /> Participants
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
