import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Image, Modal, Form } from "semantic-ui-react";

class EditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      showModal: false
    }
  }

  handleChangeForms = (e) => {this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, description, showModal } = this.state

    return (
      <Modal closeIcon onClose={() => this.setState({ showModal: false })} open={showModal} trigger={
        <Button positive fluid size="huge" icon="plus" content="Add new recipe" onClick={() => this.setState({ showModal: true })}/>
      }>
        <Modal.Header>Create a recipe</Modal.Header>
        <Modal.Content>
          <Image rounded centered size="medium"
            src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
          />
          <Form>
            <Form.Input label="Title:" name="title" value={title} 
              onChange={(e) => {this.setState({ [e.target.name]: e.target.value });}}
              placeholder="Some fancy name..." />
            <Form.TextArea label="Description:" autoHeight name="description" value={description} 
              onChange={(e) => {this.setState({ [e.target.name]: e.target.value });}} 
              placeholder="Add something yummy and delicious..." />
            <Button
              negative
              icon="cancel"
              labelPosition="left"
              content="Nope"
              onClick={(e) => {e.preventDefault(); this.setState({ showModal: false })}}
            />
            <Button
              positive
              icon="checkmark"
              labelPosition="left"
              content="Yep, add this!"
              onClick={(e) => {e.preventDefault(); this.setState({ showModal: false })}}
            />
            {/* <Link to='/recipes'/> */}
            {/* as={Link} 
            to="/location" onClick={this.handleClick.bind(this)} */}
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default EditModal;
