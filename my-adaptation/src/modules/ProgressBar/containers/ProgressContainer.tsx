import React from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import { CourseView } from '../components/Views/CourseView';
import { ProgressContainerView } from './ProgressContainerView';
import { EventView } from '../components/Views/EventView';

const ProgressContainer = () => {
	const location = useLocation();
	const isCoursePage = location.pathname.includes('course');
	const isEventPage = location.pathname.includes('event');

	return (
		<Header>
			{ isCoursePage ? (
				<CourseView />
			) : isEventPage ? (
				<EventView />
			) : (
				<ProgressContainerView />
			) }
		</Header>
	);
};

export default ProgressContainer;
