import React from "react";
import { Form, Button, Icon, Input } from "semantic-ui-react";

const ButtonControlsGroup = () => (
  <Form.Group floated="right">
    <Button primary>Show All</Button>
    <Button primary>
      <Icon fitted name="sort amount up" /> Sort by rate
    </Button>
    <Input icon="search" placeholder="Search..." />
    <hr/>
  </Form.Group>
);

export default ButtonControlsGroup;
