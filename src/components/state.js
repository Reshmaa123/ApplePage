import React,{Component} from "react";

export default class State extends Component
{
    constructor()
    {
        super();
        this.state= {
            name:'Reshma'
        }
    }
        changeData=()=>{
            this.setState(
                {
                name:"Reshma Reddy"
        })
        }
        render()
        {
            return(
                <div>
                    <h1>Myself {this.state.name}</h1>
                    <button onClick={this.changeData}>
                        Click
                    </button>
                </div>
            )
        }


}