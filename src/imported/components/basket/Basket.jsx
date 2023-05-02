/* eslint-disable max-len */
// import { BasketItem, BasketToggle } from 'components/basket';
// import { Boundary, Modal } from 'components/common';
import { calculateTotal, displayMoney } from '../../helpers/utils';
// import { useDidMount, useModal } from 'hooks';
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useL, useLocation } from 'react-router-dom';
import Boundary from '../common/Boundary';
import BasketToggle from './BasketToggle';
import Modal from '../common/Modal';
import useModal from '../../hooks/useModal';
import BasketItem from './BasketItem';
import PageRoutes from '../../../router/page_routes';
// import { clearBasket } from 'redux/actions/basketActions';

const Basket = () => {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  // const { basket, user } = useSelector((state) => ({
  //   basket: state.basket,
  //   user: state.auth
  // }));
  const user = {}
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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const dispatch = useDispatch();
  // const didMount = useDidMount();

  // useEffect(() => {
  //   if (didMount && firebase.auth.currentUser && basket.length !== 0) {
  //     firebase.saveBasketItems(basket, firebase.auth.currentUser.uid)
  //       .then(() => {
  //         console.log('Item saved to basket');
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  // }, [basket.length]);

  const onCheckOut = () => {
    // if ((basket.length !== 0 && user)) {
    if (true) {
      document.body.classList.remove('is-basket-open');
      navigate(PageRoutes.checkOutFirstStep.path);
    } else {
      // onOpenModal();
    }
  };

  const onSignInClick = () => {
    // onCloseModal();
    document.body.classList.remove('basket-open');
    // navigate(CHECKOUT_STEP_1);
  };

  const onClearBasket = () => {
    // if (basket.length !== 0) {
    //   dispatch(clearBasket());
    // }
  };

  return (
    <Boundary>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={onCloseModal}
      >
        <p className="text-center">You must sign in to continue checking out</p>
        <br />
        <div className="d-flex-center">
          <button
            className="button button-border button-border-gray button-small"
            onClick={onCloseModal}
            type="button"
          >
            Continue shopping
          </button>
          &nbsp;
          <button
            className="button button-small"
            onClick={onSignInClick}
            type="button"
          >
            Sign in to checkout
          </button>
        </div>
      </Modal>
      <div className="basket">
        <div className="basket-list">
          <div className="basket-header">
            <h3 className="basket-header-title">
              My Basket &nbsp;
              <span>
                (
                {` ${basket.length} ${basket.length > 1 ? 'items' : 'item'}`}
                )
              </span>
            </h3>
            <BasketToggle>
              {({ onClickToggle }) => (
                <span
                  className="basket-toggle button button-border button-border-gray button-small"
                  onClick={onClickToggle}
                  role="presentation"
                >
                  Close
                </span>
              )}
            </BasketToggle>
            <button
              className="basket-clear button button-border button-border-gray button-small"
              disabled={basket.length === 0}
              onClick={onClearBasket}
              type="button"
            >
              <span>Clear Basket</span>
            </button>
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
            />
          ))}
        </div>
        <div className="basket-checkout">
          <div className="basket-total">
            <p className="basket-total-title">Subtotal Amout:</p>
            <h2 className="basket-total-amount">
              {displayMoney(calculateTotal(basket.map((product) => product.price * product.quantity)))}
            </h2>
          </div>
          <button
            className="basket-checkout-button button"
            disabled={basket.length === 0 || pathname === '/checkout'}
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
