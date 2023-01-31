import React from "react";
import { useState, useEffect, useRef} from 'react'

import { motion } from 'framer-motion'

import CardRocket from '../../components/CardRocket/CardRocket.js';
import './HomePage.css';


function HomePage () {


    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])


    const rockets = [ 
        { 
            name:'Foguete de testes',
            mission:'Missão de teste',
            launch:'2023',
            image:'https://i.pinimg.com/564x/41/d3/cf/41d3cf7eeb43b9ea061c0a900f841c62.jpg' 
        }, 
        { 
            name:'Foguete de testes 2',
            mission:'Missão de teste',
            launch:'2023',
            image:'https://i.pinimg.com/564x/41/d3/cf/41d3cf7eeb43b9ea061c0a900f841c62.jpg' 
        }, 
        { 
            name:'Foguete de testes 3',
            mission:'Missão de teste',
            launch:'2023',
            image:'https://i.pinimg.com/564x/41/d3/cf/41d3cf7eeb43b9ea061c0a900f841c62.jpg' 
        }, 
        { 
            name:'Foguete de testes 4',
            mission:'Missão de teste',
            launch:'2023',
            image:'https://i.pinimg.com/564x/41/d3/cf/41d3cf7eeb43b9ea061c0a900f841c62.jpg' 
        }, 
    ]


    return (
        <>
            {/* <h2 className="mensagem">PAGINA DE HOME</h2> */}
            <div className="home">

                <motion.div ref={carousel} className="carousel"  whileTap={{cursor:"grabbing"}}>
                    <motion.div className="inner" drag="x" dragConstraints={{right: 0, left: -width}}>
                        {rockets.map(rocket => (
                            <motion.div className="item" key={rocket.name}>
                                <CardRocket 
                                    name={rocket.name}
                                    mission={rocket.mission}
                                    launch={rocket.launch}
                                    image={rocket.image}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </> 
    )
}

export default HomePage;

