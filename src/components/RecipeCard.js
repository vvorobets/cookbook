import React from "react";
import { connect } from "react-redux";

import {deleteRecipe} from "../actions";

import { Button, Card, Image, Rating } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
          />
          <Card.Header>{this.props.obj.title}</Card.Header>
          <Card.Description>{this.props.obj.description}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Button.Group floated="right">
            <Button icon="eye" primary as={Link} to={"/view/" + this.props.obj._id} />
            <Button icon="edit" color="green" as={Link} to={'/edit/' + this.props.obj._id} />
            <Button icon="trash" negative onClick={this.props.onDelete}/>
          </Button.Group>
          <Rating icon="star" rating={this.props.obj.rating} maxRating={5} onRate={(e, { rating }) => this.setState({ rating })} />
        </Card.Content>
      </Card>
    )
  }
};

const mapStateToProps = state => {
  return {
      fetchRecipes: state.fetchRecipes,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onFetch: () => dispatch({ type: "FETCH_ALL_RECIPES" }),
      onDelete: () => {console.log("Hello from del-dispatcher");console.log("ownProps", ownProps); dispatch(deleteRecipe(ownProps.obj._id))}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard);

// export default RecipeCard;
