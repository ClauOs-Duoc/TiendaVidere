import React from 'react';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import { Input } from '../atoms/Input';
import '../../styles/molecules/FormField.css';

function FormField({ id, label, type = 'text', placeholder, value, onChange }) {
    return (
        <Div className="form-field">
            <Text variant="label" htmlFor={id} className="form-field__label">{label}</Text>
            <Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </Div>
    );
}

export default FormField;