import React from 'react'
//import path from C:\Users\mahes\Reactjs\myapp\src\components\Images
 import './Restuarent.css'
 //import './main.css'
 import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Restuarent = () => {
  return (
    <div>
      <div className="row Grey">
        <div className="col-6">
        <img src="https://th.bing.com/th/id/OIP.to5Ypr1tHPkH2r3YKO6dMAHaB7?w=295&h=91&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
 alt="img"/> <br/> 
<h1 >INDIAN FOOD</h1> <br/><h2>
<strong>From South India with <i className="heart  icon colored " />Love!!
  </strong></h2>  <br/><h4>
 <NavLink className="locationstyle" to="/Choose Location">
 <i class="location arrow icon"/>
  Choose Location</NavLink></h4>
        </div>
        <div className="col-6">
          <img src="https://th.bing.com/th?id=OIP.1yott6kX6BYmvksS4DOxLAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""/>
        <div className='row' >
          <div className='col-6'>
        <img src="https://th.bing.com/th/id/OIP.jfpwNNE_usDsZAyfkV1dFwHaEz?w=287&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/></div>
        <div className='col-6'>
        <img src="https://th.bing.com/th/id/OIP.Oj0e3DSOv-hBaNkLHWusmQHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/></div>

        </div>
     </div>
        </div>
        <div className='row'>
          <div className='col-3'>
          <img src="https://th.bing.com/th/id/OIP.to5Ypr1tHPkH2r3YKO6dMAHaB7?w=295&h=91&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
          </div>
          <div className='col-9'>
            
          </div>
        </div>
        
        
        </div>
  )
}

export default Restuarent