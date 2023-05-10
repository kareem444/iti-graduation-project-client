import { useDocumentTitle, useScrollTop } from '../../../hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BasketItem from '../../../components/basket/BasketItem';
import PageRoutes from '../../../../router/page_routes';
import StepTracker from '../component/step_tracker_component';

const OrderSummary = () => {
    useDocumentTitle('Check Out Step 1 | Lunetas-cam');
    useScrollTop();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClickPrevious = () => navigate(PageRoutes.productsRoute.path);
    const onClickNext = () => navigate(PageRoutes.checkOutSecondStep.path);
    const acceptedOrders = useSelector(state => state.order.acceptedOrders)
    const basket = acceptedOrders.map(product => {
        return {
            price: product.totalPrice ?? product.price ?? 0,
            name: product.product.name,
            image: product.product.thumbImage
        }
    })

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (acceptedOrders.length > 0) {
            let price = 0
            acceptedOrders.forEach(item => {
                price += (item.totalPrice ?? item.price ?? 0)
            })
            setTotalPrice(price)
        } else {
            navigate(PageRoutes.homeRoute.path)
        }
    }, [acceptedOrders])

    return (
        <div className='content'>
            <div className="checkout">
                <StepTracker current={1} />
                <div className="checkout-step-1">
                    <h3 className="text-center mt-5 mb-2 fs-1" style={{ color: "#222" }}>Order Summary</h3>
                    <span className="d-block text-center fs-4" style={{ color: "#888" }}>Review items in your basket.</span>
                    <div className="checkout-items ab-b-l my-5">
                        {basket.map((product, i) => (
                            <BasketItem
                                key={product.id}
                                product={product}
                                index={i}
                                order = {acceptedOrders[i]}
                            />
                        ))}
                    </div>
                    <br />
                    <div className="basket-total text-right">
                        <span className="basket-total-title fs-2 me-3" style={{ color: "#888" }}>Total:</span>
                        <span className="basket-total-amount fs-2 me-3" style={{ color: "#222" }}>${totalPrice}</span>
                    </div>
                    <br />
                    <div className="checkout-shipping-action">
                        <div
                            onClick={onClickPrevious}
                            className='d-flex gap-2 check-out-buttons-controllers align-items-center'>
                            <img src="https://img.icons8.com/ios/50/null/shop--v1.png" height={20} />
                            <span className='fs-3 fw-bold'>Continue Shopping</span>
                        </div>
                        <div
                            onClick={onClickNext}
                            className='d-flex gap-2 check-out-buttons-controllers align-items-center'>
                            <span className='fs-3 fw-bold'>Next Step</span>
                            <img src="https://img.icons8.com/ios-glyphs/30/null/more-than.png" height={15} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
