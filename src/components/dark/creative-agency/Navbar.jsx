import React from 'react';
import Language from '../../languageAction/Language';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <a className="logo icon-img-100" href="#">
            <img src="/images/SDCLogo2.svg" alt="logo" style={{ width: '50px'}} />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" href="/">
                  <span className="rolling-text">Home</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="/dark/blog-list">
                  <span className="rolling-text">Blog</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="/dark/page-contact3">
                  <span className="rolling-text">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

         
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }} className="topnav">
            <Language/>
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu">
        <div className="logo icon-img-100">
          <img src="/images/SDCLogo2.svg" alt="" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li>
                    <div className="o-hidden">
                      <a href="/" className="link">
                        <span className="fill-text" data-text="Home">
                          Home
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="/dark/blog-list" className="link">
                        <span className="fill-text" data-text="Blog">
                          Blog
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="/dark/page-contact3" className="link">
                        <span className="fill-text" data-text="Contact Us">
                          Contact Us
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    541 Melville Geek, <br /> Palo Alto, CA 94301
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="#0">Hello@email.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="#0">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
