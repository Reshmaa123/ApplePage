import React, { Component } from 'react'
import axios from 'axios';
import Student from './Student';

export default class post extends Component 
{
  constructor(props) 
  {
    super(props)
  this.state = {
       id:" ",
      name1:" ",
       place:" ",
       enteredId:[],
       error:'',
  }
  }
changeHandler=(e)=>{
  this.setState({
   [e.target.name]:e.target.value,
  });
};
submitHandler=(e)=>{  const {id,name1,place,enteredId}=this.state;
  e.preventDefault();
  if(enteredId.includes(id))
{
this.setState({
  error:'Its a duplicate id',
});
return;
}
  
  axios.post('http://localhost:4000/student',{id, name1, place,enteredId})
  .then((res)=>
  {
      alert("data uploaded");
      
        this.setState({
          enteredId: [...enteredId, id], 
          id: '',
          name1: '',
          place: '',
          error: '',
      })
    
    
    .catch((error)=>
      {
        console.log('Error:',error);
       } 
       );
      
      }

    )}


render() 
{
    const{id,name1,place,error}=this.state
    return (
      <div>
      {error &&<div>{error}</div>}
        <form onSubmit={this.submitHandler}>
          <div>
          <input type="text" value={id} name="id"
          placeholder='id' onChange={this.changeHandler} />
          </div>
          <div>
          <input type="text" name="name1"
          value={name1} placeholder='name'
           onChange={this.changeHandler}   /></div>
           <div>
          <input type="text" value={place} placeholder='place' name="place"
           onChange={this.changeHandler} /></div><div>
          <input type="submit" />
          
          </div>
        </form>
        </div>
    )
  }
}
