import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, IndexRoute, Redirect, Link } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import { Container, Grid, Card } from "semantic-ui-react";

// components
import MainHeader from "./components/MainHeader";
import RecipesContainer from "./containers/RecipesContainer";
import EmptyContainer from "./components/EmptyContainer";
import EditModal from "./containers/RecipeModal";

import { recipeSaga } from './reduxSagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(recipeSaga)

const action = type => store.dispatch({type});

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Container>
        {MainHeader()}
        <Grid.Row centered><EditModal /></Grid.Row>
        <Card.Group>{RecipesContainer()}</Card.Group>
        {EmptyContainer()}
      </Container>
      </Provider>
     );
  }
}

// ReactDOM.render(
  

//   <Router>
//     <Route path="/" component={App}>
//       <Redirect to="recipes"/>
//       <Route path='/recipes' component={App}>
//         <Route path='/recipes/:id' component={EditModal} />
//       </Route>

//     </Route>
//   </Router>,
//   document.getElementById('root')
// );

export default App;