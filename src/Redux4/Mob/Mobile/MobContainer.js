
//import { buy_lappi } from "../../Lappi/LappiType";//
import { useState } from "react";
import { connect } from "react-redux";
import buyMob from "./MobileAction";
const MobileContainer=(props)=>{
    const[number,setNumber]=useState(1)
    return(
        <div>
            <input type="text" name="number" value={number}
            onChange={(e)=>setNumber(e.target.value)}/>
            <h1>NoOfmob:{props.noOfMob}</h1>
            <button onClick={props.buyMob(number)}>BuyNow</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        noOfMob:state.mobile.noOfMob
    }
}
const mapDisptachToProps=(dispatch)=>{
    return{
        buyMob:(num)=>{
            dispatch(buyMob(num))}

    }
}
export default connect(mapStateToProps,mapDisptachToProps) (MobileContainer)