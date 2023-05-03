import { useParams } from "react-router-dom";
import { RepGetOneProduct } from "../../repositories/product.repo";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RepoCreateOrder } from "../../repositories/order.repo";
import ProductReviewsComponent from "./components/product_reviews.component";
import "./product_details.css"
const ProductDetails = () => {
  const params = useParams();
  const orderId = params.id;

  const { data: product } = RepGetOneProduct(orderId);
  
  return (
    <>
      {/* <div className="card mx-auto my-5 col-lg-9 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product?.thumbImage}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div className="card-body px-5">
              <h5 className="card-title">
                {product?.title}
              </h5>
              <p className="card-text">
                Product Description: {product?.description}
              </p>
              <p className="card-text">
                Location: {product?.location}
              </p>
              <p className="card-text">
                <ul class="list-group list-group-light">
                  {product?.items.map((item, index) => {
                    return (
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <p className="d-flex justify-content-between col-lg-5 mb-0">
                          {item.name}
                          <span>${item.price} / item</span>
                        </p>
                        <input
                          type="number"
                          name={`${item.name}Quantity`}
                          placeholder={`${item.name} Quantity`}
                          className="col-lg-5 px-2 py-1 "
                          min={0}
                        />
                      </li>
                    );
                  })}
                </ul>
              </p>
              <button
                className="btn btn-dark"
                type="submit"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div> */}
{/* Product Detail */}

<section className="sec-product-detail bg0 p-t-65 p-b-60">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-lg-6 p-b-30">
        <div className="p-l-25 p-r-30 p-lr-0-lg">
          <div className="wrap-slick3 flex-sb flex-w">
            <div className="wrap-slick3-dots" />
            <div className="wrap-slick3-arrows flex-sb-m flex-w" />
            <div className="slick3 gallery-lb">
              <div className="item-slick3" data-thumb="images/product-detail-01.jpg">
                <div className="wrap-pic-w pos-relative">
                  <img src={product?.thumbImage} alt="IMG-PRODUCT" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7 col-lg-6 p-b-30">
        <div className="p-r-50 p-t-5 p-lr-0-lg">
          <h4 className="mtext-105 cl2 js-name-detail p-b-14">
          {product?.title} 
          </h4>
          <p className="stext-102 cl3 p-t-23">
          {product?.description}
          </p>
          <p className="stext-102 cl3 p-t-23">
          Location: {product?.location}          </p>
          <div className="p-t-33">
          <div className="flex-w flex-r-m p-b-10">
          {product?.items.map((item, index) => {
                    return (
                      <>
              <div className="size-203 flex-c-m respon6">
              <span className="product-item-desc me-2" >{item.name}  ${item.price} / item</span>
              </div>
              <div className="size-204 respon6-next">
                <div className="rs1-select2 bor8 bg0 mb-3  ">
                <input type="number" min={0} className=' border w-100 product-page-input-product-details' placeholder='Quantity'/>
                </div>
              </div>
            </>
                                );

            })}
            </div>
            <div className="flex-w flex-r-m p-b-10">
              <div className="size-204 flex-w flex-m respon6-next">

                <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                  Add to cart
                </button>
              </div>
            </div>	
          </div>
        </div>
      </div>
    </div>
    <div className="bor10 m-t-50 p-t-43 p-b-40">
      {/* Tab01 */}
      <div className="tab01">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item p-b-10">
            <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content p-t-43">
          <div className="tab-pane fade show active" id="reviews" role="tabpanel">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                <div className="p-b-30 m-lr-15-sm">
                  {/* Review */}
                  <div className="flex-w flex-t p-b-68">
                    <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                      <img src={product?.thumbImage}alt="AVATAR" />
                    </div>
                    <div className="size-207">
                      <div className="flex-w flex-sb-m p-b-17">
                        <span className="mtext-107 cl2 p-r-20">
                          Ariana Grande
                        </span>
                        <span className="fs-18 cl11">
                        <i class="bi bi-star-fill item-rating pointer zmdi zmdi-star-outline"></i>
                        <i class="bi bi-star-fill item-rating pointer zmdi zmdi-star-outline"></i>
                        <i class="bi bi-star-fill item-rating pointer zmdi zmdi-star-outline"></i>
                        <i class="bi bi-star-fill item-rating pointer zmdi zmdi-star-outline"></i>
                        <i class="bi bi-star-fill item-rating pointer zmdi zmdi-star-outline"></i>
                        </span>
                      </div>
                      <p className="stext-102 cl6">
                        Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                      </p>
                    </div>
                  </div>
                  {/* Add review */}
                  <form className="w-full">
                    <h5 className="mtext-108 cl2 p-b-7">
                      Add a review
                    </h5>
                    <p className="stext-102 cl6">
                      Your email address will not be published. Required fields are marked *
                    </p>
                    <div className="flex-w flex-m p-t-50 p-b-23">
                      <span className="stext-102 cl3 m-r-16">
                        Your Rating
                      </span>
                      <span className="wrap-rating fs-18 cl11 pointer ">
                        <i class="bi bi-star item-rating pointer zmdi zmdi-star-outline"></i>
                        <i class="bi bi-star item-rating pointer zmdi zmdi-star-outline"></i>
                        <i class="bi bi-star item-rating pointer zmdi zmdi-star-outline"></i>
                        <i class="bi bi-star item-rating pointer zmdi zmdi-star-outline"></i>
                        <i class="bi bi-star item-rating pointer zmdi zmdi-star-outline"></i>
                        <input className="dis-none" type="number" name="rating" />
                      </span>
                    </div>
                    <div className="row p-b-25">
                      <div className="col-12 p-b-5">
                        <label className="stext-102 cl3" htmlFor="review">Your review</label>
                        <textarea className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review" defaultValue={""} />
                      </div>
                      <div className="col-sm-6 p-b-5">
                        <label className="stext-102 cl3" htmlFor="name">Name</label>
                        <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name" />
                      </div>
                      <div className="col-sm-6 p-b-5">
                        <label className="stext-102 cl3" htmlFor="email">Email</label>
                        <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email" />
                      </div>
                    </div>
                    <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        {/* <ProductReviewsComponent /> */}
    </>
  );
};

export default ProductDetails;
