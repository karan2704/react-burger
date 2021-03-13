import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.css'

const Toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <div className='Menu' onClick={props.clicked}><MenuIcon /></div>
            <Logo className='LogoAdjust' height='80%' />
            <nav className='DesktopOnly'>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar