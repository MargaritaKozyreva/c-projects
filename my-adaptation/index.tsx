import React from 'react';
import ReactDom from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { IState, store } from './src/core/reduxApp';
import Main from './src/pages/Main';

ReactDom.render(
	<Provider store={ store }>
		<Main />
	</Provider>,
	document.getElementById('my-adaptation')
);
