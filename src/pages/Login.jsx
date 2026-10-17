import React from 'react';
import Div from '../components/atoms/Div';
import LoginForm from '../components/organisms/LoginForm';
import '../styles/pages/Login.css';

function Login() {
    return (
        <Div className="login">
            <LoginForm />
        </Div>
    );
}

export default Login;