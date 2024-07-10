import React from 'react';
import { sportsBlog } from '../../../data/blogSportData';
import Translatable from '../../translatable_text/Translatable';
import { Link } from 'react-router-dom';

function Blogs() {
  
  return (
    <section className="blog-crev section-padding">
      <div className="container">
        <div className="row">
          {sportsBlog.map((el) => (
            <div key={el.id} className="col-lg-4">
              <div className="item sub-bg mb-40">
                <div className="img">
                  <img src={el.img} alt="" />
                  <div className="tag sub-bg">
                    <span>SDC</span>
                    <div className="shap-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1d1d1d"
                        ></path>
                      </svg>
                    </div>
                    <div className="shap-left-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1d1d1d"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="cont">
                  <div className="date fz-13 text-u ls1 mb-10 opacity-7">
                    <span>{el.date}</span>
                  </div>
                  <Link
                    to={`/dark/blog-details/${el.id}`}
                    target="_blank"
                    className='pt-15'
                  >
                    <h5>
                      <Translatable>{el.title}</Translatable>
                    </h5>
                    <span className="text mt-15">Read More</span>
                    <span className="ti-arrow-top-right"></span>
                  </Link>
                </div>
              </div>
            </div>

          ))}
      
        </div>
      </div>
    </section>
  );
}

export default Blogs;
