import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import RatingSetter from "../components/Rating";
import { Link } from 'react-router-dom';

const RecipeCard = props => (
  <Card>
    <Card.Content>
      <Image
        floated="left"
        size="mini"
        src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
      />
      <Card.Header>{props.title}</Card.Header>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content>
      <Button.Group floated="right">
        <Button icon="eye" primary as={Link} to={"/view/"+3 } />
        <Button icon="edit" color="green" as={Link} to={'/edit/'+ 3} />
        <Button icon="trash" negative />
      </Button.Group>
      <RatingSetter />
    </Card.Content>
  </Card>
);

export default RecipeCard;
