import React from 'react';
import Div from '../components/atoms/Div';
import RegisterForm from '../components/organisms/RegisterForm';
import '../styles/pages/Register.css';

function Register() {
    return (
        <Div className="register">
            <RegisterForm />
        </Div>
    );
}

export default Register;