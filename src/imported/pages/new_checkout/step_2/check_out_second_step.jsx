import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Boundary from '../../../components/common/Boundary';
import { Form, Formik } from 'formik';
import { useDocumentTitle, useScrollTop } from '../../../hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import StepTracker from '../component/step_tracker_component';
import ShippingForm from './ShippingForm';
import PageRoutes from '../../../../router/page_routes';

const FormSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Full name is required.')
    .min(2, 'Full name must be at least 2 characters long.')
    .max(60, 'Full name must only be less than 60 characters.'),
  email: Yup.string()
    .email('Email is not valid.')
    .required('Email is required.'),
  address: Yup.string()
    .required('Shipping address is required.')
});

const ShippingDetails = () => {
  useDocumentTitle('Check Out Step 2 | Lunetas-cam');
  useScrollTop();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = {
    fullname: 'John Doe',
    email: 'karem9621@gmail.com',
    address: 'Brgy. 1, San Jose, Camarines Sur',
    mobile: {
      country: 'Philippines',
      countryCode: 'PH',
      dialCode: '+63',
      value: '9171234567'
    },
  }

  const onSubmitForm = (form) => {
    navigate(PageRoutes.checkOutThirdStep.path);
  };

  const acceptedOrders = useSelector(state => state.order.acceptedOrders)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (acceptedOrders.length > 0 && totalPrice < 1) {
      acceptedOrders.forEach(item => {
        setTotalPrice(totalPrice + (item.totalPrice ?? item.price ?? 0))
      })
    } else {
      navigate(PageRoutes.homeRoute.path)
    }
  }, [acceptedOrders])
  return (
    <div className='content'>
      <Boundary>
        <div className="checkout">
          <StepTracker current={2} />
          <div className="checkout-step-2">
            <h3 className="text-center mt-5 my-3 fs-1" style={{ color: "#222" }}>Delivery Details</h3>
            <Formik
              validateOnChange
              validationSchema={FormSchema}
            >
              {() => (
                <Form>
                  <ShippingForm />
                  <br />
                  <div className="basket-total text-right">
                    <span className="basket-total-title fs-2 me-3" style={{ color: "#888" }}>Total:</span>
                    <span className="basket-total-amount fs-2 me-3" style={{ color: "#222" }}>${totalPrice}</span>
                  </div>
                  <br />
                  <div className="checkout-shipping-action">
                    <div
                      onClick={() => navigate(PageRoutes.checkOutFirstStep.path)}
                      className='d-flex gap-2 check-out-buttons-controllers align-items-center'>
                      <img src="https://img.icons8.com/metro/26/null/back.png" height={15} />
                      <span className='fs-3 fw-bold'>Go Back</span>
                    </div>
                    <div
                      onClick={onSubmitForm}
                      className='d-flex gap-2 check-out-buttons-controllers align-items-center'>
                      <span className='fs-3 fw-bold'>Next Step</span>
                      <img src="https://img.icons8.com/metro/26/null/forward.png" height={15} />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Boundary>
    </div>
  );
};

export default ShippingDetails;
