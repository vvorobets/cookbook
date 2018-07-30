import React from "react";
import { connect } from "react-redux";

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
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Button.Group floated="right">
            <Button icon="eye" primary as={Link} to={"/view/" + this.props.recipeId} />
            <Button icon="edit" color="green" as={Link} to={'/edit/' + this.props.recipeId} />
            <Button icon="trash" negative onClick={this.props.onFetch}/>
          </Button.Group>
          <Rating icon="star" maxRating={5} onRate={(e, { rating }) => this.setState({ rating })} />
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

const mapDispatchToProps = dispatch => {
  return {
      onFetch: () => dispatch({ type: "FETCH_ALL_RECIPES" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard);

// export default RecipeCard;
