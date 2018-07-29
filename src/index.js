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

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(recipeSaga)

const action = type => store.dispatch({type});

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function render() {
console.log("Rendering...");
	ReactDOM.render(
		<BrowserRouter>
		    <Provider store={store}>
				<Container>
					<App onFetch={() => action("FETCH_ALL_RECIPES")}/>
				</Container>
			</Provider>
		</BrowserRouter>,
		document.getElementById('root'));
}

window.onload = () => {
	action("FETCH_ALL_RECIPES");
}

store.subscribe(render);	

registerServiceWorker();
