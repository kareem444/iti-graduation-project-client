import { CloseOutlined } from "@ant-design/icons";
import React from "react";
// import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { displayMoney } from "../../helpers/utils";
import ImageLoader from "../common/ImageLoader";
import BasketItemControl from "./BasketItemControl";
// import { removeFromBasket } from 'redux/actions/basketActions';

const BasketItem = ({ product }) => {
  // const dispatch = useDispatch();
  // const onRemoveFromBasket = () => dispatch(removeFromBasket(product.id));

  return (
    <div className="d-flex align-items-center border my-4 rounded-3" >
        <div className="basket-item-img-wrapper">
          <ImageLoader
            alt={product.name}
            className="basket-item-img"
            src={product.image}
          />
        </div>
        <div className="basket-item-details">
          <Link
            to={`/product/${product.id}`}
            onClick={() => document.body.classList.remove("is-basket-open")}
          >
            <h4 className="basket-item-name fs-4 fw-bold" style={{ color: "#222" }}>{product.name}</h4>
          </Link>
          <div className="basket-item-price">
            <h4 className="my-0 fs-4" style={{ color: "#888" }}>$50</h4>
          </div>
        </div>
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/delete-sign.png"
          height={20}
          style={{ cursor: "pointer" , marginLeft:"auto" , marginRight:"20px" }}
        />
    </div>
  );
};

export default BasketItem;
