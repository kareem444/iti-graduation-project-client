import React from 'react'
// import '../../Styling/sidebars.css'
import Footersection from '../../components/footer_component/footer_component'
import { RepoGetAllProducts } from '../../repositories/product.repo'
import { NavLink } from 'react-router-dom'
import "./product_page.css"
import product1 from "./components/images/product-01.jpg"
const Products = () => {

  // const { data: products, isLoading } = RepoGetAllProducts()

  return (
    <>

  <div className="container mt-5">
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
          All Products
        </button>
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
          Cairo
        </button>
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
          Giza
        </button>
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
          Alex
        </button>
      </div>
      <div className=" m-tb-10 d-flex col-12 col-md-4 ">
        <input type="text" className='border w-100' placeholder='Search'/>
      <button type="button" class="btn btn-primary py-2 product_page_button_search px-4 ">
      <i class="bi bi-search"></i>
            </button>
      </div>
      <div className="dis-none panel-search w-full p-t-10 p-b-15">
        <div className="bor8 dis-flex p-l-15">
          <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
            <i className="zmdi zmdi-search" />
          </button>
          <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
        </div>	
      </div>
    </div>
    <div className="row isotope-grid">
      <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={product1} alt="IMG-PRODUCT" />
            <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
              More Details
            </a>
          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                Esprit Ruffle Shirt
              </a>
              <span className="stext-105 cl3">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <span>(5)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
        
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={product1} alt="IMG-PRODUCT" />
            <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
              More Details
            </a>
          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                Herschel supply
              </a>
              <span className="stext-105 cl3">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              </span>
            </div>

          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
        
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={product1} alt="IMG-PRODUCT" />
            <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
              More Details
            </a>
          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                Only Check Trouser
              </a>
              <span className="stext-105 cl3">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              </span>
            </div>

          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={product1} alt="IMG-PRODUCT" />
            <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
              More Details
            </a>
          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                Classic Trench Coat
              </a>
              <span className="stext-105 cl3">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Products
