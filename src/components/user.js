import React from "react";
const User=(props)=>{
    let data="elearn";
    return(
        <div>
            <button onClick={()=>
            props.alert(data)}>Clickme</button>
        </div>
    )
}
export default User