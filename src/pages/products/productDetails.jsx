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
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const ProductDetails = () => {
  const params = useParams();
  const orderId = params.id;

  const [selectedDate, setSelectedDate] = useState(null);

  console.log('====================================');
  console.log(selectedDate);
  console.log('====================================');

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
      date: selectedDate ?? new Date().toISOString(),
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
                  Location: {product?.location}
                </p>
                <div className="p-t-33">
                  <form
                    className="flex-w flex-r-m p-b-10"
                    onSubmit={handleSubmit(handleRegistration)}
                  >
                    <div className="my-3 col-10 d-flex justify-content-between m-auto">
                      <label className="fs-2 col-6 ms-2">Choose Day</label>
                      <DatePicker
                        shouldDisableDate={(date) => {
                          date.setHours(0, 0, 0, 0);
                          return product?.notAvailableDAtes.includes(
                            date.toISOString()
                          );
                        }}
                        format="yyyy-MM-dd"
                        className="col-6"
                        onChangeCalendarDate={(date) => {
                          date.setHours(0, 0, 0, 0);
                          date.setDate(date.getDate() + 1);
                          setSelectedDate(date.toISOString());
                        }}
                      />
                    </div>
                    <div className="row w-100 justify-content-center">
                      {product?.items.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="border p-3 rounded-4  d-flex flex-column col-10 my-3"
                            style={{
                            }}
                          >
                            <span className="product-item-desc fw-bold mb-2 col-12">
                              {item.name}
                            </span>
                            <span className="product-item-desc col-12">
                              {item.description}
                            </span>
                            <span className="product-item-desc fw-bold fs-2 my-3 col-12" >
                              ${item.price}
                            </span>
                            <div className="col-12">
                              <div className="d-flex">
                                <input
                                  type="number"
                                  min={item?.minQuantity}
                                  max={item?.maxQuantity}
                                  className="rounded col-9 d-flex product-page-input-product-details p-2"
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
                                <span className="col-3 text-center">
                                  {
                                    item?.minQuantity == 0 ?
                                      "Optional" :
                                      "Max: " + item?.maxQuantity
                                  }
                                </span>
                              </div>
                              {errors[`${index}`] && (
                                <span className="fs-5 text-danger col-12">
                                  The min allowed is {item?.minQuantity}-
                                  {item?.maxQuantity}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
          <ProductReviewsComponent product={product} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
