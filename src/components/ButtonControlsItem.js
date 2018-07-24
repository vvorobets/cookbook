import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonControlsItem = () => (
  <div>
    <Button.Group>
      <Button icon primary>
        <Icon name="eye" />
      </Button>
      <Button icon color="green">
        <Icon name="edit" />
      </Button>
      <Button icon negative>
        <Icon name="trash" />
      </Button>
    </Button.Group>
  </div>
);

export default ButtonControlsItem;
