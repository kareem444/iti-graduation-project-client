import { useDocumentTitle, useScrollTop } from "../../../hooks";
import React, { useEffect } from "react";
import StepTracker from "../component/step_tracker_component";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements
} from "@stripe/react-stripe-js";
import { RepoIntentStrip } from "../../../../repositories/payment.repo";
import { useState } from "react";
import StripePayment from "./stripe_payment";
import { useNavigate } from "react-router-dom";
import PageRoutes from "../../../../router/page_routes";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(
  "pk_test_51N52GABvLrAOD6UM0C8m54rfnqtBTAMKcm0lo1GFkfAdp7FhGkHbYSSL8urHOLUlor1wj7ey8qlFendH35YlZpoh00R8h55oYO"
);

const Payment = ({ subtotal }) => {
  useDocumentTitle("Check Out Final Step | Dreamy Weddings");
  useScrollTop();

  const navigate = useNavigate();

  const [clientSecrete, setClientSecrete] = useState(null);

  const { mutate, data } = RepoIntentStrip();

  const acceptedOrders = useSelector(state => state.order.acceptedOrders)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (acceptedOrders.length > 0 && totalPrice < 1) {
      acceptedOrders.forEach(item => {
        setTotalPrice(totalPrice + (item.totalPrice ?? item.price))
      })
    } else {
      navigate(PageRoutes.homeRoute.path)
    }
  }, [acceptedOrders])

  useEffect(() => {
    mutate({ amount: subtotal ?? 4 });
  }, []);

  useEffect(() => {
    if (data) {
      setClientSecrete(data);
    }
  }, [data]);

  const options = {
    clientSecret: clientSecrete,
  };

  return (
    <div className="h-100">
      <div className="checkout">
        <StepTracker current={3} />
        <div className="checkout-step-3">
          <h3 className="text-center mt-5 my-5 fs-1" style={{ color: "#222" }}>
            Payments
          </h3>
          {clientSecrete != null ? (
            <Elements stripe={stripePromise} options={options}>
              <StripePayment totalPrice={totalPrice} />
            </Elements>
          ) : (
            <div></div>
          )}
          {/* <Total subtotal={subtotal} /> */}
          <div
            onClick={() => navigate(PageRoutes.checkOutSecondStep.path)}
            className='d-flex gap-2 check-out-buttons-controllers align-items-center mt-5 col-2'>
            <img src="https://img.icons8.com/metro/26/null/back.png" height={15} />
            <span className='fs-3 fw-bold'>Go Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
