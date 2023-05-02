import React from 'react'
import Footersection from '../../components/footer_component/footer_component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image1 from '../../imported/images/image1.jpg'
import image2 from '../../imported/images/image2.jpg'
import image3 from '../../imported/images/image3.jpg'
import {
  faCamera,
  faChair,
  faNewspaper,
  faChampagneGlasses
} from '@fortawesome/free-solid-svg-icons'
import CelebrationIcon from '@mui/icons-material/Celebration'
import '../../Styling/home_page.css'
const HomePage = () => {
  return (
    <>
      <div className='container-fluid '>
        <div className='row bgSecondary d-flex mt-2'>
          <div id='carouselExampleCaptions' className='carousel slide '>
            <div className='carousel-indicators'>
              <button
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide-to={0}
                className='active'
                aria-current='true'
                aria-label='Slide 1'
              />
              <button
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide-to={1}
                aria-label='Slide 2'
              />
              <button
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide-to={2}
                aria-label='Slide 3'
              />
            </div>
            <div className='carousel-inner'>
              <div className='carousel-item active h-100'>
                <img src={image1} className='d-block w-100 h-100' alt='...' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5 className='fs-1'>First slide label</h5>
                  <p className='fs-2'>
                    Some representative placeholder content for the first slide.
                  </p>
                  <div className='mt-5'>
                    <p>
                      <a href='#' className='btn mt3'>
                        Explore Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='carousel-item h-100'>
                <img src={image2} className='d-block w-100 h-100' alt='...' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5 className='fs-1'>Second slide label</h5>
                  <p className='fs-2'>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                  <div className='mt-5'>
                    <p>
                      <a href='#' className='btn mt3'>
                        Explore Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='carousel-item h-100'>
                <img src={image3} className='d-block w-100 h-100' alt='...' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5 className='fs-1'>Third slide label</h5>
                  <p className='fs-2'>
                    Some representative placeholder content for the third slide.
                  </p>
                  <div className='mt-5'>
                    <p>
                      <a href='#' className='btn  mt3'>
                        Explore Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='row  pt-5 '>
        <div className='container my-4'>
          <div className='row my-3'>
            <h2 className='text-center titleSize RobotoFont  pb-4 mb-4'>
              Our Services
            </h2>

            <div className='col-md-4 px-5 my-5 text-center '>
              <i className='bi bi-geo-alt-fill'></i>
              <h2 className='RobotoFont px-4  mt-3 fs-1'>Location</h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                This is a short description elaborating the service you have
                mentioned above.
              </p>
            </div>

            <div className='col-md-4 px-5 my-5 text-center'>
              <FontAwesomeIcon icon={faCamera} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'>Photographer</h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                This is a short description elaborating the service you have
                mentioned above.
              </p>
            </div>
            <div className='col-md-4 px-5 my-5 text-center'>
              <FontAwesomeIcon icon={faChair} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'>Hall Chairs</h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                This is a short description elaborating the service you have
                mentioned above.
              </p>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-md-4 px-5 my-5 text-center'>
              <FontAwesomeIcon icon={faNewspaper} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'>Documentation</h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                This is a short description elaborating the service you have
                mentioned above.
              </p>
            </div>
            <div className='col-md-4 px-5 my-5 text-center'>
              <CelebrationIcon />
              <h2 className='RobotoFont px-4  mt-3 fs-1'>Celebration</h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                This is a short description elaborating the service you have
                mentioned above.
              </p>
            </div>
            <div className='col-md-4 px-5 my-5 text-center'>
              <FontAwesomeIcon icon={faChampagneGlasses} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'>Food & Drinks</h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                This is a short description elaborating the service you have
                mentioned above.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footersection></Footersection> */}
    </>
  )
}

export default HomePage
