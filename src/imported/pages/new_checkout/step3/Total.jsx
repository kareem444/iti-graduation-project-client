import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageRoutes from '../../../../router/page_routes';
import { useState } from 'react';
import { useEffect } from 'react';
import { clearCart } from '../../../../redux/order/order.reducer';
import { RepoGetMyOrders, RepoUpdateOrder } from '../../../../repositories/order.repo';
import { RepoCreatePayment } from '../../../../repositories/payment.repo';

const Total = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.order.cart)
  const [totalPrice, setTotalPrice] = useState(0)
  const { data: myOrders } = RepoGetMyOrders();
  const { mutate: createPayment } = RepoCreatePayment()
  const { mutate: updateOrder } = RepoUpdateOrder()
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (myOrders) {
      let k = []
      myOrders.forEach(el => {
        if (el.status == "PENDING") {
          k.push(el)
        }
      });
      setOrder(k)
    }
  }, [myOrders])

  useEffect(() => {
    if (cart.length > 0) {
      let price = 0
      cart.forEach(item => {
        price += item.totalPrice
      })
      setTotalPrice(price)
    } else {
      navigate(PageRoutes.homeRoute.path)
    }
  }, [cart])

  const onClickBack = () => {
    navigate(PageRoutes.checkOutSecondStep.path);
  };

  const submitForm = () => {
    order.forEach((value) => {
      createPayment(value["_id"])
      updateOrder({ ...value, status: "ACCEPTED" })
    })
    dispatch(clearCart())
    navigate(PageRoutes.homeRoute.path);
  }

  return (
    <>
      <br />
      <div className="checkout-shipping-action">
        <div
          onClick={() => onClickBack()}
          className='d-flex gap-2 check-out-buttons-controllers align-items-center'>
          <img src="https://img.icons8.com/metro/26/null/back.png" height={15} />
          <span className='fs-3 fw-bold'>Go Back</span>
        </div>
        <div
          onClick={submitForm}
          className='d-flex gap-2 check-out-buttons-controllers align-items-center'>
          <span className='fs-3 fw-bold'>Next Step</span>
          <img src="https://img.icons8.com/metro/26/null/forward.png" height={15} />
        </div>
      </div>
    </>
  );
};

export default Total;
