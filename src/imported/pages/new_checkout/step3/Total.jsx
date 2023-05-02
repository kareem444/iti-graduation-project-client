import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { useFormikContext } from 'formik';
import { displayMoney } from '../../../helpers/utils';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageRoutes from '../../../../router/page_routes';
// import { setPaymentDetails } from 'redux/actions/checkoutActions';

const Total = ({ isInternational, subtotal }) => {
  const { values, submitForm } = useFormikContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickBack = () => {
    // destructure to only select left fields omitting cardnumber and ccv
    const { cardnumber, ccv, ...rest } = values;

    // dispatch(setPaymentDetails({ ...rest })); 
    navigate(PageRoutes.checkOutSecondStep.path);
  };

  return (
    <>
      <div className="basket-total text-right">
        <p className="basket-total-title">Total:</p>
        <h2 className="basket-total-amount">
          {displayMoney(subtotal + (isInternational ? 2500 : 0))}
        </h2>
      </div>
      <br />
      <div className="checkout-shipping-action">
        <button
          className="button button-muted"
          onClick={() => onClickBack(values)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp;
          Go Back
        </button>
        <button
          className="button"
          disabled={false}
          onClick={submitForm}
          type="button"
        >
          <CheckOutlined />
          &nbsp;
          Confirm
        </button>
      </div>
    </>
  );
};

Total.propTypes = {
  isInternational: PropType.bool.isRequired,
  subtotal: PropType.number.isRequired
};

export default Total;
