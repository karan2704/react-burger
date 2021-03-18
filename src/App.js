import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Layout from './Components/Layout/Layout'
import Checkout from './Containers/CheckOut/Checkout'

import './App.css';


class App extends Component{

  render(){
  return(
    <div className='App'>
      <BrowserRouter>
      <Layout>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
      </Layout>
      </BrowserRouter>
    </div>
  )
  }
  
}

export default App;
