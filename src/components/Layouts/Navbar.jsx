import { Component } from "react";
import { Link, NavLink } from "react-router";

export default class Navbar extends Component {

    render(){
        return <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/functional">FunctionalComponent</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/documention">Doc</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact-us-formik">Contact Us vai Formik</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
        </>
    }
}


// export default Navbar;