import React from "react";
import "../../Styling/sidebars.css";
import Footersection from "../../components/footer_component/footer_component";
const Products = () => {
  return (
    <>
    <div className="container">
      <h2 className="fs-1 text-center mt-2">Our Products</h2>
      <div className="row mt-3 col-sm-12">
        {/* filter */}
          <main className="d-flex col-md-3 col-sm-12 col-xs-12 flex-nowrap mt-4">
            <div className="flex-shrink-0 p-3" style={{width: "100%"}}>
              <p
                className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
              >
                <span className="fs-5 fw-semibold ">Filters</span>
              </p>
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="true"
                  >
                    Locations
                  </button>
                  <div className="collapse show" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                            <div className="ms-4 form-check">
                                <input className="form-check-input" type="checkbox" id="giza"></input>
                                <label className="form-check-label" htmlFor="giza">Giza</label>
                            </div>
                      </li>
                      <li>
                            <div className="ms-4 form-check">
                                <input className="form-check-input" type="checkbox" id="cairo"></input>
                                <label className="form-check-label" htmlFor="cairo">Cairo</label>
                            </div>
                      </li>
                      <li>
                            <div className="ms-4 form-check">
                                <input className="form-check-input" type="checkbox" id="alex"></input>
                                <label className="form-check-label" htmlFor="alex">Alex</label>
                            </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse"
                    aria-expanded="false"
                  >
                    Price
                  </button>
                  <div className="collapse" id="dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                            <div className="ms-4 form-check">
                                <input className="form-check-input" type="checkbox" id="price-one"></input>
                                <label className="form-check-label" htmlFor="price-one">3000-5000</label>
                            </div>
                      </li>
                    <li>
                            <div className="ms-4 form-check">
                                <input className="form-check-input" type="checkbox" id="price-two"></input>
                                <label className="form-check-label" htmlFor="price-one">5000-7000</label>
                            </div>
                      </li>
                    <li>
                            <div className="ms-4 form-check">
                                <input className="form-check-input" type="checkbox" id="price-three"></input>
                                <label className="form-check-label" htmlFor="price-three">7000-10000</label>
                            </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#orders-collapse"
                    aria-expanded="false"
                  >
                    In & Out door
                  </button>
                  <div className="collapse" id="orders-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                            <div className="ms-4 form-check">
                                <input className="form-check-input" type="checkbox" id="in-door"></input>
                                <label className="form-check-label" htmlFor="in-door">In door</label>
                            </div>
                      </li>
                    <li>
                            <div className="ms-4 form-check">
                                <input className="form-check-input" type="checkbox" id="out-door"></input>
                                <label className="form-check-label" htmlFor="out-door">Out door</label>
                            </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="border-top my-3"></li>
              </ul>
            </div>
          </main>
        <div className="col-md-9 col-sm-12 py-2">
          <div className="row my-3 justify-content-between">
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3 justify-content-between">
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3 justify-content-between">
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" >
                <img
                  src="assets/img.jpg"
                  className=" card-img-top p-1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn primarybg text-light">
                    More details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footersection/>
    </>
  );
};

export default Products;
