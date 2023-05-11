import React from 'react';
import {
    useStripe,
    useElements,
    PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from 'react';
import { useEffect } from 'react';
import { RepoGetMyOrders, RepoUpdateMyOrder } from '../../../../repositories/order.repo';
import { RepoCreatePayment } from '../../../../repositories/payment.repo';
import { useDispatch } from 'react-redux';
import { clearAcceptedOrders } from '../../../../redux/order/order.reducer';
import PageRoutes from '../../../../router/page_routes';
import { useNavigate } from 'react-router-dom';

const StripePayment = ({ totalPrice }) => {
    const stripe = useStripe();
    const navigate = useNavigate();
    const elements = useElements();
    const { mutate: createPayment } = RepoCreatePayment()
    const { mutate: updateOrder } = RepoUpdateMyOrder()
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null)

    const { data: myOrders } = RepoGetMyOrders();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        if (myOrders) {
            let k = []
            myOrders.forEach(el => {
                if (el.status == "ACCEPTED") {
                    k.push(el)
                }
            });
            setOrder(k)
        }
    }, [myOrders])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!loading) {
            if (!stripe || !elements) {
                return
            }

            setLoading(true)
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: window.location.origin
                },
                redirect: "if_required"
            })

            if (error) {
                setErrorMessage(error.message)
                return
            } else if (paymentIntent && paymentIntent.status == "succeeded") {
                order.forEach((value) => {
                    createPayment(value["_id"])
                    updateOrder({ ...value, status: "PAID" })
                })
                dispatch(clearAcceptedOrders())
                navigate(PageRoutes.homeRoute.path);
            }
            setLoading(false)
        }
    };

    return (
        <form className="card p-5">
            <PaymentElement />
            <div className="basket-total text-right mt-5">
                <span className="basket-total-title fs-2 me-3" style={{ color: "#888" }}>Total:</span>
                <span className="basket-total-amount fs-2 me-3" style={{ color: "#222" }}>${totalPrice}</span>
            </div>
            {errorMessage != null && <p className='fs-4 text-danger text-center mt-5'>{errorMessage}</p>}
            <button
                className="mt-5 btn col-6 btn__OwnHouver btn-block btn-lg gradient-custom-4 text-white m-auto mt-5"
                type="submit"
                onClick={handleSubmit}
            >
                {loading == true ? (
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
    );
}

export default StripePayment;
