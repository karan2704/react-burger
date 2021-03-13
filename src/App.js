import React, { Component } from 'react'

import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Layout from './Components/Layout/Layout'

import './App.css';


class App extends Component{

  render(){
  return(
    <div className='App'>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  )
  }
  
}

export default App;
