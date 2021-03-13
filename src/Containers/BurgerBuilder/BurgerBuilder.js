import React, {Component} from 'react';

import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Burger from '../../Components/Burger/Burger';
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

import Auxiliary from '../../hocs/Auxiliary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,   
     },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, ele) =>{
                return sum + ele
            }, 0)
            this.setState({purchasable: sum>0})
    }

    addIngredientHandler = type =>{
        const updatedCount = this.state.ingredients[type] + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice}) 
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false})
    }

    continuePurchaseHandler = () => {
        alert('Enjoy your burger')
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClose={this.cancelPurchaseHandler}>
                <OrderSummary 
                cancelPurchase={this.cancelPurchaseHandler}
                continuePurchase = {this.continuePurchaseHandler}
                ingredients={this.state.ingredients}
                price = {this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler} 
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                purchasable = {this.state.purchasable}
                ordered = {this.purchaseHandler} />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;

