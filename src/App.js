import React, { Component } from 'react';
import MainHeader from "./components/MainHeader";
import ButtonControlsGroup from "./components/ButtonControlsGroup";
import RecipesContainer from "./containers/RecipesContainer";
import EmptyContainer from "./components/EmptyContainer";
import EditModal from "./containers/RecipeModal";
import {
  Container,
  Grid,
  Header,
  Button,
  Icon,
  Image,
  Card
} from "semantic-ui-react";


class App extends Component {
  render() {
    return (
      <Container>
        {MainHeader()}
          <Grid.Row centered><EditModal /></Grid.Row>
          <Card.Group>{RecipesContainer()}</Card.Group>
          {EmptyContainer()}
      </Container>
     );
  }
}

export default App;

// <Container>
//   <Grid>
//     <Grid.Row centered>
//       <Grid.Column width={6}>
//         <Form>
//           <Form.Field>
//             <Form.Input label="Email Address" placeholder="name@example.com" />
//           </Form.Field>
//           <Form.Field>
//             <Form.Input label="Email Address" placeholder="name@example.com" />
//           </Form.Field>
//           <Form.Field>
//             <Form.Input label="Email Address" placeholder="name@example.com" />
//           </Form.Field>
//         </Form>
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// </Container>
