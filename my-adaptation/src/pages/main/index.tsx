import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { EventPage } from '../event';
import { CoursePage } from '../course';
import { EducationPage } from '../educationList';

import { useDispatch, useSelector } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import ProgressContainer from '@modules/ProgressBar/containers/ProgressContainer';
import { userActions, UserState } from '@modules/User/redux/userSlices';

const Main = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userActions.getUser());
	}, [dispatch]);

	const userState = useSelector((state: { user: UserState }) => state.user.user);

	return (
		<WithSkeleton
			isLoading={ userState.isLoading }
			isEmpty={ userState.entitiy === null }
		>
			<Routes>
				<Route path="/adaptation" element={ <ProgressContainer /> }>
					<Route index element={ <EducationPage /> } />
					<Route path="event/:id" element={ <EventPage /> } />
					<Route path="course/:id" element={ <CoursePage /> } />
					<Route path="*" element={ <div>Страницы не существует</div> } />
				</Route>
			</Routes>
		</WithSkeleton>
	);
};

export default Main;
