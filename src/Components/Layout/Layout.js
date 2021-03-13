import React, { Component } from 'react'

import Auxiliary from '../../hocs/Auxiliary'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'

import './Layout.css'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    openSideDrawerHandler = () => {
        this.setState({showSideDrawer: true})
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render () {
        return(
            <Auxiliary>
                <div>
                    <Toolbar clicked={this.openSideDrawerHandler} />
                    <SideDrawer clicked = {this.closeSideDrawerHandler} show={this.state.showSideDrawer}/>
                </div>
                <main className='Content'>{this.props.children}</main>
            </Auxiliary>    
        )}
    }

export default Layout;