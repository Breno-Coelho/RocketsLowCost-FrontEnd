import React from 'react'
import { useNavigate } from "react-router-dom";

import './LaunchForm.css'

function LaunchForm() {

    const navigate = useNavigate();
    const executaLaunch = () => {

        navigate('/history');
        
    }

    return (
        <>
        <div id="LaunchForm">
            <main>
                <div className="containerLaunch">
                    <form>
                        <div className="formLaunch">
                            <input className="inputLucro" placeholder="Informe o % de Lucro desejado" />
                            <input className="inputData" type="date" placeholder="Selecione a data de lançamento" />
                            <button type="submit" className="submitLaunch" onClick={executaLaunch}>Realizar Lançamento</button>
                        </div>
                    </form>
                </div>

            </main>
        </div></>
    )
}

export default LaunchForm