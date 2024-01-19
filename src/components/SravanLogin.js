import React from 'react'
import { FormField,Checkbox,Button } from 'semantic-ui-react'
const SravanLogin = () => {
  return (
    <div>
        <h1>WELCOME TO LOGIN PAGE
          
          </h1>
          <FormField>
      <label>First Name</label>
      <input placeholder='First Name' />
    </FormField>
    <FormField>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </FormField>
    <FormField>
      <Checkbox label='I agree to the Terms and Conditions' />
    </FormField>
    <Button type='submit'>Submit</Button> 
  
 
          
          </div>
  )
}

export default SravanLogin