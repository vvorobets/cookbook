import React from "react";
import { Grid, Segment, Button, Image, Icon, Message } from "semantic-ui-react";

const EmptyContainer = () => (
  <Grid.Row centered>
    <Segment size="huge" inverted color="red" textAlign="center">
      You don't have any recipes!
    </Segment>
    <Message>
      <p>You don't have any recipes!</p>
    </Message>
    <Image
      size="large"
      src="http://www.siouxfallscompletefitness.com/wp-content/uploads/2013/01/empty_plate.jpg"
    />
    <Button positive fluid size="huge">
      <Icon name="plus" />
      Add immediately!
    </Button>
  </Grid.Row>
);

export default EmptyContainer;
