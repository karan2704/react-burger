import React from 'react'

import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
             return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
             });
            })
        .reduce((arr, ele) => {
            return arr.concat(ele)
        }, [])

    if(transformedIngredients.length === 0){
        transformedIngredients = <h4>Start adding ingredients</h4>
    }
    return(
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger