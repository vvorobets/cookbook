import React, { Component } from "react";
import axios from "axios";

import { Grid, Header, Button, Image, Form, Rating } from "semantic-ui-react";
import RatingSetter from "../components/Rating";

class CreateRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

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
            onChange={(e) => {this.setState({ [e.target.name]: e.target.value });}}
            placeholder="Some fancy name..." />
          <Form.TextArea 
            label="Description:" autoHeight name="description" value={description} 
            onChange={(e) => {this.setState({ [e.target.name]: e.target.value });}} 
            placeholder="Add something yummy and delicious..." />
          <Button fluid positive icon="checkmark" content="Yep, add this!" type="submit"
            onClick={(e) => {
              e.preventDefault(); 
              const updatedRecipe = {
                title: this.state.title,
                description: this.state.description
              };
              this.setState({
                title: '',
                description: ''
              });
              console.log(this.state, updatedRecipe);
              axios.post('http://localhost:9000/api/recipes/', updatedRecipe)
              .then(res => {
                console.log(res.data);
              })
            }}
          />
        </Form><hr/>
      </Grid.Row>
    )
  }
}

export default CreateRecipe;
