import React from 'react'

import BurgerLogo from '../../Assets/images/burger-logo.png'
import './Logo.css'

const Logo = props => {
    return (
        <div className='Logo' style={{height: props.height}}>
            <img src={BurgerLogo} alt='Burger'/>
        </div>
    )
}

export default Logo