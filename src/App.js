import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import { Container, Grid, Card } from "semantic-ui-react";

import rootReducer from './reducers'

// components
import MainHeader from "./components/MainHeader";
import RecipesContainer from "./containers/RecipesContainer";
import EmptyContainer from "./components/EmptyContainer";
import EditModal from "./containers/RecipeModal";

import { recipeSaga } from './reduxSagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(recipeSaga)

const action = type => store.dispatch({type});

console.log(store);

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