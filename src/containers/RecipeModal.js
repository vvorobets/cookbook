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
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  TextArea
} from "semantic-ui-react";

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show(true)}>Default</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Create a recipe</Modal.Header>
          <Modal.Content image>
            <Image
              rounded
              size="medium"
              src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
            />
            <Form>
              <Input label="Title:" placeholder="Some fancy name..." />
              <TextArea
                autoHeight
                placeholder="Add something yummy and delicious..."
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              negative
              icon="cancel"
              labelPosition="left"
              content="Nope"
              onClick={this.close}
            />
            <Button
              positive
              icon="checkmark"
              labelPosition="left"
              content="Yep, add this!"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleDimmer;
