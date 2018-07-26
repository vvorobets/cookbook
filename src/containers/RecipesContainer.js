import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Header, Grid, Segment, Card, Button, Image } from "semantic-ui-react";

import RecipeCard from "../components/RecipeCard";

const RecipesContainer = () => (
  <React.Fragment>{ /* this.props.fetchedRecipes.length */ 1 ? (
    <React.Fragment>
        <Link to={'/create'}><Button positive fluid size="huge" icon="plus" content="Add new recipe" /></Link><hr/>
        <Card.Group>
          {RecipeCard({title: "Title1", description: "Description1"})}
          {RecipeCard({title: "Title2", description: "Description2"})}
          {RecipeCard({title: "Title3", description: "Description3"})}
          {RecipeCard({title: "Title4", description: "Description4"})}
        </Card.Group>
    </React.Fragment>
) : (
    <React.Fragment>
        <Grid.Row centered>
        <Header as='h3' block color="red" textAlign="center" content="You don't have any recipes!" />
        </Grid.Row >
        <Grid.Row>
            <Image centered size="large"
                src="http://www.siouxfallscompletefitness.com/wp-content/uploads/2013/01/empty_plate.jpg"
            />
        </Grid.Row >
        <Button positive fluid icon="plus" content="Add immediately!" size="huge" />
    </React.Fragment>
)}
</React.Fragment>

);

export default RecipesContainer;
