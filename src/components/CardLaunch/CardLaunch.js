import React from 'react'
import { useNavigate } from "react-router-dom";

import './CardLaunch.css'

function CardLaunch({name,motor,cost,image, active}) {

    const navigate = useNavigate();
    const validaLaunch = () => {

        navigate('/launch');
        
    }

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={image} alt=''/>
            </div>

            <div className='card-content'>
                <div className='card-title'>
                    {name}
                </div>
                <div className='card-title'>
                    Motor: {motor}
                </div>
                <div className='card-title'>
                    Custo de Lacnçamento: {cost}
                </div> 
                <div className='card-title'>
                    Ativo: {active}
                </div>  
            </div>    
        </div>
    )
}

export default CardLaunch