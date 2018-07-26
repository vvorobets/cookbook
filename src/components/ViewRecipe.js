import React, { Component } from "react";
import axios from "axios";

import { Grid, Header, Image, Rating } from "semantic-ui-react";

class EditRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: props.title,
        description: props.description,
        rating: props.rating
      }
  }

  render() {
    const { title, description, rating } = this.state

    return (
      <Grid.Row>
        <Header as='h3' block textAlign="center" content={this.state.title} />
        <Image rounded centered size="medium"
          src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
        />
        <Header as='h5' block textAlign="center" content="Description:" />
        <p>{this.state.description}</p>
        <p>Set rating:</p>
        <Rating icon="star" maxRating={5} onRate={(e, { rating }) => this.setState({ rating })} />
      </Grid.Row>
    )
  }
}

export default EditRecipe;