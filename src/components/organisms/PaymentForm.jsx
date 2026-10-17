import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import products from '../../data/products';
import '../../styles/organisms/PaymentForm.css';

const datosTarjeta = {
    numeroTarjeta: '1234567890123456',
    vencimiento: '12/26',
    cvv: '123',
    contrasenaTarjeta: 'clave123',
};

function PaymentForm() {
    const navigate = useNavigate();
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [vencimiento, setVencimiento] = useState('');
    const [cvv, setCvv] = useState('');
    const [contrasenaPago, setContrasenaPago] = useState('');

    const procesarPago = () => {
        const numero = numeroTarjeta.trim();
        const venc = vencimiento.trim();
        const codigo = cvv.trim();
        const clave = contrasenaPago.trim();

        if (!numero || !venc || !codigo || !clave) {
            alert('No puede haber campos vacios.');
            return;
        }  

        if (!/^(\d{4}\s?){4}$/.test(numero)) {
            alert('El número de tarjeta no es válido.');
            return;
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(venc)) {
            alert('El vencimiento no es valido.');
            return;
        }

        if (!/^\d{3}$/.test(codigo)) {
            alert('El código de seguridad no es valido.');
            return;
        }

        const coincide =
            numero.replace(/\s/g, '') === datosTarjeta.numeroTarjeta &&
            venc === datosTarjeta.vencimiento &&
            codigo === datosTarjeta.cvv &&
            clave === datosTarjeta.contrasenaTarjeta;

        if (!coincide) {
            alert('Datos de pago incorrectos. Intenta nuevamente.');
            return;
        }

        finalizarPago();
    };

    const finalizarPago = () => {
        products.forEach((p) => localStorage.removeItem('producto' + p.id));

        const correoSesion = localStorage.getItem('sesionCorreo');
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const actualizados = usuarios.map((u) =>
            u.correo === correoSesion ? { ...u, compras: u.compras + 1 } : u
        );
        localStorage.setItem('usuarios', JSON.stringify(actualizados));

        alert('¡Pago realizado con éxito! Gracias por tu compra.');
        navigate('/tienda');
    };

    return (
        <Div className="payment-form">
            <FormField id="numeroTarjeta" label="Número de la Tarjeta:" placeholder="Ingrese su tarjeta"
                value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} />
            <FormField id="vencimiento" label="MM/YY de la tarjeta:" placeholder="Ingrese el MM/YY"
                value={vencimiento} onChange={(e) => setVencimiento(e.target.value)} />
            <FormField id="cvv" label="CVV de la Tarjeta:" placeholder="Ingrese el CVV"
                value={cvv} onChange={(e) => setCvv(e.target.value)} />
            <FormField id="contrasenaPago" label="Contraseña de la Tarjeta:" type="password" placeholder="Ingrese la contraseña"
                value={contrasenaPago} onChange={(e) => setContrasenaPago(e.target.value)} />

            <Div className="payment-form__botones">
                <Button className="boton-sesion-registro" onClick={() => navigate('/cart')}>Cancelar</Button>
                <Button className="boton-sesion-registro" onClick={procesarPago}>Proceder</Button>
            </Div>
        </Div>
    );
}

export default PaymentForm;