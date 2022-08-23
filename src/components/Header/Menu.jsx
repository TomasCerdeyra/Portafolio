import React from 'react'
import './header.css'

const Menu = () => {
    return (
        <>
            <span class="material-symbols-outlined logoMenu">menu</span>
            <nav className='Menu-nav'>
                <ul className='Menu-ul'>
                    <li>Inicio</li>
                    <li>Sobre Mi</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav> 
        </>
    )
}

export default Menu