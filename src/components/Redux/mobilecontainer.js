import React from "react";
import {connect } from 'react-redux';
const MobileContainer =(props)=>{
    
    return(
    <div>
       <h1>No of Mobiles:{props of noOfMobiles}</h1> 
    
<input type="text"  name="number"/>
<button onClick={props.buyMobile.(number)}>BuyNow</button></div>)}
const mapStateToProps=(state)=>{
    return {
        noOfMobiles:state.mobile.noOfMobiles
    }
}
    
