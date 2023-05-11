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
  faChampagneGlasses,
  faLocation
} from '@fortawesome/free-solid-svg-icons'
import CelebrationIcon from '@mui/icons-material/Celebration'
import '../../Styling/home_page.css'
import { useLang } from '../../custom_hooks/use_get_current_language'
import PageRoutes from '../../router/page_routes'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const { translate } = useLang()


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
                <img src={image2} className='d-block w-100 h-100' alt='...' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5 className='fs-1'> {translate("first_carouselTitle")} </h5>
                  <p className='fs-2'>
                    {translate("first_carouselBody")}
                  </p>
                  <div className='mt-5'>
                    <p >
                      <Link to={PageRoutes.productsRoute.path} className='btn mt3 '>
                        {translate("first_carouselBtn")}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='carousel-item h-100'>
                <img src={image1} className='d-block w-100 h-100' alt='...' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5 className='fs-1'>{translate("second_carouselTitle")}</h5>
                  <p className='fs-2'>
                    {translate("second_carouselBody")}
                  </p>
                  <div className='mt-5'>
                    <p>
                      <Link to={PageRoutes.productsRoute.path} className='btn mt3'>
                        {translate("first_carouselBtn")}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='carousel-item h-100'>
                <img src={image3} className='d-block w-100 h-100' alt='...' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5 className='fs-1'> {translate("third_carouselTitle")} </h5>
                  <p className='fs-2'>
                    {translate("third_carouselBody")}
                  </p>
                  <div className='mt-5'>
                    <p>
                      <Link to={PageRoutes.productsRoute.path} className='btn  mt3'>
                        {translate("first_carouselBtn")}
                      </Link>
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
              {translate('services_title')}
            </h2>

            <div className='col-md-4 px-5 my-5 text-center '>
              <FontAwesomeIcon icon={faLocation} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'> {translate("services_ThirdTitle")} </h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                {translate("services_Thirdbody")}
              </p>
            </div>

            <div className='col-md-4 px-5 my-5 text-center'>
              <FontAwesomeIcon icon={faCamera} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'> {translate("services_SecTitle")} </h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                {translate("services_Secbody")}
              </p>
            </div>
            <div className='col-md-4 px-5 my-5 text-center'>
              <FontAwesomeIcon icon={faChair} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'> {translate("services_FirstTitle")} </h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                {translate("services_Firstbody")}
              </p>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-md-4 px-5 my-5 text-center'>
              <FontAwesomeIcon icon={faNewspaper} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'> {translate("services_SixTitle")} </h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                {translate("services_Sixbody")}
              </p>
            </div>
            <div className='col-md-4 px-5 my-5 text-center'>
              <CelebrationIcon />
              <h2 className='RobotoFont px-4  mt-3 fs-1'> {translate("services_FifthTitle")} </h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                {translate("services_Fifthbody")}
              </p>
            </div>
            <div className='col-md-4 px-5 my-5 text-center'>
              <FontAwesomeIcon icon={faChampagneGlasses} />
              <h2 className='RobotoFont px-4  mt-3 fs-1'> {translate("services_FourthTitle")} </h2>
              <p className='RobotoFont px-4  p__Color fs-4'>
                {translate("services_Fourthdbody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
