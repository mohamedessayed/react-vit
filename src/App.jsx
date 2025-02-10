import React, { Component } from 'react'
import Navbar from './components/Layouts/Navbar'
import Footer from './components/Layouts/Footer'
import LandingPage from './components/Landing/LandingPage'
import Products from './components/Products/Products'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import { Route, Routes } from 'react-router'
import Notfound from './components/Errors/Notfound'
import DocumentionSidebar from './components/Documention/DocumentionSidebar'
import Intorduction from './components/Documention/Intorduction'
import GetStarted from './components/Documention/GetStarted'
import Demo from './components/Documention/Demo'
import Conatct from './components/Contact/Conatct'
import ConatctFormik from './components/FormikContact/ConatctFormik'
import Container from './components/Testing/Container'
import Test from './components/Testing/Test'
import DemoTwo from './components/Testing/DemoTwo'

export default class App extends Component {
  render() {
    return <>
      <Navbar />

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/product' element={<Products />} />
        <Route path='/functional' element={<FunctionalComponent />} />

        <Route path='/documention' element={<DocumentionSidebar />}>
          <Route index element={<Intorduction />} />
          <Route path='get-strated' element={<GetStarted />} />
          <Route path='demo' element={<Demo />} />
        </Route>

        <Route path='/contact-us' element={<Conatct/>} />
        <Route path='/contact-us-formik' element={<ConatctFormik/>} />

        <Route path='*' element={<Notfound />} />
      </Routes>

      {/* <Container>
        <DemoTwo />
        <Test />
        <DemoTwo>
          <LandingPage />
        </DemoTwo>
      </Container> */}


      <Footer />
    </>
  }

}
