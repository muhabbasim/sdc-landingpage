import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { sports } from '../../../data/sports';

function StartSection() {

  
  return (
    <>
      <Helmet>
        <script src="/dark/assets/js/hscroll.js"></script>
      </Helmet>

      <section data-scroll-index="3" className="works showcases thecontainer ontop sub-bg gap-2">
        <div className="text">
          <h2 className="text-bg sdc-color-text">SDC Sports</h2>
        </div>
    
        { sports.map((sport) => (
          <div key={sport.id} style={{ width: '100%', position: 'relative' }} className="panel panel-sport">
            <div className="item ">
              <div className="img">
                <img className='' src={sport.img} alt="" />
              </div>
              <div className="sdc-center-text sdc-sports-name">
                <h5 className='sdc-color'>{sport.title}</h5>
              </div>
              <Link
                to={`/dark/project2/${sport.id}`}
                className="plink"
                target="_blank"
              ></Link>
            </div>
          </div>
        ))}

        {/* <div className="panel">
          <div className="item">
            <div className="img">
              <img className='' src="https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Fitness</h5>
            </div>
            <a
              href="/dark/showcase-carousel"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Swimming</h5>
            </div>
            <a
              href="/dark/showcase-half-slider"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/images/sports/sport20.jpeg" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Table Tennis</h5>
            </div>
            <a
              href="/dark/showcase-interactive-full"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Football</h5>
            </div>
            <a
              href="/dark/showcase-interactive-center"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="https://img.freepik.com/free-photo/people-taking-part-sustainable-travel-movement_23-2151049528.jpg?t=st=1720376478~exp=1720380078~hmac=f8a72516782a4f858386af80f86647b4e97272a77fd0d1d3e1fa56ec1609f191&w=2000" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Hiking</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1628630500614-1c8924c99c3e?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Diving</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1605050825077-289f85b6cf43?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Bicycle Riding</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/images/sports/sport15.jpeg" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Paddle</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/images/sports/sport14.jpeg" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Yoga</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1634225253504-43d3103669dc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Calisthenics</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/images/sports/sport22.jpeg" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Riding</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1547442991-a51706bf3a3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="" />
            </div>
            <div className="sdc-center-text">
              <h5 className='sdc-color '>Skating</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default StartSection;
