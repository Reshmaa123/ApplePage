import React, { Component } from 'react';

export default class Mount extends Component {
constructor(props)
 {
  super(props)

  this.state = {
     name:"hello"
    };
  console.log("this is const");
}
static getDerivedStateFromProps(){
  console.log("this is derived");
  return null;
  }
  componentDidMount(){
    console.log("this is component");
  }
  


  render() {
    console.log("This is render");
    return (
      <div><h1>
        Mount{this.state.name}
        </h1>
        <button className="btn-red">Click here</button></div>
    );
  }
}
