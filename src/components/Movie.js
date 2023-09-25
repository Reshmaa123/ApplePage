import React,{components}from 'react';

export default  class Movie extends components
{
    render()
    {

    return(
        <div><h1> welcome to {this.props.name} </h1>
           <button>
            BOOK
            </button>
        </div>
    )
}}