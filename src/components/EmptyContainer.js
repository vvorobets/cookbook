import React from "react";
import { Grid, Header, Button, Image } from "semantic-ui-react";

const EmptyContainer = () => (
  <React.Fragment>
    <Grid.Row centered>
      <Header as='h3' block color="red" textAlign="center" content="You don't have any recipes!" />
    </Grid.Row >
    <Grid.Row centered>
      <Image
        size="large"
        src="http://www.siouxfallscompletefitness.com/wp-content/uploads/2013/01/empty_plate.jpg"
      />
    </Grid.Row >
    <Grid.Row centered>
      <Button positive icon="plus" content="Add immediately!" size="huge" />
    </Grid.Row>
  </React.Fragment>
);

export default EmptyContainer;
