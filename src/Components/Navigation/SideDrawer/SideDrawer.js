import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hocs/Auxiliary'

import './SideDrawer.css'

const SideDrawer = props => {

    let attachedClasses = ['SideDrawer', 'Close']
    if(props.show){
        attachedClasses = ['SideDrawer', 'Open']
    }
    return(
        <Aux>
        <Backdrop click={props.clicked} show={props.show}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height='11%'/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    )
}

export default SideDrawer