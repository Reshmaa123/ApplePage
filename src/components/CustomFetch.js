import React, { useEffect, useState } from 'react'

const useCustomFetch = (url) => {
    const [data,setData]=useState([]);
    useEffect(()=>{
fetch(url)
.then(res=>res.json())
.then(data=>setData.data)
.catch(error=>{
    console.log(error)
})
    })
        
        
  return (
    <div>CustomFetch</div>
  )
}

export default useCustomFetch