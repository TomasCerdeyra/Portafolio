import React from 'react'
import ModelProyect from './4ModeloProyect/ModelProyect'

const Proyectos = () => {
    return (
        <section className='cont-General-Proyectos'>
            <h2>Proyectos:</h2>
            <div className='cont-proyecto'>
            <ModelProyect nombre='Agenda' img={'https://res.cloudinary.com/dycggf3sj/image/upload/v1661441182/Portafolio/Captura_de_pantalla_2022-08-24_151723_liabk1.png'} />
            <ModelProyect nombre='Quizz Harry Potter' img={'https://res.cloudinary.com/dycggf3sj/image/upload/v1661541477/Portafolio/quizzHarry2_vd9cvd.png'} />
            <ModelProyect nombre='E-Commerce' estado='En proceso...' img={'https://res.cloudinary.com/dycggf3sj/image/upload/v1661441182/Portafolio/Captura_de_pantalla_2022-08-24_151723_liabk1.png'} />
            <ModelProyect nombre='Agenda' estado='En proceso...' img={'https://res.cloudinary.com/dycggf3sj/image/upload/v1661441182/Portafolio/Captura_de_pantalla_2022-08-24_151723_liabk1.png'} />
            <ModelProyect nombre='Agenda' estado='En proceso...' img={'https://res.cloudinary.com/dycggf3sj/image/upload/v1661441182/Portafolio/Captura_de_pantalla_2022-08-24_151723_liabk1.png'} />
            <ModelProyect nombre='Quizz Harry Potter' estado='En proceso...' img={'https://res.cloudinary.com/dycggf3sj/image/upload/v1661441182/Portafolio/Captura_de_pantalla_2022-08-24_151723_liabk1.png'} />
            <ModelProyect nombre='Quizz Harry Potter' estado='En proceso...' img={'https://res.cloudinary.com/dycggf3sj/image/upload/v1661441182/Portafolio/Captura_de_pantalla_2022-08-24_151723_liabk1.png'} />
            <ModelProyect nombre='Quizz Harry Potter' estado='En proceso...' img={'https://res.cloudinary.com/dycggf3sj/image/upload/v1661441182/Portafolio/Captura_de_pantalla_2022-08-24_151723_liabk1.png'} />
            </div>
        </section>
    )
}

export default Proyectos