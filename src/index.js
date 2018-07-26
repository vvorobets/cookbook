import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { recipeSaga } from './reduxSagas';

import { Container } from "semantic-ui-react";

import {fetchAllRecipes} from "./actions";
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(recipeSaga)

const action = type => store.dispatch({type});

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

	let fetchedRecipes = [];
// 	window.onload = () => fetchedRecipes = fetchAllRecipes();
// console.log("fetched onload...", fetchedRecipes);
	

fetch('http://localhost:9000/api/recipes').then((result) => {
	return result.json()
}).then((result) => {
	fetchedRecipes = result;
	ReactDOM.render(
		<BrowserRouter>
		    <Provider store={store}>
				<Container>
					<App fetchedRecipes={fetchedRecipes} />
				</Container>
			</Provider>
		</BrowserRouter>,
		document.getElementById('root'));
	registerServiceWorker();
});