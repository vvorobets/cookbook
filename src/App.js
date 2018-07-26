import React, { Component } from 'react';

import { Container, Grid, Card } from "semantic-ui-react";

// components
import MainHeader from "./components/MainHeader";
import RecipesContainer from "./containers/RecipesContainer";
import EmptyContainer from "./components/EmptyContainer";
import EditModal from "./containers/RecipeModal";

const App = (props) => (
        <React.Fragment>
            {MainHeader()}
            {props.fetchedRecipes.length > 0 ? (
                <React.Fragment>
                    <Grid.Row centered><EditModal /></Grid.Row><hr/>
                    <Card.Group>{RecipesContainer()}</Card.Group>
                </React.Fragment>
            ) : (EmptyContainer())}
        </React.Fragment>
);


export default App;

