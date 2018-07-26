import React, { Component } from "react";
import axios from "axios";

import { Grid, Header, Image } from "semantic-ui-react";
import RatingSetter from "../components/Rating";

class EditRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: props.title,
        description: props.description,
        rate: props.rate
      }
  }

  render() {
    const { title, description } = this.state

    return (
      <Grid.Row>
        <Header as='h3' block textAlign="center" content={this.state.title} />
        <Image rounded centered size="medium"
          src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
        />
        <Header as='h5' block textAlign="center" content="Description:" />
        <p>{this.state.description}</p>
        <p>Set rating:</p>
        <RatingSetter />
      </Grid.Row>
    )
  }
}

export default EditRecipe;
