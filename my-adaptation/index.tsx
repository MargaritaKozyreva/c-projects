import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reduxApp from './src/core/reduxApp';
import { Main } from './src/pages/Main';
import './src/prebuild/scss/index.scss';

const App = () => {
	const initState = {};

	const { store, routes, history } = reduxApp({ initState });
	console.log(store);

	return (
		<Provider store={ store }>
			<Main />
		</Provider>
	);
};

ReactDom.render(<App />, document.getElementById('my-adaptation'));
