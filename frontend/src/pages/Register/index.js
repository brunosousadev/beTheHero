import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory('');

    function clear() {
        setName('');
        setWhatsapp('');
        setCity('');
        setUf('');
    }

    async function handleRegister(e) {
        e.preventDefault();
        try {
            const date = { name, email, whatsapp, city, uf };
            const response = await api.post('/ongs', date);
            alert(`Seu ID de acesso ${response.data.id}`);
            clear();
            history.push('/');

        } catch (error) {
            alert('Erro no cadastro, tente novamente');
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p> Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG. </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome da ONG"
                    />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        placeholder="WhatsApp"
                    />
                    <div className="input-group">
                        <input
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="Cidade"
                        />
                        <input
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            placeholder="UF"
                            style={{ width: 80 }}
                        />
                    </div>
                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>

    );
}