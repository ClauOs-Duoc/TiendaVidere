import React from 'react';
import Div from '../components/atoms/Div';
import PaymentForm from '../components/organisms/PaymentForm';
import '../styles/pages/Payment.css';

function Payment() {
    return (
        <Div className="payment">
            <PaymentForm />
        </Div>
    );
}

export default Payment;