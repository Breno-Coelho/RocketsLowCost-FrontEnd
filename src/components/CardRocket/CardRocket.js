import React from 'react'
import { useNavigate } from "react-router-dom";

import './CardRocket.css'

function CardRocket({name,mission,launch,image}) {

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
                    {mission}
                </div>
                <div className='card-title'>
                    {launch}
                </div>  
            </div>

            <div className='btn'>
                <button onClick={validaLaunch}>
                    <a>
                        Lançar Foguete
                    </a>
                </button>
            </div>  

            
        </div>
    )
}

export default CardRocket