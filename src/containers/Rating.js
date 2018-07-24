import React, { Component } from "react";
import { Rating } from "semantic-ui-react";

export default class RatingOnRate extends Component {
  state = {};

  handleRate = (e, { rating }) => this.setState({ rating });

  render() {
    return (
      <div>
        <Rating icon="star" maxRating={5} onRate={this.handleRate} />
        <pre>{JSON.stringify(this.state.rating)}</pre>
      </div>
    );
  }
}
