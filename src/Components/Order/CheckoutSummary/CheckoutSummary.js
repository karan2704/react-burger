import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import './CheckoutSummary.css'

const CheckoutSummary = (props) => {
    return(
        <div>
            <h1>Hope to see you again</h1>
            <div style={{width: '100%', height:'300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Success'>CONFIRM</Button>
            <Button btnType='Danger'>CANCEL</Button>
        </div>
    )
}

export default CheckoutSummary