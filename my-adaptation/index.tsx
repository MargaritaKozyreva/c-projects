import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reduxApp from './src/core/reduxApp';
import ProgressContainer from '@modules/ProgressBar/containers/ProgressContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventPage } from './src/pages/event';
import { CoursePage } from './src/pages/course';
import { EducationPage } from './src/pages/educationList';

import './src/prebuild/scss/index.scss';

const App = () => {
	const initState = {};

	const { store, routes, history } = reduxApp({ initState });

	return (
		<Provider store={ store }>
			<Router>
				<ProgressContainer />
				<Routes>
					<Route path="/my_adaptation" element={ <EducationPage /> } />
					<Route path="/my_adaptation/event/:id" element={ <EventPage /> } />
					<Route path="/my_adaptation/course/:id" element={ <CoursePage /> } />
					<Route path="*" element={ <div>ErrorPage 404</div> } />
				</Routes>
			</Router>
		</Provider>
	);
};

ReactDom.render(<App />, document.getElementById('my-adaptation'));
