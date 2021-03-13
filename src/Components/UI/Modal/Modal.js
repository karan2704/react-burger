import React from 'react'

import Auxiliary from '../../../hocs/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

import './Modal.css'

const Modal = props => {
    return(
        <Auxiliary>
            <Backdrop show={props.show} click={props.modalClose} />
            <div className='Modal'
                style = {{
                transform: props.show? 'translateY(0)' : 'translateY(-100vh)' ,
                opacity: props.show? '1' : '0'
            }}>
            {props.children}
            </div>
        </Auxiliary>
        
    )
}

export default Modal;