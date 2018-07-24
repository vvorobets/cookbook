import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import RatingOnRate from "../containers/Rating";

const RecipeCard = props => (
  <Card>
    <Card.Content>
      <Image
        floated="left"
        size="mini"
        src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
      />
      <Card.Header>{props.title}</Card.Header>
      <Card.Description>{props.desc}</Card.Description>
    </Card.Content>
    <Card.Content>
      <Button.Group floated="right">
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
      <RatingOnRate />
    </Card.Content>
  </Card>
);

export default RecipeCard;
