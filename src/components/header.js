import React,{components} from 'react';
import {NavLink} from 'react-router-dom';


import './main.css'
const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand navcolor" to='/'>Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink classname="nav-link active" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/Aboutus'>Aboutus</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses">courses</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/ContactUs">contactus</NavLink>
        </li>
      
      </ul>
    </div>
  </div>

</nav>
    </div>
  )
}

export default Header