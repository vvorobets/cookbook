import React from "react";
import ButtonControlsGroup from "../components/ButtonControlsGroup";
import RecipesContainer from "./RecipesContainer";
import EmptyContainer from "../components/EmptyContainer";
import ModalExampleDimmer from "./RecipeModal";
import {
  Container,
  Grid,
  Header,
  Button,
  Icon,
  Image,
  Card
} from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <Container>
        <ModalExampleDimmer />
        <Header as="h1" textAlign="center">
          <Image
            circular
            src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
          />
          Cookbook Academy
          <Header.Subheader>
            Manage your favourite cook recipes.
          </Header.Subheader>
        </Header>
        <Grid>
          <Grid.Row centered>{ButtonControlsGroup()}</Grid.Row>
          <Grid.Row centered>
            <Button positive size="huge">
              <Icon name="plus" />
              Add new recipe
            </Button>
          </Grid.Row>
          <Card.Group>{RecipesContainer()}</Card.Group>
          {EmptyContainer()}
        </Grid>
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
