import React,{Component} from "react";

export default  class Swi1 extends Component
{
    constructor()
    {
        super()
        
        this.state={
            logine:true
        }}
    
        render()
            {
        let msg;
                (this.state.logine)? msg=<p>WELCOME</p>:msg=<p>Logout</p>
                return msg;
            }
            }