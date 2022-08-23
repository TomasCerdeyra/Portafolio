import React from 'react'
import './main.css'
import Typewriter from 'typewriter-effect';

const Titilo = () => {
    return (
        <div className='cont-titulo'>
            <h1>
                <Typewriter onInit={(typewriter) => {
                    typewriter.typeString("Tomas Cerdeyra").start();
                }} />
            </h1>
        </div>
    )
}

export default Titilo