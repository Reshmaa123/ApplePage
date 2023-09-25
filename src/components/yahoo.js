import React from 'react'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Segment,Button,Checkbox,Form,Icon} from 'semantic-ui-react'

const Yahoo = () => {
  return (<div>
    <div class="header"> <h1><i>Yahoo!!</i></h1></div>
    <br/>
<Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column width={10}>
         
            <p className='rec'>
            <Icon name="yahoo"/>!!!YAHOO!!!!/
            </p>
      
      </Grid.Column>
      
      <Grid.Column width={6} >
        <div className="red">
            <h1 className="purple"> <i>Yahoo!</i> </h1>
            <h3><b>Sign in</b></h3>
            <p>using your Yahoo account</p>
        <Form>
    <Form.Field>
      <label>Username,email,or mobile</label>
      <input placeholder='' />
    </Form.Field>
    <Button type='Next' color="blue">Next</Button>
    <Form.Field>
        <div class="container" className="blue">
            <div class="row"><div class="col" >
      <Checkbox label='Stay signedin' className="blue"/>
      </div>
      <div class="col" >Forgot username?</div>
        </div></div>
    </Form.Field>
    <Button className="circle">Create an account</Button>
    <p>Or,continue with</p>
    <Button  className="circle"> <Icon className='white' name="google"/>Google</Button>
  </Form>
            </div>
        
      </Grid.Column >
    </Grid.Row>
  </Grid>
</div>
    
  )
}

export default Yahoo