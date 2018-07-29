import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// components
import { Header, Grid, Form, Button, Input, Image } from "semantic-ui-react";
import CreateRecipe from "./components/CreateRecipe";
import EditRecipe from "./components/EditRecipe";
import ViewRecipe from "./components/ViewRecipe";
// import RecipeCard from "./components/RecipeCard";

import RecipesContainer from "./containers/RecipesContainer";

class App extends Component {
    constructor(props) {
        super(props);
console.log("App props: ", props);
    }
    render() {
console.log("Rendering App...", this.props);
        return (
        <Router>
            <React.Fragment>
                <Header as="h1" textAlign="center"><hr/>
                    <Image circular
                        src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
                    /> Cookbook Academy<br/>
                    <Header.Subheader><br/>Manage your favourite cook recipes.<hr/></Header.Subheader>
                </Header>
                <Grid><Grid.Row centered>
                    <Form.Group>
                        <Link to={'/recipes'}><Button primary>Show All</Button></Link>
                        <Button primary icon="sort amount up" content=" Sort by rate" onClick={this.props.onFetch}/>
                        <Input icon="search" placeholder="Search..." /><hr/>
                    </Form.Group>
                </Grid.Row></Grid>
                <Switch>
                    <Route exact path='/add' component={CreateRecipe} />
                    <Route path='/edit/:id' component={EditRecipe} />
                    <Route path='/view/:id' component={ViewRecipe} />
                    <Route exact path='/recipes' render={() => RecipesContainer(this.props.fetchRecipes)}/>
                    {/* <Route exact path='/recipes' render={(props) => <Dashboard {...props} isAuthed={true} />}component={RecipesContainer} recipes={this.props.fetchRecipes}/> */}
                    <Route path='/' component={RecipesContainer} />
                 </Switch>
            </React.Fragment>
        </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchRecipes: state.fetchRecipes,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchAllRecipes: () => dispatch({ type: "FETCH_ALL_RECIPES" })
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  