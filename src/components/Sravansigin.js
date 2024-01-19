import React from 'react'
import axios from 'axios'
const Sravansigin = () => {
  const submit =()=>{
    useEffect(()=>{
      axios.post('http://localhost:4000/')
      .then((){

      })
      .catch (()=>{

      })
    })
  }
  return (
    <div>
<h1>CREATE YOUR ACCOUNT</h1>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  
  <div class="form-group col-md-6">
      <label for="inputPassword4">Confirm Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password"/>
    </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      
    </div>
    
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      
    </div>
  </div>

  <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
</form><br/>


    </div>
  )
}

export default Sravansigin