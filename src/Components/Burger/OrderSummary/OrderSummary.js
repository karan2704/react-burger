import React from 'react'

import Button from '../../UI/Button/Button'

const OrderSummary = props => {
    const summary = Object.keys(props.ingredients)
    .map((igKey) => {
        return <li key={igKey}><span>{igKey}</span>: {props.ingredients[igKey]}</li>
    })
    return (
        <div style={{textAlign: 'left'}}>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients: </p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Proceed to check-out ?</p>
            <Button click={props.continuePurchase} btnType='Success'>Continue</Button>
            <Button click={props.cancelPurchase} btnType='Danger'>Cancel</Button>
        </div>
    )
}

export default OrderSummary;
