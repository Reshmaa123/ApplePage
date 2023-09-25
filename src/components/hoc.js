import React,{Component}from "react";
import AdminLogin from "./Admin";
const Hoc=(comp)=>{
    return(
        class Component1 extends Component{
            constructor(props){
                super(props)
                this.state={
                    login:true
                }
            }
            render()
            {
                return(
                    (this.state.login)?<comp/>:<Admin/>
                    );
    

    }
})}
    export default Component1