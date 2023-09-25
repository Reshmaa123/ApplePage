import React, { Component } from 'react';

export default class Student extends Component {
    componentWillUnmount(){
        alert('this is component')
    }
  render() {
    return (
      <div>
        <h1>
            Welcome to Student
            </h1></div>
    )
  }
}


