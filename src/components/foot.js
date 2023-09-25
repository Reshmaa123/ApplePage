import React from "react";
import { Segment,Grid } from "semantic-ui-react";
const GridExampleInverted = () => (
    <Grid columns='equal' divided inverted padded>
      <Grid.Row color='black' textAlign='center'>
        <Grid.Column>
          <Segment color='black' inverted>
            Business Name
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
            List Of services
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
            ReachUs
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
            Contact Us
          </Segment>
        </Grid.Column>
       </Grid.Row>
    </Grid>)
    export default GridExampleInverted