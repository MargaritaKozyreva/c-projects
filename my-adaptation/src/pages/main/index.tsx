import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { EventPage } from '../event';
import { CoursePage } from '../course';
import { EducationPage } from '../educationList';

import ProgressContainer from '@modules/InternModules/ProgressBar/containers/ProgressContainer';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, UserState } from '@modules/user/redux/userSlices';
import { WithSkeleton } from '@ui/components/WithSkeleton';

const Main = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userActions.getUser());
	}, [dispatch]);

	const test = 1;

	const userState = useSelector((state: { user: UserState }) => state.user.user);

	return (
		<WithSkeleton
			isLoading={ userState.isLoading }
			isEmpty={ userState.entitiy === null }
		>
			{ test === 1 ? (
				<Routes>
					<Route path="/adaptation" element={ <ProgressContainer /> }>
						<Route index element={ <EducationPage /> } />
						<Route path="event/:id" element={ <EventPage /> } />
						<Route path="course/:id" element={ <CoursePage /> } />
						<Route path="*" element={ <div>Страницы не существует</div> } />
					</Route>
				</Routes>
			) : (
				''
			) }
		</WithSkeleton>
	);
};

export default Main;
