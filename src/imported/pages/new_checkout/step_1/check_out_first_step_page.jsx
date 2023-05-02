import { ArrowRightOutlined, ShopOutlined } from '@ant-design/icons';
import { displayMoney } from '../../../helpers/utils';
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
    const onClickPrevious = () => navigate('/');
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
                    <h3 className="text-center">Order Summary</h3>
                    <span className="d-block text-center">Review items in your basket.</span>
                    <br />
                    <div className="checkout-items">
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
                        <p className="basket-total-title">Subtotal:</p>
                        <h2 className="basket-total-amount">{displayMoney(subtotal)}</h2>
                    </div>
                    <br />
                    <div className="checkout-shipping-action">
                        <button
                            className="button button-muted"
                            onClick={onClickPrevious}
                            type="button"
                        >
                            <ShopOutlined />
                            &nbsp;
                            Continue Shopping
                        </button>
                        <button
                            className="button"
                            onClick={onClickNext}
                            type="submit"
                        >
                            Next Step
                            &nbsp;
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

OrderSummary.propTypes = {
    basket: PropType.arrayOf(PropType.object).isRequired,
    subtotal: PropType.number.isRequired
};

export default OrderSummary;
