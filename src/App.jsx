import React, { Component } from 'react'
import Navbar from './components/Layouts/Navbar'
import Footer from './components/Layouts/Footer'
import LandingPage from './components/Landing/LandingPage'
import Products from './components/Products/Products'

export default class App extends Component {
  render() {
    return <>
    <Navbar/>
    <Products />
    {/* <LandingPage /> */}
    <Footer/>
    </>
}

}
