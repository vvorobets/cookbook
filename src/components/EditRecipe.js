import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import { Button, Image, Modal, Form } from "semantic-ui-react";
import RatingSetter from "../components/Rating";

class EditRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      showModal: false
    }
  }

  render() {
    const { title, description, showModal } = this.state

    return (
      <Modal onClose={() => this.setState({ showModal: false })} open={showModal} trigger={
        <Button positive fluid size="huge" icon="plus" content="Add new recipe" onClick={() => this.setState({ showModal: true })}/>
      } closeOnDimmerClick={false} >
        <Modal.Header>Create a recipe</Modal.Header>
        <Modal.Content>
          <Image rounded centered size="medium"
            src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
          />
          <p>Set rating:</p>
          <RatingSetter />
          <Form>
            <Form.Input 
              label="Title:" name="title" value={title} 
              onChange={(e) => {this.setState({ [e.target.name]: e.target.value });}}
              placeholder="Some fancy name..." />
            <Form.TextArea 
              label="Description:" autoHeight name="description" value={description} 
              onChange={(e) => {this.setState({ [e.target.name]: e.target.value });}} 
              placeholder="Add something yummy and delicious..." />
            <Link to={'/recipes'}>
            <Button
              negative icon="cancel" labelPosition="left" content="Nope"
              onClick={(e) => {
                e.preventDefault(); 
                this.setState({ 
                  title: '',
                  description: '',
                  showModal: false })}
              }
            />
            </Link>
            <Link to={'/recipes'}>
            <Button
              positive icon="checkmark" labelPosition="left" content="Yep, add this!" 
              type="submit"
              onClick={(e) => {
                e.preventDefault(); 
                const updatedRecipe = {
                  title: this.state.title,
                  description: this.state.description
                };
                this.setState({
                  title: '',
                  description: '',
                  showModal: false 
                });
                console.log(this.state, updatedRecipe);
                axios.post('http://localhost:9000/api/recipes/', updatedRecipe)
                .then(res => {
                  console.log(res.data);
                })
              }}
            />
            </Link>
            {/* <Link to='/recipes'/> */}
            {/* as={Link} 
            to="/location" onClick={this.handleClick.bind(this)} */}
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default EditRecipe;
