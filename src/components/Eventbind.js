import React, { Component } from 'react' 


export default class Eventbind extends Component {
 
constructor(props)
 {
  super(props)

  this.state={
    name:'Reshma',
    
}
 }
changeData=()=>{
    this.setState({
        name:'ReshmaReddy'
});
}
    render()
    {
        return(
        <div>
            <h1>Name is {this.state.name}</h1>
            <button onClick={this.changeData}>Click me</button>
        </div>);
    }
}



