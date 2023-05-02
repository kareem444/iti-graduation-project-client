import { useParams } from "react-router-dom";
import { RepGetOneProduct } from "../../repositories/product.repo";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RepoCreateOrder } from "../../repositories/order.repo";

const ProductDetails = () => {
  const params = useParams();
  const orderId = params.id;

  const { data: product } = RepGetOneProduct(orderId);
  
  return (
    <>
      <div className="card mx-auto my-5 col-lg-9 ">
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
                          {item.name}{" "}
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
      </div>
    </>
  );
};

export default ProductDetails;
