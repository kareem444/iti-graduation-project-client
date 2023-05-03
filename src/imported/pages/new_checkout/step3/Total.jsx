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
      <div className="basket-total text-right mt-5">
        <span className="basket-total-title fs-2 me-3" style={{ color: "#888" }}>Total:</span>
        <span className="basket-total-amount fs-2 me-3" style={{ color: "#222" }}>$50</span>
      </div>
      <br />
      <div className="checkout-shipping-action">
        <div
          onClick={() => onClickBack(values)}
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

Total.propTypes = {
  isInternational: PropType.bool.isRequired,
  subtotal: PropType.number.isRequired
};

export default Total;
