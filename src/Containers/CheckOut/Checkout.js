import React, { Component } from 'react'

import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import ContactDetails from '../../Containers/ContactDetails/ContactDetails'

class Checkout extends Component {
     state = {
         ingredients: {
             salad: 0,
             bacon: 0,
             cheese: 0,
             meat: 0
         }
     }

     componentDidMount() {
         const query = new URLSearchParams(this.props.location.search)
         console.log(this.props.location.search)
         const ingredients = {}
         for(let param of query.entries()){
             ingredients[param[0]] = +param[1]

         }
         this.setState({ingredients: ingredients})
     }



     checkoutCancelHandler = () => {
         this.props.history.goBack()
     }

     checkoutConfirmHandler = () => {
         this.props.history.replace("/checkout/billing")
     }

     render() {
         return (
             <React.Fragment>
                <CheckoutSummary 
             cancelPurchase={this.checkoutCancelHandler}
             confirmPurchase={this.checkoutConfirmHandler}
             ingredients={this.state.ingredients}/>
             <ContactDetails />
             </React.Fragment>
         )
     }
}

export default Checkout;