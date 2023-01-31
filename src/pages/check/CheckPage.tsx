import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import './CheckPage.css'

function CheckPage () {


    const location = useLocation();
    const dados = location.state
    console.log(dados);

    const navigate = useNavigate();
    const confirmAge = () => {
        navigate('/home');
    }

    return (
        <><h1>PAGINA DE CHECAGEM</h1><div id="app">
            <main>
                <div className="container">
                    <form>
                        <div className="cardCheck">
                            <p>Sua idade é: </p>
                            <p className="age">{dados.age}</p>
                            <button type="submit" className="submitName" onClick={confirmAge}>Confirmar</button>
                            <a href="/"> Cancelar</a>
                        </div>
                    </form>
                </div>

            </main>
        </div></>
    )
}

export default CheckPage;

