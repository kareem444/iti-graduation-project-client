import React from 'react'
import '../../Styling/sidebars.css'
import Footersection from '../../components/footer_component/footer_component'
import { RepoGetAllProducts } from '../../repositories/product.repo'
import { NavLink } from 'react-router-dom'
const Products = () => {

  const { data: products, isLoading } = RepoGetAllProducts()

  return (
    <>
      <div className='content'>
        <div className='container'>
          <h2 className='fs-1 text-center mt-2'>Products</h2>
          <div className='row mt-3 col-sm-12'>
            {/* filter */}
            <main className='d-flex col-md-3 col-sm-12 col-xs-12 flex-nowrap mt-4'>
              <div className='flex-shrink-0 p-3' style={{ width: '100%' }}>
                <p className='d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom'>
                  <span className='fs-5 fw-semibold '>Filters</span>
                </p>
                <ul className='list-unstyled ps-0'>
                  <li className='mb-1'>
                    <button
                      className='btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed'
                      data-bs-toggle='collapse'
                      data-bs-target='#home-collapse'
                      aria-expanded='true'
                    >
                      Locations
                    </button>
                    <div className='collapse show' id='home-collapse'>
                      <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                        <li>
                          <div className='ms-4 form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              id='giza'
                            ></input>
                            <label className='form-check-label' htmlFor='giza'>
                              Giza
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='ms-4 form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              id='cairo'
                            ></input>
                            <label className='form-check-label' htmlFor='cairo'>
                              Cairo
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='ms-4 form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              id='alex'
                            ></input>
                            <label className='form-check-label' htmlFor='alex'>
                              Alex
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </main>
            <div className='col-md-9 col-sm-12 py-2'>
              <div className='row my-3 justify-content-between'>
                {products?.map(product => {
                  return (
                    <div className='col-md-4'>
                      <div className='card mb-5'>
                        <img
                          src={product?.thumbImage ?? ""}
                          className=' card-img-top p-1'
                          alt='...'
                        />
                        <div className='card-body'>
                          <h5 className='card-title'>{product?.title}</h5>
                          <p className='card-text'>
                            {product?.description.slice(0, 55).concat('...')}
                          </p>
                          <NavLink
                            to={`/productdetails/${product['_id']}`}
                            className='btn btn-primary text-white'
                          >
                            See More Details
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
