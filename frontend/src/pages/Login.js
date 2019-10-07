import React, { useState } from 'react';
import AxiosService from '../services/AxiosService';

export default function Login(props) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await AxiosService.post('/session', {
            email
        });
        const { _id } = response.data;
        localStorage.setItem('_id', _id);
        props.history.push('/dashboard')
    }
    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre talentos para sua empresa
        </p>
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input type="email"
                    id="email"
                    placeholder="Seu Email Aqui"
                    onChange={event => setEmail(event.target.value)} />
                <button type="submit" className="btn">Enviar</button>
            </form>
        </>
    )
}