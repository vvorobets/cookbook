import React from "react";
import { Link } from 'react-router-dom';
import { Header, Grid, Card, Button, Image } from "semantic-ui-react";

import RecipeCard from "../components/RecipeCard";

// function renderCards(arr) {
//     arr.map((item, i) => {
//         return(<RecipeCard key={i} title={item.title} description={item.description} rate={item.rate} recipeId={item.id}/>);
//     })
// };

const RecipesContainer = (props) => {
    console.log("Hello from RC!", props);
    if(props) {
        const arrOfRecipes = props.map((item, i) => {
            return <RecipeCard key={i} title={item.title} description={item.description} rate={item.rate} recipeId={item.id}/>
        });
        return (
            <React.Fragment>
            <Button positive fluid size="huge" icon="plus" content="Add new recipe" as={Link} to={'/add'} /><hr/>
            <Card.Group itemsPerRow={2} centered>
            {arrOfRecipes}
            </Card.Group>
        </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Grid.Row centered>
                <Header as='h3' block color="red" textAlign="center" content="You don't have any recipes!" />
                </Grid.Row >
                <Grid.Row>
                    <Image centered size="large"
                        src="http://www.siouxfallscompletefitness.com/wp-content/uploads/2013/01/empty_plate.jpg"
                    />
                </Grid.Row >
                <Button positive fluid icon="plus" content="Add immediately!" size="huge" as={Link} to={'/add'} />
            </React.Fragment>
        )
    }
};

export default RecipesContainer;
