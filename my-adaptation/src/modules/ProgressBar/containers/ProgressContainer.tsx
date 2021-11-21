import React from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import CourseInforContainer from './CourseInfoContainer';
import ProgressInfoContainer from './ProgressInfoContainer';
import EventInfoContainer from './EventInfoContainer';

const ProgressContainer = () => {
	const location = useLocation();
	const isCoursePage = location.pathname.includes('course');
	const isEventPage = location.pathname.includes('event');

	return (
		<Header>
			{ isCoursePage ? (
				<CourseInforContainer />
			) : isEventPage ? (
				<EventInfoContainer />
			) : (
				<ProgressInfoContainer />
			) }
		</Header>
	);
};

export default ProgressContainer;
