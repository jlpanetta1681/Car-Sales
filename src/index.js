import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Provider } from 'react-redux';
function reducer() {
	return {
		title: 'Hi from the redux store',
	};
}

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
