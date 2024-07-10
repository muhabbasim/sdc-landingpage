import React from 'react';
import Language from '../../languageAction/Language';
import Translatable from '../../translatable_text/Translatable';

function NavTop() {
  return (
    <nav className="navbar navbar-expand-lg bord blur pt-15 pb-15">
      <div className="container d-block">
        <div className="row align-items-center">
          <div className="col-lg-4 col-6 md-hide">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-scroll-nav="0">
                    Demos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-scroll-nav="1">
                    <Translatable>
                      Pages
                    </Translatable>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://uicamp.smartinnovates.net/docs/reactjs/"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-6 text-center">
            <a className="logo icon-img-120" href="#">
              {/* <img src="/dark/assets/imgs/logo-light.png" alt="logo" /> */}
              <img src="/images/SDCLogo.svg" alt="logo" style={{ width: '50px'}} />
            </a>
          </div>
          <div className="col-lg-4 col-6 d-flex">
            <div className="ml-auto">
              <Language/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTop;
