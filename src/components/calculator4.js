import React,{useState} from 'react'
import './animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Calculator4 = () => {
  const [num1,setNum1]=useState('');
  const[num2,setNum2]=useState('');
  const [operator,setOperator]=useState('')
  const [response,setResponse]=useState(''); 
  const [displayValue,setDisplayValue]=useState('');
  const[result,setResult]=useState('');
  const currentValue =parseFloat(displayValue);
    const previousResult =parseFloat(result);
  const handleButton=(value)=>{
    setDisplayValue((preDisplay)=>preDisplay+value)
  
  }
  
const clear=()=>{
setNum1('');
setNum2('');
setOperator('');
setResponse('');
setDisplayValue('');
setResult('');
}
const handleButtonOP=()=>{
  
    const currentValue =parseFloat(displayValue);
    const previousResult =parseFloat(result);
    if (!isNaN(currentValue) && !isNaN(previousResult))
     {
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
                
                default:
                  break;

}}}
const calculate =()=>{
  try{
    setResult(eval(result).toString());
    console.log(setResult);
  }
  catch(error)
  {
    setResult("error")
  }
}
const mul=()=>{
  setResult((previousResult * currentValue).toString());
}

  
  


     
return(
  <div>
  <div className="border">
<button  onClick={()=>clear()}>C</button> 
<button onClick={()=>handleButton('+/-')}>-</button>
<button onClick={()=>handleButton('%')}
>%</button>

<button onClick={()=>handleButtonOP('/')} id="div">/</button><br/>
<button onClick={()=>handleButton('7')} id=
"sev">7</button>
<button onClick={()=>handleButton('8')}>8</button>
<button onClick={()=>handleButton('9')}>9</button>
<button onClick={()=>handleButton('*')} id="mul">*</button><br/>
<button onClick={()=>handleButton('4')} >4</button>
<button onClick={()=>handleButton('5')}>5</button>
<button onClick={()=>handleButton('6')}>6</button>
<button onClick={()=>handleButtonOP('-')}>-</button><br/>
<button onClick={()=>handleButton('1')} >1</button>
<button onClick={()=>handleButton('2')}>2</button>
<button onClick={()=>handleButton('3')}>3</button>
<button onClick={()=>handleButtonOP('+')} >
+</button><br/>
<button onClick={()=>handleButton('0')} >0</button>
<button onClick={()=>handleButton('.')}>.</button>
<button onClick={()=>calculate()}>=</button>



<p id="display">{displayValue}</p>
<input type="text" value={response} readOnly/>

</div>
</div>
)}
export default Calculator4