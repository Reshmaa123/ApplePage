import React, { useState } from 'react'
import './animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Calculator3 = () => {
    const[displayValue,setDisplayValue]=useState('');
    const[displayValue2,setDisplayValue2]=useState('');
    const[result,setResult]=useState('');

    const[error,setError]=useState('');
    const[operator,setOperator]=useState('');
    const handleButton = (value)=>{
        setDisplayValue((preDisplay)=>preDisplay + value);
    
    }
    const handleOperator =(op)=>{
        if(!isNaN(parseFloat(displayValue))){
            
            setResult(parseFloat(displayValue))
            setOperator(op);
            setDisplayValue(op);
        }
    }
    const handleEquals=()=>{
    const currentValue=parseFloat(displayValue);
    const previousResult=parseFloat(result);
    if (!isNaN(currentValue) && !isNaN(previousResult)) {
        switch(operator){
            case '+':
                setResult((previousResult + currentValue).toString());
                break;
                case '-':
                    setResult((previousResult - currentValue).toString());
                break;
                case '*':
                setResult((previousResult * currentValue).toString());
                break;
                case '/':
                    setResult((previousResult / currentValue).toString());
                break;
                case '=':
                finaloutput();
                break;
                default:
                    break;

        }
        setDisplayValue('');
        setOperator('');
  
}}
    
    const calResult =()=>{
    try   { 
        const calcliResult=eval(displayValue);
        setResult(calcliResult.toString())
        setError('');
    }

        
       catch(error){
        setError('error')
    }}
    const clear = () => {
        setDisplayValue('');
        setResult('');
        setOperator('');
        setError('');
}
function finaloutput(){
    const displayValue =document.getElementById('display').value;

        try {
            const result = customEval(displayValue);
            document.getElementById('display').value = result;
          } catch (error) {
            document.getElementById('display').value = 'Error';
          }
       }
return (
    <div>
        <div className="border">
<button  onClick={()=>clear()}>C</button> 
<button onClick={()=>handleButton('+/-')}>-</button>
<button onClick={()=>handleButton('%')}
>%</button>

<button onClick={()=>handleButton('/')}>/</button><br/>
<button onClick={()=>handleButton('7')}>7</button>
<button onClick={()=>handleButton('8')}>8</button>
<button onClick={()=>handleButton('9')}>9</button>
<button onClick={()=>handleButton('*')}>*</button><br/>
<button onClick={()=>handleButton('4')} >4</button>
<button onClick={()=>handleButton('5')}>5</button>
<button onClick={()=>handleButton('6')}>6</button>
<button onClick={()=>handleButton('-')}>-</button><br/>
<button onClick={()=>handleButton('1')} >1</button>
<button onClick={()=>handleButton('2')}>2</button>
<button onClick={()=>handleButton('3')}>3</button>
<button onClick={()=>handleButton('+')} >
    +</button><br/>
<button onClick={()=>handleButton('0')} >0</button>
<button onClick={()=>handleButton('.')}>.</button>
<button onClick={()=>handleEquals()}>=</button>



<p id="display">{displayValue}</p>
<input type="text" value={result} readOnly/>

</div>
<div className="border">
    hello

</div>
    </div>
  )
}

export default Calculator3