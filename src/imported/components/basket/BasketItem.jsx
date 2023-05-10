import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import ImageLoader from "../common/ImageLoader";
import { removeItemFromCart } from "../../../redux/order/order.reducer";
import { RepoDeleteOrder } from "../../../repositories/order.repo";

const BasketItem = ({ product, index, order }) => {
  const dispatch = useDispatch();

  const { mutate } = RepoDeleteOrder()
console.log('====================================')
console.log(order)
console.log('====================================')
  return (
    <div className="d-flex align-items-center border my-4 rounded-3" >
      <div className="basket-item-img-wrapper">
        <ImageLoader
          alt={product.name}
          className="basket-item-img"
          src={product.image}
        />
      </div>
      <div className="ms-3">
        <Link
          to={`/productdetails/${order?.product?.id}`}
          onClick={() => document.body.classList.remove("is-basket-open")}
        >
          <h4 className="my-3 fs-4 fw-bold" style={{ color: "#222" }}>{product.name}</h4>
        </Link>
        <div className="basket-item-price">
          <h4 className="my-0 fs-4" style={{ color: "#888" }}>${product.price}</h4>
        </div>
      </div>
      <div className="ms-auto">
        <span className="me-5" style={{
          color: order?.status == "ACCEPTED" ?
            "green" : "#222"
        }}>{order?.status}</span>
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/delete-sign.png"
          height={20}
          style={{ cursor: "pointer", marginRight: "20px" }}
          onClick={async () => {
            if (order["_id"]) {
              mutate(order["_id"])
            }
            dispatch(removeItemFromCart(index))
          }}
        />
      </div>
    </div>
  );
};

export default BasketItem;
