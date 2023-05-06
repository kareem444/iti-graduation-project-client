import { useParams } from "react-router-dom";
import { RepGetOneProduct } from "../../repositories/product.repo";
import "./product_details.css";
import StarRatings from "react-star-ratings";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/order/order.reducer";
import { useEffect, useState } from "react";
import useAuth from "../../custom_hooks/use_auth";
import { RepoCreateRate } from "../../repositories/rate.repo";
import { RepoCreateComment } from "../../repositories/comment.repo";
import ProductReviewsComponent from "./components/product_reviews.component";

const ProductDetails = () => {
  const params = useParams();
  const orderId = params.id;

  const { data: product } = RepGetOneProduct(orderId);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    let totalPrice = 0;

    const selectedItems = Object.entries(data)
      .map(([key, value], index) => {
        if (parseInt(value) > 0) {
          totalPrice += parseInt(value) * product.items[parseInt(key)].price;
          return {
            name: product.items[parseInt(key)].name,
            price: product.items[parseInt(key)].price,
            quantity: parseInt(value),
          };
        }
        return null;
      })
      .filter((item) => item !== null);

    const createCartItem = {
      status: "PENDING",
      sellerId: product.ownerId,
      totalPrice: totalPrice,
      product: {
        id: product["_id"],
        name: product.title,
        thumbImage: product.thumbImage,
        items: selectedItems,
      },
    };

    dispatch(addItemToCart(createCartItem));
  };

  return (
    <>
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-5 p-b-30 p-r-30 ">
              <div className="wrap-pic-w pos-relative border rounded-5">
                <img
                  src={product?.thumbImage}
                  alt="IMG-PRODUCT"
                  className="rounded-5"
                />
              </div>
            </div>
            <div className="col-md-7 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {product?.title}
                </h4>
                <div>
                  <StarRatings
                    rating={
                      product?.rates != null
                        ? product.rates.totalRates / product.rates.numberOfRates
                        : 0
                    }
                    starDimension="20px"
                    starRatedColor="#faaf00"
                    starSpacing="1px"
                  />
                </div>
                <p className="stext-102 cl3 p-t-23">{product?.description}</p>
                <p className="stext-102 cl3 p-t-23">
                  Location: {product?.location}{" "}
                </p>
                <div className="p-t-33">
                  <form
                    className="flex-w flex-r-m p-b-10"
                    onSubmit={handleSubmit(handleRegistration)}
                  >
                    {product?.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="w-100 d-flex justify-content-between my-2"
                        >
                          <span className="product-item-desc me-2">
                            {item.name}
                          </span>
                          <span className="product-item-desc me-2">
                            ${item.price}
                          </span>
                          <div className="col-sm-3">
                            <input
                              type="number"
                              min={item?.minQuantity}
                              max={item?.maxQuantity}
                              className="rounded w-100 product-page-input-product-details p-2"
                              placeholder="Quantity"
                              defaultValue={item?.minQuantity}
                              {...register(`${index}`, {
                                required: item?.minQuantity > 0,
                                validate: (value) => {
                                  if (
                                    value < item?.minQuantity ||
                                    value > item?.maxQuantity
                                  ) {
                                    return false;
                                  } else {
                                    return true;
                                  }
                                },
                              })}
                            />
                            {errors[`${index}`] && (
                              <span className="fs-5 text-danger">
                                The min allowed is {item?.minQuantity}-
                                {item?.maxQuantity}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    <div className="size-204 flex-w flex-m respon6-next">
                      <button
                        type="submit"
                        className="flex-c-m stext-101 cl0 size-101 bg1 m-auto  mt-5 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                      >
                        Add to cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ProductReviewsComponent product={product}/>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
