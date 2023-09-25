import React, { useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
const Offers2= () => {
  const [name,setName]=useState('');
  const [last,setLast]=useState('');
  const submitHandler =(e)=>{
  e.preventDefault();
   alert('Submitted:',name,last);
};
return(
<div>
  <Form onSubmit={submitHandler}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name'  value={name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' value={last} onChange={(e)=>setLast(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  
  
  </div>
  )

}
export default Offers2