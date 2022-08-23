import React from 'react'
import './Estudios.css'

const Estudios = ({ Estudio, Escula, Estado }) => {
    return (
        <>
            <div className='cont-estudios'>
                <div className='div-estudiosEscuela'>
                    <p className='p-estudios'>{Estudio}</p>
                    <p className='p-escuela'>{Escula}</p>
                </div>
                <p className='p-estado'>{Estado}</p>
            </div>
        </>

    )
}

export default Estudios