import React,{Component} from "react";
 export default  class Map extends Component
 {
    constructor(props)

    {
        super(props)
        this.state=
        {
            names:['Reshma','Reddy','Ravan']
        }
    }
    
     render()
     {
        return(
        this.state.names.map((data)=>
        {
            return(
                <h1>{data[1]}</h1>
            )
        
             }        ))}
             
            }
            
    
     
    

  