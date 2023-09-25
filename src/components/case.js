import React, { Component } from "react";
export default class Case extends Component
{
    constructor(){
        super()
    this.state1={
        choice:6
}}
render()
{
    let msg1;
    switch(this.state1.choice)
    
    {
        case 1:
            msg1=<p>Welcome</p>
            break;    
        case 2:
            msg1=<p>Welcome2</p>
            break;
        case 3:
            msg1=<p>Welcome3
                </p>
            break;
        case 4:
            msg1=<p>Welcome4 </p>
            break;
            default:
                msg1=<p>Failed Try other time</p>
    }
    return msg1;
}}
    
