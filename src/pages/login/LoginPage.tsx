import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import './LoginPage.css'

function LoginPage () {

    const navigate = useNavigate();

    async function buscaUser(nome){

        const requestData = {nome: nome}

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }),
        };

        return await fetch('/users/find', requestOptions);
    }

    const validaUser = () => {

        const nome = (document.getElementById('nome') as HTMLInputElement).value;

        const user = buscaUser(nome)

        navigate('/check', { state: { user: user }});
    }

    const validaCadastro = () => {
        navigate('/register');
    }

    return (
        <>
        <div id="app">
            <main>
                <div className="containerLogin">
                    <form>
                        <div className="cardLogin">
                            <input id="nome" className="inputName" placeholder="Seu Nome" />
                            <button type="submit" className="submitName" onClick={validaUser}>ENTRAR</button>
                            <a onClick={validaCadastro}>Cadastre-se Aqui</a>
                        </div>
                    </form>
                </div>

            </main>
        </div></>
    )
}

export default LoginPage;

