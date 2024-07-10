import React from 'react';

function Footer() {
  return (
    <footer className="modern-footer sub-bg pt-80">
      <div className="footer-container">
        <div className="container ontop">
          <div className="row pb-30 bord-thin-bottom">
            <div className="col-lg-5">
              <div className="logo icon-img-120">
                <img style={{ width: '70px'}} src="/images/SDCLogo2.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="social-media d-flex justify-content-end">
                <ul className="rest d-flex align-items-center fz-14">
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">
                      <i className="fab fa-facebook-f mr-10"></i> Facebook
                    </a>
                  </li>

                  <li className="hover-this cursor-pointer ml-50">
                    <a href="#0" className="hover-anim">
                      <i className="fab fa-twitter mr-10"></i> Twitter
                    </a>
                  </li>
                
                  <li className="hover-this cursor-pointer ml-50">
                    <a href="#0" className="hover-anim">
                      <i className="fab fa-instagram mr-10"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-80">
            <div className="col-lg-7">
              <div className="call-action">
                <h2 className="d-slideup wow fz-60 fw-600">
                  <span className="sideup-textx">
                    <h2 className="up-text">Ready to elevate your sport and fitness journey?</h2>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text underline">
                      <a href="/dark/page-contact3" className="main-color">
                        Let’s get to work
                      </a>
                    </span>
                  </span>
                </h2>
                <div className="info mt-80 d-flex align-items-center">
                  <div>
                    <a
                      href="#0"
                      className="butn butn-md butn-bord-thin radius-30"
                    >
                      <span className="text">sdc@gmail.com</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#0"
                      className="butn butn-md butn-bord-thin radius-30 ml-30"
                    >
                      <span className="text">+2 456 (343) 24 45</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 bord-left">
              <div className="column">
                <h6 className="sub-title mb-30">Useful Links</h6>
                <div className="row">
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <a href="#">About</a>
                      </li>
                      <li className="mb-15">
                        <a href="#">Services</a>
                      </li>
                      <li className="mb-15">
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <a href="#">FAQS</a>
                      </li>
                      <li className="mb-15">
                        <a href="#">Term & Conditions</a>
                      </li>
                      <li className="mb-15">
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="subscribe-minimal mt-50">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="ti-arrow-top-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center pt-30 pb-30 main-bg mt-80">
            <p className="fz-14">
              © 2024 {' '}
              <span className="underline main-color">
                <a href="" target="_blank">
                  Sort Digital Club
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
