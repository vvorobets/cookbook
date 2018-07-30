import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import {addRecipe} from "../actions";

import { Grid, Header, Button, Image, Form, Rating } from "semantic-ui-react";

class AddRecipe extends Component {

  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: '',
      description: '',
      rating: 0
    }
  }

  onChangeTitle(e) {this.setState({ [e.target.name]: e.target.value });};
  onChangeDescription(e) {this.setState({ [e.target.name]: e.target.value });};
  onSubmit(e) {
    e.preventDefault(); 
    const updatedRecipe = {
      title: this.state.title,
      description: this.state.description,
      rating: this.state.rating
    };
    this.props.onAddRecipe(updatedRecipe);
    this.setState({
      title: '',
      description: '',
      rating: 0
    });
  };

  render() {
    const { title, description } = this.state

    return (
      <Grid.Row>
        <Header as='h3' block textAlign="center" content="Create new recipe:" />
        <Image rounded centered size="medium"
          src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
        />
        <p>Set rating:</p>
        <Rating icon="star" maxRating={5} onRate={(e, { rating }) => this.setState({ rating })} />
        <Form>
          <Form.Input 
            label="Title:" name="title" value={title} 
            onChange={this.onChangeTitle}
            placeholder="Some fancy name..." />
          <Form.TextArea 
            label="Description:" autoHeight name="description" value={description} 
            onChange={this.onChangeDescription} 
            placeholder="Add something yummy and delicious..." />
          <Button fluid positive icon="checkmark" content="Yep, add this!" type="submit"
            onClick={this.onSubmit}
          />
        </Form><hr/>
      </Grid.Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      state: state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onAddRecipe: (obj) => dispatch(addRecipe(obj)),
      // onSetRate: () => dispatch({ type: "SET_RATE"})
  }
};

export default connect(
  null,
  mapDispatchToProps
)(AddRecipe);
