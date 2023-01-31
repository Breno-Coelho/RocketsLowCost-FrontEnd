import React from "react";

import { useNavigate } from "react-router-dom";

import './RegisterPage.css'

function RegisterPage () {

    const navigate = useNavigate();
   
    async function criaUser(nome, idade){

        const requestData = {nome: nome, idade: idade}

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }),
        };

        await fetch('/users/create', requestOptions);
    }


    const validaCadastro = () => {
        const nome = (document.getElementById('nome') as HTMLInputElement).value;
        const idade = (document.getElementById('idade')as HTMLInputElement).value;

        criaUser(nome, idade);

        navigate('/');
    }

    return (
        <>
        <div id="app">
            <main>
                <div className="containerRegister">
                    <form>
                        <div className="cardRegister">
                            <input id="nome" className="inputName" placeholder="Seu Nome" />
                            <input id="idade" className="inputAge" placeholder="Sua Idade" />
                            <button type="submit" className="submitRegister" onClick={validaCadastro}>Cadastrar</button>
                        </div>
                    </form>
                </div>

            </main>
        </div>
        </>
    )
}

export default RegisterPage;

