import React from 'react';
import { sports } from '../../../data/sports';
import Translatable from '../../translatable_text/Translatable';

const getItemDetails = (currentId) => {
  const currentItem = sports.find(el => el.id === currentId);

  if (!currentItem) {
    return { prevItem: null, currentItem: null, nextItem: null };
  }

  const currentIndex = sports.indexOf(currentItem);
  const prevItem = sports[(currentIndex - 1 + sports.length) % sports.length];
  const nextItem = sports[(currentIndex + 1) % sports.length];

  return { prevItem, currentItem, nextItem };
};

function Next(item) {

  const { prevItem, nextItem } = getItemDetails(item.id);

  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-md-6 rest">
            <div
              className="text-left box bg-img"
              data-background={prevItem.img}
            >
              <div className="cont d-flex align-items-center">
                <div>
                  <span className="mr-30 fz-30 ti-arrow-left"></span>
                </div>
                <div>
                  <h6 className="sub-title fz-16 mb-5">Prev Sport</h6>
                  <a href={`/dark/project2/${prevItem.id}`} className="fz-40 fw-600 stroke">
                    <Translatable>
                      {prevItem?.title}
                    </Translatable>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 rest">
            <div
              className="text-right d-flex box bg-img"
              data-background={nextItem.img}
            >
              <div className="ml-auto">
                <div className="cont d-flex align-items-center">
                  <div>
                    <h6 className="sub-title fz-16 mb-5">Next Sport</h6>
                    <a href={`/dark/project2/${nextItem.id}`} className="fz-40 fw-600 stroke">
                      {nextItem.title}
                    </a>
                  </div>
                  <div>
                    <span className="ml-30 fz-30 ti-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">All Sports</span>
        </a>
      </div>
    </section>
  );
}

export default Next;
