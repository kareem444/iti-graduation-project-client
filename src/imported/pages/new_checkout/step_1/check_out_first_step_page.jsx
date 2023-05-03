import { ArrowRightOutlined, ShopOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop } from '../../../hooks';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
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

    const basket = [
        {
            price: 50,
            quantity: 2,
            name: "kareem",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            price: 50,
            quantity: 2,
            name: "kareem",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
    ]

    const subtotal = 50
    return (
        <div className='content'>
            <div className="checkout">
                <StepTracker current={1} />
                <div className="checkout-step-1">
                    <h3 className="text-center mt-5 mb-2 fs-1" style={{ color: "#222" }}>Order Summary</h3>
                    <span className="d-block text-center fs-4" style={{ color: "#888" }}>Review items in your basket.</span>
                    <div className="checkout-items ab-b-l my-5">
                        {basket.map((product) => (
                            <BasketItem
                                basket={basket}
                                dispatch={dispatch}
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                    <br />
                    <div className="basket-total text-right">
                        <span className="basket-total-title fs-2 me-3" style={{ color: "#888" }}>Total:</span>
                        <span className="basket-total-amount fs-2 me-3" style={{ color: "#222" }}>$50</span>
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
