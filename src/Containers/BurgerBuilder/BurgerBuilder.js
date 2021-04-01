import React, {Component} from 'react';

import axios from '../../axios-orders'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Burger from '../../Components/Burger/Burger';
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../Components/UI/Spinner/Spinner'

import withErrorHandler from '../../hocs/withErrorHandler'

import Auxiliary from '../../hocs/Auxiliary'
import burgerIngredient from '../../Components/Burger/BurgerIngredient/BurgerIngredient';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: null
    }

    componentDidMount () {
        axios.get('https://react-burger-617ae-default-rtdb.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
        })
        .catch(error => {
            this.setState({error: error})
        })
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
        // this.setState({loading: true})
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'Karan Hernandez',
        //         email: 'test@test.com',
        //         country: 'Peru'
        //     }
        // }

        // axios.post('/orders.json', order)
        // .then(response =>{ 
        //     console.log(response);
        //     this.setState({loading: false, purchasing: false})
        // })
        // .catch(error => {
        //     console.log(error);
        //     this.setState({loading: false, purchasing: false})
        // })
        const queryParams = []
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        const queryString = queryParams.join("&")
        this.props.history.push({
            pathname: "/checkout",
            search: "&" + queryString
        })
    }

    render() {
        let order 
        let burger = <Spinner />
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        

        if(this.state.ingredients){
            burger = (
                <Auxiliary>
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
            if(this.state.loading === false){
                order = <OrderSummary 
                cancelPurchase={this.cancelPurchaseHandler}
                continuePurchase = {this.continuePurchaseHandler}
                ingredients={this.state.ingredients}
                price = {this.state.totalPrice} />
            } else {
                order = <Spinner />
            }
        }

        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClose={this.cancelPurchaseHandler}>
                    {order}
                </Modal>
                {burger}
            </Auxiliary>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);

