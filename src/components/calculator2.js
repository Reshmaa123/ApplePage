import React, { useState} from 'react'

const Calculator2 = () => {
    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(0)
    const [result,setResult]=useState(0)
    const Addition =()=>{
const sum=num1+num2
    
setResult(sum)
    };
    const Sub =()=>{
        const sub=num1-num2
            
        setResult(sub)
            };
            const Mul =()=>{
                const mul=num1*num2
                    
                setResult(mul)
                    };

                    const Div =()=>{
                        const div=num1/num2
                            
                        setResult(div)
                            };

    const Refresh =()=>{
        setNum1(0);
        setNum2(0);
        setResult(0);
    }
  return (
    <div>
<h1>Calculator</h1>
<input type="number" value={num1} onChange={(e)=>setNum1(Number(e.target.value))}
/>Number1<br/>
<button onClick={Addition}>+</button>
<button onClick={Sub}>-</button>
<button onClick={Mul} >*</button>
<button onClick={Div}>/</button><br/>
<input value={num2} onChange={(e)=>setNum2(Number(e.target.value))}/>Number2<br/>
<input type="text" value={result} readonly/><br/>
<button type="button" onClick={Refresh}>Refresh</button>


    </div>
  )
}

export default Calculator2