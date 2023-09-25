import React,{Component} from "react";

export default  class Terna extends Component
{
    constructor()
    {
        super();
        this.state={
            login:true}}
            render(){
                let msg;
                return(this.state.login) && (<h1>welcome</h1>)
            }}
                    