import "../../../Styling/basket.css";
import React, { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import Boundary from "../common/Boundary";
import BasketToggle from "./BasketToggle";
import BasketItem from "./BasketItem";
import { useDispatch, useSelector } from "react-redux";
import {
  RepoCreateOrder,
  RepoGetMyOrders,
} from "../../../repositories/order.repo";
import {
  addItemToAcceptedOrders,
  addItemToCart,
} from "../../../redux/order/order.reducer";
import PageRoutes from "../../../router/page_routes";

const Basket = () => {
  const acceptedOrders = useSelector((state) => state.order.acceptedOrders);
  const cart = [
    ...acceptedOrders,
    ...useSelector((state) => state.order.cart),
  ];
  const basket = cart.map((product) => {
    return {
      price: product.totalPrice ?? product.price ?? 0,
      name: product.product.name,
      image: product.product.thumbImage,
    };
  });

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { mutate } = RepoCreateOrder();

  const onCheckOut = async () => {
    if (cart.length > 0) {
      document.body.classList.remove("is-basket-open");
      await cart.forEach(async (value) => {
        if (!value["_id"]) {
          mutate(value);
        }
      });
      navigate(PageRoutes.checkOutFirstStep.path);
    }
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.totalPrice ?? item.price ?? 0;
    });
    setTotalPrice(price);
  }, [cart]);

  const { data: myOrders } = RepoGetMyOrders();

  const dispatch = useDispatch();

  useEffect(() => {
    if (myOrders) {
      myOrders.forEach((el) => {
        if (el.status == "PENDING") {
          dispatch(addItemToCart(el));
        } else if (el.status == "ACCEPTED") {
          dispatch(addItemToAcceptedOrders(el));
        }
      });
    }
  }, [myOrders]);

  return (
    <Boundary>
      <div className="basket">
        <div className="basket-list">
          <div className="container"></div>
          <div className="basket-header">
            <h3 className="basket-header-title">
              My Basket &nbsp;
              <span>
                ({` ${basket.length} ${basket.length > 1 ? "items" : "item"}`})
              </span>
            </h3>
            <BasketToggle>
              {({ onClickToggle }) => (
                <span
                  className="text-danger"
                  onClick={onClickToggle}
                  role="presentation"
                >
                  <CloseOutlined />
                </span>
              )}
            </BasketToggle>
          </div>
          {basket.length <= 0 && (
            <div className="basket-empty">
              <h5 className="basket-empty-msg">Your basket is empty</h5>
            </div>
          )}
          {basket.map((product, i) => (
            <BasketItem
              key={`${product.id}_${i}`}
              product={product}
              index={i}
              order={cart[i]}
            />
          ))}
        </div>
        <div className="basket-checkout">
          <div className="basket-total">
            <h4 className="basket-total-title">Subtotal Amount:</h4>
            <h2 className="basket-total-amount">${totalPrice}</h2>
          </div>
          <button
            className="basket-checkout-button button"
            disabled={acceptedOrders.length === 0 || pathname === "/checkout"}
            onClick={onCheckOut}
            type="button"
          >
            Check Out
          </button>
        </div>
      </div>
    </Boundary>
  );
};

export default Basket;
