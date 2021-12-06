import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reduxApp from './core/reduxApp';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/main';
import './prebuild/scss/index.scss';
import Modal from '@modules/Modal/containers/ModalContainer';

const App = () => {
	const initState = {};
	const { store, routes, history } = reduxApp({ initState });

	return (
		<Provider store={ store }>
			<Router>
				<Main />
				<Modal />
			</Router>
		</Provider>
	);
};

ReactDom.render(<App />, document.getElementById('my-adaptation'));
