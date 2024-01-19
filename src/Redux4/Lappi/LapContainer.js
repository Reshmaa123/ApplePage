

import buyLappi
 from "./LapiiAction";
import { connect } from "react-redux";
import { useState } from "react";
const LapContainer=(props)=>{
    const{number,setNumber}=useState(1)
    return(
        <div>
            <h1>NoOfLappi:{props.noOfLaptops}</h1>
            <input type="text" name="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyLappi(number)}>BuyNow</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        noOfLaptops:state.laptop.noOfLaptops
    }
}
const mapDisptachToProps=(dispatch)=>{
    return{
        buyLappi:()=>{dispatch(buyLappi())}
    }
}
export default connect(mapStateToProps,mapDisptachToProps) (LapContainer)
