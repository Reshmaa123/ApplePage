import React,{Component} from "react";

export default  class Ifel extends Component
{
    constructor()
    {
        super();
        this.state={
            login:false}}
            render(){
                let msg;
                if(this.state.login){
                    msg=<h4>WeLcOMe</h4>
                }
                else{
                    msg=<h4>Login Failed</h4>
                }
                return msg;

                }

            }
        

    