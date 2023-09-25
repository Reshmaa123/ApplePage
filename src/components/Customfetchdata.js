
import React ,{ useEffect, useState} from "react";
const useCustomfetchData=(url)=>{
    const [data,setData]=useState([]);
    useEffect(()=>
    {
        fetch(url)
        .then(res=>res.json)
        .then(data=>setData(data))
        .catch((error)=>{
            console.log("err");
        })
    },[url]);
    return data
};
    export default useCustomfetchData;