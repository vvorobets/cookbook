import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// components
import { Header, Grid, Form, Button, Input, Image } from "semantic-ui-react";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";
import ViewRecipe from "./components/ViewRecipe";
import RecipesContainer from "./containers/RecipesContainer";

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
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
                        <Link to={'/recipes'}><Button primary onClick={this.props.onShowAll} >Show All</Button></Link>
                        <Button primary icon="sort amount up" content=" Sort by rate" onClick={this.props.onSort}/>
                        <Input icon="search" placeholder="Search..." onChange={this.props.onSearch} /><hr/>
                    </Form.Group>
                </Grid.Row></Grid>
                <Switch>
                    <Route exact path='/add' component={AddRecipe} />
                    <Route path='/edit/:id' component={EditRecipe} />
                    <Route path='/view/:id' component={ViewRecipe} />
                    <Route exact path='/recipes' render={() => RecipesContainer(this.props.fetchRecipes)}/>
                    {/* <Route exact path='/recipes' render={(props) => <RecipesContainer {...props} someProp={true} />}/> */}
                    <Route path='/' render={() => RecipesContainer(this.props.fetchRecipes)} />
                 </Switch>
            </React.Fragment>
        </Router>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetchRecipes: state.fetchRecipes,
        visibilityFilter: state.visibilityFilter,
        isFetching: state.isFetching
    };
  };
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onShowAll: () => {dispatch({ type: "SHOW_ALL", data: ownProps.fetchRecipes })},
        onSort: () => dispatch({ type: "SHOW_BY_RATE", data: ownProps.fetchRecipes }),
        onSearch: () => dispatch({ type: "SHOW_FOUND", data: ownProps.fetchRecipes })
    }
};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  