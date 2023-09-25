import React,{components} from "react";

export default class Array extends components
{
    constructor(props)
    {
        super(props)
        
            this.state={
                name:'Reshma' 
            }
        }
        render()
        {
            return(
                <div><h1>{this.state.name}</h1> 
                
                </div>
            ));
        }}
