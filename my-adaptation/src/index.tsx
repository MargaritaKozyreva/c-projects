import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reduxApp from './core/reduxApp';
import ProgressContainer from '@modules/ProgressBar/containers/ProgressContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventPage } from './pages/event';
import { CoursePage } from './pages/course';
import { EducationPage } from './pages/educationList';

import './prebuild/scss/index.scss';
import Modal from '@modules/Modal/containers/ModalContainer';
// import Modal from '@modules/Modal/containers/ModalContainer';

const App = () => {
	const initState = {};

	const { store, routes, history } = reduxApp({ initState });
	// const [showModal, setShow] = useState(false);

	return (
		<Provider store={ store }>
			<Router>
				<ProgressContainer />
				<Routes>
					{ /* <Route path="/adaptations" element={ <Navigate replace to="/view_doc.html?mode=my_adaptation" /> } /> */ }
					<Route
						path="/view_doc.html?mode=my_adaptation"
						element={ <EducationPage /> }
					/>
					<Route path="/adaptation" element={ <EducationPage /> } />
					<Route path="/adaptation/event/:id" element={ <EventPage /> } />
					<Route path="/adaptation/course/:id" element={ <CoursePage /> } />
					<Route path="*" element={ <div>Страницы не существует</div> } />
				</Routes>
				<Modal />
			</Router>
		</Provider>
	);
};

ReactDom.render(<App />, document.getElementById('my-adaptation'));
