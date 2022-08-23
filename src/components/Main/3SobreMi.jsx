import React from 'react'
import Estudios from './4EstudiosSobreMi/Estudios'

const SobreMi = () => {
    return (
        <div className='cont-sobreMi'>
            <section>
                <h2>Sobre mi:</h2>
                <div className='cont-mensaje'>
                    <p className='mensaje-sobreMi'>
                        Hola!! soy tomas, desarrollador Front End.
                        Soy de argentina y hace un año y medio me meti de lleno en la programacion. Actualmente haciendo la carrera online Desarrollador full Stack en CoderHouse y
                        estudiando la carrera Analista en Sistemas en una universidad UNSADA por terminar mi primer año.
                        Me apasiona la tecnologia, la musica, el futbol y me gusta trabaja en equipo.
                    </p>

                </div>
            </section>
            <section className='section-estudios'>
                <h3 className='h3-estudios'>Estudios:</h3>
                <Estudios Estudio='Desarrollo Web' Escula='CoderHouse' Estado='Certificado' />
                <Estudios Estudio='JavaScript' Escula='CoderHouse' Estado='Certificado' />
                <Estudios Estudio='React Js' Escula='CoderHouse' Estado='En Proceso...' />
                <Estudios Estudio='Programacion Backend' Escula='CoderHouse' Estado='En Proceso...' />
                <Estudios Estudio='Analista en Sistemas' Escula='UNS' Estado='En Proceso...' />
            </section>
        </div>
    )
}

export default SobreMi