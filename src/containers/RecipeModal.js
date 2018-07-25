// import React, { Component } from "react";
// import { Button, Header, Icon, Modal } from "semantic-ui-react";

// export default class ModalExampleControlled extends Component {
//   state = { modalOpen: false };

//   handleOpen = () => this.setState({ modalOpen: true });

//   handleClose = () => this.setState({ modalOpen: false });

//   render() {
//     return (
//       <Modal
//         trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
//         open={this.state.modalOpen}
//         onClose={this.handleClose}
//         basic
//         size="small"
//       >
//         <Header icon="browser" content="Cookies policy" />
//         <Modal.Content>
//           <h3>This website uses cookies to ensure the best user experience.</h3>
//         </Modal.Content>
//         <Modal.Actions>
//           <Button color="green" onClick={this.handleClose} inverted>
//             <Icon name="checkmark" /> Got it
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     );
//   }
// }

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  TextArea, Icon
} from "semantic-ui-react";

// class EditModal extends Component {
//   state = { open: false };

//   show = () => this.setState({ open: true });
//   close = () => this.setState({ open: false });

//   render() {
//     return (
//       <div>
//         <Button positive size="huge" icon="plus" content="Add new recipe" onClick={this.show}/>
//         <Modal open={this.state.open} onClose={this.close}>
//           <Modal.Header>Create a recipe</Modal.Header>
//           <Modal.Content image>
//             <Image
//               rounded
//               size="medium"
//               src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
//             />
//             <Form>
//               <Input label="Title:" placeholder="Some fancy name..."/>
//               <TextArea
//                 autoHeight
//                 placeholder="Add something yummy and delicious..."
//               />
//             </Form>
//           </Modal.Content>
//       </div>
//     );
//   }
// }

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
        <Button positive size="huge" icon="plus" content="Add new recipe" onClick={() => this.setState({ showModal: true })}/>
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
          </Form>
        </Modal.Content>
        {console.log("State ", this.state)}
      </Modal>
    )
  }
}

export default EditModal;
