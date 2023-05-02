import { Form, Formik } from 'formik';
import { displayActionMessage } from '../../../helpers/utils';
import { useDocumentTitle, useScrollTop } from '../../../hooks';
import PropType from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import StepTracker from '../component/step_tracker_component';
import CreditPayment from './CreditPayment';
import PayPalPayment from './PayPalPayment';
import Total from './Total';
import PageRoutes from '../../../../router/page_routes';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Name should be at least 4 characters.')
    .required('Name is required'),
  cardnumber: Yup.string()
    .min(13, 'Card number should be 13-19 digits long')
    .max(19, 'Card number should only be 13-19 digits long')
    .required('Card number is required.'),
  expiry: Yup.date()
    .required('Credit card expiry is required.'),
  ccv: Yup.string()
    .min(3, 'CCV length should be 3-4 digit')
    .max(4, 'CCV length should only be 3-4 digit')
    .required('CCV is required.'),
  type: Yup.string().required('Please select paymend mode')
});

const Payment = ({ shipping, payment, subtotal }) => {
  useDocumentTitle('Check Out Final Step | Lunetas-cam');
  useScrollTop();

  const initFormikValues = {
    name: payment?.name || '',
    cardnumber: payment?.cardnumber || '',
    expiry: payment?.expiry || '',
    ccv: payment?.ccv || '',
    type: payment?.type || 'paypal'
  };

  const onConfirm = () => {
    displayActionMessage('Feature not ready yet :)', 'info');
  };

  // if (!shipping || !shipping.isDone) {
  //   return <Navigate to={PageRoutes.checkOutFirstStep.path} />;
  // }
  return (
    <div className='content'>
      <div className="checkout">
        <StepTracker current={3} />
        <Formik
          initialValues={initFormikValues}
          validateOnChange
          validationSchema={FormSchema}
          validate={(form) => {
            if (form.type === 'paypal') {
              displayActionMessage('Feature not ready yet :)', 'info');
            }
          }}
          onSubmit={onConfirm}
        >
          {() => (
            <Form className="checkout-step-3">
              <CreditPayment />
              <PayPalPayment />
              <Total
                isInternational={shipping?.isInternational ?? false}
                subtotal={subtotal}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

Payment.propTypes = {
  shipping: PropType.shape({
    isDone: PropType.bool,
    isInternational: PropType.bool
  }).isRequired,
  payment: PropType.shape({
    name: PropType.string,
    cardnumber: PropType.string,
    expiry: PropType.string,
    ccv: PropType.string,
    type: PropType.string
  }).isRequired,
  subtotal: PropType.number.isRequired
};

export default Payment;