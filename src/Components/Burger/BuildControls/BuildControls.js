import React from 'react'

import BuildControl from './BuildControl/BuildControl'

import './BuildControls.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
]

const BuildControls = props => {

    return(
        <div className='BuildControls'>
            <p>To Pay: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl 
                        key = {ctrl.label} 
                        label = {ctrl.label} 
                        added = {() => props.ingredientAdded(ctrl.type)} 
                        removed = {() => props.ingredientRemoved(ctrl.type)} 
                        disabled = {props.disabled[ctrl.type]}/>       
            })}
            <button className='OrderButton' disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
        </div>
    )
}

export default BuildControls;