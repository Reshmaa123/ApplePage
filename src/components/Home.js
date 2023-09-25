import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Home extends Component{

constructor(props)
 {
  super(props)
 
  this.state = {
    
     email:'',
     password:'',
     phone:''
  }
}
render()
{
  return (
    <div>
       <NavLink to="/dashboard" activeClassName="active"/>
<div className='Container'>
    <div className="row">
        <div className="col-md-8">
<div className='row'>
    <div className='col-md-6'>
   <form></form>
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
   placeholder="name@example.com" value={this.state.email}/>

    </div><div className='col-md-6'>
    <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="Password" class="form-control" id="exampleFormControlInput1"
   placeholder="**********" value={this.state.password} />
    </div>
</div>
        </div>
         <div className="col-md-4">
           
        </div>
    </div>
</div>


<div className="row">
        <div className="col-md-8">
<div className='row'>
    <div className='col-md-6'>
   <form></form>
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
   placeholder="name@example.com" value={this.state.phone}/>

    </div><div className='col-md-6'>
    <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="Password" class="form-control" id="exampleFormControlInput1"
   placeholder="**********"/>
    </div>
</div>
        </div>
         <div className="col-md-4">
            ho
        </div>
        </div>







<div className="row">
        <div className="col-md-8">
Hello4
        </div>  
        <div className="col-md-10">
Hello4
        </div>  <div className="col-md-2">
Hello4
        </div> 

        <div className="col-md-4">
            ho
        </div>
    </div>
</div>


  )
}
}
export default Home