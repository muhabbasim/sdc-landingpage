import React from 'react';
import Translatable from '../../translatable_text/Translatable';

function Amazing() {
  return (
    <section className="respo section-padding ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">

            <div className="img md-mb50">
              <img src="/images/resp.png" alt="" />
            </div>
           
            <div className="tab-content current" id="tabs-1x">
              <div className="" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                <div className="sdc-app-download">
                  
                  <span className="mr-15">Enthusiast or a dedicated athlete, <span className='sdc-color-text' style={{ fontWeight: '800'}}>download SDC </span> app and join the club</span>
                  <div style={{ marginTop: '10px'}}>
                    <img style={{ width: '150px', cursor: 'pointer' }} src="/images/ios-app.png" alt="" />
                    <img style={{ width: '150px', cursor: 'pointer' }} src="/images/android-app.png" alt="" />
                  </div>
                    {/* <i className="fas fa-long-arrow-alt-right"></i> */}
                </div>
              </div>
            </div>

          </div>
   
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <h6 className="sub-title mb-15 sub-colorx">SDC Application</h6>
              <h2 className="mb-30">
                Fully <span className="spc-font sdc-color-text">responsive</span> <br />
                <span className="spc-font">design</span> for all devices
              </h2>
              <div className="row">
                <div className="col-lg-11">
                  <div className="text mb-50">
                    <p>
                    {/* Sign up today and start connecting with sports enthusiasts and professionals! */}
                      Download our app for instant access to all features and stay connected with the community wherever you are
                    </p>
                  </div>
                  <ul className="rest">
                    <li className="item-link sdc-item-link current mb-15" data-tab="tabs-1">
                      <h4>
                        <span className="fz-18 opacity-7 mr-15">01</span> 
                          <Translatable>
                            Download App
                          </Translatable>
                          <p className='sdc-app-item sdc-color-text ' style={{ display: 'inline', padding: '10px'}}>
                            Download SDC app from android app and ioc app
                          </p>
                        </h4>
                    </li>
                    <li className="item-link sdc-item-link mb-15" data-tab="tabs-2">
                      <h4>
                        <span className="fz-18 opacity-7 mr-15">02</span>
                        <Translatable>
                          Sign Up
                        </Translatable>
                        <p className='sdc-app-item sdc-color-text ' style={{ display: 'inline', padding: '10px'}}>
                          Create your profile and join the SDC community
                        </p>
                      </h4>
                    </li>
                    <li className="item-link sdc-item-link mb-15" data-tab="tabs-3">
                      <h4>
                        <span className="fz-18 opacity-7 mr-15">03</span>
                        <Translatable>
                          Explore
                        </Translatable>

                        <p className='sdc-app-item sdc-color-text ' style={{ display: 'inline', padding: '10px'}}>
                          Browse through various sports activities, coaching opportunities, and community posts
                        </p>
                      </h4>
                    </li>
                    <li className="item-link sdc-item-link mb-15" data-tab="tabs-4">
                      <h4>
                        <span className="fz-18 opacity-7 mr-15">04</span>
                        <Translatable>
                          Connect
                        </Translatable>
                        <p className='sdc-app-item sdc-color-text ' style={{ display: 'inline', padding: '10px'}}>
                          Engage with coaches, consultants, and fellow sports enthusiasts
                        </p>
                      </h4>
                    </li>
                    <li className="item-link sdc-item-link mb-15" data-tab="tabs-4">
                      <h4>
                        <span className="fz-18 opacity-7 mr-15">05</span>
                        <Translatable>
                          Paticipate & Share
                        </Translatable>
                        <p className='sdc-app-item sdc-color-text ' style={{ display: 'inline', padding: '10px'}}>
                          Join activities, attend coaching sessions, and make the most of your fitness journey
                        </p>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amazing;
