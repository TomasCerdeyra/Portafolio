import React from 'react'
import LOGO from '../../assets/PrimerLogo.png'
import Menu from './Menu'
import './header.css'

const Header = () => {
    return (
        <header>
            <img src={LOGO} alt="Logo Tomas Cerdeyra" className='LogoPropio' />
            <Menu />
        </header>
    );
}

    export default Header