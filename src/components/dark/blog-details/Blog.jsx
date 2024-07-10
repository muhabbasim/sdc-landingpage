import React from 'react';
import Translatable from '../../translatable_text/Translatable';
import { sportsBlog } from '../../../data/blogSportData';

function Blog(blogDetails) {

  const blogData = sportsBlog.filter((el) => el.id !== blogDetails.id )

  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item pb-60">
                <article>
                  <div className="title mt-30">
                    <h4>{blogDetails.subtitle}</h4>
                  </div>
                  <div className="text">
                    <p className=''>
                      <Translatable>
                        {blogDetails.content}
                      </Translatable>
                    </p>
                  </div>
                </article>


                {/* <div className="mb-50 mt-50">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="iner-img sm-mb30">
                        <img src="/dark/assets/imgs/blog/b2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="iner-img">
                        <img src="/dark/assets/imgs/blog/b3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div> */}


                <div className="order-list mt-30 mb-30">
                  <h6 className="mb-15">Ordered & Unordered Lists.</h6>
                  <ul className="rest">
                    <li>
                      <span>01 -</span> Yet this above sewed flirted opened ouch
                    </li>
                    <li>
                      <span>02 -</span> Goldfinch realistic sporadic ingenuous
                    </li>
                    <li>
                      <span>03 -</span> Abominable this abidin far successfully
                      then like piquan
                    </li>
                  </ul>
                </div>

                <div className="text">
                  <p>
                    However, Apple might not include it in the Air series when
                    it launches it. As for the notebook’s release date, the
                    15-inch MacBook isn’t coming soon. It’ll get a late 2023
                    release at best, according to the new claims.
                  </p>
                </div>
              </div>
            </div>

            <div className="comments-from mt-40">
              <div className="mb-60">
                <h3>Leave a comment</h3>
              </div>
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <div className="mt-30">
                        <button type="submit">
                          <span className="text">Post Comment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="search-box">
                <input type="text" name="search-post" placeholder="Search" />
                <span className="icon pe-7s-search"></span>
              </div>
              <div className="widget catogry">
                <h6 className="title-widget">Categories</h6>
                <ul className="rest">
                  <li>
                    <span>
                      <a href="/dark/blog-list">Sports</a>
                    </span>
                    <span className="ml-auto">33</span>
                  </li>
                  <li>
                    <span>
                      <a href="/dark/blog-list">Diet</a>
                    </span>
                    <span className="ml-auto">05</span>
                  </li>
                </ul>
              </div>

              <div className="widget last-post-thum">
                <h6 className="title-widget">latest Posts</h6>
                <div className='sdc-blog-data-container'>
                  {
                    blogData.map((blog) => (
                      <div key={blog.id} className="item d-flex align-items-center">
                        <div>
                          <div className="img">
                            <a href="/dark/blog-list">
                              <img src={blog.img} alt="" />
                              <span className="date">
                                <span>
                                  {blog.date}
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="cont">
                          <span className="tag">
                            <span>{blog.sport_type}</span>
                          </span>
                          <h6>
                            <a href="/dark/blog-list">
                              {blog.title}
                            </a>
                          </h6>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  <a href="/dark/blog-list">Creative</a>
                  <a href="/dark/blog-list">Design</a>
                  <a href="/dark/blog-list">Dark & Light</a>
                  <a href="/dark/blog-list">Minimal</a>
                  <a href="/dark/blog-list">Infolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
