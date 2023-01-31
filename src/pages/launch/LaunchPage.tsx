import React from "react"

import CardLaunch from '../../components/CardLaunch/CardLaunch.js';
import LaunchForm from '../../components/LaunchForm/LaunchForm.js';

import './LaunchPage.css'

function LaunchPage () {
    return (
        <>
            <div className="container">
                <div className="card-launch">
                    <h4>Foguete Selecionado</h4>
                    <CardLaunch 
                    name="TESTE"
                    motor="TESTE"
                    cost="10000"
                    image="https://i.pinimg.com/564x/2a/b2/07/2ab20792f36247bf3435d3c5ee666fd2.jpg"
                    active="SIM"
                    />
                </div>
                
                <div className="launch-form">
                    <h4>Data e Lucro</h4>
                    <LaunchForm />
                </div>
            </div>
        </>
    )
}

export default LaunchPage;

