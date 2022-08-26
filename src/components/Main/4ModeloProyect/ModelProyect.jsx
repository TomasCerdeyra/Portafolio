import React from 'react'
import './modelProyect.css'

const ModelProyect = ({nombre, estado, img}) => {
    return (
        <article className='articulo-proyecto'>
            <img className='img-proyecto' src={img} alt="" />
            <div className= {`cont-estado-proyecto ${nombre}`}>
                <p className='p-estado-proyecto'>{estado}</p>
            </div>
            <p className='nombre-proyecto'>{nombre}</p>
        </article>
    )
}
/* Me quede en darle una beuna clase a los que se llamen el proceso */

export default ModelProyect